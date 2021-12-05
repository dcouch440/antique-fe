import { CollapsableDials, SearchBar } from 'components';

import { Box } from '@mui/system';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { PageLayout } from 'Layout';
import React from 'react';

const makeStyles = () => ({
  dials: {
    position: 'absolute',
    right: 0,
    m: 1,
    top: 0,
    width: 'fit-content',
  },
});

export default function Enchants() {
  const styles = makeStyles();

  const actions = [
    { icon: <GroupIcon />, name: 'Friends' },
    { icon: <FiberNewIcon />, name: 'New' },
    { icon: <LocalFireDepartmentIcon />, name: 'Popular' },
  ];

  return (
    <PageLayout header="Enchants">
      <Box sx={{ p: 1 }}>
        <SearchBar placeholder="Search" formSX={{ width: '40%' }} />
      </Box>
      <CollapsableDials
        sx={styles.dials}
        ariaLabel="Category select"
        actions={actions}
        direction="left"
      />
    </PageLayout>
  );
}
