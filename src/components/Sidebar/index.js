import { AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import CloseSidebar from './CloseSidebar';
import MotionDiv from 'animation/MotionDiv';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarRouter from './SidebarRouter';
import SidebarTypeSelectors from './SidebarTypeSelectors';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

function Sidebar({ sidebarVisibility }) {
  return (
    <AnimatePresence>
      {sidebarVisibility ? (
        <Box
          key="sidebar"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          as={MotionDiv}
          sx={{
            width: ['100%', '100%', '100%', 450],
            height: '100vh',
            zIndex: 4,
            position: 'absolute',
            pt: 2,
            px: 2,
            backgroundColor: 'secondary.main',
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
            }}
          >
            <SidebarTypeSelectors />
            <SidebarRouter />
          </Box>
        </Box>
      ) : (
        // Sidebar Not Visible
        <Box
          key="vertical-menu"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          as={MotionDiv}
          sx={{
            position: 'absolute',
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
    </AnimatePresence>
  );
}

Sidebar.propTypes = {
  sidebarType: PropTypes.string,
  sidebarVisibility: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  sidebarTypeChanged: PropTypes.func,
};

const mapStateToProps = ({
  user,
  sidebar: { sidebarType, sidebarVisibility },
}) => ({
  user,
  sidebarType: sidebarType,
  sidebarVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  sidebarTypeChanged: (version) =>
    dispatch(sidebarAC.sidebarTypeChanged(version)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
