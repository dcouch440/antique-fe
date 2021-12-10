import { SidebarType, SidebarVisibility } from 'store/sidebar/reducer/types';

import { AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import CloseSidebar from './CloseSidebar';
import { ISidebarState } from 'store/sidebar/reducer/interfaces';
import { IUserState } from 'store/user/reducer/interfaces';
import MotionDiv from 'animation/MotionDiv';
import SidebarRouter from './SidebarRouter';
import SidebarTypeSelectors from './SidebarTypeSelectors';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

/**
 * @description
 * - Sidebar Component has an animated presence that slides in and out. If the screen is above md it will take up only part of the screen.
 * - Menu selectors are used to conditionally render different aspects of the menu.
 * - menuSelectors will be called twice, one with it's orientation chosen for closed menu. This is required because using state will change the orientation of the selector before it disappears
 */

interface IStateProps {
  user: IUserState;
  sidebar: ISidebarState;
}

interface IDispatchProps {
  sidebarTypeChanged: (version: SidebarType) => void;
}

interface ISidebar {
  sidebarVisibility: SidebarVisibility;
}

type Props = IDispatchProps & ISidebar;

function Sidebar({ sidebarVisibility }: Props) {
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
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}

const mapStateToProps = ({
  user,
  sidebar: { sidebarType, sidebarVisibility },
}: IStateProps) => ({
  user,
  sidebarType: sidebarType,
  sidebarVisibility,
});

const mapDispatchToProps = {
  sidebarTypeChanged: (version: SidebarType): void => {
    sidebarAC.sidebarTypeChanged(version);
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
