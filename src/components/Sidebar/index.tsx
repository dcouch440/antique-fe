import { AnimatePresence, motion } from 'framer-motion';
import { ConnectedProps, connect } from 'react-redux';

import { IAppState } from 'store/types';
import SidebarClosed from './SidebarClosed';
import SidebarOpen from './SidebarOpen';

// TODO: Refactor and separate logic.

/**
 * @description
 * - Sidebar Component has an animated presence that slides in and out. If the screen is above md it will take up only part of the screen.
 * - Menu selectors are used to conditionally render different aspects of the menu.
 * - menuSelectors will be called twice, one with it's orientation chosen for closed menu. This is required because using state will change the orientation of the selector before it disappears
 */

const mapStateToProps = ({ sidebar: { sidebarVisibility } }: IAppState) => ({
  sidebarVisibility,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function Sidebar({ sidebarVisibility }: Props): JSX.Element {
  return (
    <AnimatePresence>
      {sidebarVisibility ? (
        <motion.div
          key="sidebar-open"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
          style={{ position: 'fixed', zIndex: 5 }}
        >
          <SidebarOpen key="SidebarOpen" />
        </motion.div>
      ) : (
        // Sidebar Not Visible
        <motion.div
          key="sidebar-closed"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <SidebarClosed key="SidebarClosed" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default connector(Sidebar);
