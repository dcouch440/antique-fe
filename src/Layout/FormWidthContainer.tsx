import { Box, SxProps } from '@mui/material';
import React, { ElementType, ReactElement } from 'react';

interface Props {
  component?: ElementType<any>;
  sx?: SxProps;
  children: ReactElement | ReactElement[];
}

/**
 * @description Used to render a consistent width for small screens and large screen when a form is present.
 */

function FormWidthContainer({ sx, children, component }: Props): ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 800 + 120,
        maxWidth: '100%',
        ...sx,
      }}
      component={component}
    >
      {children}
    </Box>
  );
}

export default FormWidthContainer;
