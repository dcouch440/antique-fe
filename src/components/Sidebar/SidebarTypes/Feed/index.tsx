import Header from '../../Header';
import { connect } from 'react-redux';

// const mapStateToProps = () => ({});
// const mapDispatchToProps = {};
const connector = connect(null, null);
// type PropsFromRedux = ConnectedProps<typeof connector>;
// type Props = PropsFromRedux;

function Feed(): JSX.Element {
  return <Header text="Feed" />;
}

export default connector(Feed);
