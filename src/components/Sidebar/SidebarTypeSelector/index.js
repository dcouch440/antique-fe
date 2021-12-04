import { Fab } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

const styles = () => ({
  root: {
    backgroundColor: 'white.transparent',
  },
});

function SidebarTypeSelector({
  versionChanged,
  constantVariable,
  children,
  withLogout,
  user,
}) {
  const sx = styles();

  const handleClick = () => {
    versionChanged(constantVariable);
  };

  const handleLogout = () => {
    // LOGOUT FUNCTIONALITY
  };

  const handlePickCorrectHandler = () => {
    const userIsLoggedIn = Boolean(user.id);

    if (withLogout && userIsLoggedIn) {
      handleLogout();
    } else {
      handleClick();
    }
  };

  return (
    <Fab sx={sx} color="primary" onClick={handlePickCorrectHandler}>
      {children}
    </Fab>
  );
}

const mapStateToProps = ({ sidebar: { sidebarType }, user }) => ({
  sidebarType,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  versionChanged: (version) => dispatch(sidebarAC.versionChanged(version)),
});

SidebarTypeSelector.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node.isRequired),
  ]),
  constantVariable: PropTypes.string.isRequired,
  versionChanged: PropTypes.func.isRequired,
  withLogout: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarTypeSelector);
