import { Button, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box } from '@mui/system';
import EnchantImageList from './EnchantImageListItem';
import EnchantInfoForm from './EnchantInfoForm';
import EnchantTags from './EnchantTags';
import FileInput from './FileInput';
import FormWidthContainer from 'Layout/FormWidthContainer';
import Header from 'components/AppHeader';
import { IAppState } from 'store/types';
import axios from 'axios';
import { validateImage } from 'image-validator';

export interface IImageData {
  id: string;
  caption: string;
  url: string | unknown;
  favorite: boolean;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
export interface IEnchantInfo {
  id: string;
  userId: string | null;
  itemName: string;
  condition: string;
  origin: string;
  title: string;
  images: Array<IImageData>;
  tags: string[];
  whereFound: string;
}

interface OwnProps {
  ench?: IEnchantInfo;
  newUpload: boolean;
}

export type RemoveImage = (id: string, index: number) => void;

const mapStateToProps = ({ user: { id } }: IAppState) => ({ id });

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & OwnProps;

/**
 * * CreateAndUpdate is used to create enchants.
 * * This component prepares id'd objects that will be sent with
 * * their respective images.
 */

function CreateAndUpdate({ id, newUpload }: Props): ReactElement {
  const [fileState, setFileState] = useState<Array<File>>([]);
  const theme = useTheme();
  const nav = useNavigate();
  const param = useParams();
  // if it is a new upload set loading to false by reversing.
  // this way we can retrieve the user info.
  const [doneLoading, setDoneLoading] = useState(() => {
    if (newUpload) return true;
    if (!newUpload) return false;
  });
  const [enchant, setEnchant] = useState<IEnchantInfo>({
    id: '',
    userId: id,
    itemName: '',
    condition: '',
    origin: '',
    title: '',
    images: [],
    tags: [],
    whereFound: '',
  });
  const [imagesToDelete, setImagesToDelete] = useState<Array<IImageData>>([]);

  console.log(enchant);
  useEffect(() => {
    if (newUpload) return;
    axios
      .get<IEnchantInfo>(`/enchants/${param.enchantId}/update`)
      .then(({ data }) => {
        setEnchant(data);
        setDoneLoading(true);
      })
      .catch(console.error);
  }, [newUpload]);

  const handleEnchantInfoOnChange: ReactOnChange = ({ target }) => {
    setEnchant((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleFileInputChange: ReactOnChange = async ({ target }) => {
    // check if file exists
    if (!target.files) return;
    const file = target.files[0];

    // make sure its valid
    if (!(await validateImage(file))) return;

    // read incoming file and set it in state.
    new Promise<{ result: unknown; file: File }>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({ result: reader.result, file });
      };

      reader.onerror = () => {
        reject('Failed to read image');
      };
    })
      .then(({ result, file }) => {
        setEnchant((prev) => ({
          ...prev,
          images: [
            ...prev.images,
            {
              id: '',
              caption: '',
              url: result as string,
              favorite: false,
            },
          ],
        }));
        //! lookup file typing
        setFileState((prev) => [...prev, file]);
      })
      .catch((err) => console.error(err));
  };

  const handleRemoveImage = (index: number) => {
    const currentImage = enchant.images[index];
    const isNewUpload = currentImage.id === '';

    if (enchant.images.length == 1) {
      //! snackbar error
    }

    // if index is blank, find out which index it is from the users previously uploaded
    // new images will always be placed at the end of the array.
    if (isNewUpload) {
      let newUploadIndex = -1;
      for (let i = 0; i < enchant.images.length; i++) {
        const id = enchant.images[i].id;

        // find how far the new upload index from the users previous images
        if (id === '') {
          newUploadIndex++;
        }

        if (i === index) {
          break;
        }
      }
      setEnchant((prev) => {
        return {
          ...prev,
          images: prev.images.filter((_, i) => i !== index),
        };
      });

      // remove the file from the index relative to itself.
      setFileState((prev) => {
        const fs = [...prev];
        fs.splice(newUploadIndex, 1);
        return fs;
      });
    } else {
      // if this is not a new upload and the user is trying to remove an image they got
      // from a update get request. set it in the state so the database knows to delete it.
      setEnchant((prev) => {
        return {
          ...prev,
          images: prev.images.filter(({ id }) => id !== currentImage.id),
        };
      });
      setImagesToDelete((prev) => [...prev, currentImage]);
    }
  };

  const handleAddTag = (tag: string) => {
    setEnchant((prev) => {
      if (prev.tags.includes(tag) || tag.trim() === '') {
        return prev;
      }

      return {
        ...prev,
        tags: [...prev.tags, tag.trim()],
      };
    });
  };

  const handleRemoveTag = (tag: string) => {
    setEnchant((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleUpdateFavorite = (index: number) => {
    setEnchant((prev) => ({
      ...prev,
      images: prev.images.map((img, mapIndex) => {
        if (mapIndex === index) {
          return {
            ...img,
            favorite: true,
          };
        } else if (img.favorite === true) {
          return {
            ...img,
            favorite: false,
          };
        } else {
          return img;
        }
      }),
    }));
  };

  const handleUpdateCaption = (caption: string, index: number) => {
    setEnchant((prev) => ({
      ...prev,
      images: prev.images.map((img, mapIndex) => {
        if (mapIndex === index) {
          return {
            ...img,
            caption,
          };
        } else {
          return img;
        }
      }),
    }));
  };

  const handleSubmit = async () => {
    if (fileState.length !== 0) {
      // upload the files and get response.
      const formData = new FormData();
      // referenceKeysOrder maintains the order for the multi thred backend upload and
      // should be used as the reference to maintain imaged matching up.
      // the response will have the property reference Keys
      const referenceKeysOrder: string[] = [];
      for (let i = 0; i < fileState.length; i++) {
        const randomId = Math.floor(Math.random() * 10000000).toString();
        referenceKeysOrder.push(randomId);
        formData.append(randomId, fileState[0]);
      }
      const { data } = await axios.post<
        Array<{ referenceKey: string; url: string; wasSuccessful: boolean }>
      >('/enchants/upload', formData);

      let lastReferenceUsed = 0;
      const updatedImages: Array<IImageData | null | undefined> = enchant.images
        .map((img) => {
          // if id is empty it is a new upload.
          // so we must find the image that matches the reference key.
          if (img.id === '') {
            const referenceKey = referenceKeysOrder[lastReferenceUsed];
            const imgUpload = data.filter(
              (res) => res.referenceKey === referenceKey
            )[0];

            if (imgUpload === undefined) return;

            lastReferenceUsed++;

            if (imgUpload.wasSuccessful === true) {
              return {
                ...img,
                url: imgUpload.url,
              };
            } else {
              return null;
            }
          } else {
            return img;
          }
        })
        .filter((x) => x !== null || x !== undefined);

      if (updatedImages.length === 0) return; // handle snackbar error

      // verify favorite image was added and successful
      let favoriteWasFound = false;
      updatedImages.forEach((img) => {
        if (img?.favorite) favoriteWasFound = true;
      });

      if (!favoriteWasFound) {
        if (updatedImages?.[0]?.favorite !== undefined)
          updatedImages[0].favorite = true;
      }

      await handleSendEnchantInformation(
        {
          ...enchant,
          images: updatedImages as Array<IImageData>,
        },
        null
      );
    } else {
      await handleSendEnchantInformation(enchant, imagesToDelete);
    }
  };

  const handleSendEnchantInformation = async (
    enchant: IEnchantInfo,
    imagesToDelete: IImageData[] | null
  ) => {
    try {
      // if its a new upload send it to the create route
      if (newUpload) {
        const { data } = await axios.post('/enchants', enchant);
        nav(`/enchants/${data.id}`);
      } else {
        // if its a patch route send it to the patch route with the correct id.
        // eslint-disable-next-line no-debugger
        const { data } = await axios.patch(`/enchants/${enchant.id}`, {
          enchant,
          imagesToDelete,
        });
        nav(`enchants/${data.id}`);
      }
    } catch (err) {
      /// handle snackbar error
      console.error(err);
    }
  };

  return (
    <>
      {doneLoading && (
        <FormWidthContainer
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
            backgroundColor: theme.custom.palette.secondary.slightlyLighter,
            minHeight: `calc(100% - ${theme.topBarHeight}px)`,
            '& > *': {
              my: 3,
            },
          }}
        >
          <Header component="h1" size="xl" text="Talk About it!" />
          <EnchantInfoForm {...enchant} onChange={handleEnchantInfoOnChange} />
          <Header
            component="h2"
            size="sub"
            text="What tags would help other find your item?"
          />
          <EnchantTags
            tags={enchant.tags ?? []}
            addTag={handleAddTag}
            removeTag={handleRemoveTag}
          />
          <Box
            sx={{
              justifyContent: 'space-between',
              width: '100%',
              display: 'flex',
            }}
          >
            <Header
              component="h2"
              size="sub"
              text="Upload your favorite images!"
            />
            <FileInput handleChange={handleFileInputChange} />
          </Box>
          <>
            {enchant.images?.map(({ url, favorite, id, caption }, index) => (
              <EnchantImageList
                url={url}
                favorite={favorite}
                id={id}
                caption={caption}
                index={index}
                updateFavorites={() => handleUpdateFavorite(index)}
                removeImage={() => handleRemoveImage(index)}
                updateCaption={handleUpdateCaption}
                key={index}
              />
            ))}
          </>
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
          >
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </FormWidthContainer>
      )}
    </>
  );
}

export default connector(CreateAndUpdate);
