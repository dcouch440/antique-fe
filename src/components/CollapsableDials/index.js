import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * @param {{
 *  actions: Array<{icon: Svg, name: string, onClick: function}>,
 *  ariaLabel: string,
 *  direction: string,
 * }}
 *
 * @example
 * ```
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
 * ```
 */

export default function CollapsableDials({
  actions,
  ariaLabel,
  direction,
  ...props
}) {
  return (
    <Box sx={{ height: 'fit-content' }} {...props}>
      <SpeedDial
        ariaLabel={ariaLabel}
        icon={<SpeedDialIcon />}
        direction={direction}
      >
        {actions.map(({ name, icon, onClick, isActive }) => (
          <SpeedDialAction
            key={name}
            icon={icon}
            onClick={onClick}
            tooltipTitle={name}
            sx={{
              backgroundColor: isActive ? 'secondary.main' : 'primary.main',
              border: (theme) =>
                isActive && '1px solid ' + theme.palette.primary.light,
              '&:hover': {
                ...(isActive
                  ? {
                      backgroundColor: 'secondary.main',
                    }
                  : {}),
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

CollapsableDials.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
  ariaLabel: PropTypes.string,
  direction: PropTypes.string,
};
