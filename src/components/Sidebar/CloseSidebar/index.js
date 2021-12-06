import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Fab } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

/** TODO: PLACEHOLDER SVG, ossible removal */

function CloseSidebar({ visibilityToggled, sx }) {
  const handleClick = () => visibilityToggled();

  return (
    <Fab color="secondary" sx={sx} size="small" onClick={handleClick}>
      <CancelPresentationIcon color="primary" />
    </Fab>
  );
}

CloseSidebar.propTypes = {
  sidebarVisibility: PropTypes.bool.isRequired,
  sx: PropTypes.object,
  visibilityToggled: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebar: { sidebarVisibility } }) => ({
  sidebarVisibility,
});

const mapDispatchToProps = {
  visibilityToggled: () => sidebarAC.visibilityToggled(),
};

export default connect(mapStateToProps, mapDispatchToProps)(CloseSidebar);
