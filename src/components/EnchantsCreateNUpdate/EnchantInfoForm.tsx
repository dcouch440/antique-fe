import React, { ReactElement } from 'react';

import AppInput from 'components/common/AppInput';
import FormWidthContainer from 'Layout/FormWidthContainer';
import { IEnchantInfo } from './CreateAndUpdate';

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
  onChange,
}: Props): ReactElement {
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
        label="Enchant Name"
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
        sx={{ width: '100%' }}
        onChange={onChange}
        value={whereFound}
        label="Where did you find it?"
        name="whereFound"
      />
    </FormWidthContainer>
  );
}

export default EnchantInfoForm;
