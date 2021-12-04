import { MESSAGES_MENU, PROFILE_MENU } from 'constantVariables';

import { Box } from '@mui/system';
import MenuButton from '../MenuButton';
import React from 'react';

function MenuSelector() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: (theme) => theme.spacing(1),
      }}
    >
      <MenuButton menuConstant={MESSAGES_MENU} text="Messages" />
      <MenuButton menuConstant={PROFILE_MENU} text="Views" />
    </Box>
  );
}

MenuSelector.propTypes = {};

export default MenuSelector;
