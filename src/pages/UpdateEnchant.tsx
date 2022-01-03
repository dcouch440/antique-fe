import React, { ReactElement } from 'react';

import CreateAndUpdate from 'components/EnchantsCreateNUpdate';
import { PageWithBackplateLayout } from 'Layout';

function UpdateEnchant(): ReactElement {
  return (
    <PageWithBackplateLayout>
      <CreateAndUpdate newUpload={false} />
    </PageWithBackplateLayout>
  );
}

export default UpdateEnchant;
