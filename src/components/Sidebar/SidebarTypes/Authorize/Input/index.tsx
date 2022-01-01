import {
  FormControl,
  FormHelperText,
  TextFieldProps,
  Typography,
} from '@mui/material';

import AppInput from 'components/common/AppInput';
import React from 'react';

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
      <AppInput
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
