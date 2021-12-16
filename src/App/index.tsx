import { Route, Routes } from 'react-router';

import { AppLayout } from 'Layout';
import AppSnackBar from 'components/AppSnackBar';
import { CssBaseline } from '@mui/material';
import { Enchants } from 'pages';

export default function App(): JSX.Element {
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
