import React, { ReactElement } from 'react';

import CreateAndUpdate from 'components/EnchantsCreateNUpdate';
import { PageWithBackplateLayout } from 'Layout';

export default function EnchantCreateAndUpdate({
  newUpload,
}: {
  newUpload: boolean;
}): ReactElement {
  return (
    <PageWithBackplateLayout>
      <CreateAndUpdate newUpload={newUpload} />
    </PageWithBackplateLayout>
  );
}
