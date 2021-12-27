import React, { ReactElement } from 'react';

import EnchantImageData from 'components/CreateEnchants/EnchantImageData';
import { PageWithBackplateLayout } from 'Layout';

export default function CreateEnchants(): ReactElement {
  return (
    <PageWithBackplateLayout header="Post">
      <EnchantImageData />
    </PageWithBackplateLayout>
  );
}
