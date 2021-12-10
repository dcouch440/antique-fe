import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { Sidebar } from 'components';
import { useTheme } from '@mui/material';

interface IAppLayout {
  children: JSX.Element | JSX.Element[];
}

function AppLayout({ children }: IAppLayout) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: '100%',
        backgroundColor: theme.custom.palette.antiqueWhite.main,
        display: 'flex',
      }}
    >
      <Sidebar />
      {children}
    </Box>
  );
}

export default AppLayout;
