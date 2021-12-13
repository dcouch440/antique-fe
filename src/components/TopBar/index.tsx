import { Box, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import EnchantTopBar from './EnchantTopBar';
import React from 'react';

export default function TopBar() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'secondary.main',
        position: 'sticky',
        display: 'flex',
        justifyContent: 'space-between',
        top: 0,
        p: 1,
      }}
    >
      <Routes>
        <Route path="/" element={<EnchantTopBar />} />
      </Routes>
    </Box>
  );
}
