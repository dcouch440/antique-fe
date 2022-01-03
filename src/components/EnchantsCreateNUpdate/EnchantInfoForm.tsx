import React, { ReactElement } from 'react';
import { Typography, useTheme } from '@mui/material';

import AppInput from 'components/common/AppInput';
import AppTextArea from 'components/common/AppTextArea';
import FormWidthContainer from 'Layout/FormWidthContainer';
import { IEnchantInfo } from '.';

interface OwnProps {
  onChange: ReactOnChange;
}

type Props = IEnchantInfo & OwnProps;

function EnchantInfoForm({
  itemName,
  condition,
  origin,
  title,
  whereFound,
  about,
  onChange,
}: Props): ReactElement {
  const theme = useTheme();

  return (
    <FormWidthContainer
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppInput
        sx={{ marginBottom: 3, width: '100%' }}
        onChange={onChange}
        value={itemName}
        label="Enchant name"
        name="itemName"
        required
      />
      <AppInput
        sx={{ marginBottom: 3, width: '100%' }}
        onChange={onChange}
        value={condition}
        label="What condition is it in?"
        name="condition"
      />
      <AppInput
        sx={{ marginBottom: 3, width: '100%' }}
        onChange={onChange}
        value={origin}
        label="Where is it from?"
        name="origin"
      />
      <AppInput
        sx={{ marginBottom: 3, width: '100%' }}
        onChange={onChange}
        value={title}
        label="What would you like to title this enchant?"
        name="title"
        required
      />
      <AppInput
        sx={{ width: '100%', marginBottom: 3 }}
        onChange={onChange}
        value={whereFound}
        label="Where did you find it?"
        name="whereFound"
      />
      <Typography color="primary" sx={{ width: '100%', pl: 1, pb: 1 }}>
        About
      </Typography>
      <AppTextArea
        onChange={onChange}
        style={{
          width: '100%',
          maxHeight: '200px',
          maxWidth: '100%',
          minWidth: '100%',
          padding: theme.spacing(1),
        }}
        name="about"
        value={about}
        placeholder="Talk About it"
      />
    </FormWidthContainer>
  );
}

export default EnchantInfoForm;
