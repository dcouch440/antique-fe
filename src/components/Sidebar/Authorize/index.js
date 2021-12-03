import React, { useState } from 'react';

import { Button } from '@mui/material';
import Form from '../Form';

const useSX = () => ({
  toggleButton: {
    position: 'absolute',
    top: (theme) => theme.spacing(1),
    right: (theme) => theme.spacing(1),
    color: 'white.main',
  },
});

function Authorize() {
  const [authVersion, setAuthVersion] = useState('LOGIN');
  const [error, setError] = useState({
    passwordConfirm: '',
  });
  const sx = useSX();

  const handleAuthVersionChange = () =>
    authVersion === 'LOGIN'
      ? setAuthVersion('SIGNUP')
      : setAuthVersion('LOGIN');

  const handleLogin = ({ username, password }) => ({ username, password });
  const handleSignup = ({ username, password, passwordConfirm, email }) => {
    username;
    password;
    passwordConfirm;
    email;

    if (passwordConfirm !== password) {
      setError({ passwordConfirm: 'Passwords Must Match' });
    }
  };

  return (
    <>
      {authVersion === 'LOGIN' && (
        <Form handleAuth={handleLogin} header="Login" />
      )}
      {authVersion === 'SIGNUP' && (
        <Form
          handleAuth={handleSignup}
          error={error.passwordConfirm}
          header="Signup"
          withSignup
        />
      )}
      <Button sx={sx.toggleButton} onClick={handleAuthVersionChange}>
        Signup
      </Button>
    </>
  );
}

export default Authorize;
