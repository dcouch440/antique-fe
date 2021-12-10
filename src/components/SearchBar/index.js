import { Divider, IconButton, Paper, TextField } from '@mui/material';

import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({
  onChange,
  onSubmit,
  placeholder = 'Search',
  sx = {},
  ...props
}) {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'primary',
        overflow: 'hidden',
        borderRadius: 5,
        ...sx,
      }}
      onSubmit={onSubmit}
      component="form"
      aria-label="search-form"
      {...props}
    >
      <TextField
        sx={{ flex: 1 }}
        color="primary"
        placeholder={placeholder}
        onChange={onChange}
        inputProps={{ 'aria-label': 'Search' }}
      />
      <Divider orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  sx: PropTypes.object,
};
