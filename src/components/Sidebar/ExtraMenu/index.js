import { Route, Routes } from 'react-router';

import EnchantsSideMenu from './EnchantsSideMenu';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function ExtraMenu() {
  return (
    <Routes>
      <Route path="/" element={<EnchantsSideMenu />} />
    </Routes>
  );
}

ExtraMenu.propTypes = {
  props: PropTypes,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraMenu);
