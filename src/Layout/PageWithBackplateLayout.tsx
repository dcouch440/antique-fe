import { Typography, useTheme } from '@mui/material';

import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import TopBar from 'components/TopBar';

interface IPageWithBackplateLayout {
  header?: string;
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
        paddingTop: theme.topBarHeight + 'px',
        minHeight: `calc(100% - ${theme.topBarHeight}px)`,
        height: `calc(100% - ${theme.topBarHeight}px)`,
        '& > *': {
          backgroundColor: 'secondary.main',
        },
        position: 'relative',
      }}
      component="main"
    >
      {header && (
        <Box
          sx={{
            color: 'primary.main',
            p: 1,
          }}
          component="header"
        >
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
      )}
      <Box
        sx={{
          minHeight: `100%`,
          width: '100%',
          flexDirection: 'column',
        }}
      >
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
