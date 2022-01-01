import React, { ReactElement } from 'react';

import { Typography } from '@mui/material';

interface Props {
  onClick: (tag: string) => void;
  tag: string;
}

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
      }}
      onClick={() => onClick(tag)}
      color="secondary"
    >
      {tag}
    </Typography>
  );
}

export default AppTag;
