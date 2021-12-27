import { ConnectedProps, connect } from 'react-redux';

import { Box } from '@mui/material';
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
    <>
      {sidebarVisibility ? (
        <Box
          data-testid="Sidebar-open"
          style={{ position: 'fixed', zIndex: 5 }}
        >
          <SidebarOpen key="SidebarOpenx" />
        </Box>
      ) : (
        // Sidebar Not Visible
        <Box data-testid="Sidebar-closed">
          <SidebarClosed key="sidebarclosedx" />
        </Box>
      )}
    </>
  );
}

export default connector(Sidebar);
