import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

import Header from '../Header';
import Input from '../Input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const useSX = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    px: 3,
    pt: 6,
    '& .MuiFormControl-root, & button': {
      mt: 2,
    },
  },
});

function AuthForm({ handleAuth, withSignup, error, header }) {
  const [{ username, email, password, confirmPassword }, setSignupInputs] =
    useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  const sx = useSX();
  const hasPasswordError = Boolean(error);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSignupInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth({ username, password, email, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={sx.root}>
        <Header text={header} />
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
        {withSignup && (
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
        )}
        <Input
          ariaLabel="password"
          label="Password"
          ariaDescribedBy="password-input"
          type="password"
          inputProps={{ minLength: 6 }}
          name="password"
          autoComplete="new-password"
          error={hasPasswordError}
          AuthorizeHelperText={error}
          onChange={handleChange}
          value={password}
          forgot={withSignup ? false : true}
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
            AuthorizeHelperText={error}
            onChange={handleChange}
            value={confirmPassword}
            required
          />
        )}
        <Button type="submit" color="white" variant="contained" size="large">
          {withSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Box>
    </form>
  );
}

AuthForm.propTypes = {
  error: PropTypes.bool,
  handleAuth: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  withSignup: PropTypes.bool,
};

export default connect(null, null)(AuthForm);
