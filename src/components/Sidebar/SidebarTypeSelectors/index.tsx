import {
  SIDEBAR_AUTH,
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import { Box } from '@mui/system';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import ExtraMenu from '../ExtraMenu';
import { IUserState } from 'store/user/reducer/interfaces';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import SidebarTypeSelector from '../SidebarTypeSelector';
import { connect } from 'react-redux';
import { useTheme } from '@mui/material';

interface ISidebarTypeSelectors {
  orientation?: 'open' | 'closed';
}

interface IStateProps {
  user: IUserState;
}

type Props = ISidebarTypeSelectors & IStateProps;

function SidebarTypeSelectors({ user, orientation = 'open' }: Props) {
  const theme = useTheme();
  const userIsLoggedIn = Boolean(user.id);
  const isClosedVersion = orientation === 'closed';
  const authButtonText = userIsLoggedIn ? 'Logout' : 'Login';

  return (
    <Box
      sx={{
        ...(orientation === 'closed'
          ? {
              position: 'relative',
              display: 'flex',
              flexDirection: ['row', 'row', 'column'],
              alignItems: ['baseline', 'baseline'],
              '& > :is(button,div):not(:last-child)': {
                mr: [1, 1, 0],
              },
              '& > :is(button,div)': {
                mb: [0, 0, 1],
              },
            }
          : {
              display: 'grid',
              gridTemplateColumns: 'repeat(5, auto)',
              gridGap: theme.spacing(2),
              pb: 3,
              justifyContent: 'center',
            }),
      }}
    >
      <SidebarTypeSelector
        aria-label="Navigate"
        constantVariable={SIDEBAR_NAVIGATION}
      >
        <MenuIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        aria-label="Messages"
        constantVariable={SIDEBAR_MESSAGES}
      >
        <EmailIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector aria-label="Feed" constantVariable={SIDEBAR_FEED}>
        <DynamicFeedIcon />
      </SidebarTypeSelector>
      {!isClosedVersion && (
        <SidebarTypeSelector
          aria-label={authButtonText}
          constantVariable={SIDEBAR_AUTH}
          withLogout
        >
          {userIsLoggedIn ? <LogoutIcon /> : <PersonIcon />}
        </SidebarTypeSelector>
      )}
      {isClosedVersion && <ExtraMenu />}
    </Box>
  );
}

const mapStateToProps = ({ user }: IStateProps) => ({
  user,
});

export default connect(mapStateToProps)(SidebarTypeSelectors);
