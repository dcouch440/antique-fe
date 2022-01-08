import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, Button, Typography } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AliceCarousel from 'react-alice-carousel';
import { AppDivider } from 'components/common';
import AppImage from 'components/common/AppImage';

interface Props {
  images: Array<{
    url: string;
    caption: string;
  }>;
}

function SlideShow({ images }: Props): ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slidePrev = () => {
    if (activeIndex - 1 < 0) return;
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    if (activeIndex + 1 >= images.length) return;
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }: { item: number }) => {
    console.log(item);
    setActiveIndex(item);
  };

  const items = images.map(({ url }) => (
    <Box
      key={url}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        transition: '0.2s',
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      <AppImage
        sx={{
          borderRadius: 1,
          height: 'auto',
          maxHeight: 800,
          width: '100%',
          objectFit: 'scale-down',
        }}
        src={url}
      />
    </Box>
  ));

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        mb: 3,
        flexDirection: 'column',
        backgroundColor: (theme) => theme.custom.palette.secondary.transparent,
      }}
    >
      <AliceCarousel
        disableSlideInfo
        touchTracking
        disableButtonsControls
        mouseTracking
        activeIndex={activeIndex}
        items={items}
        onSlideChanged={syncActiveIndex}
      />
      <Box>
        <Button onClick={slidePrev}>Prev</Button>
        <Button onClick={slideNext}>Next</Button>
      </Box>
      <AppDivider />
      <Box sx={{ width: '100%', flex: 1 }}>
        <Typography color="primary" sx={{ p: 1 }}>
          {images[activeIndex]?.caption
            ? images[activeIndex]?.caption
            : 'No Caption..'}
        </Typography>
      </Box>
    </Box>
  );
}

export default SlideShow;
