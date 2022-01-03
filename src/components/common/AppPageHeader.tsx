import React, { ReactElement } from 'react';
import { Typography, useTheme } from '@mui/material';

import { Box } from '@mui/system';

interface Props {
  text: string;
  renderSubText?: JSX.Element;
}

/**
 * @description Renders a full width cursive header for pages.
 */

export default function AppPageHeader({
  text,
  renderSubText,
}: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box
      sx={{
        color: 'primary.main',
        backgroundColor: 'secondary.main',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',
        m: 0,
        p: 0,
      }}
      component="header"
    >
      <Typography
        key="header"
        color="primary"
        sx={{
          p: 0,
          fontSize: [26, 46, 64],
          m: 0,
          textAlign: 'center',
          fontFamily: `${theme.custom.typography.families.cursive}`,
        }}
        component="h1"
      >
        {text}
        {renderSubText}
      </Typography>
    </Box>
  );
}
