import EnchantsCategory from './EnchantsCategory';
import EnchantsSearchBar from './EnchantsSearchBar';
import React from 'react';

function EnchantsSideMenu() {
  return (
    <>
      <EnchantsCategory />
      <EnchantsSearchBar />
    </>
  );
}

EnchantsSideMenu.propTypes = {};

export default EnchantsSideMenu;
