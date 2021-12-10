import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import waxSeal from 'assets/img/waxSealImg.webp';

const makeSX = () => ({
  root: {
    flex: `0 1 1750px`,
    maxWidth: ['100%', '100%', '80vw'],
    margin: '0 auto',
    minHeight: '100vh',
    '& > *': {
      backgroundColor: 'secondary.main',
    },
    position: 'relative',
  },
  headerContainer: {
    borderBottom: (theme) =>
      '1px solid ' + theme.custom.palette.secondary.transparent,
    color: 'primary.main',
    p: 2,
    backgroundColor: 'secondary.main',
  },
  content: {
    backgroundColor: 'secondary.main',
    boxShadow: 1,
    height: '6000px',
  },
  header: {
    fontSize: [26, 46, 64],
    textAlign: 'center',
    fontFamily: (theme) => theme.custom.typography.families.cursive,
  },
});

function PageWithBackplateLayout({ header, children, sidebarVisibility }) {
  const sxStyles = makeSX(sidebarVisibility);

  return (
    <Box sx={sxStyles.root} component="main">
      <Box sx={sxStyles.headerContainer} component="header">
        <img
          style={{
            position: 'absolute',
            height: 'clamp(80px, 14vw, 150px)',
            right: '1%',
            top: 0,
          }}
          src={waxSeal}
          alt="Application logo - red wax seal"
        />
        <Typography
          key="header"
          color="primary"
          sx={sxStyles.header}
          component="h1"
        >
          {header}
        </Typography>
      </Box>
      <Box sx={sxStyles.content}>{children}</Box>
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
