import React, { ReactElement } from 'react';

import { Box } from '@mui/material';

interface Props {
  mt?: boolean;
  mb?: boolean;
  children: ReactElement | ReactElement[];
}

function AppSpacingBox({ mt, mb, children }: Props): ReactElement {
  return (
    <Box
      sx={{
        mt: mt ? 3 : 0,
        mb: mb ? 3 : 0,
      }}
    >
      {children}
    </Box>
  );
}

export default AppSpacingBox;
