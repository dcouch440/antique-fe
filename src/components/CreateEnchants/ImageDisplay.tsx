import { Box, Typography, useTheme } from '@mui/material';
import { IImageData, RemoveImage } from './EnchantImageData';
import React, { ReactElement } from 'react';

import Close from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageActionButton from './ImageActionButton';

interface Props {
  images: IImageData[];
  updateFavorites: (updateIndex: number) => void;
  removeImage: RemoveImage;
  setActiveImage: (n: number) => void;
}

/**
 * * Displays the preview images held within the parents state.
 * * Two images will be displayed in a mini slideshow for the user.
 * * so two favorites can be chosen
 */

export default function ImageDisplay({
  images,
  updateFavorites,
  removeImage,
  setActiveImage,
}: Props): ReactElement {
  const theme = useTheme();
  return (
    <>
      {images?.map(({ previewImage, favorite, id, caption }, index) => (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
          }}
          key={previewImage as string}
          onClick={() => setActiveImage(index)}
        >
          <ImageActionButton
            sx={{ right: 0 }}
            onClick={() => updateFavorites(index)}
          >
            {favorite ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </ImageActionButton>
          <ImageActionButton
            sx={{ left: 0 }}
            onClick={() => removeImage(id, index)}
          >
            <Close color="primary" />
          </ImageActionButton>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: theme.spacing(1),
              transition: '0.2s',
              cursor: 'pointer',
            }}
            src={previewImage as string}
            alt="user preview image"
          />
          <Typography
            color="primary"
            sx={{
              position: 'absolute',
              bottom: 0,
              m: 1,
              p: 0.5,
              backgroundColor: theme.custom.palette.secondary.transparent,
              borderRadius: 1,
            }}
          >
            {caption ? caption : 'No caption set.'}
          </Typography>
        </Box>
      ))}
    </>
  );
}
