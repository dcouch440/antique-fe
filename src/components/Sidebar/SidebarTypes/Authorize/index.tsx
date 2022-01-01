import { Button, Typography } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import {
  SIDEBAR_AUTH_TYPE_LOGIN,
  SIDEBAR_AUTH_TYPE_SIGNUP,
} from 'constantVariables';
import { thunkLogin, thunkSignup } from 'store/user/thunkCreators';

import Form from './Form';
import { IAppState } from 'store/types';
import { authTypeChanged } from 'store/sidebar/actionCreators';
import { snackbarMessageSent } from 'store/snackbar/actionCreators';

const mapStateToProps = ({ sidebar, user }: IAppState) => ({
  authType: sidebar.authType,
  user,
});

const mapDispatchToProps = {
  authTypeChanged,
  snackbarMessageSent,
  thunkSignup,
  thunkLogin,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

// handle types
interface IHandleSignUp {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}
export type HandleAuth = ({
  username,
  password,
  confirmPassword,
  email,
}: IHandleSignUp) => void;

function Authorize({
  authType,
  authTypeChanged,
  thunkSignup,
  snackbarMessageSent,
  thunkLogin,
  user,
}: Props): JSX.Element {
  const isUserLoggedIn = Boolean(user.id);
  const isLoginForm = authType === SIDEBAR_AUTH_TYPE_LOGIN;

  if (isUserLoggedIn) {
    return <Typography color="primary">Welcome {user.username}</Typography>;
  }

  const handleAuthVersionChange = () => {
    isLoginForm
      ? authTypeChanged(SIDEBAR_AUTH_TYPE_SIGNUP)
      : authTypeChanged(SIDEBAR_AUTH_TYPE_LOGIN);
  };

  const handleLogin: HandleAuth = ({ email, password }) => {
    console.log('sdfsdfsdf');
    thunkLogin({ email, password });
  };

  const handleSignup: HandleAuth = ({
    username,
    password,
    confirmPassword,
    email,
  }) => {
    if (confirmPassword !== password) {
      snackbarMessageSent('Passwords Must Match');
      return;
    }

    thunkSignup({ username, password, email });
  };

  return (
    <>
      {isLoginForm ? (
        <Form
          data-testid="Authorize-Login-SidebarType"
          handleAuth={handleLogin}
          header="Login"
        />
      ) : (
        <Form
          data-testid="Authorize-Signup-SidebarType"
          handleAuth={handleSignup}
          header="Signup"
          withSignup
        />
      )}
      <Button
        sx={{
          color: 'primary.main',
          pt: 2,
          alignSelf: 'flex-end',
        }}
        data-testid="Authorize-Button-SidebarType"
        onClick={handleAuthVersionChange}
      >
        {isLoginForm ? 'Need an Account?' : 'Already have an account?'}
      </Button>
    </>
  );
}

export default connector(Authorize);
