import { ConnectedProps, connect } from 'react-redux';
import { ScrollContainer, Sidebar } from 'components';

import { IAppState } from 'store/types';
import { ReactNode } from 'react';
import TopBar from 'components/TopBar';
import { useTheme } from '@mui/material';

interface IOwnProps {
  children: ReactNode;
}

const mapStateToProps = ({ sidebar: { sidebarVisibility } }: IAppState) => ({
  sidebarVisibility,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & IOwnProps;

function AppLayout({ children }: Props): JSX.Element {
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

export default connector(AppLayout);
