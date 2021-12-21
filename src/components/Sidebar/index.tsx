import { AnimatePresence, motion } from 'framer-motion';
import { ConnectedProps, connect } from 'react-redux';

import { IAppState } from 'store/types';
import SidebarClosed from './SidebarClosed';
import SidebarOpen from './SidebarOpen';

const mapStateToProps = ({ sidebar: { sidebarVisibility } }: IAppState) => ({
  sidebarVisibility,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

/**
 * * Renders variants of the sidebar that decides how the menu icons should behave
 * * Sidebar Open displays the entire sidebar that houses the option menu.
 * * Sidebar Closed Houses the small icons that display on the side of the screen.
 * * The small icons move to the bottom of the screen so many variations of the Boxes would be needed
 * * For now these components will be duplicated with different versions.
 */

function Sidebar({ sidebarVisibility }: Props): JSX.Element {
  return (
    <AnimatePresence>
      {sidebarVisibility ? (
        <motion.div
          data-testid="Sidebar-open"
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
          data-testid="Sidebar-closed"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <SidebarClosed />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default connector(Sidebar);
