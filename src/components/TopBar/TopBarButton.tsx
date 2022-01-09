import { Button, SxProps } from '@mui/material';
import React, { ReactElement } from 'react';

interface TopBarButton {
  sx?: SxProps;
  onMouseDown: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactElement | ReactElement[];
}

export default function TopBarButton({
  sx = {},
  onMouseDown,
  children,
}: TopBarButton): ReactElement {
  return (
    <Button
      sx={{
        flex: [null, 1],
        p: [null, 1],
        height: '100%',
        ...sx,
      }}
      onMouseDown={onMouseDown}
    >
      {children}
    </Button>
  );
}
