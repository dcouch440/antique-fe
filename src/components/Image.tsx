import { Box, SxProps } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {
  src: string;
  alt: string;
  sx?: SxProps;
}

export default function Image({ src, ...props }: Props): ReactElement {
  return <Box component="img" src={src} {...props} />;
}
