import React, { ReactElement } from 'react';

import CreateAndUpdate from 'components/EnchantsCreateNUpdate/CreateAndUpdate';
import { PageWithBackplateLayout } from 'Layout';

export default function CreateEnchants(): ReactElement {
  return (
    <PageWithBackplateLayout header="Post">
      <CreateAndUpdate newUpload />
    </PageWithBackplateLayout>
  );
}
