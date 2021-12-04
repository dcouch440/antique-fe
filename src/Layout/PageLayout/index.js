import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';

const styles = () => ({
  root: {
    p: 2,
  },
  headerContainer: {
    backgroundColor: 'black.transparent',
    backdropFilter: 'blur(12px)',
    borderRadius: 1,
  },
  header: {
    fontSize: 64,
    textAlign: 'center',
  },
});

export default function PageLayout({ header, children }) {
  const style = styles();
  return (
    <Box sx={style.root} component="main">
      <Box sx={style.headerContainer} component="header">
        <Typography color="primary" sx={style.header} component="h1">
          {header}
        </Typography>
      </Box>
      {children}
    </Box>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  header: PropTypes.string.isRequired,
};
