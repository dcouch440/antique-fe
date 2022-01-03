import { ConnectedProps, connect } from 'react-redux';

import { Box } from '@mui/material';
import CloseSidebar from './CloseSidebar';
import { IAppState } from 'store/types';
import SidebarRouter from './SidebarRouter';
import SidebarTypeSelectors from './SidebarTypeSelectors';

const mapStateToProps = ({ sidebar: { sidebarVisibility } }: IAppState) => ({
  sidebarVisibility,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

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
      {sidebarVisibility && (
        <Box
          sx={{
            width: ['100%', '100%', '100%', 450],
            height: '100vh',
            pt: 2,
            px: 2,
            backgroundColor: 'secondary.main',
            zIndex: 999,
            position: 'fixed',
            boxShadow: 5,
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
              borderRadius: '0 12px 12px 0',
            }}
          >
            <SidebarTypeSelectors />
            <SidebarRouter />
          </Box>
        </Box>
      )}
    </>
  );
}

export default connector(Sidebar);
