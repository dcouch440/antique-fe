import { Divider, IconButton, Paper, SxProps, TextField } from '@mui/material';
import React, { useState } from 'react';

import AppInput from 'components/AppInput';
import SearchIcon from '@mui/icons-material/Search';

type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type ReactOnSubmit = (e: React.SyntheticEvent) => void;
interface IOwnProps {
  onSubmit: (e: string) => void;
  placeholder?: string;
  sx?: SxProps;
}

/**
 * * SearchBar collects it's input and has it's own on submit button
 * * Prevent default is called within this search bar
 * * This component is housed in a form.
 * * Stretches to the full width of it's container on large screens, 50% on large.
 * * can be over ridden from props
 */

export default function SearchBar({
  onSubmit,
  placeholder = 'Search',
  sx = {},
  ...props
}: IOwnProps): JSX.Element {
  const [input, setInput] = useState('');
  const handleChange: ReactOnChange = ({ target }) => setInput(target.value);
  const handleSubmit: ReactOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'end',
        overflow: 'hidden',
        width: ['100%', '50%'],
        flex: [2, 2, 'none'],
        ...sx,
      }}
      onSubmit={handleSubmit}
      component="form"
      aria-label="search-form"
      {...props}
    >
      <AppInput
        sx={{ color: 'primary', flex: 1 }}
        placeholder={placeholder}
        onChange={handleChange}
        variant="outlined"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <Divider orientation="vertical" />
      <IconButton
        type="submit"
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
        aria-label="search"
      >
        <SearchIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
