import React, { ReactElement } from 'react';

import EnchantImageData from 'components/CreateEnchants/EnchantCreate';
import { PageWithBackplateLayout } from 'Layout';

export default function CreateEnchants(): ReactElement {
  return (
    <PageWithBackplateLayout header="Post">
      <EnchantImageData />
    </PageWithBackplateLayout>
  );
}
