import {
  SIDEBAR_AUTH_TYPE_LOGIN,
  SIDEBAR_AUTH_TYPE_SIGNUP,
} from 'constantVariables';

import { Button } from '@mui/material';
import Form from './Form';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sidebarAC } from 'store/sidebar';

const styles = () => ({
  toggleButton: {
    color: 'white.main',
    pt: 2,
    alignSelf: 'flex-end',
  },
});

function Authorize({
  authType,
  authTypeChanged,
  passwordConfirmErrorOccurred,
}) {
  const sx = styles();

  const isLoginForm = authType === SIDEBAR_AUTH_TYPE_LOGIN;

  const handleAuthVersionChange = () => {
    isLoginForm
      ? authTypeChanged(SIDEBAR_AUTH_TYPE_SIGNUP)
      : authTypeChanged(SIDEBAR_AUTH_TYPE_LOGIN);
  };

  const handleLogin = ({ username, password }) => ({ username, password });
  const handleSignup = ({ username, password, passwordConfirm, email }) => {
    username;
    password;
    passwordConfirm;
    email;

    if (passwordConfirm !== password) {
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
      <Button sx={sx.toggleButton} onClick={handleAuthVersionChange}>
        {isLoginForm ? 'Need an Account?' : 'Already have an account?'}
      </Button>
    </>
  );
}

Authorize.propTypes = {
  passwordConfirmErrorOccurred: PropTypes.func.isRequired,
  authType: PropTypes.string.isRequired,
  authTypeChanged: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sidebar }) => ({
  authType: sidebar.authType,
});

const mapDispatchToProps = (dispatch) => ({
  authTypeChanged: (authType) => dispatch(sidebarAC.authTypeChanged(authType)),
  passwordConfirmErrorOccurred: (error) =>
    dispatch(sidebarAC.passwordConfirmErrorOccurred(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
