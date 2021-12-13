import EnchantsCategory from '../../../TopBar/EnchantTopBar/Category';
import EnchantsSearchBar from '../../../TopBar/EnchantTopBar/SearchBar';
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
