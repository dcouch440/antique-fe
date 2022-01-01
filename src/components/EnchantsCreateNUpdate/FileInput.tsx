import React, { ReactElement } from 'react';

import { Fab } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

type HandleChange = React.ChangeEventHandler<HTMLInputElement>;
interface Props {
  handleChange: HandleChange;
}

export default function FileInput({ handleChange }: Props): ReactElement {
  return (
    <label htmlFor="upload-photo">
      <input
        style={{ display: 'none' }}
        id="upload-photo"
        name="upload-photo"
        accept="image/*"
        type="file"
        onChange={handleChange}
        value=""
      />
      <Fab
        sx={{ outline: 'none', boxShadow: 'none' }}
        size="small"
        component="span"
        aria-label="add"
      >
        <FileCopyIcon sx={{ width: '60%', height: '60%' }} />
      </Fab>
    </label>
  );
}
