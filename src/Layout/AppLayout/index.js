import { Box } from '@mui/system';
import OpenCloseButton from 'components/OpenCloseButton';
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
  },
  content: {
    position: 'relative',
    flex: 1,
    height: '100vh',
    p: 2,
    backgroundColor: 'antiqueWhite.transparent',
    backdropFilter: 'blur(10px)',
  },
  toggleButton: {
    position: 'absolute',
    left: (theme) => theme.spacing(1),
    top: (theme) => theme.spacing(1),
  },
});

export default function AppLayout({ Router }) {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <Sidebar />
      <Box sx={sx.content}>
        <OpenCloseButton sx={sx.toggleButton} />
        <Router />
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  Router: PropTypes.any,
};
