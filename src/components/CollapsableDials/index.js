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
   const actions = [
    { icon: <GroupIcon />, name: 'Friends' },
    { icon: <FiberNewIcon />, name: 'New' },
    { icon: <LocalFireDepartmentIcon />, name: 'Popular' },
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
    <Box {...props}>
      <SpeedDial
        ariaLabel={ariaLabel}
        icon={<SpeedDialIcon />}
        direction={direction}
      >
        {actions.map(({ name, icon, onClick }) => (
          <SpeedDialAction
            key={name}
            icon={icon}
            onClick={onClick}
            tooltipTitle={name}
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
    })
  ).isRequired,
  ariaLabel: PropTypes.string,
  direction: PropTypes.string,
};
