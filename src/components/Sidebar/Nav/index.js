import React, { Suspense, lazy } from 'react';

import { Box } from '@mui/system';
import Header from '../Header';
import ScrollContainer from 'components/ScrollContainer';

const styles = () => ({
  root: {
    height: '100%',
  },
});

const LazyNavigationLink = lazy(() => import('./NavigationLink'));

export default function Nav() {
  const sx = styles();

  return (
    <Box sx={sx.root}>
      <ScrollContainer hideScrollBar style={sx.scrollbar}>
        <Header title="What Doing?" />
        <Suspense fallback={<div />}>
          <LazyNavigationLink
            title="Enchants"
            description="Description Text; Description Text; Description Text; Description Text;"
            path="/"
            images={[
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-mart-production-7679889_oqrtec.webp',
            ]}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyNavigationLink
            title="Likes"
            description="Description Text; Description Text; Description Text; Description Text;"
            path="/"
            images={[
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            ]}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyNavigationLink
            title="Post"
            description="Description Text; Description Text; Description Text; Description Text;"
            path="/"
            images={[
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
            ]}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyNavigationLink
            title="Barter"
            description="Description Text; Description Text; Description Text; Description Text;"
            path="/"
            images={[
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
            ]}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyNavigationLink
            title="Go Live"
            description="Description Text; Description Text; Description Text; Description Text;"
            path="/"
            images={[
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
              'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
            ]}
          />
        </Suspense>
      </ScrollContainer>
    </Box>
  );
}
