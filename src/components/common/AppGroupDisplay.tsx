import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

import AppMiniHeaderWithUnderline from './AppMiniHeaderWithUnderline';

interface Props {
  items: Array<{ title: string; text: string | undefined }>;
}

function AppGroupDisplay({ items }: Props): ReactElement {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridAutoColumns: 300,
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {items.map(({ title, text }, i) =>
        text ? (
          <Box
            key={i}
            sx={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <AppMiniHeaderWithUnderline text={title} />
            <Typography color="primary">{text}</Typography>
          </Box>
        ) : null
      )}
    </Box>
  );
}

export default AppGroupDisplay;
