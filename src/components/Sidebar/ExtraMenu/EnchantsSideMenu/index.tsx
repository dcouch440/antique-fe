import EnchantsCategory from './EnchantsCategory';
import EnchantsSearchBar from './EnchantsSearchBar';
import React from 'react';

function EnchantsSideMenu(): JSX.Element {
  return (
    <>
      <EnchantsCategory />
      <EnchantsSearchBar />
    </>
  );
}

export default EnchantsSideMenu;
