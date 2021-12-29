import { Box, typography } from '@mui/system';
import { Button, Typography, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useState } from 'react';

import EnchantImageList from './EnchantImageListItem';
import EnchantInfoForm from './EnchantInfoForm';
import FileInput from './FileInput';
import FormWidthContainer from 'Layout/FormWidthContainer';
import { IAppState } from 'store/types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { validateImage } from 'image-validator';

export interface IImageData {
  id: string;
  caption: string;
  file: File;
  favorite: boolean;
  previewImage: unknown | string;
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
export interface IEnchantInfo {
  userId: string | null;
  tags: Tags;
  itemName: string;
  condition: string;
  origin: string;
  title: string;
  whereFound: string;
}

export type EnchantState = Omit<IEnchantInfo, 'tags'>;

type Tags = Array<string> | [];

type InfoBuilder = {
  [key: string]: { favorite: boolean; caption: string };
};

export type RemoveImage = (id: string, index: number) => void;

const mapStateToProps = ({ user: { id } }: IAppState) => ({ id });

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

/**
 * * EnchantImageData is used to create enchants.
 * * This component prepares id'd objects that will be sent with
 * * their respective images.
 */

function EnchantImageData({ id }: Props): ReactElement {
  const [imageData, setImageData] = useState<Array<IImageData>>([]);
  // holding file state to stay consistent.
  const [fileState, setFileState] = useState([]);
  const theme = useTheme();
  const [enchant, setEnchant] = useState<EnchantState>({
    userId: id,
    itemName: '',
    condition: '',
    origin: '',
    title: '',
    whereFound: '',
  });
  // handle change adds images to the image state and creates an object that
  // will be used to interact with the ui.
  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined =
    async ({ target }) => {
      // putting files into an array to gain array methods.
      if (!target.files) return;
      const fs = Array.from(target.files);
      // first check if the values being inputted by the user are valid
      const valids = await Promise.all(
        fs.map(async (file) => validateImage(file))
      );
      // if it includes an invalid lets just dump it and ask them to retry
      // ? might change later
      if (valids.includes(false)) {
        // snackbar error
        return;
      } else {
        const readFiles: Promise<IImageData>[] = fs.map(async (file) => {
          // the id will help to identify the items on the other side.
          // these are only for uploading purposes and deletion filtering
          const id = uuidv4();

          // read the image to display the information on the page
          const reader = new FileReader();
          reader.readAsDataURL(file);

          // this takes time so we will promise it rather than waiting for callbacks.
          const previewImage = await new Promise((resolve) => {
            reader.onload = () => {
              resolve(reader.result);
            };
          });

          // return a flat directory we will later use to build the json.
          return {
            id,
            previewImage,
            file,
            favorite: false,
            caption: '',
          };
        });

        const builtImageData = await Promise.all(readFiles);
        setImageData((prev) => [...prev, ...builtImageData]);
      }
    };

  const handleUpdateFavorite = (updateIndex: number) => {
    // find the value that is not the current index.
    // and remove its so the new top two can be added.
    setImageData((prev) => {
      return prev.map((data, mapIndex) => {
        const { favorite } = data;
        if (favorite === true) {
          return {
            ...data,
            favorite: false,
          };
        } else if (mapIndex === updateIndex) {
          return {
            ...data,
            favorite: true,
          };
        } else {
          return data;
        }
      });
    });
  };

  // if a user changes their mind about uploading an image
  const handleRemoveImage = (id: string, index: number) => {
    const fs = [...fileState];
    fs.splice(index, 1);

    setImageData((prev) => prev.filter(({ id: prevId }) => prevId != id));
    setFileState(fs);
  };

  // new caption will be updated
  // the onchange state is held within its component
  // and only triggers an update when the user hits submit.
  const handleUpdateCaption = (caption: string, index: number) => {
    setImageData((prev) => {
      return prev.map((data, mapIndex: number) => {
        if (index === mapIndex) {
          return {
            ...data,
            caption,
          };
        } else {
          return data;
        }
      });
    });
  };

  const handleSubmit = () => {
    const infoBuilder: InfoBuilder = {};
    const formData = new FormData();

    // convert the json to strings and send it over via form-data
    // this way we can send over multiple files.
    for (const { id, caption, file, favorite } of imageData) {
      formData.append(id, file);
      infoBuilder[id] = { caption, favorite };
    }

    // stringify data.
    formData.append('imageInfo', JSON.stringify({ imageInfo: infoBuilder }));
    formData.append('enchant', JSON.stringify(enchant));

    // send
    axios
      .post('http://localhost:3001/enchants', formData)
      .then(console.log)
      .catch(console.log);
  };

  const handleFormChange: ReactOnChange = ({ target: { name, value } }) => {
    if (name === 'userId') {
      return;
    }

    setEnchant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: theme.custom.palette.secondary.slightlyLighter,
          minHeight: `calc(100% - ${theme.topBarHeight}px)`,
          '& > *': {
            my: 2,
          },
        }}
      >
        <FormWidthContainer>
          <Typography color="primary" sx={{ fontSize: 46 }}>
            Talk About it!
          </Typography>
        </FormWidthContainer>
        <EnchantInfoForm {...enchant} onChange={handleFormChange} />
        <FormWidthContainer
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Typography fontSize={24} color="primary">
            Upload your favorite images!
          </Typography>
          <FileInput value={fileState} handleChange={handleChange} />
        </FormWidthContainer>
        {imageData?.map(({ previewImage, favorite, id, caption }, index) => (
          <EnchantImageList
            previewImage={previewImage}
            favorite={favorite}
            id={id}
            caption={caption}
            index={index}
            updateFavorites={() => handleUpdateFavorite(index)}
            removeImage={() => handleRemoveImage(id, index)}
            updateCaption={handleUpdateCaption}
            key={id}
          />
        ))}
        <FormWidthContainer
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </FormWidthContainer>
      </Box>
    </>
  );
}

export default connector(EnchantImageData);
