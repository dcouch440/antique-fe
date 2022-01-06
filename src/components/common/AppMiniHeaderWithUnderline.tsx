import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

import AppDivider from './AppDivider';

interface Props {
  text: string;
}

function AppMiniHeaderWithUnderline({ text }: Props): ReactElement {
  return (
    <Box
      sx={{
        width: 'fit-content',
        mb: 1,
      }}
    >
      <Typography color="primary" mb={1}>
        {text}
      </Typography>
      <AppDivider />
    </Box>
  );
}

export default AppMiniHeaderWithUnderline;
