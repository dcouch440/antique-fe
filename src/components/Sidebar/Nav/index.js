import { Box } from '@mui/system';
import Header from '../Header';
import NavigationLink from '../NavigationLink';
import React from 'react';

const styles = () => ({
  root: {
    height: '100%',
  },
});

export default function Nav() {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <Header text="Welcome" />
      <NavigationLink text="Send it" path="/" />
      <NavigationLink text="Send it" path="/" />
      <NavigationLink text="Send it" path="/" />
      <NavigationLink text="Send it" path="/" />
      <NavigationLink text="Send it" path="/" />
    </Box>
  );
}
