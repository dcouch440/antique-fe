import React, { ReactElement } from 'react';
import { TextareaAutosize, Theme, useTheme } from '@mui/material';

import styled from '@emotion/styled';

const StyledTextArea = styled(TextareaAutosize)(
  ({ theme }: { theme: Theme }) => ({
    border: 'none',
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  })
);

function AppTextArea({ ...props }): ReactElement {
  const theme = useTheme();
  return <StyledTextArea theme={theme} {...props} />;
}

export default AppTextArea;
