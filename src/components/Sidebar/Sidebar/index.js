import Authorize from '../Authorize';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        width: {
          xs: '90%',
          md: 400,
        },
        backgroundColor: 'black.transparent',
        backdropFilter: 'blur(12px)',
        position: {
          xs: 'absolute',
        },
        minHeight: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 'inherit',
          height: 'inherit',
        }}
      ></Box>
      <Authorize />
    </Box>
  );
}

Sidebar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default connect(null, null)(Sidebar);
