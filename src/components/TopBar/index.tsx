import { Box, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import EnchantTopBar from './EnchantTopBar';
import React from 'react';

export default function TopBar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'secondary.main',
        position: 'sticky',
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: ['center', 'space-around'],
        top: 0,
        p: 1,
        background: theme.custom.palette.secondary.transparent,
        backdropFilter: 'blur(3px)',
        borderBottom: '1px solid ' + theme.palette.primary.main,
        borderTop: '1px solid ' + theme.palette.primary.main,
        '& > div:not(:first-child)': {
          mt: 1,
        },
      }}
    >
      <Routes>
        <Route path="/" element={<EnchantTopBar />} />
      </Routes>
    </Box>
  );
}
