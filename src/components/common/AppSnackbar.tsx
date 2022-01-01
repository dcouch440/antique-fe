import { ConnectedProps, connect } from 'react-redux';

import { IAppState } from 'store/types';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { snackbarMessageCleared } from 'store/snackbar/actionCreators';

const mapStateToProps = ({ snackbar }: IAppState) => ({
  snackbar,
});

const mapDispatchToProps = {
  snackbarMessageCleared,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function AppSnackBar({ snackbar, snackbarMessageCleared }: Props) {
  const showSnackbar = Boolean(snackbar.message);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={snackbarMessageCleared}
      message={snackbar.message}
    />
  );
}

export default connector(AppSnackBar);
