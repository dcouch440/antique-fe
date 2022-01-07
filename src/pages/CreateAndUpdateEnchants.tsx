import React, { ReactElement } from 'react';

import { EnchantsCreateNUpdate } from 'components/EnchantsCreateNUpdate';
import { PageWithBackplateLayout } from 'Layout';

export default function CreateAndUpdateEnchants({
  newUpload,
}: {
  newUpload: boolean;
}): ReactElement {
  return (
    <PageWithBackplateLayout>
      <EnchantsCreateNUpdate newUpload={newUpload} />
    </PageWithBackplateLayout>
  );
}
