import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

const styles = () => ({
  root: {
    position: 'absolute',
    top: (theme) => theme.spacing(1),
    left: (theme) => theme.spacing(1),
  },
});

function ToggleNavType({ sidebarVersion, versionChanged }) {
  const sx = styles();
  const showNavigation = sidebarVersion === 'NAVIGATION';

  const handleClick = () =>
    sidebarVersion === 'NAVIGATION'
      ? versionChanged('LOGIN')
      : versionChanged('NAVIGATION');

  return (
    <Button sx={sx.root} onClick={handleClick}>
      {showNavigation ? (
        <PersonIcon sx={{ color: 'white.main' }} size={36} />
      ) : (
        <MenuIcon sx={{ color: 'white.main' }} size={36} />
      )}
    </Button>
  );
}

ToggleNavType.propTypes = {
  sidebarVersion: PropTypes.string.isRequired,
  versionChanged: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebar }) => ({
  sidebarVersion: sidebar.sidebarVersion,
});

const mapDispatchToProps = (dispatch) => ({
  versionChanged: (version) => dispatch(sidebarAC.versionChanged(version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleNavType);
