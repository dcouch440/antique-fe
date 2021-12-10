import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';

export default function CollapsableDials({ actions, ariaLabel, direction }) {
  return (
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
