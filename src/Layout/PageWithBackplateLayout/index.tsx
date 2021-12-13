import { Typography, useTheme } from '@mui/material';

import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import TopBar from 'components/TopBar';
import waxSeal from 'assets/img/waxSealImg.webp';

interface IPageWithBackplateLayout {
  header: string;
  children: JSX.Element | JSX.Element[];
}

function PageWithBackplateLayout({
  header,
  children,
}: IPageWithBackplateLayout): JSX.Element {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flex: `0 1 1750px`,
        maxWidth: ['100%', '100%', '80vw'],
        margin: '0 auto',
        minHeight: '100vh',
        '& > *': {
          backgroundColor: 'secondary.main',
        },
        position: 'relative',
      }}
      component="main"
    >
      <Box
        sx={{
          borderBottom: `1px solid ${theme.custom.palette.secondary.transparent}`,
          color: 'primary.main',
          p: 2,
          backgroundColor: 'secondary.main',
        }}
        component="header"
      >
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
          sx={{
            fontSize: [26, 46, 64],
            textAlign: 'center',
            fontFamily: `${theme.custom.typography.families.cursive}`,
          }}
          component="h1"
        >
          {header}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          boxShadow: 1,
          height: '6000px',
        }}
      >
        <TopBar />
        {children}
      </Box>
    </Box>
  );
}

export default PageWithBackplateLayout;

PageWithBackplateLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  header: PropTypes.string.isRequired,
};
