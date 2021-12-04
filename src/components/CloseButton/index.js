import CloseIcon from '@mui/icons-material/Close';
import { Fab } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function CloseButton({ onClick }) {
  return (
    <Fab color="primary" onClick={onClick}>
      <CloseIcon />
    </Fab>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
