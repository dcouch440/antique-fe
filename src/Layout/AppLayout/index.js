import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Sidebar } from 'components';
import bottles from 'assets/img/bottles.webp';
import { globalSX } from 'theme';

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
    backgroundColor: 'antiqueWhite.main',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    pl: {
      sm: 0,
      md: '450px',
    },
  },
  toggleButton: {
    position: 'absolute',
    left: (theme) => theme.spacing(1),
    top: (theme) => theme.spacing(1),
  },
});

export default function AppLayout({ children }) {
  const style = styles();

  return (
    <Box sx={style.root}>
      <Sidebar />
      <Box sx={[style.content, globalSX.scrollContainer]}>{children}</Box>
    </Box>
  );
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
