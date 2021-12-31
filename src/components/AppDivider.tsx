import { Box, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

function AppDivider(): ReactElement {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '90%',
        borderBottom: '1px solid ' + theme.palette.primary.dark,
        height: 1,
      }}
    />
  );
}

export default AppDivider;
