import { Box, FormControlState, Typography, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AddButton from './AddButton';
import AppInput from 'components/common/AppInput';
import Close from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageActionButton from './ImageActionButton';

interface Props {
  updateFavorites: () => void;
  removeImage: () => void;
  url: unknown;
  favorite: boolean;
  id: string;
  caption: string;
  index: number;
  updateCaption: (caption: string, index: number) => void;
}

/**
 * @description Displays the preview images held within the parents state. Captions are sent in a "onSubmit" way to prevent constant re renders from the parent.
 */

export default function EnchantImageListItem({
  updateFavorites,
  url,
  favorite,
  caption,
  removeImage,
  updateCaption,
  index,
}: Props): ReactElement {
  const theme = useTheme();
  const [input, setInput] = useState<string>(caption);
  const handleChange: ReactOnChange = ({ target }) => setInput(target.value);
  const [editCaption, setEditCaption] = useState(false);
  const handleEditCaption = () => setEditCaption(true);

  const handleUpdateOwnCaption = () => {
    updateCaption(input, index);
    setEditCaption(false);
  };

  const handleKeyPress: (e: React.KeyboardEvent<FormControlState>) => void = ({
    key,
  }) => key === 'Enter' && handleUpdateOwnCaption();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        minHeight: 120,
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          width: 120,
          height: 120,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme.custom.palette.secondary.transparent,
          borderRadius: theme.spacing(1),
        }}
      >
        <Box
          component="img"
          sx={{
            height: 120,
            width: 120,
            borderRadius: theme.spacing(1),
            objectFit: 'scale-down',
            cursor: 'pointer',
          }}
          src={url as string}
          alt="user preview image"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 800,
          pl: 1,
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
            sx={{ right: 0, zIndex: 1, gap: 1, backgroundColor: 'transparent' }}
            onClick={updateFavorites}
          >
            {favorite ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
            <Typography fontSize={12} color="primary">
              Set as display image?
            </Typography>
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
                fontSize: 1,
              }}
              variant="standard"
              onKeyPress={handleKeyPress}
            />
            <AddButton onClick={handleUpdateOwnCaption} text="Add Caption" />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography color="primary">
              {caption ? caption : 'No caption.'}
            </Typography>
            <Typography
              fontSize={12}
              color="primary"
              sx={{ cursor: 'pointer', pb: 1, pl: 1, pr: 1 }}
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
