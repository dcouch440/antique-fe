import { Box } from '@mui/system';
import Header from '../Header';
import NavigationLink from './NavigationLink';
import React from 'react';
import ScrollContainer from 'components/ScrollContainer';

const styles = () => ({
  root: {
    height: '100%',
  },
});

export default function Nav() {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <ScrollContainer hideScrollBar style={sx.scrollbar}>
        <Header title="What Doing?" />
        <NavigationLink
          title="Enchants"
          description="Description Text; Description Text; Description Text; Description Text;"
          path="/"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-mart-production-7679889_oqrtec.webp',
          ]}
        />
        <NavigationLink
          title="Likes"
          description="Description Text; Description Text; Description Text; Description Text;"
          path="/"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
          ]}
        />
        <NavigationLink
          title="Post"
          description="Description Text; Description Text; Description Text; Description Text;"
          path="/"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
          ]}
        />
        <NavigationLink
          title="Barter"
          description="Description Text; Description Text; Description Text; Description Text;"
          path="/"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
          ]}
        />
        <NavigationLink
          title="Go Live"
          description="Description Text; Description Text; Description Text; Description Text;"
          path="/"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
          ]}
        />
      </ScrollContainer>
    </Box>
  );
}
