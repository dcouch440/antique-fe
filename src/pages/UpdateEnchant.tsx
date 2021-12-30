import React, { ReactElement } from 'react';

import CreateAndUpdate from 'components/EnchantsCreateNUpdate/CreateAndUpdate';
import { PageWithBackplateLayout } from 'Layout';

function UpdateEnchant(): ReactElement {
  return (
    <PageWithBackplateLayout header="Update">
      <CreateAndUpdate newUpload={false} />
    </PageWithBackplateLayout>
  );
}

export default UpdateEnchant;
