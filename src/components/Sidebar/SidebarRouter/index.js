import {
  SIDEBAR_AUTH,
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import Authorize from '../Authorize';
import { Feed } from '../Feed';
import { Messages } from '../Messages';
import Nav from '../Nav';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export const RenderSidebarType = ({ sidebarType }) => {
  switch (sidebarType) {
    case SIDEBAR_NAVIGATION:
      return <Nav />;
    case SIDEBAR_AUTH:
      return <Authorize />;
    case SIDEBAR_MESSAGES:
      return <Messages />;
    case SIDEBAR_FEED:
      return <Feed />;
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
