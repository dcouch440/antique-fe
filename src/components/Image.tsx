import { Box } from '@mui/material';
import React from 'react';

/**
 * @description A wrapper for images to gain access to theme props while using material UI's SX props.
 */

export default function Image({ ...props }): JSX.Element {
  return <Box component="img" {...props} />;
}
