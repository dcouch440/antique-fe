import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';

const useSX = () => ({
  input: {
    position: 'relative',
    borderBottom: '1px solid white',
    color: 'white',
    label: {
      color: 'white.main',
    },
    input: {
      color: 'white',
    },
  },
  forgot: {
    position: 'absolute',
    bottom: (theme) => theme.spacing(1),
    right: (theme) => theme.spacing(1),
    cursor: 'pointer',
    color: 'white.main',
  },
});

/**
 * @description Input component is an text input created for the login sidebar.
 */

const Input = ({
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
  const sx = useSX();
  // placeholder
  const handleRouteChange = () => {};

  return (
    <FormControl required={required} error={error}>
      <TextField
        sx={sx.input}
        color="white"
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
        <Typography sx={sx.forgot} onClick={handleRouteChange}>
          Forgot?
        </Typography>
      ) : null}
      {formHelperText ? (
        <FormHelperText id={ariaDescribedBy}>{formHelperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

Input.propTypes = {
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

export default Input;
