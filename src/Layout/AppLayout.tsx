import { ReactNode } from 'react';
import ScrollContainer from 'components/ScrollContainer';
import { Sidebar } from 'components/Sidebar';
import { TopBar } from 'components/TopBar';
import { useTheme } from '@mui/material';

interface IOwnProps {
  children: ReactNode;
}

/**
 * @description handle background color and adaptive height.
 */

function AppLayout({ children }: IOwnProps): JSX.Element {
  const theme = useTheme();

  return (
    <ScrollContainer
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
    </ScrollContainer>
  );
}

export default AppLayout;
