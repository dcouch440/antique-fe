import React, { ReactElement } from 'react';

import { PageWithBackplateLayout } from 'Layout';

export default function EnchantCreateAndUpdate({
  newUpload,
}: {
  newUpload: boolean;
}): ReactElement {
  return (
    <PageWithBackplateLayout>
      <EnchantCreateAndUpdate newUpload={newUpload} />
    </PageWithBackplateLayout>
  );
}
