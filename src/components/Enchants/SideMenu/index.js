import { Box } from '@mui/system';
import { CollapsableDials } from 'components';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchMenu } from '..';

export default function SideMenu({ sx, ...props }) {
  const actions = [
    { icon: <GroupIcon />, name: 'Friends', onClick: () => {} },
    { icon: <FiberNewIcon />, name: 'New', onClick: () => {} },
    { icon: <LocalFireDepartmentIcon />, name: 'Popular', onClick: () => {} },
  ];
  return (
    <Box sx={sx}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
        {...props}
      >
        <Box sx={{ m: 1 }}>
          <CollapsableDials
            ariaLabel="Category select"
            actions={actions}
            direction="left"
          />
        </Box>
        <Box sx={{ m: 1, display: 'flex', alignItems: 'center' }}>
          <SearchMenu />
        </Box>
      </Box>
    </Box>
  );
}

SideMenu.propTypes = {
  sx: PropTypes.object,
};
