import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';

import CloseSidebar from '../CloseSidebar';
import SidebarRouter from '../SidebarRouter';
import SidebarTypeSelectors from '../SidebarTypeSelectors';
import { sidebarMiniMenuDragButtonVisibilityUpdated } from 'store/sidebar/actionCreators';
import { useEffect } from 'react';

const mapDispatchToProps = {
  sidebarMiniMenuDragButtonVisibilityUpdated,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function SidebarOpen({
  sidebarMiniMenuDragButtonVisibilityUpdated,
}: Props): JSX.Element {
  const theme = useTheme();
  const isLargerThanMedium = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (isLargerThanMedium) {
      sidebarMiniMenuDragButtonVisibilityUpdated(true);
    }
  }, [isLargerThanMedium]);

  return (
    <Box
      sx={{
        width: ['100%', '100%', '100%', 450],
        height: '100vh',
        pt: 2,
        px: 2,
        zIndex: 2,
        backgroundColor: 'secondary.main',
        position: 'fixed',
      }}
    >
      <Box>
        <CloseSidebar
          sx={{
            zIndex: 3,
            right: 0,
            top: 0,
            m: 1,
            position: 'absolute',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SidebarTypeSelectors />
        <SidebarRouter />
      </Box>
    </Box>
  );
}
export default connector(SidebarOpen);
