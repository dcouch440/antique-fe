import { Box, SxProps } from '@mui/material';
import React, { CSSProperties } from 'react';

interface IAppImage {
  sx?: SxProps;
  style?: CSSProperties;
  src: string;
  alt: string;
}

/**
 * @description A wrapper for images to gain access to theme props while using material UI's SX props.
 */

export default function AppImage({
  sx,
  src,
  style,
  alt,
}: IAppImage): JSX.Element {
  return <Box component="img" sx={sx} src={src} style={style} alt={alt} />;
}
