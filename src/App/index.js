import { Route, Routes } from 'react-router';

import { GlobalStyles } from 'styles';
import { Home } from 'pages';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
