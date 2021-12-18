import { useMediaQuery, useTheme } from '@mui/material';

import { Box } from '@mui/system';
import Category from './Category';
import MobileSidebarOptions from '../MobileSidebarOptions';
import SearchBar from './SearchBar';

export default function EnchantTopBar() {
  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: ['space-between', null],
          px: [1, null],
        }}
      >
        <Category />
        {isBelowSm && <MobileSidebarOptions />}
      </Box>
      <Box sx={{ pr: 1, display: ['none', 'none', 'initial'] }} />
      <SearchBar />
    </>
  );
}
