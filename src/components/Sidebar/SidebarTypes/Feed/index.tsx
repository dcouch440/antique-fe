import { Box } from '@mui/system';
import Header from '../../Header';
import React from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = () => ({});
// const mapDispatchToProps = {};
const connector = connect(null, null);
// type PropsFromRedux = ConnectedProps<typeof connector>;
// type Props = PropsFromRedux;

function Feed(): JSX.Element {
  return (
    <Box data-testid="Feed-SidebarType">
      <Header text="Feed" />;
    </Box>
  );
}

export default connector(Feed);
