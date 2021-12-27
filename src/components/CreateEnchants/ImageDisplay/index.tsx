import { Box, useTheme } from '@mui/material';
import { IImageData, RemoveImage } from '../EnchantImageData';
import React, { ReactElement } from 'react';

import Close from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageActionButton from '../ImageActionButton';

interface Props {
  images: IImageData[];
  updateFavorites: (updateIndex: number) => void;
  removeImage: RemoveImage;
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
}: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {images?.map(({ previewImage, favorite, id }, index) => (
        <Box
          sx={{ position: 'relative', width: '20%' }}
          key={previewImage as string}
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
          <img
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: theme.spacing(1),
            }}
            src={previewImage as string}
            alt="user preview image"
          />
        </Box>
      ))}
    </Box>
  );
}
