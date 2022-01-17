import React, { ElementType, ReactElement } from 'react';
import { SxProps, Typography } from '@mui/material';

interface Props {
  text: string;
  component: ElementType;
  size: 'xl' | 'sub' | 'mini';
  sx?: SxProps;
}

/**
 * @description Returns a dynamic size header that will become smaller by a percentage when a screen becomes xs.
 */

function AppHeader({ text, component, sx, size }: Props): ReactElement {
  const fs = size === 'xl' ? 46 : size === 'sub' ? 20 : 16;

  return (
    <Typography
      sx={{
        alignSelf: 'flex-start',
        ...sx,
        fontSize: [Math.floor(fs * 0.9), fs, Math.floor(fs * 1.2)],
      }}
      component={component}
      fontSize={fs}
      color="primary"
    >
      {text}
    </Typography>
  );
}

export default AppHeader;
