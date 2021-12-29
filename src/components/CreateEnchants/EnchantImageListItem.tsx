import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AppInput from 'components/AppInput';
import Close from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageActionButton from './ImageActionButton';

interface Props {
  updateFavorites: () => void;
  removeImage: () => void;
  previewImage: unknown;
  favorite: boolean;
  id: string;
  caption: string;
  index: number;
  updateCaption: (caption: string, index: number) => void;
}

/**
 * * Displays the preview images held within the parents state.
 */

export default function EnchantImageListItem({
  updateFavorites,
  previewImage,
  favorite,
  caption,
  removeImage,
  updateCaption,
  index,
}: Props): ReactElement {
  const theme = useTheme();
  const [input, setInput] = useState<string>('');
  const handleChange: ReactOnChange = ({ target }) => setInput(target.value);
  const [editCaption, setEditCaption] = useState(!caption);
  const handleEditCaption = () => setEditCaption(true);
  const handleUpdateOwnCaption = () => {
    updateCaption(input, index);
    setEditCaption(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        backgroundColor: theme.custom.palette.secondary.slightlyLighter,
        height: 120,
        maxWidth: '100%',
      }}
      key={previewImage as string}
    >
      <Box
        component="img"
        sx={{
          height: 120,
          width: 120,
          objectFit: 'scale-down',
          borderRadius: theme.spacing(1),
          transition: '0.2s',
          cursor: 'pointer',
        }}
        src={previewImage as string}
        alt="user preview image"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 120,
          width: 800,
          p: 1,
          justifyContent: 'space-between',
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <ImageActionButton
            sx={{ right: 0, zIndex: 1, gap: 1 }}
            onClick={updateFavorites}
          >
            <Typography color="primary">Set as display image?</Typography>
            {favorite ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </ImageActionButton>
          <ImageActionButton sx={{ left: 0 }} onClick={removeImage}>
            <Close color="primary" />
          </ImageActionButton>
        </Box>
        {editCaption ? (
          <Box sx={{ width: '100%', display: 'flex', gap: 1 }}>
            <AppInput
              value={input}
              onChange={handleChange}
              label="Caption"
              sx={{
                alignSelf: 'flex-end',
                underline: 'none',
                flex: 1,
              }}
              variant="standard"
            />
            <Button variant="contained" onClick={handleUpdateOwnCaption}>
              Add Caption
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography color="primary">{caption}</Typography>
            <Typography
              fontSize={12}
              color="primary"
              sx={{ cursor: 'pointer' }}
              onClick={handleEditCaption}
            >
              Edit?
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
