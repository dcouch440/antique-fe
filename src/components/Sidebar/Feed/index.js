import Header from '../Header';
import React from 'react';
import { connect } from 'react-redux';

export const Feed = () => {
  return <Header text="Feed" />;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
