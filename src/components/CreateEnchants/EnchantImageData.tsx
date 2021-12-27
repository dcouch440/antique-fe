import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useState } from 'react';
import { Typography, useTheme } from '@mui/material';

import { Box } from '@mui/system';
import FileInput from './FileInput';
import ImageDisplay from './ImageDisplay';
import MainPreviewImage from './MainPreviewImage';
import { ScrollContainer } from 'components';
import { v4 as uuidv4 } from 'uuid';
import { validateImage } from 'image-validator';

export interface IImageData {
  id: string;
  caption: string;
  file: File;
  favorite: boolean;
  previewImage: unknown | string;
}

export type RemoveImage = (id: string, index: number) => void;

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

/**
 * * EnchantImageData is used to create enchants.
 * * This component prepares id'd objects that will be sent with
 * * their respective images.
 */

function EnchantImageData(): ReactElement {
  const [imageData, setImageData] = useState<Array<IImageData>>([]);
  // holding file state to stay consistent.
  const [fileState, setFileState] = useState([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const theme = useTheme();

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
        const readFiles: Promise<IImageData>[] = fs.map(async (file, index) => {
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

  // active index is the index that is going to be displayed on the main
  // screen so the use can view their own image closely as they choose a favorite.
  // and caption.
  const handleSetActiveIndex = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setActiveIndex(index);
  };

  // if a user changes their mind about uploading an image
  const handleRemoveImage = (id: string, index: number) => {
    const fs = [...fileState];
    fs.splice(index, 1);

    setImageData((prev) => prev.filter(({ id: prevId }) => prevId != id));
    if (index === activeIndex) setActiveIndex(0);
    setFileState(fs);
  };

  // new caption will be updated
  // the onchange state is held within its component
  // and only triggers an update when the user hits submit.
  const handleUpdateCaption = (caption: string) => {
    setImageData((prev) => {
      return prev.map((data, index) => {
        if (index === activeIndex) {
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

  return (
    <Box
      sx={{
        display: 'flex',
        p: 1,
        height: `100%`,
        backgroundColor: theme.custom.palette.secondary.slightlyLighter,
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: '100%',
          width: '80%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {imageData.length > 0 ? (
          <MainPreviewImage
            imageCaption={imageData[activeIndex].caption}
            imageToDisplay={imageData[activeIndex].previewImage as string}
            updateCaption={handleUpdateCaption}
          />
        ) : (
          <Typography fontSize={25} color="primary">
            Placeholder... Make a selection!
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '20%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            p: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography fontSize={16} color="primary">
              Pick something You Love!
            </Typography>
            <Typography fontSize={10} color="primary">
              Limit 4
            </Typography>
          </Box>
          <FileInput value={fileState} handleChange={handleChange} />
        </Box>
        <ScrollContainer style={{ height: '100%', width: '100%' }}>
          <ImageDisplay
            images={imageData}
            removeImage={handleRemoveImage}
            updateFavorites={handleUpdateFavorite}
            setActiveImage={handleSetActiveIndex}
          />
        </ScrollContainer>
      </Box>
    </Box>
  );
}

export default connector(EnchantImageData);
