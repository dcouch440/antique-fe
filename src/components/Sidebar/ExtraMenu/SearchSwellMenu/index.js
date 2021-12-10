import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { SIDEBAR_SWELL_MENU_SEARCH } from 'constantVariables';
import { Search } from '@mui/icons-material';
import { SearchBar } from 'components';
import SwellMenuContainer from 'animation/SwellMenuContainer';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

/**
 * @description - Enchants: When a user enters search terms, the body and title will searched through. The term will be submitted to the store and one of 3 variable will decide Friends, New, and Hot will change the users search preference. The selected preference will be stored in the store and change what the user will receive.
 * - This component will be reusable for different pages so at the cost of abstraction it requires a SwellMenuContainer and will need to be used again to make sure the correct query is used.
  @param {function} onSubmit default is prevented - returns search query only.
*/

function SearchSwellMenu({ onSubmit, swellMenuTypeUpdated }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = ({ target: { value } }) => setSearchQuery(value);

  const handleSubmit = (e) => {
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

SearchSwellMenu.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  swellMenuTypeUpdated: PropTypes.func,
};

const mapDispatchToProps = {
  swellMenuTypeUpdated: (type) => sidebarAC.swellMenuTypeUpdated(type),
};

export default connect(null, mapDispatchToProps)(SearchSwellMenu);
