import React, { ReactElement } from 'react';
import { Switch, styled } from '@mui/material';

const SSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 10,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 30,
    height: 30,
    borderRadius: theme.spacing(1),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function StrictSwitch(): ReactElement {
  return <SSwitch />;
}

export default StrictSwitch;
