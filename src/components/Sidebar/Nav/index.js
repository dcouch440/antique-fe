import { Box } from '@mui/system';
import Header from '../Header';
import MenuSelector from '../MenuSelector';
import NavigationLink from '../NavigationLink';
import React from 'react';

const styles = () => ({
  root: {
    height: '100%',
    '& > *': {
      mt: 1,
    },
  },
});

export default function Nav() {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <Header text="Welcome" />
      <NavigationLink
        text="Enchants"
        path="/"
        images={[
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.jpg',
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-mart-production-7679889_oqrtec.jpg',
        ]}
      />
      <NavigationLink
        text="Likes"
        path="/"
        images={[
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.jpg',
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.jpg',
        ]}
      />
      <NavigationLink
        text="Post"
        path="/"
        images={[
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.jpg',
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.jpg',
        ]}
      />
      <NavigationLink
        text="Chat"
        path="/"
        images={[
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.jpg',
          'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-charlotte-may-5824485_ssonxa.jpg',
        ]}
      />
      <MenuSelector />
    </Box>
  );
}
