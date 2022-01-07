import { ConnectedProps, connect } from 'react-redux';
import { CreateAndUpdateEnchants, Enchant, Enchants } from 'pages';
import { Route, Routes } from 'react-router';

import { AppLayout } from 'Layout';
import { AppSnackbar } from 'components/common';
import { CssBaseline } from '@mui/material';
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
      <AppSnackbar />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Enchants />} />
          <Route
            path="/enchants/post"
            element={<CreateAndUpdateEnchants newUpload />}
          />
          <Route
            path="/enchants/:enchantId/update"
            element={<CreateAndUpdateEnchants newUpload={false} />}
          />
          <Route path="/enchants/:enchantId" element={<Enchant />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default connector(App);
