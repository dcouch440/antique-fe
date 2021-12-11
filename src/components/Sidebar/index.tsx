import { AnimatePresence, motion } from 'framer-motion';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';

import CloseSidebar from './CloseSidebar';
import DragOpenButton from './DragOpenButton';
import { IAppState } from 'store/types';
import MotionDiv from 'animation/MotionDiv';
import SidebarRouter from './SidebarRouter';
import SidebarTypeSelectors from './SidebarTypeSelectors';

// TODO: Refactor and separate logic.

/**
 * @description
 * - Sidebar Component has an animated presence that slides in and out. If the screen is above md it will take up only part of the screen.
 * - Menu selectors are used to conditionally render different aspects of the menu.
 * - menuSelectors will be called twice, one with it's orientation chosen for closed menu. This is required because using state will change the orientation of the selector before it disappears
 */

const mapStateToProps = ({
  user,
  sidebar: {
    sidebarType,
    sidebarVisibility,
    sidebarMiniMenuVisibility,
    sidebarMiniMenuDragButtonVisibility,
  },
}: IAppState) => ({
  user,
  sidebarMiniMenuDragButtonVisibility,
  sidebarType,
  sidebarVisibility,
  sidebarMiniMenuVisibility,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function Sidebar({
  sidebarVisibility,
  sidebarMiniMenuVisibility,
}: Props): JSX.Element {
  const theme = useTheme();
  const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AnimatePresence>
      {sidebarVisibility ? (
        <MotionDiv
          key="sidebar"
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            zIndex: 4,
            position: 'fixed',
          }}
        >
          <Box
            sx={{
              width: ['100vw', '100vw', '100vw', 450],
              height: '100vh',
              pt: 2,
              px: 2,
              backgroundColor: 'secondary.main',
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
        </MotionDiv>
      ) : (
        // Sidebar Not Visible
        <MotionDiv
          key="closed-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {isBelowMedium && <DragOpenButton />}
          {sidebarMiniMenuVisibility && (
            <Box
              sx={{
                position: 'fixed',
                right: 0,
                left: [0, 0],
                margin: ['0 auto', '0 auto', 1],
                top: [null, null, 1],
                width: 'fit-content',
                bottom: [0, 0, 0],
                pb: [1, 1, 0],
                zIndex: 1,
              }}
            >
              <SidebarTypeSelectors orientation="closed" />
            </Box>
          )}
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}

export default connector(Sidebar);
