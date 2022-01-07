import { Box, useTheme } from '@mui/material';

import { ReactNode } from 'react';
import { Sidebar } from 'components/Sidebar';
import { TopBar } from 'components/TopBar';

interface IOwnProps {
  children: ReactNode;
}

/**
 * @description handle background color and adaptive height.
 */

function AppLayout({ children }: IOwnProps): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      style={{
        flex: 1,
        minHeight: '100%',
        backgroundColor: theme.custom.palette.backgroundColor,
        display: 'flex',
      }}
    >
      <Sidebar />
      <TopBar />
      {children}
    </Box>
  );
}

export default AppLayout;
