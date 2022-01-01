import { Box } from '@mui/material';
import React from 'react';

export default function Image({ ...props }): JSX.Element {
  return <Box component="img" {...props} />;
}
