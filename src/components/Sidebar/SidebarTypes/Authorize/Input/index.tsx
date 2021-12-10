import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';

import React from 'react';
import styled from 'styled-components';

const StyledInput = styled(TextField)`
  && {
    position: relative;
    border-bottom: 1px solid white;
    color: white;
    * {
      outline: none;
      color: white;
      box-shadow: none;
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

/**
 * @description Input component is an text input created for the login sidebar.
 */

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
  label: string;
  forgot?: boolean;
  required?: boolean;
  value: string;
  type: string;
  name: string;
  placeholder?: string;
  autoComplete: string;
  error?: boolean;
  formHelperText?: string;
  ariaDescribedBy?: string;
}

function Input({
  onChange,
  ariaLabel,
  label,
  forgot,
  required,
  value,
  type,
  name,
  placeholder,
  autoComplete,
  error,
  formHelperText,
  ariaDescribedBy,
  ...props
}: IProps & TextFieldProps): JSX.Element {
  // placeholder
  const handleRouteChange = () => {
    return;
  };

  return (
    <FormControl required={required} error={error}>
      <StyledInput
        color="primary"
        onChange={onChange}
        aria-label={ariaLabel}
        label={label}
        name={name}
        autoComplete={autoComplete}
        value={value}
        type={type}
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
      {forgot && (
        <Typography
          sx={{
            position: 'absolute',
            top: (theme) => theme.spacing(4),
            right: (theme) => theme.spacing(1),
            cursor: 'pointer',
            color: 'primary.main',
            fontSize: 'sizes.reg',
          }}
          onClick={handleRouteChange}
        >
          Forgot?
        </Typography>
      )}
      {formHelperText && (
        <FormHelperText color="primary" id={ariaDescribedBy}>
          {formHelperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default Input;
