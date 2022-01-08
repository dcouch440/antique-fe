import React, { ReactElement } from 'react';

import { Divider } from '@mui/material';

function AppDivider(): ReactElement {
  return (
    <Divider sx={{ borderColor: (theme) => theme.palette.primary.dark }} />
  );
}

export default AppDivider;
