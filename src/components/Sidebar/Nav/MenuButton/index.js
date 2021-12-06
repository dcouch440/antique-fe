import { Paper, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

function MenuButton({ selectedMenu, menuSelected, menuConstant, text }) {
  const isSelectedMenu = selectedMenu === menuConstant;

  const handleClick = () => menuSelected(menuConstant);
  return (
    <Paper
      variant="elevation"
      onClick={handleClick}
      sx={{
        backgroundColor: isSelectedMenu ? 'black.main' : 'black.transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: 150,
      }}
    >
      <Typography sx={{ color: 'primary.main', fontSize: 'sizes.reg' }}>
        {text}
      </Typography>
    </Paper>
  );
}

MenuButton.propTypes = {
  menuConstant: PropTypes.string.isRequired,
  menuSelected: PropTypes.func.isRequired,
  selectedMenu: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = ({ sidebar: { selectedMenu } }) => ({ selectedMenu });

const mapDispatchToProps = {
  menuSelected: (menu) => sidebarAC.menuSelected(menu),
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
