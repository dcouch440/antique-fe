import { Button, ButtonGroup } from '@mui/material';
import {
  ENCHANT_SEARCH_TYPE_FRIEND,
  ENCHANT_SEARCH_TYPE_NEW,
  ENCHANT_SEARCH_TYPE_POPULAR,
  SIDEBAR_SWELL_MENU_ENCHANT_CATEGORY,
} from 'constantVariables';

import FiberNewIcon from '@mui/icons-material/FiberNew';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import GroupIcon from '@mui/icons-material/Group';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PropTypes from 'prop-types';
import React from 'react';
import SwellMenuContainer from 'animation/SwellMenuContainer';
import { connect } from 'react-redux';
import { enchantAC } from 'store/enchant';

/**
 * @description CollapseMenu component changes what type of search it is based on constants in the store
 */

function CollapseMenu({ searchType, searchTypeUpdated }) {
  const primaryColorIfActive = (type) => [
    searchType === type ? 'primary' : 'secondary',
    searchType !== type ? 'primary' : 'secondary',
  ];

  const [friendIconColor, friendsButtonColor] = primaryColorIfActive(
    ENCHANT_SEARCH_TYPE_FRIEND
  );

  const [newIconColor, newButtonColor] = primaryColorIfActive(
    ENCHANT_SEARCH_TYPE_NEW
  );

  const [popularIconColor, popularButtonColor] = primaryColorIfActive(
    ENCHANT_SEARCH_TYPE_POPULAR
  );

  return (
    <SwellMenuContainer
      icon={<FilterNoneIcon />}
      constantVariable={SIDEBAR_SWELL_MENU_ENCHANT_CATEGORY}
    >
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="outlined primary button group"
        sx={{
          ml: [0, 0, 1],
          borderRadius: 5,
          overflow: 'hidden',
          width: ['100%', '100%', 'unset'],
        }}
      >
        <Button
          color={friendsButtonColor}
          onClick={() => searchTypeUpdated(ENCHANT_SEARCH_TYPE_FRIEND)}
        >
          Friends
          <GroupIcon color={friendIconColor} />
        </Button>
        <Button
          color={newButtonColor}
          onClick={() => searchTypeUpdated(ENCHANT_SEARCH_TYPE_NEW)}
        >
          New
          <FiberNewIcon color={newIconColor} />
        </Button>
        <Button
          color={popularButtonColor}
          onClick={() => searchTypeUpdated(ENCHANT_SEARCH_TYPE_POPULAR)}
        >
          Popular
          <LocalFireDepartmentIcon color={popularIconColor} />
        </Button>
      </ButtonGroup>
    </SwellMenuContainer>
  );
}

CollapseMenu.propTypes = {
  searchType: PropTypes.string.isRequired,
  searchTypeUpdated: PropTypes.func.isRequired,
};

const mapStateToProps = ({ enchant: { searchType } }) => ({
  searchType,
});

const mapDispatchToProps = {
  searchTypeUpdated: (type) => enchantAC.searchTypeUpdated(type),
};

export default connect(mapStateToProps, mapDispatchToProps)(CollapseMenu);
