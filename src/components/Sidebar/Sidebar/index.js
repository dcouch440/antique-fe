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
      xs: '90%',
      md: 400,
    },
    backgroundColor: 'black.transparent',
    backdropFilter: 'blur(12px)',
    position: {
      xs: 'absolute',
    },
    minHeight: '100%',
    px: 3,
    pt: 6,
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

function Sidebar({ user, sidebarVersion }) {
  const sx = styles();
  const userIsOnline = Boolean(user.id);
  const showNavigation = sidebarVersion === 'NAVIGATION';

  return (
    <Box component="nav" sx={sx.root}>
      {!userIsOnline && <ToggleNavType />}
      <Box sx={sx.relativeBox}>
        {showNavigation || userIsOnline ? <Nav /> : <Authorize />}
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  sidebarVersion: PropTypes.string,
  user: PropTypes.object.isRequired,
  versionChanged: PropTypes.func,
};

const mapStateToProps = ({ user, sidebar }) => ({
  user,
  sidebarVersion: sidebar.sidebarVersion,
});

const mapDispatchToProps = (dispatch) => ({
  versionChanged: (version) => dispatch(sidebarAC.versionChanged(version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
