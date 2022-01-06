import 'react-alice-carousel/lib/alice-carousel.css';

import { Box, Button, Typography } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AliceCarousel from 'react-alice-carousel';
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
    if (activeIndex + 1 > images.length) return;
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }: { item: number }) => {
    console.log(item);
    setActiveIndex(item);
  };

  const ImageItem = ({ url }: { url: string }) => (
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
  );

  const items = images.map(({ url, caption }) => (
    <Box
      key={url}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      <ImageItem url={url} />
      {caption && (
        <Typography
          color="primary"
          sx={{
            backgroundColor: (theme) =>
              theme.custom.palette.secondary.transparent,
            borderRadius: 1,
            p: 1,
            width: 'fit-content',
            position: 'absolute',
            left: 0,
            top: 1,
          }}
        >
          {caption}
        </Typography>
      )}
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
        disableDotsControls
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
    </Box>
  );
}

export default SlideShow;
