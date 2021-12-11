import { ConnectedProps, connect } from 'react-redux';
import {
  SIDEBAR_AUTH_TYPE_LOGIN,
  SIDEBAR_AUTH_TYPE_SIGNUP,
} from 'constantVariables';
import {
  authTypeChanged,
  passwordConfirmErrorOccurred,
} from 'store/sidebar/actionCreators';

import { Button } from '@mui/material';
import Form from './Form';
import { IAppState } from 'store/types';

const mapStateToProps = ({ sidebar }: IAppState) => ({
  authType: sidebar.authType,
});

const mapDispatchToProps = {
  authTypeChanged,
  passwordConfirmErrorOccurred,
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
  passwordConfirmErrorOccurred,
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
  const handleSignup: HandleAuth = ({
    username,
    password,
    confirmPassword,
    email,
  }) => {
    username;
    password;
    confirmPassword;
    email;

    if (confirmPassword !== password) {
      passwordConfirmErrorOccurred('Passwords Must Match');
    }
  };

  return (
    <>
      {isLoginForm ? (
        <Form handleAuth={handleLogin} header="Login" />
      ) : (
        <Form handleAuth={handleSignup} header="Signup" withSignup />
      )}
      <Button
        sx={{
          color: 'primary.main',
          pt: 2,
          alignSelf: 'flex-end',
        }}
        onClick={handleAuthVersionChange}
      >
        {isLoginForm ? 'Need an Account?' : 'Already have an account?'}
      </Button>
    </>
  );
}

export default connector(Authorize);
