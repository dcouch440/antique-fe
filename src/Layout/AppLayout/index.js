import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Sidebar } from 'components';
import bottles from 'assets/img/bottles.webp';

export default function AppLayout({ Router }) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundImage: `url(${bottles})`,
        backgroundSize: 'cover',
      }}
    >
      <Sidebar />
      <Box sx={{ flex: 1, height: '100vh' }}>
        <Router />
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  Router: PropTypes.node.isRequired,
  Sidebar: PropTypes.node.isRequired,
};
