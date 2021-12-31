import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

import UserAvatar from './AppUserAvatar';

interface Props {
  username: string;
  userAvatar: string;
}

function AppUser({ username, userAvatar }: Props): ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        width: 'absolute',
        gap: 1,
        p: 1,
        alignItems: 'center',
        textTransform: 'capitalize',
        backgroundColor: (theme) => theme.custom.palette.secondary.transparent,
      }}
    >
      <UserAvatar src={userAvatar} alt={username} />
      <Typography color="primary">{username}</Typography>
    </Box>
  );
}

export default AppUser;
