import { PageWithBackplateLayout } from 'Layout';
import React from 'react';
import { SideMenu } from 'components/Enchants';

export default function Enchants() {
  return (
    <PageWithBackplateLayout header="Enchants">
      <SideMenu sx={{ position: 'absolute', right: 0, top: 0 }} />
    </PageWithBackplateLayout>
  );
}
