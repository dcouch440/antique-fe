import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AppInput from 'components/AppInput';

interface Props {
  imageToDisplay: string;
  updateCaption: (input: string) => void;
  imageCaption: string;
}

export default function MainPreviewImage({
  imageToDisplay,
  updateCaption,
  imageCaption,
}: Props): ReactElement {
  const [input, setInput] = useState('');
  const theme = useTheme();
  const handleUpdateCaptionText: ReactOnSubmit = (e) => {
    e.preventDefault();
    updateCaption(input);
    setInput('');
  };
  const handleChange: ReactOnChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          p: 1,
        }}
      >
        <img
          src={imageToDisplay}
          style={{
            maxHeight: '90%',
            maxWidth: '80%%',
            objectFit: 'cover',
            borderRadius: 12,
          }}
        />
        {imageCaption && (
          <Typography
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              p: 2,
              backgroundColor: theme.custom.palette.secondary.transparent,
            }}
            color="primary"
          >
            {imageCaption}
          </Typography>
        )}
        <Box
          onSubmit={handleUpdateCaptionText}
          component="form"
          aria-label="image-caption-input"
          sx={{
            height: '10%',
            p: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <AppInput
            onChange={handleChange}
            value={input}
            sx={{ flex: 1, mx: 1 }}
            placeholder="Say something about this..."
          />
          <Button type="submit" variant="contained">
            Add Caption!
          </Button>
        </Box>
      </Box>
    </>
  );
}
