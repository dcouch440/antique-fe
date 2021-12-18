import { ConnectedProps, connect } from 'react-redux';
import {
  sidebarTypeChanged,
  visibilityToggled,
} from 'store/sidebar/actionCreators';

import { Fab } from '@mui/material';
import { IAppState } from 'store/types';
import { ReactNode } from 'react';

const mapStateToProps = ({
  sidebar: { sidebarVisibility },
  user,
}: IAppState) => ({
  user,
  sidebarVisibility,
});

const mapDispatchToProps = {
  sidebarTypeChanged,
  visibilityToggled,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface OwnProps {
  constantVariable: string;
  children: ReactNode;
  withLogout?: boolean;
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

function SidebarTypeSelector({
  sidebarTypeChanged,
  constantVariable,
  children,
  withLogout,
  user,
  sidebarVisibility,
  visibilityToggled,
  ...props
}: Props): JSX.Element {
  const handleClick = () => {
    // if sidebar is closed open it.
    !sidebarVisibility && visibilityToggled();
    // set the type as well.
    sidebarTypeChanged(constantVariable);
  };

  const handleLogout = () => {
    // LOGOUT FUNCTIONALITY
  };

  const handlePickCorrectHandler = () => {
    const userIsLoggedIn = Boolean(user.id);

    if (withLogout && userIsLoggedIn) {
      handleLogout();
    } else {
      handleClick();
    }
  };

  return (
    <Fab {...props} color="primary" onClick={handlePickCorrectHandler}>
      {children}
    </Fab>
  );
}

export default connector(SidebarTypeSelector);
