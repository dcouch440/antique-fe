import React, { Suspense, lazy } from 'react';

import { Box } from '@mui/system';
import Header from '../../Header';

const LazyNavigationLink = lazy(() => import('./NavigationLink'));

export default function Nav(): JSX.Element {
  return (
    <Box
      data-testid="Nav-SidebarType"
      sx={{
        borderRadius: 1,
        height: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none' /* for Chrome, Safari, and Opera */,
        },
      }}
    >
      <Header text="What Doing?" />
      <Suspense fallback={<div />}>
        <LazyNavigationLink
          title="Enchants"
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
          path="/enchants/post"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
          ]}
        />
      </Suspense>
      <Suspense fallback={<div />}>
        <LazyNavigationLink
          title="Barter"
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
          path="/"
          images={[
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686977/category/art_mpxdif.webp',
            'https://res.cloudinary.com/dbyretay5/image/upload/v1620686973/category/pexels-pixabay-221327_dhphth.webp',
          ]}
        />
      </Suspense>
    </Box>
  );
}
