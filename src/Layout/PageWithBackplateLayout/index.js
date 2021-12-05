import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import waxSeal from 'assets/img/waxSealImg.webp';

const styles = () => ({
  root: {
    flex: `0 1 1750px`,
    maxWidth: '80vw',
    margin: '0 auto',
    px: 1,
    '& > *': {
      backgroundColor: 'secondary.main',
    },
    position: 'relative',
  },
  headerContainer: {
    borderBottom: (theme) => '1px solid ' + theme.palette.black.transparent,
    color: 'primary.main',
    p: 2,
    position: 'relative',
  },
  content: {
    minHeight: 'calc(100% - 145px)',
    position: 'relative',
    boxShadow: 1,
  },
  header: {
    fontSize: 64,
    textAlign: 'center',
    fontFamily: 'families.cursive',
  },
});

function PageWithBackplateLayout({ header, children, sidebarVisibility }) {
  const style = styles(sidebarVisibility);

  return (
    <Box sx={style.root} component="main">
      <Box sx={style.headerContainer} component="header">
        <img
          style={{
            position: 'absolute',
            height: '100%',
            right: '10%',
            top: 0,
          }}
          src={waxSeal}
          alt="Application logo - red wax seal"
        />
        <Typography key="header" color="black" sx={style.header} component="h1">
          {header}
        </Typography>
      </Box>
      <Box sx={style.content}>{children}</Box>
    </Box>
  );
}
const mapStateToProps = ({ sidebar: { sidebarVisibility } }) => ({
  sidebarVisibility,
});

export default connect(mapStateToProps)(PageWithBackplateLayout);

PageWithBackplateLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  header: PropTypes.string.isRequired,
  sidebarVisibility: PropTypes.bool.isRequired,
};
