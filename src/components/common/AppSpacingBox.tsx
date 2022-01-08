import { Box, SxProps } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {
  mt?: boolean;
  mb?: boolean;
  children: ReactElement | ReactElement[];
  sx?: SxProps;
  component?: React.ElementType;
}

function AppSpacingBox({
  mt,
  sx,
  mb,
  children,
  component,
}: Props): ReactElement {
  return (
    <Box
      sx={{
        mt: mt ? 3 : 0,
        mb: mb ? 3 : 0,
        ...sx,
      }}
      component={component}
    >
      {children}
    </Box>
  );
}

export default AppSpacingBox;
