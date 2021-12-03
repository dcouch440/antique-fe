import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';

export default function Header({ text }) {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        pt: 3,
      }}
    >
      <Typography
        color="white.main"
        sx={{
          fontFamily: 'families.cursive',
          fontSize: 'sizes.xl',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
