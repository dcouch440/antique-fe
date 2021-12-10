import React, { useState } from 'react';

import { EnchantSearchQuery } from 'store/enchant/reducer/types';
import { SIDEBAR_SWELL_MENU_SEARCH } from 'constantVariables';
import { Search } from '@mui/icons-material';
import { SearchBar } from 'components';
import { SidebarSwellMenuType } from 'store/sidebar/reducer/types';
import SwellMenuContainer from 'animation/SwellMenuContainer';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

/**
 * @description - Enchants: When a user enters search terms, the body and title will searched through. The term will be submitted to the store and one of 3 variable will decide Friends, New, and Hot will change the users search preference. The selected preference will be stored in the store and change what the user will receive.
 * - This component will be reusable for different pages so at the cost of abstraction it requires a SwellMenuContainer and will need to be used again to make sure the correct query is used.
  @param {function} onSubmit default is prevented - returns search query only.
*/

interface IDispatchProps {
  swellMenuTypeUpdated: (type: SidebarSwellMenuType) => void;
}

interface ISearchWellMenu {
  onSubmit: (searchQuery: EnchantSearchQuery) => void;
}

function SearchSwellMenu({
  onSubmit,
  swellMenuTypeUpdated,
}: IDispatchProps & ISearchWellMenu): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setSearchQuery(value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(searchQuery);
    // close menu after search is submitted
    swellMenuTypeUpdated(null);
  };

  return (
    <SwellMenuContainer
      constantVariable={SIDEBAR_SWELL_MENU_SEARCH}
      icon={<Search />}
    >
      <SearchBar
        onChange={handleChange}
        onSubmit={handleSubmit}
        sx={{ flex: 1, ml: [0, 0, 1] }}
        key="search-bar"
      />
    </SwellMenuContainer>
  );
}

const mapDispatchToProps: IDispatchProps = {
  swellMenuTypeUpdated: (type) => sidebarAC.swellMenuTypeUpdated(type),
};

export default connect(null, mapDispatchToProps)(SearchSwellMenu);
