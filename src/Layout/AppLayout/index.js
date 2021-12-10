import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Sidebar } from 'components';
import { connect } from 'react-redux';

const styles = () => ({
  content: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: 'antiqueWhite.main',
    display: 'flex',
  },
});

function AppLayout({ children, sidebarVisibility }) {
  const style = styles(sidebarVisibility);

  return (
    <Box sx={style.content}>
      <Sidebar />
      {children}
    </Box>
  );
}

const mapStateToProps = ({ sidebar: { sidebarVisibility } }) => ({
  sidebarVisibility,
});

export default connect(mapStateToProps)(AppLayout);
AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  sidebarVisibility: PropTypes.bool.isRequired,
};
