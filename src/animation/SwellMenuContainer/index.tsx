import { AnimatePresence, motion } from 'framer-motion';
import { Box, useTheme } from '@mui/system';
import { Fab, useMediaQuery } from '@mui/material';

import { ISidebarState } from 'store/sidebar/reducer/interfaces';
import PropTypes from 'prop-types';
import React from 'react';
import { SidebarSwellMenuType } from 'store/sidebar/reducer/types';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

/**
 *
 * @param {{icon: object, children: JSX.Element|JSX.Elements, constantVariable: string}}
 * @description SwellMenuContainer is used as a swell menu for the EXtraMenu part of the application SidebarTypeSelectors housing MUST be set to relative for it to work correctly.
 */

interface IDispatchProps {
  swellMenuTypeUpdated: (type: SidebarSwellMenuType) => void;
}

interface IStateProps {
  sidebar: ISidebarState;
}

interface ISwellMenuContainer {
  icon: JSX.Element;
  children: JSX.Element | JSX.Element[];
  constantVariable: string;
  sidebarSwellMenuType: SidebarSwellMenuType;
}

type Props = IDispatchProps & ISwellMenuContainer;

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

const mapStateToProps = ({
  sidebar: { sidebarSwellMenuType },
}: IStateProps) => ({
  sidebarSwellMenuType,
});

const mapDispatchToProps: IDispatchProps = {
  swellMenuTypeUpdated: (type) => {
    sidebarAC.swellMenuTypeUpdated(type);
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(SwellMenuContainer);
