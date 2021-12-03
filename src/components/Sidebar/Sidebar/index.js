import Authorize from '../Authorize';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        width: 400,
        backgroundColor: 'black.transparent',
        position: 'relative',
      }}
    >
      <Authorize />
    </Box>
  );
}

Sidebar.propTypes = {
  path: PropTypes.string.isRequired,
};

const mapStateToProps = ({ navigation }) => ({
  path: navigation.path,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
