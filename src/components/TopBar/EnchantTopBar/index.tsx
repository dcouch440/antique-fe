import { Box } from '@mui/system';
import Category from './Category';
import SearchBar from './SearchBar';

export default function EnchantTopBar() {
  return (
    <>
      <Category />
      <Box sx={{ pr: 1, display: ['none', 'none', 'initial'] }} />
      <SearchBar />
    </>
  );
}
