import React, { ReactElement } from 'react';

import Carousel from 'react-material-ui-carousel';
import Image from 'components/Image';
import styled from '@emotion/styled';

interface Props {
  images: Array<{
    url: string;
    caption: string;
  }>;
}

const StyledCarousel = styled(Carousel)`
  width: 100%;
`;

function SlideShow({ images }: Props): ReactElement {
  const ImageItem = ({ url }: { url: string }) => (
    <Image
      sx={{ objectFit: 'scale-down', height: '100%', width: '100%' }}
      src={url}
    />
  );
  return (
    <StyledCarousel NextIcon={<div>Next</div>} PrevIcon="prev">
      {images.map(({ url }) => (
        <ImageItem url={url} key={url} />
      ))}
    </StyledCarousel>
  );
}

export default SlideShow;
