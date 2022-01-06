import { ConnectedProps, connect } from 'react-redux';
import { Route, Routes } from 'react-router';

import { AppLayout } from 'Layout';
import AppSnackBar from 'components/common/AppSnackbar';
import { CssBaseline } from '@mui/material';
import Enchant from 'pages/Enchant';
import EnchantCreateAndUpdate from 'pages/EnchantCreateAndUpdate';
import Enchants from 'pages/Enchants';
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
          <Route
            path="/enchants/post"
            element={<EnchantCreateAndUpdate newUpload />}
          />
          <Route
            path="/enchants/:enchantId/update"
            element={<EnchantCreateAndUpdate newUpload={false} />}
          />
          <Route path="/enchants/:enchantId" element={<Enchant />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default connector(App);
