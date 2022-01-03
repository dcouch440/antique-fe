import React, { ReactElement } from 'react';

import { Typography } from '@mui/material';

interface Props {
  text: string;
}

/**
 * @description Renders screen adaptive text.
 */

function AppDescriptionSubText({ text }: Props): ReactElement {
  return (
    <Typography
      color="primary.dark"
      alignSelf="flex-start"
      py={1}
      fontSize={12}
      sx={{
        fontSize: (theme) => [
          theme.custom.typography.sizes.sm,
          theme.custom.typography.sizes.reg,
        ],
      }}
    >
      {text}
    </Typography>
  );
}

export default AppDescriptionSubText;
