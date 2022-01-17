import React, { ReactElement } from 'react';
import {
  TextFieldProps,
  TextareaAutosize,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';

import styled from '@emotion/styled';

const StyledTextArea = styled(TextareaAutosize)(
  ({ theme }: { theme: Theme }) => ({
    border: 'none',
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  })
);

interface IAppTextArea {
  value: string;
  style?: React.CSSProperties;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  name: string;
  placeholder?: string;
  label?: string;
}

type AppInputProps = TextFieldProps & IAppTextArea;

/**
 * @description Creates a stylized text area that is similar to AppInput.
 * The look of the input stays consistent and grows as the user fills the input.
 */

function AppTextArea({
  value,
  style,
  onChange,
  name,
  label,
}: AppInputProps): ReactElement {
  const theme = useTheme();
  return (
    <>
      {label && (
        <Typography
          color="primary"
          fontSize={16}
          sx={{ width: '100%', pl: 1, pb: 1 }}
        >
          {label}
        </Typography>
      )}
      <StyledTextArea
        theme={theme}
        value={value}
        style={style}
        onChange={onChange}
        name={name}
      />
    </>
  );
}

export default AppTextArea;
