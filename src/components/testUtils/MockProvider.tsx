import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import store from 'store';
import { theme } from 'theme';

const MockProviders = ({ component }: { component: JSX.Element }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>{component}</Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default MockProviders;
