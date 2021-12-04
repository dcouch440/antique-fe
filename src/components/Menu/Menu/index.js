import { MESSAGES_MENU, NO_MENU, PROFILE_MENU } from 'constantVariables';

import { AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material';
import Messages from '../Messages';
import { PresenceContainer } from 'animation';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

function Menu({ selectedMenu, menuClosed }) {
  const CurrentMenu = (() =>
    ({
      [MESSAGES_MENU]: () => <Messages />,
      [PROFILE_MENU]: () => <div>Profile Menu</div>,
      [NO_MENU]: () => null,
    }[selectedMenu]))();

  const handleClick = () => menuClosed();

  const showMenu = selectedMenu === NO_MENU;

  return (
    <AnimatePresence>
      {!showMenu && (
        <PresenceContainer>
          <Button onClick={handleClick} variant="contained">
            Close
          </Button>
          <CurrentMenu />
        </PresenceContainer>
      )}
    </AnimatePresence>
  );
}

Menu.propTypes = {
  menuClosed: PropTypes.func.isRequired,
  selectedMenu: PropTypes.string.isRequired,
};

const mapStateToProps = ({ sidebar: { selectedMenu } }) => ({ selectedMenu });

const mapDispatchToProps = (dispatch) => ({
  menuClosed: () => dispatch(sidebarAC.menuClosed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
