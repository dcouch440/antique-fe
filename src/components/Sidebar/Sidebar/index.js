import Authorize from '../Authorize';
import { Box } from '@mui/material';
import Nav from '../Nav';
import PropTypes from 'prop-types';
import React from 'react';
import ToggleNavType from '../ToggleNavType';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

const styles = () => ({
  root: {
    width: {
      xs: '70%',
      md: 400,
    },
    backgroundColor: 'black.transparent',
    backdropFilter: 'blur(12px)',
    position: {
      xs: 'absolute',
      sm: 'initial',
    },
    minHeight: '100%',
    px: 3,
    pt: 6,
    boxShadow: (theme) => '5px 0 15px ' + theme.palette.black.transparent,
  },
  relativeBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

/** TODO:
 * Prevent password must match error from showing when changing back to login.
 * change error color.
 */

function Sidebar({ user, sidebarVersion, sidebarVisibility }) {
  const sx = styles();
  const userIsOnline = Boolean(user.id);
  const showNavigation = sidebarVersion === 'NAVIGATION';

  return (
    sidebarVisibility && (
      <Box component="nav" sx={sx.root}>
        {!userIsOnline && <ToggleNavType />}
        <Box sx={sx.relativeBox}>
          {showNavigation || userIsOnline ? <Nav /> : <Authorize />}
        </Box>
      </Box>
    )
  );
}

Sidebar.propTypes = {
  sidebarVersion: PropTypes.string,
  sidebarVisibility: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  versionChanged: PropTypes.func,
};

const mapStateToProps = ({
  user,
  sidebar: { sidebarVersion, sidebarVisibility },
}) => ({
  user,
  sidebarVersion: sidebarVersion,
  sidebarVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  versionChanged: (version) => dispatch(sidebarAC.versionChanged(version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
