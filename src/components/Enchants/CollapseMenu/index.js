import {
  ENCHANT_SEARCH_TYPE_FRIEND,
  ENCHANT_SEARCH_TYPE_NEW,
  ENCHANT_SEARCH_TYPE_POPULAR,
} from 'constantVariables';

import { CollapsableDials } from 'components';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { enchantAC } from 'store/enchant';

function CollapseMenu({ searchType, searchTypeUpdated }) {
  const primaryColorIfActive = (type) =>
    searchType === type ? 'primary' : 'secondary';

  const actions = [
    {
      icon: (
        <GroupIcon color={primaryColorIfActive(ENCHANT_SEARCH_TYPE_FRIEND)} />
      ),
      name: 'Friends',
      onClick: () => searchTypeUpdated(ENCHANT_SEARCH_TYPE_FRIEND),
      isActive: searchType === ENCHANT_SEARCH_TYPE_FRIEND,
    },
    {
      icon: (
        <FiberNewIcon color={primaryColorIfActive(ENCHANT_SEARCH_TYPE_NEW)} />
      ),
      name: 'New',
      onClick: () => searchTypeUpdated(ENCHANT_SEARCH_TYPE_NEW),
      isActive: searchType === ENCHANT_SEARCH_TYPE_NEW,
    },
    {
      icon: (
        <LocalFireDepartmentIcon
          color={primaryColorIfActive(ENCHANT_SEARCH_TYPE_POPULAR)}
        />
      ),
      name: 'Popular',
      onClick: () => searchTypeUpdated(ENCHANT_SEARCH_TYPE_POPULAR),
      isActive: searchType === ENCHANT_SEARCH_TYPE_POPULAR,
    },
  ];

  return (
    <CollapsableDials
      ariaLabel="Category select"
      actions={actions}
      direction="left"
    />
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
