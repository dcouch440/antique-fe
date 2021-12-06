import {
  SIDEBAR_AUTH,
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import { Box } from '@mui/system';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarTypeSelector from '../SidebarTypeSelector';
import { connect } from 'react-redux';

const styles = () => ({
  horizontal: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    gridGap: (theme) => theme.spacing(2),
    pb: 3,
    justifyContent: 'center',
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    '& > button': {
      mt: 1,
    },
  },
});

function SidebarTypeSelectors({ user, orientation = 'horizontal' }) {
  const userIsLoggedIn = Boolean(user.id);
  const style = styles();

  return (
    <Box sx={style[orientation]}>
      <SidebarTypeSelector
        tooltip="Navigate"
        orientation={orientation}
        constantVariable={SIDEBAR_NAVIGATION}
      >
        <MenuIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        tooltip="Messages"
        orientation={orientation}
        constantVariable={SIDEBAR_MESSAGES}
      >
        <EmailIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        tooltip="Feed"
        orientation={orientation}
        constantVariable={SIDEBAR_FEED}
      >
        <DynamicFeedIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        orientation={orientation}
        tooltip={userIsLoggedIn ? 'Logout' : 'Login'}
        constantVariable={SIDEBAR_AUTH}
        withLogout
      >
        {userIsLoggedIn ? <LogoutIcon /> : <PersonIcon />}
      </SidebarTypeSelector>
    </Box>
  );
}

SidebarTypeSelectors.propTypes = {
  orientation: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SidebarTypeSelectors);
