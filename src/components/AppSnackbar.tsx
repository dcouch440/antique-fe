import { ConnectedProps, connect } from 'react-redux';

import { IAppState } from 'store/types';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { errorCleared } from 'store/snackbar/actionCreators';

const mapStateToProps = ({ snackbar: { error } }: IAppState) => ({
  error,
});

const mapDispatchToProps = {
  errorCleared,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function AppSnackBar({ error, errorCleared }: Props) {
  const showSnackbar = Boolean(error);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={errorCleared}
      message={error}
    />
  );
}

export default connector(AppSnackBar);
