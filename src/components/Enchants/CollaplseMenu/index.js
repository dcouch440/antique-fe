import { CollapsableDials } from 'components';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import React from 'react';

const makeSX = () => ({
  dials: {
    position: 'absolute',
    right: 0,
    m: 1,
    width: 'fit-content',
  },
});

export default function CollapseMenu() {
  const styles = makeSX();

  const actions = [
    { icon: <GroupIcon />, name: 'Friends' },
    { icon: <FiberNewIcon />, name: 'New' },
    { icon: <LocalFireDepartmentIcon />, name: 'Popular' },
  ];

  return (
    <CollapsableDials
      sx={styles.dials}
      ariaLabel="Category select"
      actions={actions}
      direction="left"
    />
  );
}
