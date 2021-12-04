import Authorize from '../Authorize';
import { Box } from '@mui/material';
import Nav from '../Nav';
import PropTypes from 'prop-types';
import React from 'react';
import { SIDEBAR_NAVIGATION } from 'constantVariables';
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
  // if navigation type is set to SIDEBAR_NAVIGATION or if user is online render nav.
  // else prompt user to log in.
  const showNavigation = sidebarVersion === SIDEBAR_NAVIGATION;
  const renderNavType = () =>
    showNavigation || userIsOnline ? <Nav /> : <Authorize />;

  return (
    sidebarVisibility && (
      <Box component="nav" sx={sx.root}>
        {!userIsOnline && <ToggleNavType />}
        <Box sx={sx.relativeBox}>{renderNavType()}</Box>
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
