import React, { ElementType, ReactElement } from 'react';
import { SxProps, Typography } from '@mui/material';

interface Props {
  text: string;
  component: ElementType<any>;
  size: 'xl' | 'sub' | 'mini';
  sx?: SxProps;
}

function Header({ text, component, sx, size }: Props): ReactElement {
  const fs = size === 'xl' ? 46 : size === 'sub' ? 24 : 16;

  return (
    <Typography
      sx={{ alignSelf: 'flex-start', ...sx }}
      component={component}
      fontSize={fs}
      color="primary"
    >
      {text}
    </Typography>
  );
}

export default Header;
