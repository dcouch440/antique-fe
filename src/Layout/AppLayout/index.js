import { Box } from '@mui/system';
import { Menu } from 'components';
import OpenCloseButton from 'components/OpenCloseButton';
import { PresenceContainer } from 'animation';
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
  },
  toggleButton: {
    position: 'absolute',
    left: (theme) => theme.spacing(1),
    top: (theme) => theme.spacing(1),
  },
  menuContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function AppLayout({ Router }) {
  const style = styles();

  return (
    <Box sx={style.root}>
      <Sidebar />
      <Box sx={style.content}>
        <OpenCloseButton sx={style.toggleButton} />
        <Box sx={style.menuContainer}>
          <PresenceContainer>
            <Menu />
          </PresenceContainer>
        </Box>
        <Router />
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  Router: PropTypes.any,
  Menu: PropTypes.node,
};
