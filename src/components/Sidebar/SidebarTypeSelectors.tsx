import { ConnectedProps, connect } from 'react-redux';
import {
  SIDEBAR_AUTH,
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import { IAppState } from 'store/types';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import SidebarTypeSelector from '../AppSidebarTypeSelector';
import { useTheme } from '@mui/material';

const mapStateToProps = ({ user }: IAppState) => ({
  user,
});

const connector = connect(mapStateToProps);
interface OwnProps {
  orientation?: 'open' | 'closed';
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

function SidebarTypeSelectors({
  user,
  orientation = 'open',
}: Props): JSX.Element {
  const theme = useTheme();
  const userIsLoggedIn = Boolean(user.id);
  const isClosedVersion = orientation === 'closed';
  const authButtonText = userIsLoggedIn ? 'Logout' : 'Login';
  console.log(user);
  return (
    <Box
      key="SidebyTypeSectorsz"
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
        <NotificationsActiveIcon />
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
    </Box>
  );
}

export default connector(SidebarTypeSelectors);
