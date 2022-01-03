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
      sx={{ width: 130 }}
      size="small"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default AddButton;
