import { Route, Routes } from 'react-router';

import EnchantsSideMenu from './EnchantsSideMenu';

function ExtraMenu(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<EnchantsSideMenu />} />
    </Routes>
  );
}

export default ExtraMenu;
