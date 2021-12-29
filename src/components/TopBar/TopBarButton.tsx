import { Button, SxProps } from '@mui/material';

import React from 'react';

interface TopBarButton {
  sx?: SxProps;
}

export default function TopBarButton({ sx = {}, ...props }) {
  return (
    <Button
      sx={{
        flex: [null, 1],
        p: [null, 1],
        height: '100%',
        ...sx,
      }}
      {...props}
    />
  );
}
