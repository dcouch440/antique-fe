import { Box, useTheme } from '@mui/system';
import { IconButton, Paper, SxProps } from '@mui/material';
import React, { useState } from 'react';

import AppInput from 'components/AppInput';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

interface IOwnProps {
  onSubmit: (e: string) => void;
  placeholder?: string;
  sx?: SxProps;
  onClear?: () => void;
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
  onClear,
  ...props
}: IOwnProps): JSX.Element {
  const [input, setInput] = useState('');
  const theme = useTheme();
  const handleChange: ReactOnChange = ({ target }) => setInput(target.value);
  const handleSubmit: ReactOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  const handleOnClear = () => {
    onClear?.();
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
        border: 'none',
        position: 'relative',
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
        value={input}
        variant="outlined"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: theme.spacing(5),
          top: 0,
          bottom: 0,
          alignItems: 'center',
          display: input.length ? 'flex' : 'none',
        }}
        onClick={handleOnClear}
      >
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
          color="primary"
        />
      </Box>
      <IconButton
        type="submit"
        sx={{
          width: theme.spacing(4),
          display: 'flex',
          alignItems: 'center',
          margin: 'auto 0',
        }}
        aria-label="search"
      >
        <SearchIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
