import { SidebarType, SidebarVisibility } from 'store/sidebar/reducer/types';

import { Fab } from '@mui/material';
import { ISidebarState } from 'store/sidebar/reducer/interfaces';
import { IUserState } from 'store/user/reducer/interfaces';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

interface IStateProps {
  sidebar: ISidebarState;
  user: IUserState;
}
interface IDispatchProps {
  sidebarTypeChanged: (version: SidebarType) => void;
  visibilityToggled: () => void;
}
interface ISidebarTypeSelector {
  constantVariable: string;
  children: JSX.Element | JSX.Element[];
  user: IUserState;
  withLogout?: true;
  sidebarVisibility: SidebarVisibility;
}

function SidebarTypeSelector({
  sidebarTypeChanged,
  constantVariable,
  children,
  withLogout,
  user,
  sidebarVisibility,
  visibilityToggled,
  ...props
}: ISidebarTypeSelector & IDispatchProps) {
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

const mapStateToProps = ({
  sidebar: { sidebarType, sidebarVisibility },
  user,
}: IStateProps) => ({
  sidebarType,
  user,
  sidebarVisibility,
});

const mapDispatchToProps: IDispatchProps = {
  sidebarTypeChanged: (version) => sidebarAC.sidebarTypeChanged(version),
  visibilityToggled: () => sidebarAC.visibilityToggled(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarTypeSelector);
