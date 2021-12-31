import { ConnectedProps, connect } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';

import { Box } from '@mui/material';
import { IAppState } from 'store/types';
import { PageWithBackplateLayout } from 'Layout';
import { clearEnchants } from 'store/enchant/actionCreators';
import { getEnchants } from 'store/enchant/thunkCreators';

const LazyEnchant = lazy(() => import('components/enchants/Enchant'));

const mapStateToProps = ({ enchant: { enchants } }: IAppState) => ({
  enchants,
});

const mapDispatchToProps = {
  getEnchants,
  clearEnchants,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function Enchants({
  enchants,
  getEnchants,
  clearEnchants,
}: Props): JSX.Element {
  useEffect(() => {
    getEnchants();
    return () => {
      clearEnchants();
    };
  }, []);

  return (
    <PageWithBackplateLayout header="Enchants">
      <Box
        sx={{
          p: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 300,
          gridGap: (theme) => theme.spacing(1),
          gridAutoFlow: 'dense',
        }}
      >
        {enchants.map((item) => (
          <Suspense key={item.id} fallback={<span />}>
            <LazyEnchant {...item} />
          </Suspense>
        ))}
      </Box>
    </PageWithBackplateLayout>
  );
}

export default connector(Enchants);
