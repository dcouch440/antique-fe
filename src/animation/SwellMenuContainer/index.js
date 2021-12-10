import { AnimatePresence, motion } from 'framer-motion';
import { Box, useTheme } from '@mui/system';
import { Fab, useMediaQuery } from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

/**
 *
 * @param {{icon: object, children: JSX.Element|JSX.Elements, constantVariable: string}}
 * @description SwellMenuContainer is used as a swell menu for the EXtraMenu part of the application SidebarTypeSelectors housing MUST be set to relative for it to work correctly.
 */

function SwellMenuContainer({
  icon,
  children,
  swellMenuTypeUpdated,
  sidebarSwellMenuType,
  constantVariable,
}) {
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
              width: isBelowMedium ? '100%' : '60vw',
            }}
            transition={{ duration: 0.5 }}
            exit={{ width: 0, opacity: 0 }}
            style={{
              overflow: 'hidden',
              // set to absolute so menu can be used above itself.
              position: isBelowMedium ? 'absolute' : 'initial',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '-50%',
              right: '-50%',
              top: '-130%',
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

SwellMenuContainer.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  constantVariable: PropTypes.string.isRequired,
  swellMenuTypeUpdated: PropTypes.func.isRequired,
  sidebarSwellMenuType: PropTypes.string.Nullable,
};

const mapStateToProps = ({ sidebar: { sidebarSwellMenuType } }) => ({
  sidebarSwellMenuType,
});

const mapDispatchToProps = {
  swellMenuTypeUpdated: (type) => sidebarAC.swellMenuTypeUpdated(type),
};

export default connect(mapStateToProps, mapDispatchToProps)(SwellMenuContainer);
