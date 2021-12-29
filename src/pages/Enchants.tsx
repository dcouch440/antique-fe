import { ImageList, ImageListItem } from '@mui/material';

import Enchant from 'components/enchants/Enchant';
import { PageWithBackplateLayout } from 'Layout';

export default function Enchants(): JSX.Element {
  return (
    <PageWithBackplateLayout header="Enchants">
      <ImageList sx={{ width: '100%', m: 0 }} variant="masonry">
        <ImageListItem key="1">
          <Enchant />
        </ImageListItem>
        <ImageListItem key={2}>
          <Enchant />
        </ImageListItem>
        <ImageListItem key={3}>
          <Enchant />
        </ImageListItem>
      </ImageList>
    </PageWithBackplateLayout>
  );
}
