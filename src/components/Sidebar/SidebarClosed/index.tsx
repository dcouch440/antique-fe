import { ConnectedProps, connect } from 'react-redux';
import { useMediaQuery, useTheme } from '@mui/material';

import { Box } from '@mui/system';
import SidebarTypeSelectors from '../SidebarTypeSelectors';
import { miniMenuVisibilityUpdated } from 'store/sidebar/actionCreators';
import { useEffect } from 'react';

const mapDispatchToProps = {
  miniMenuVisibilityUpdated,
};

const mapStateToProps = () => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function SidebarClosed({ miniMenuVisibilityUpdated }: Props): JSX.Element {
  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargerThanMedium = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    // if screen ever becomes larger that what the user had and menu was closed. make sure that is renders shows the menu.
    if (isLargerThanMedium) {
      miniMenuVisibilityUpdated(true);
    }
  }, [isLargerThanMedium]);

  return (
    <>
      {!isBelowSm && (
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
    </>
  );
}

export default connector(SidebarClosed);
