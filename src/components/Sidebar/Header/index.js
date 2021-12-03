import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';

const styles = () => ({
  root: {
    width: '100%',
    textAlign: 'center',
    pt: 3,
    pb: 1,
  },
  text: {
    fontFamily: 'families.cursive',
    fontSize: 'sizes.xl',
    textShadow: ' 2px 3px 8px black',
  },
});

export default function Header({ text }) {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <Typography color="white.main" sx={sx.text}>
        {text}
      </Typography>
    </Box>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
