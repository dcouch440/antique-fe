import { ConnectedProps, connect } from 'react-redux';
import { Paper, Typography } from '@mui/material';

import { IAppState } from 'store/types';
import { sidebarTypeChanged } from 'store/sidebar/actionCreators';

const mapStateToProps = ({ sidebar: { sidebarType } }: IAppState) => ({
  sidebarType,
});

const mapDispatchToProps = {
  sidebarTypeChanged,
};
interface IOwnProps {
  text: string;
  menuConstant: string;
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & IOwnProps;

function MenuButton({
  sidebarType,
  sidebarTypeChanged,
  menuConstant,
  text,
}: Props): JSX.Element {
  const isSelectedMenu = sidebarType === menuConstant;

  const handleClick = () => sidebarTypeChanged(menuConstant);
  return (
    <Paper
      variant="elevation"
      onClick={handleClick}
      sx={{
        backgroundColor: isSelectedMenu
          ? 'secondary.main'
          : 'secondary.transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: 150,
      }}
    >
      <Typography sx={{ color: 'primary.main', fontSize: 'sizes.reg' }}>
        {text}
      </Typography>
    </Paper>
  );
}

export default connector(MenuButton);
