import { Button, Fab } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import {
  sidebarTypeChanged,
  visibilityToggled,
} from 'store/sidebar/actionCreators';

import { IAppState } from 'store/types';
import { ReactNode } from 'react';
import { thunkLogout } from 'store/user/thunkCreators';

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
  thunkLogout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface OwnProps {
  constantVariable: string;
  withLogout?: boolean;
  children?: ReactNode;
  variantType?: 'Fab' | 'Button';
  color?: 'inherit' | 'primary' | 'secondary' | undefined;
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

/**
 * * Selects a sidebar "Type" such as Nav, Feed, etc..
 * * Can be used anywhere in the app to open and close the navbar and bring up the sidebar.
 * * At this time it is currently being used on the navbar closed variant and mobile "Top bar"
 */

function AppSidebarTypeSelector({
  sidebarTypeChanged,
  constantVariable,
  withLogout,
  user,
  children,
  sidebarVisibility,
  visibilityToggled,
  variantType = 'Fab',
  thunkLogout,
  color,
  ...props
}: Props): JSX.Element {
  const handleClick = () => {
    // if sidebar is closed open it.
    !sidebarVisibility && visibilityToggled();
    // set the type as well.
    sidebarTypeChanged(constantVariable);
  };

  const handleLogout = () => {
    thunkLogout();
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
        <Fab
          {...props}
          data-testid={`AppSidebarTypeSelector-${constantVariable}`}
          color={color}
          onClick={handlePickCorrectHandler}
        >
          {children}
        </Fab>
      ) : (
        variantType === 'Button' && (
          <Button
            data-testid={`AppSidebarTypeSelector-${constantVariable}`}
            {...props}
            color={color}
            onClick={handlePickCorrectHandler}
          >
            {children}
          </Button>
        )
      )}
    </>
  );
}

export default connector(AppSidebarTypeSelector);
