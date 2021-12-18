import { ConnectedProps, connect } from 'react-redux';
import { Route, Routes } from 'react-router';

import { AppLayout } from 'Layout';
import AppSnackBar from 'components/AppSnackBar';
import { CssBaseline } from '@mui/material';
import { Enchants } from 'pages';
import axiosSetup from 'config/axiosSetup';
import thunk from 'redux-thunk';
import { thunkSession } from 'store/user/thunkCreators';
import { useEffect } from 'react';

const mapDispatchToProps = {
  thunkSession,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function App({ thunkSession }: Props): JSX.Element {
  axiosSetup();

  useEffect(thunkSession, [thunk]);

  return (
    <>
      <CssBaseline />
      <AppSnackBar />
      <AppLayout>
        <Routes>
          <Route path="//*" element={<Enchants />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default connector(App);
