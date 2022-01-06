import { AppDivider, AppHeader, AppSpacingBox } from 'components/common';
import React, { ReactElement } from 'react';

import { Typography } from '@mui/material';

interface Props {
  mt?: boolean;
  mb?: boolean;
  content: string;
  header: string;
}

function AboutSection({
  mt = true,
  mb = true,
  content,
  header,
}: Props): ReactElement {
  return (
    <>
      <AppDivider />
      <AppSpacingBox component="section" mt={mt} mb={mb}>
        <AppHeader text={header} size="sub" component="h2" sx={{ mb: 1 }} />
        <Typography color="primary">{content}</Typography>
      </AppSpacingBox>
    </>
  );
}

export default AboutSection;
