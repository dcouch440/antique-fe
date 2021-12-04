import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarRouter from './SidebarRouter';
import SidebarTypeSelectors from './SidebarTypeSelectors';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

const styles = () => ({
  root: {
    width: {
      xs: '100%',
      md: 450,
    },
    backgroundColor: 'black.transparent',
    backdropFilter: 'blur(12px)',
    position: 'absolute',
    height: '100%',
    zIndex: 1,
    pt: 2,
    px: 2,
    boxShadow: (theme) => '5px 0 15px ' + theme.palette.black.transparent,
  },
  relativeBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 50,
  },
});

/** TODO:
 * Prevent password must match error from showing when changing back to login.
 * change error color.
 */

function Sidebar({ sidebarVisibility }) {
  const sx = styles();

  return (
    sidebarVisibility && (
      <Box component="nav" sx={sx.root}>
        <Box sx={sx.relativeBox}>
          <SidebarTypeSelectors />
          <SidebarRouter />
        </Box>
      </Box>
    )
  );
}

Sidebar.propTypes = {
  sidebarType: PropTypes.string,
  sidebarVisibility: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  sidebarTypeChanged: PropTypes.func,
};

const mapStateToProps = ({
  user,
  sidebar: { sidebarType, sidebarVisibility },
}) => ({
  user,
  sidebarType: sidebarType,
  sidebarVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  sidebarTypeChanged: (version) =>
    dispatch(sidebarAC.sidebarTypeChanged(version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
