import {
  SIDEBAR_LOGIN,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarTypeSelector from '../SidebarTypeSelector';
import { connect } from 'react-redux';

const styles = () => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    pb: 1,
  },
});

function SidebarTypeSelectors({ user }) {
  const userIsLoggedIn = Boolean(user.id);
  const style = styles();

  return (
    <Box sx={style.root}>
      <SidebarTypeSelector constantVariable={SIDEBAR_NAVIGATION}>
        <MenuIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector constantVariable={SIDEBAR_MESSAGES}>
        <EmailIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector constantVariable={SIDEBAR_LOGIN} withLogout>
        {userIsLoggedIn ? <LogoutIcon /> : <PersonIcon />}
      </SidebarTypeSelector>
    </Box>
  );
}

SidebarTypeSelectors.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SidebarTypeSelectors);
