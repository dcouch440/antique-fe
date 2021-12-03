import { AppLayout } from 'Layout';
import { CssBaseline } from '@mui/material';
import Router from 'App/Router';
import { Sidebar } from 'components';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppLayout Sidebar={Sidebar} Router={Router} />
    </>
  );
}
