import { Box, FormControlState, Typography, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import AddButton from './AddButton';
import AppDescriptionSubText from 'components/common/AppDescriptionSubText';
import AppHeader from 'components/common/AppHeader';
import AppInput from 'components/common/AppInput';

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
    console.log(input, 's');
    addTag(input);
    setInput('');
  };

  const handleKeyPress: (e: React.KeyboardEvent<FormControlState>) => void = ({
    key,
  }) => key === 'Enter' && handleAddTag();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <AppHeader
        component="h3"
        size="sub"
        text="What tags would help other find your item?"
      />
      <AppDescriptionSubText
        text="Use relatable words that will make it easy for people to find your
            item. Ex: Bottle, Gundamn..."
      />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          gap: 1,
          pt: tags.length ? 3 : 0,
          pb: tags.length ? 1 : 0,
        }}
      >
        {tags.map((tag: string, i: number) => (
          <Typography
            key={i}
            sx={{
              borderRadius: 4,
              width: 'fit-content',
              backgroundColor: theme.palette.primary.main,
              p: 1,
              textAlign: 'center',
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
      <Box
        sx={{ display: 'flex', gap: 1, pt: tags.length ? 2 : 3, width: '100%' }}
      >
        <AppInput
          aria-label="tags"
          value={input}
          sx={{ flex: 1 }}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          label="Enter a tag"
        />
        <AddButton onClick={handleAddTag} text="Add Tag" />
      </Box>
    </Box>
  );
}

export default EnchantTags;
