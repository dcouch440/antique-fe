import React, { ReactElement } from 'react';

import AppInput from 'components/AppInput';
import { EnchantState } from './EnchantImageData';
import FormWidthContainer from 'Layout/FormWidthContainer';

interface OwnProps {
  onChange: ReactOnChange;
}

type Props = EnchantState & OwnProps;

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
        '& > * ': { marginBottom: 2, width: '100%' },
      }}
    >
      <AppInput
        onChange={onChange}
        value={itemName}
        label="Enchant Name"
        name="itemName"
      />
      <AppInput
        onChange={onChange}
        value={condition}
        label="What condition is it in?"
        name="condition"
      />
      <AppInput
        onChange={onChange}
        value={origin}
        label="Where is it from?"
        name="origin"
      />
      <AppInput
        onChange={onChange}
        value={title}
        label="What would you like to title this enchant?"
        name="title"
      />
      <AppInput
        onChange={onChange}
        value={whereFound}
        label="Where did you find it?"
        name="whereFound"
      />
    </FormWidthContainer>
  );
}

export default EnchantInfoForm;
