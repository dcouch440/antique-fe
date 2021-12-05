import { Fab } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

const styles = (tooltip) => ({
  root: {
    position: 'relative',
    '&:after': {
      content: `"${tooltip ?? ''}"`,
      position: 'absolute',
      backgroundColor: 'primary.main',
      top: 'calc(4px + 100%)',
      p: '2px',
      fontSize: 'sizes.sm',
      borderRadius: 1,
      opacity: 0,
      userSelect: 'none',
      transition: 'opacity 0.3s ease 1s',
      textTransform: 'capitalize',
      fontWeight: 'bold',
    },
    '&:hover': {
      '&:after': {
        opacity: 1,
      },
    },
  },
});

function SidebarTypeSelector({
  sidebarTypeChanged,
  constantVariable,
  children,
  withLogout,
  user,
  tooltip,
  sidebarVisibility,
  visibilityToggled,
}) {
  const style = styles(tooltip);

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
    <Fab sx={style.root} color="primary" onClick={handlePickCorrectHandler}>
      {children}
    </Fab>
  );
}

const mapStateToProps = ({
  sidebar: { sidebarType, sidebarVisibility },
  user,
}) => ({
  sidebarType,
  user,
  sidebarVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  sidebarTypeChanged: (version) =>
    dispatch(sidebarAC.sidebarTypeChanged(version)),
  visibilityToggled: () => dispatch(sidebarAC.visibilityToggled()),
});

SidebarTypeSelector.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node.isRequired),
  ]),
  constantVariable: PropTypes.string.isRequired,
  sidebarTypeChanged: PropTypes.func.isRequired,
  sidebarVisibility: PropTypes.bool.isRequired,
  tooltip: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  visibilityToggled: PropTypes.func.isRequired,
  withLogout: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarTypeSelector);
