import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import {
  miniMenuDragButtonVisibilityUpdated,
  miniMenuVisibilityUpdated,
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
    miniMenuVisibility,
    sidebarVisibility,
    swellMenuType,
    miniMenuDragButtonVisibility,
  },
}: IAppState) => ({
  miniMenuDragButtonVisibility,
  swellMenuType,
  miniMenuVisibility,
  sidebarVisibility,
});

const mapDispatchToProps = {
  miniMenuVisibilityUpdated,
  miniMenuDragButtonVisibilityUpdated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function DragOpenButton({
  swellMenuType,
  miniMenuVisibility,
  miniMenuVisibilityUpdated,
  miniMenuDragButtonVisibilityUpdated,
  miniMenuDragButtonVisibility,
}: Props): JSX.Element | null {
  useEffect(() => {
    // if any swell menu is visible or sidebar is open, remove the button.
    if (miniMenuDragButtonVisibility && swellMenuType) {
      miniMenuDragButtonVisibilityUpdated(false);
    }
  }, [swellMenuType, miniMenuDragButtonVisibility]);

  // if the mini menu is showing then give it a full opacity so the user knows to exit. else return a translucent version so the user can view the content through it.
  const opacity = miniMenuVisibility ? 0.8 : 0.3;

  // On release of the bounds set the mini menu to open
  const handleReleaseOutOfBounds = () => {
    miniMenuVisibilityUpdated(true);
  };

  const handleClick = () => {
    if (miniMenuVisibility) {
      miniMenuVisibilityUpdated(false);
    }
  };

  return (
    <AnimatePresence>
      {!swellMenuType && (
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
              bottom: miniMenuVisibility ? 84 : 24,
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
              <Fab
                color="primary"
                sx={{ width: 40, height: 40 }}
                onClick={handleClick}
              >
                {miniMenuVisibility ? (
                  <CloseOutlinedIcon fontSize="small" />
                ) : (
                  <DragIndicatorIcon color="secondary" />
                )}
              </Fab>
            </MotionDrag>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default connector(DragOpenButton);
