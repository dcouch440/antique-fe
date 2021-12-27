import { Box, Button, Typography } from '@mui/material';
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
      <Box>
        <img
          src={imageToDisplay}
          style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'cover' }}
        />
        <Typography sx={{ position: 'absolute', top: 0 }} color="primary">
          {imageCaption}
        </Typography>
      </Box>
      <Box
        onSubmit={handleUpdateCaptionText}
        component="form"
        aria-label="image-caption-input"
      >
        <AppInput onChange={handleChange} value={input} />
        <Button type="submit">Add Caption!</Button>
      </Box>
    </>
  );
}
