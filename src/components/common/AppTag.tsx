import React, { ReactElement } from 'react';

import { Typography } from '@mui/material';

interface Props {
  onClick: (tag: string) => void;
  tag: string;
}

/**
 * @description Gives a centered and consistent look to users tags.
 */

function AppTag({ onClick, tag }: Props): ReactElement {
  return (
    <Typography
      sx={{
        borderRadius: 1,
        width: 'fit-content',
        backgroundColor: (theme) => theme.palette.primary.main,
        p: 1,
        textAlign: 'center',
        cursor: 'pointer',
        minWidth: 80,
        fontSize: (theme) => [
          theme.custom.typography.sizes.sm,
          theme.custom.typography.sizes.sm,
          theme.custom.typography.sizes.reg,
        ],
      }}
      onClick={() => onClick(tag)}
      color="secondary"
    >
      {tag}
    </Typography>
  );
}

export default AppTag;
