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
        pb: 1,
      }}
    >
      <Typography
        color="primary"
        sx={{
          fontFamily: (theme) => theme.custom.typography.families.cursive,
          fontSize: 'sizes.xxl',
        }}
        component="h2"
      >
        {text}
      </Typography>
    </Box>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
