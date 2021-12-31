import { Box, Button } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import React, { useState } from 'react';

import Header from '../../../Header';
import { IAppState } from 'store/types';
import Input from '../Input';

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

interface IOwnProps {
  handleAuth: HandleAuth;
  withSignup?: boolean;
  header: string;
}

const mapStateToProps = ({ sidebar }: IAppState) => ({
  error: sidebar.errors.passwordConfirm,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = IOwnProps & PropsFromRedux;

function Form({ handleAuth, withSignup, error, header }: Props): JSX.Element {
  const [{ username, email, password, confirmPassword }, setSignupInputs] =
    useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  const hasPasswordError = Boolean(error);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setSignupInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleAuth({ username, password, email, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiFormControl-root, & button': {
            mt: 2,
          },
        }}
      >
        <Header text={header} />
        {withSignup && (
          <Input
            ariaLabel="username"
            label="Username"
            name="username"
            autoComplete="username"
            placeholder="Username"
            type="text"
            onChange={handleChange}
            value={username}
            required
          />
        )}
        <Input
          ariaLabel="e-mail address"
          label="E-mail address"
          type="email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          value={email}
          required
        />
        <Input
          ariaLabel="password"
          label="Password"
          ariaDescribedBy="password-input"
          type="password"
          inputProps={{ minLength: 6 }}
          name="password"
          autoComplete="new-password"
          error={hasPasswordError}
          formHelperText={error}
          onChange={handleChange}
          value={password}
          forgot={!withSignup}
          required
        />
        {withSignup && (
          <Input
            ariaLabel="confirm password"
            ariaDescribedBy="password-confirmation"
            label="Confirm Password"
            autoComplete="new-password"
            type="password"
            inputProps={{ minLength: 6 }}
            name="confirmPassword"
            error={hasPasswordError}
            formHelperText={error}
            onChange={handleChange}
            value={confirmPassword}
            required
          />
        )}
        <Button type="submit" variant="contained" size="large">
          {withSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Box>
    </form>
  );
}

export default connector(Form);
