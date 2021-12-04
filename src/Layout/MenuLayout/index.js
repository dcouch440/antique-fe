import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  root: {
    minWidth: 1000,
    maxWidth: '90%',
    minHeight: 1000,
  },
});

export default function MenuLayout({ children }) {
  const style = styles();
  return <Box sx={style.root}>{children}</Box>;
}

MenuLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
