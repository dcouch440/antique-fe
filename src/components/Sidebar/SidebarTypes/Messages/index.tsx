import { Box } from '@mui/material';
import Header from '../../Header';
import React from 'react';
import { connect } from 'react-redux';

function Messages(): JSX.Element {
  return (
    <Box data-testid="Messages-SidebarType">
      <Header text="Messages" />
    </Box>
  );
}

Messages.propTypes = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Messages);
