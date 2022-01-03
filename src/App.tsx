import { ConnectedProps, connect } from 'react-redux';
import { Route, Routes } from 'react-router';

import { AppLayout } from 'Layout';
import AppSnackBar from 'components/common/AppSnackbar';
import CreateEnchants from 'pages/CreateEnchant';
import { CssBaseline } from '@mui/material';
import Enchant from 'pages/Enchant';
import Enchants from 'pages/Enchants';
import UpdateEnchant from 'pages/UpdateEnchant';
import axiosSetup from 'config/axiosSetuo';
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

  useEffect(() => {
    thunkSession();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppSnackBar />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Enchants />} />
          <Route path="/enchants/post" element={<CreateEnchants />} />
          <Route
            path="/enchants/:enchantId/update"
            element={<UpdateEnchant />}
          />
          <Route path="/enchants/:enchantId" element={<Enchant />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default connector(App);
