import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import {
  sidebarMiniMenuDragButtonVisibilityUpdated,
  sidebarMiniMenuVisibilityUpdated,
} from 'store/sidebar/actionCreators';

import { Box } from '@mui/system';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ConnectedProps } from 'react-redux';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Fab } from '@mui/material';
import { IAppState } from 'store/types';
import { MotionDrag } from 'animation';
import { connect } from 'react-redux';

const mapStateToProps = ({
  sidebar: {
    sidebarMiniMenuVisibility,
    sidebarVisibility,
    sidebarSwellMenuType,
    sidebarMiniMenuDragButtonVisibility,
  },
}: IAppState) => ({
  sidebarMiniMenuDragButtonVisibility,
  sidebarSwellMenuType,
  sidebarMiniMenuVisibility,
  sidebarVisibility,
});

const mapDispatchToProps = {
  sidebarMiniMenuVisibilityUpdated,
  sidebarMiniMenuDragButtonVisibilityUpdated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function DragOpenButton({
  sidebarSwellMenuType,
  sidebarMiniMenuVisibility,
  sidebarMiniMenuVisibilityUpdated,
  sidebarMiniMenuDragButtonVisibilityUpdated,
  sidebarMiniMenuDragButtonVisibility,
}: Props): JSX.Element | null {
  useEffect(() => {
    // if any swell menu is visible or sidebar is open, remove the button.
    if (sidebarMiniMenuDragButtonVisibility && sidebarSwellMenuType) {
      sidebarMiniMenuDragButtonVisibilityUpdated(false);
    }
  }, [sidebarSwellMenuType, sidebarMiniMenuDragButtonVisibility]);

  // if the mini menu is showing then give it a full opacity so the user knows to exit. else return a translucent version so the user can view the content through it.
  const opacity = sidebarMiniMenuVisibility ? 1 : 0.8;

  // On release of the bounds set the mini menu to open
  const handleReleaseOutOfBounds = () => {
    sidebarMiniMenuVisibilityUpdated(true);
  };

  const handleClick = () => {
    if (sidebarMiniMenuVisibility) {
      sidebarMiniMenuVisibilityUpdated(false);
    }
  };

  return (
    <AnimatePresence>
      {!sidebarSwellMenuType ? (
        <motion.div
          key="closed-menu"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              position: 'fixed',
              zIndex: 10,
              bottom: sidebarMiniMenuVisibility ? 90 : 12,
              right: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MotionDrag
              opacity={opacity}
              range={50}
              onReleaseOutOfBounds={handleReleaseOutOfBounds}
            >
              <Fab color="primary" onClick={handleClick}>
                {sidebarMiniMenuVisibility ? (
                  <CloseOutlinedIcon />
                ) : (
                  <DragIndicatorIcon color="secondary" />
                )}
              </Fab>
            </MotionDrag>
          </Box>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default connector(DragOpenButton);
