import { Box, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import EnchantTopBar from './EnchantTopBar';

export default function TopBar(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'secondary.main',
        position: 'sticky',
        display: 'flex',
        gap: 1,
        flexDirection: ['column', 'row'],
        justifyContent: ['center', 'space-around'],
        top: 0,
        p: 1,
        background: theme.custom.palette.secondary.transparent,
        backdropFilter: 'blur(3px)',
        borderBottom: '1px solid ' + theme.palette.primary.main,
        '& > div:not(:first-of-type)': {
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
