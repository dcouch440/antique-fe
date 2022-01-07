import React, { ReactElement } from 'react';

import { Button } from '@mui/material';

interface Props {
  text: string;
  onClick: () => void;
}

/**
 * @description A fixed width button that is used to multiple parts of the form.
 */

function AddButton({ text, onClick }: Props): ReactElement {
  return (
    <Button
      variant="contained"
      sx={{
        width: [50, 120, 130],
        fontSize: (theme) => [
          theme.custom.typography.sizes.sm,
          theme.custom.typography.sizes.sm,
          theme.custom.typography.sizes.reg,
        ],
      }}
      size="small"
      onClick={onClick}
    >
      Add
    </Button>
  );
}

export default AddButton;
