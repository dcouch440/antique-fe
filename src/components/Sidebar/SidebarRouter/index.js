import { SIDEBAR_LOGIN, SIDEBAR_NAVIGATION } from 'constantVariables';

import Authorize from '../Authorize';
import Nav from '../Nav';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const RenderSidebarType = ({ sidebarType }) => {
  switch (sidebarType) {
    case SIDEBAR_NAVIGATION:
      return <Nav />;
    case SIDEBAR_LOGIN:
      return <Authorize />;
    default:
      return null;
  }
};

RenderSidebarType.propTypes = {
  sidebarType: PropTypes.string.isRequired,
};

const mapStateToProps = ({ sidebar: { sidebarType } }) => ({
  sidebarType,
});

export default connect(mapStateToProps, null)(RenderSidebarType);
