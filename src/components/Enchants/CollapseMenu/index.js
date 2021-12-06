import { CollapsableDials } from 'components';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import React from 'react';

export default function CollapseMenu({ ...props }) {
  const actions = [
    { icon: <GroupIcon />, name: 'Friends' },
    { icon: <FiberNewIcon />, name: 'New' },
    { icon: <LocalFireDepartmentIcon />, name: 'Popular' },
  ];

  return (
    <CollapsableDials
      ariaLabel="Category select"
      actions={actions}
      direction="left"
      {...props}
    />
  );
}
