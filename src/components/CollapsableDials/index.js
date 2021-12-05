import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';

export default function CollapsableDials({
  actions,
  ariaLabel,
  sx = {},
  direction,
}) {
  return (
    <Box sx={sx}>
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
      onClick: PropTypes.string.isRequired,
    })
  ).isRequired,
  ariaLabel: PropTypes.string,
  direction: PropTypes.string,
  sx: PropTypes.object,
};
