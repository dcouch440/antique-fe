import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';

/**
 * @description LoginInput component is an text input created for the login screen.
 */

const LoginInput = ({
  onChange,
  ariaLabel,
  label,
  forgot,
  required,
  value,
  type,
  name,
  inputProps,
  autoComplete,
  error,
  formHelperText,
  ariaDescribedBy,
  ...props
}) => {
  const navigate = useNavigate();

  // placeholder
  const handleRouteChange = () => navigate('/forgot-password-route');

  return (
    <Box>
      <FormControl required={required} error={error}>
        <TextField
          onChange={onChange}
          aria-label={ariaLabel}
          label={label}
          name={name}
          inputProps={inputProps}
          autoComplete={autoComplete}
          value={value}
          type={type}
          aria-describedby={ariaDescribedBy}
          {...props}
        />
        {forgot ? (
          <Typography onClick={handleRouteChange}>Forgot?</Typography>
        ) : null}
        {formHelperText ? (
          <FormHelperText id={ariaDescribedBy}>{formHelperText}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

LoginInput.propTypes = {
  ariaDescribedBy: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  error: PropTypes.bool,
  forgot: PropTypes.bool,
  formHelperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.PropTypes.string,
};

export default LoginInput;
