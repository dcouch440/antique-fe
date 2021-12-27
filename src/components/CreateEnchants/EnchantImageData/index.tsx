import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useState } from 'react';

import { Fab } from '@mui/material';
import FileInput from '../FileInput';
import ImageDisplay from '../ImageDisplay';
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

function EnchantImageData(): ReactElement {
  const [imageData, setImageData] = useState<Array<IImageData>>([]);
  // holding file state to stay consistent.
  const [fileState, setFileState] = useState([]);

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

  const getFavoriteCount = (state: IImageData[]) =>
    state.reduce((a, { favorite }) => (favorite === true ? a + 1 : a), 0);

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

  const handleRemoveImage = (id: string, index: number) => {
    const fs = [...fileState];
    fs.splice(index, 1);

    const updateImage = (prev: IImageData[]) => {
      const updatedState = prev.filter(({ id: prevId }) => prevId != id);

      // check if the user still has two images selected as a favorite image.
      // if theres only one image that is liked that means that they removed a liked image
      // loop through the new array and find the first false value as true so there is at least
      // two images they have liked.

      // this way the database will always have two images to find in the query where they have favorite set to true.
      // the user should be told that "These are the images that are going to be displayed when your images are searched"
      const favoriteCount = getFavoriteCount(updatedState);

      // if the favorite count is below 2 and there is at least two images
      if (favoriteCount < 2 && imageData.length > 2) {
        for (const imgData of updatedState) {
          if (imgData.favorite === false) {
            imgData.favorite = true;
            break;
          }
        }
      }

      return updatedState;
    };

    setFileState(fs);
    setImageData(updateImage);
  };

  return (
    <>
      <ImageDisplay
        images={imageData}
        removeImage={handleRemoveImage}
        updateFavorites={handleUpdateFavorite}
      />
      <FileInput handleChange={handleChange} />;
    </>
  );
}

export default connector(EnchantImageData);
