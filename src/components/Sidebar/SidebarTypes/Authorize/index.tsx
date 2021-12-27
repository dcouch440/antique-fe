import { ConnectedProps, connect } from 'react-redux';
import {
  SIDEBAR_AUTH_TYPE_LOGIN,
  SIDEBAR_AUTH_TYPE_SIGNUP,
} from 'constantVariables';

import { Button } from '@mui/material';
import Form from './Form';
import { IAppState } from 'store/types';
import { authTypeChanged } from 'store/sidebar/actionCreators';
import { errorOccurred } from 'store/snackbar/actionCreators';
import { thunkSignup } from 'store/user/thunkCreators';

const mapStateToProps = ({ sidebar }: IAppState) => ({
  authType: sidebar.authType,
});

const mapDispatchToProps = {
  authTypeChanged,
  errorOccurred,
  thunkSignup,
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
  errorOccurred,
}: Props): JSX.Element {
  const isLoginForm = authType === SIDEBAR_AUTH_TYPE_LOGIN;

  const handleAuthVersionChange = () => {
    isLoginForm
      ? authTypeChanged(SIDEBAR_AUTH_TYPE_SIGNUP)
      : authTypeChanged(SIDEBAR_AUTH_TYPE_LOGIN);
  };

  const handleLogin: HandleAuth = ({ username, password }) => {
    username;
    password;
  };

  const handleSignup: HandleAuth = async ({
    username,
    password,
    confirmPassword,
    email,
  }) => {
    if (confirmPassword !== password) {
      errorOccurred('Passwords Must Match');
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
