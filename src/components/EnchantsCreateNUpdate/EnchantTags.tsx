import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AppInput from 'components/AppInput';

interface Props {
  tags: string[];
  removeTag: (tag: string) => void;
  addTag: (tag: string) => void;
}

function EnchantTags({ tags, removeTag, addTag }: Props): ReactElement {
  const [input, setInput] = useState('');
  const theme = useTheme();
  const handleChange: ReactOnChange = ({ target }) => {
    setInput(target.value);
  };

  const handleAddTag = () => {
    addTag(input);
    setInput('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography></Typography>
      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: 1 }}>
        {tags.map((tag: string, i: number) => (
          <Typography
            key={i}
            sx={{
              borderRadius: 4,
              width: 'fit-content',
              backgroundColor: theme.palette.primary.main,
              p: 1,
              cursor: 'pointer',
              minWidth: 80,
            }}
            onClick={() => removeTag(tag)}
            color="secondary"
          >
            {tag}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <AppInput
          aria-label="tags"
          value={input}
          sx={{ flex: 1 }}
          onChange={handleChange}
        />
        <Button onClick={handleAddTag}>Add Tag</Button>
      </Box>
    </Box>
  );
}

export default EnchantTags;
