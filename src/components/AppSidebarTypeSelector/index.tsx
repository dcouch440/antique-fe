import { Button, Fab } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import {
  sidebarTypeChanged,
  visibilityToggled,
} from 'store/sidebar/actionCreators';

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
  withLogout?: boolean;
  children?: ReactNode;
  variantType?: 'Fab' | 'Button';
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

/**
 * * Selects a sidebar "Type" such as Nav, Feed, etc..
 * * Can be used anywhere in the app to open and close the navbar and bring up the sidebar.
 * * At this time it is currently being used on the navbar closed variant and mobile "Top bar"
 */

function SidebarTypeSelector({
  sidebarTypeChanged,
  constantVariable,
  withLogout,
  user,
  children,
  sidebarVisibility,
  visibilityToggled,
  variantType = 'Fab',
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
    <>
      {variantType === 'Fab' ? (
        <Fab {...props} color="primary" onClick={handlePickCorrectHandler}>
          {children}
        </Fab>
      ) : (
        variantType === 'Button' && (
          <Button {...props} color="primary" onClick={handlePickCorrectHandler}>
            {children}
          </Button>
        )
      )}
    </>
  );
}

export default connector(SidebarTypeSelector);
