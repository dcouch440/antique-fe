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
  },
  content: {
    position: 'relative',
    flex: 1,
    height: '100vh',
    backgroundColor: 'antiqueWhite.transparent',
    backdropFilter: 'blur(10px)',
    pl: {
      sm: 0,
      md: '450px',
    },
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none' /* for Chrome, Safari, and Opera */,
    },
  },
  toggleButton: {
    position: 'absolute',
    left: (theme) => theme.spacing(1),
    top: (theme) => theme.spacing(1),
  },
});

export default function AppLayout({ Router }) {
  const style = styles();

  return (
    <Box sx={style.root}>
      <Sidebar />
      <Box sx={style.content}>
        <Router />
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  Router: PropTypes.any,
  Menu: PropTypes.node,
};
