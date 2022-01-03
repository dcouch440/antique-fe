import React, { ReactElement } from 'react';

import CreateAndUpdate from 'components/EnchantsCreateNUpdate';
import { PageWithBackplateLayout } from 'Layout';

export default function CreateEnchants(): ReactElement {
  return (
    <PageWithBackplateLayout>
      <CreateAndUpdate newUpload />
    </PageWithBackplateLayout>
  );
}
