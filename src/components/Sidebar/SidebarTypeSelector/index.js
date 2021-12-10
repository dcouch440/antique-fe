import { Fab } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

function SidebarTypeSelector({
  sidebarTypeChanged,
  constantVariable,
  children,
  withLogout,
  user,
  sidebarVisibility,
  visibilityToggled,
}) {
  const handleClick = () => {
    // if sidebar is closed open it.
    !sidebarVisibility && visibilityToggled();
    // set the type as well.
    sidebarTypeChanged(constantVariable);
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
    <Fab color="primary" onClick={handlePickCorrectHandler}>
      {children}
    </Fab>
  );
}

SidebarTypeSelector.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  constantVariable: PropTypes.string.isRequired,
  sidebarTypeChanged: PropTypes.func.isRequired,
  sidebarVisibility: PropTypes.bool.isRequired,
  tooltip: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  visibilityToggled: PropTypes.func.isRequired,
  withLogout: PropTypes.bool,
  orientation: PropTypes.string,
};

const mapStateToProps = ({
  sidebar: { sidebarType, sidebarVisibility },
  user,
}) => ({
  sidebarType,
  user,
  sidebarVisibility,
});

const mapDispatchToProps = {
  sidebarTypeChanged: (version) => sidebarAC.sidebarTypeChanged(version),
  visibilityToggled: () => sidebarAC.visibilityToggled(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarTypeSelector);
