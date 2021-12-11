import Header from '../../Header';
import React from 'react';
import { connect } from 'react-redux';

function Messages(): JSX.Element {
  return <Header text="Messages" />;
}

Messages.propTypes = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Messages);
