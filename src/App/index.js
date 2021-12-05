import { Route, Routes } from 'react-router';

import { AppLayout } from 'Layout';
import { CssBaseline } from '@mui/material';
import { Enchants } from 'pages';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppLayout>
        <Routes>
          <Route exact path="/" element={<Enchants />} />
        </Routes>
      </AppLayout>
    </>
  );
}
