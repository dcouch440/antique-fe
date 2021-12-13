import { ConnectedProps, connect } from 'react-redux';

import PropTypes from 'prop-types';
import React from 'react';
import { SearchBar } from 'components';
import { searchQueryUpdated } from 'store/enchant/actionCreators';

/**
 * @param {function} searchQueryUpdated Redux function used to add the current query to the store.
 */

const mapDispatchToProps = {
  searchQueryUpdated,
};
const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function EnchantsSearchBar({ searchQueryUpdated }: Props): JSX.Element {
  const handleSubmit = (e: string) => searchQueryUpdated(e);
  return <SearchBar onSubmit={handleSubmit} />;
}

export default connector(EnchantsSearchBar);
