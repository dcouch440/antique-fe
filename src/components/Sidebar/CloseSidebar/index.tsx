import { ConnectedProps, connect } from 'react-redux';
import { Fab, SxProps } from '@mui/material';

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { IAppState } from 'store/types';
import { visibilityToggled } from 'store/sidebar/actionCreators';

/** TODO: PLACEHOLDER SVG, possible removal */

const mapStateToProps = ({ sidebar: { sidebarVisibility } }: IAppState) => ({
  sidebarVisibility,
});

const mapDispatchToProps = {
  visibilityToggled,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface OwnProps {
  orientation?: 'open' | 'closed';
  sx: SxProps;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

function CloseSidebar({ visibilityToggled, sx }: Props): JSX.Element {
  const handleClick = () => visibilityToggled();

  return (
    <Fab sx={sx} color="secondary" size="small" onClick={handleClick}>
      <CancelPresentationIcon color="primary" />
    </Fab>
  );
}

export default connector(CloseSidebar);
