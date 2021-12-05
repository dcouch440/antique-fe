import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';

const styles = () => ({
  root: {
    flex: '0 1 1200px',
    margin: '0 auto',
    pt: 2,
    px: 1,
  },
  headerContainer: {
    borderBottom: (theme) => '1px solid ' + theme.palette.black.transparent,
  },
  content: {
    height: '100%',
  },
  header: {
    fontSize: 64,
    textAlign: 'center',
  },
});

export default function PageLayout({ header, children }) {
  const style = styles();
  return (
    <Box sx={style.root} component="main">
      <Box sx={style.headerContainer} component="header">
        <Typography color="black" sx={style.header} component="h1">
          {header}
        </Typography>
      </Box>
      <Box sx={style.content}>{children}</Box>
    </Box>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  header: PropTypes.string.isRequired,
};
