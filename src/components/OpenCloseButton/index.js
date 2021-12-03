import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import closeArrow from 'assets/svg/close-arrow.svg';
import { connect } from 'react-redux';
import openArrow from 'assets/svg/open-arrow.svg';
import { sidebarAC } from 'store/sidebar';

const styles = () => ({
  image: {
    height: '64px',
    width: '64px',
    fill: 'red',
  },
});

/** TODO: PLACEHOLDER SVG, ossible removal */

function OpenCloseButton({ sidebarVisibility, visibilityToggled, sx }) {
  const style = styles();
  const icon = () =>
    sidebarVisibility ? (
      <img style={style.image} src={closeArrow} />
    ) : (
      <img style={style.image} src={openArrow} />
    );
  const handleClick = () => visibilityToggled();

  return (
    <Box sx={sx} onClick={handleClick}>
      {icon()}
    </Box>
  );
}

OpenCloseButton.propTypes = {
  sidebarVisibility: PropTypes.bool.isRequired,
  sx: PropTypes.object,
  visibilityToggled: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebar: { sidebarVisibility } }) => ({
  sidebarVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  visibilityToggled: () => dispatch(sidebarAC.visibilityToggled()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenCloseButton);
