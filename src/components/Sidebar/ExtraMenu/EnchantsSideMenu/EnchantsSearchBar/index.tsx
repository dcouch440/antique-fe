import PropTypes from 'prop-types';
import React from 'react';
import SearchSwellMenu from 'components/Sidebar/ExtraMenu/SearchSwellMenu';
import { connect } from 'react-redux';
import { enchantAC } from 'store/enchant';

/**
 * @param {function} searchQueryUpdated Redux function used to add the current query to the store.
 */

interface IDispatchProps {
  searchQueryUpdated: (query: string) => void;
}

function EnchantsSearchBar({ searchQueryUpdated }: IDispatchProps) {
  const handleSubmit = (e: string) => searchQueryUpdated(e);
  return <SearchSwellMenu onSubmit={handleSubmit} />;
}

EnchantsSearchBar.propTypes = {
  searchQueryUpdated: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps: IDispatchProps = {
  searchQueryUpdated: (query: string) => enchantAC.searchQueryUpdated(query),
};

export default connect(mapStateToProps, mapDispatchToProps)(EnchantsSearchBar);
