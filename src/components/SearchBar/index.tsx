import { Divider, IconButton, Paper, SxProps, TextField } from '@mui/material';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface IOwnProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SyntheticEvent) => void;
  placeholder?: string;
  sx: SxProps;
}

export default function SearchBar({
  onChange,
  onSubmit,
  placeholder = 'Search',
  sx = {},
  ...props
}: IOwnProps): JSX.Element {
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
