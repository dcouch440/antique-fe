import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import React from 'react';

interface IActions {
  name: string;
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  isActive: boolean;
}
interface ICollapsibleDials {
  ariaLabel: string;
  direction: 'up' | 'down' | 'left' | 'right' | undefined;
  actions: IActions[];
}

/**
 * @description Renders a collapsible list of Fab icons
 * @note - Currently unused.
 */

export default function CollapsibleDials({
  actions,
  ariaLabel,
  direction,
}: ICollapsibleDials): JSX.Element {
  return (
    <SpeedDial
      ariaLabel={ariaLabel}
      icon={<SpeedDialIcon />}
      direction={direction}
    >
      {actions.map(({ name, icon, onClick, isActive }: IActions) => (
        <SpeedDialAction
          key={name}
          icon={icon}
          onClick={onClick}
          tooltipTitle={name}
          sx={{
            backgroundColor: isActive ? 'secondary' : 'primary',
            border: (theme) =>
              isActive ? '1px solid ' + theme.palette.primary.light : 'none',
            '&:hover': {
              ...(isActive
                ? {
                    backgroundColor: 'secondary',
                  }
                : {}),
            },
          }}
        />
      ))}
    </SpeedDial>
  );
}
