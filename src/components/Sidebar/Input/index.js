import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled(TextField)`
  && {
    position: relative;
    border-bottom: 1px solid white;
    color: white;
    * {
      color: white;
      box-shadow: none;
      border: none;
      background-color: none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border-bottom: 1px solid #4c6779;
      -webkit-text-fill-color: #ffffff;
      -webkit-box-shadow: 0 0 0px 1000px #f1f1f142 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

const useSX = () => ({
  input: {
    position: 'relative',
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
      <StyledInput
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
