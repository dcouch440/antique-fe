import { ConnectedProps, connect } from 'react-redux';
import { useMediaQuery, useTheme } from '@mui/material';

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
  const theme = useTheme();
  const isBelowMedium = useMediaQuery(theme.breakpoints.down('md'));
  const showSnackbar = Boolean(error);

  const vertical = isBelowMedium ? 'top' : 'bottom';

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal: 'center' }}
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={errorCleared}
      message={error}
    />
  );
}

export default connector(AppSnackBar);
