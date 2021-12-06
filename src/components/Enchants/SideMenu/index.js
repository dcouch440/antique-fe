import { Box } from '@mui/system';
import CollapseMenu from '../CollapseMenu';
import PropTypes from 'prop-types';
import React from 'react';
import { SearchMenu } from '..';
import { connect } from 'react-redux';
import { enchantAC } from 'store/enchant';

function SideMenu({ sx, ...props }) {
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
          <CollapseMenu />
        </Box>
        <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
          <SearchMenu />
        </Box>
      </Box>
    </Box>
  );
}

SideMenu.propTypes = {
  searchType: PropTypes.string.isRequired,
  searchTypeUpdated: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

const mapStateToProps = ({ enchant: { searchType } }) => ({
  searchType,
});

const mapDispatchToProps = {
  searchTypeUpdated: (type) => enchantAC.searchTypeUpdated(type),
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
