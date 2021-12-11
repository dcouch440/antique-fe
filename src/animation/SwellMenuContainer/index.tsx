import { AnimatePresence, motion } from 'framer-motion';
import { Box, useTheme } from '@mui/system';
import { ConnectedProps, connect } from 'react-redux';
import { Fab, useMediaQuery } from '@mui/material';

import { IAppState } from 'store/types';
import { ReactNode } from 'react';
import { swellMenuTypeUpdated } from 'store/sidebar/actionCreators';

/**
 * @description SwellMenuContainer is used as a swell menu for the EXtraMenu part of the application SidebarTypeSelectors housing MUST be set to relative for it to work correctly.
 */

const mapStateToProps = (state: IAppState) => ({
  sidebarSwellMenuType: state.sidebar.sidebarSwellMenuType,
});

const mapDispatchToProps = {
  swellMenuTypeUpdated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface OwnProps {
  icon: JSX.Element;
  children: ReactNode;
  constantVariable: string;
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

function SwellMenuContainer({
  icon,
  children,
  swellMenuTypeUpdated,
  sidebarSwellMenuType,
  constantVariable,
}: Props) {
  const theme = useTheme();
  const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isActive = sidebarSwellMenuType === constantVariable;
  const handleClick = () =>
    swellMenuTypeUpdated(isActive ? null : constantVariable);

  return (
    <Box sx={{ display: 'flex' }}>
      <AnimatePresence>
        <Fab onClick={handleClick} color="primary" key="open-close-button">
          {icon}
        </Fab>
        {isActive && (
          <motion.div
            key="animation-drawer"
            initial={{ opacity: 0, width: 0 }}
            // if the window is set to small display it at 100% of the width from the next relative container.
            animate={{
              opacity: 1,
              width: '100%',
            }}
            transition={{ duration: 0.5 }}
            exit={{ width: 0, opacity: 0 }}
            style={{
              overflow: 'hidden',
              // set to absolute so menu can be used above itself.
              position: 'fixed',
              right: 0,
              left: 0,
              display: 'flex',
              width: '100%',
              padding: '0 24px',
              justifyContent: 'center',
              bottom: isBelowMedium ? '10%' : 'unset',
              top: !isBelowMedium ? theme.spacing(10) : 'unset',
            }}
          >
            <div
              style={{
                position: 'sticky',
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default connector(SwellMenuContainer);
