import { Button, ButtonGroup } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import {
  ENCHANT_SEARCH_TYPE_FRIEND,
  ENCHANT_SEARCH_TYPE_NEW,
  ENCHANT_SEARCH_TYPE_POPULAR,
  SIDEBAR_SWELL_MENU_ENCHANT_CATEGORY,
} from 'constantVariables';

import FiberNewIcon from '@mui/icons-material/FiberNew';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import GroupIcon from '@mui/icons-material/Group';
import { IAppState } from 'store/types';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import React from 'react';
import SwellMenuContainer from 'animation/SwellMenuContainer';
import { searchTypeUpdated } from 'store/enchant/actionCreators';
import { swellMenuTypeUpdated } from 'store/sidebar/actionCreators';

/**
 * @description CollapseMenu component changes what type of search it is based on constants in the store
 */

const mapStateToProps = ({ enchant: { searchType } }: IAppState) => ({
  searchType,
});

const mapDispatchToProps = {
  searchTypeUpdated,
  swellMenuTypeUpdated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface OwnProps {
  orientation?: 'open' | 'closed';
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

function CollapseMenu({
  searchType,
  searchTypeUpdated,
  swellMenuTypeUpdated,
}: Props): JSX.Element {
  const primaryColorIfActive: (type: string) => Array<'primary' | 'secondary'> =
    (type) => [
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

  const handleClick = (type: string) => {
    setTimeout(() => {
      searchTypeUpdated(type);
      swellMenuTypeUpdated(null);
    }, 200);
  };

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
        }}
      >
        <Button
          color={friendsButtonColor}
          onClick={() => handleClick(ENCHANT_SEARCH_TYPE_FRIEND)}
        >
          Friends
          <GroupIcon color={friendIconColor} />
        </Button>
        <Button
          color={newButtonColor}
          onClick={() => handleClick(ENCHANT_SEARCH_TYPE_NEW)}
        >
          New
          <FiberNewIcon color={newIconColor} />
        </Button>
        <Button
          color={popularButtonColor}
          onClick={() => handleClick(ENCHANT_SEARCH_TYPE_POPULAR)}
        >
          Popular
          <LocalFireDepartmentIcon color={popularIconColor} />
        </Button>
      </ButtonGroup>
    </SwellMenuContainer>
  );
}

export default connector(CollapseMenu);
