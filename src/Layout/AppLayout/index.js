import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Sidebar } from 'components';
import bottles from 'assets/img/bottles.webp';

const styles = () => ({
  root: {
    display: 'flex',
    height: '100vh',
    background: `url(${bottles})`,
    backgroundSize: 'cover',
    backdropFilter: 'blur(12px)',
  },
  content: {
    flex: 1,
    height: '100vh',
  },
});

export default function AppLayout({ Router }) {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <Sidebar />
      <Box sx={sx.content}>
        <Router />
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  Router: PropTypes.any,
};
