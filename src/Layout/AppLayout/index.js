import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Sidebar } from 'components';
import { connect } from 'react-redux';
import { globalSX } from 'theme';

const styles = () => ({
  root: {
    display: 'flex',
    height: '100vh',
    backgroundSize: 'cover',
    width: '100vw',
  },
  content: {
    position: 'relative',
    flex: 1,
    height: '100%',
    width: '100vw',
    backgroundColor: 'antiqueWhite.main',
    backdropFilter: 'blur(12px)',
    display: 'flex',
  },
  toggleButton: {
    position: 'absolute',
    left: 0,
    m: 1,
    zIndex: 2,
  },
});

function AppLayout({ children, sidebarVisibility }) {
  const style = styles(sidebarVisibility);

  return (
    <Box sx={style.root}>
      <Sidebar />
      <Box sx={[style.content, globalSX.scrollContainer]}>{children}</Box>
    </Box>
  );
}

const mapStateToProps = ({ sidebar: { sidebarVisibility } }) => ({
  sidebarVisibility,
});

export default connect(mapStateToProps)(AppLayout);
AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  sidebarVisibility: PropTypes.bool.isRequired,
};
