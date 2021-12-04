import Header from '../Header';
import React from 'react';
import { connect } from 'react-redux';

export const Messages = () => {
  return <Header text="Messages" />;
};

Messages.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
