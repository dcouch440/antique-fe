import { ConnectedProps, connect } from 'react-redux';

import AppSearchBar from 'components/common/AppSearchBar';
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
  const handleOnClear = () => searchQueryUpdated(null);
  return (
    <AppSearchBar
      sx={{ maxWidth: 1000 }}
      onSubmit={handleSubmit}
      onClear={handleOnClear}
    />
  );
}

export default connector(EnchantsSearchBar);
