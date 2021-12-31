import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';

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
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isBelowLg = useMediaQuery(theme.breakpoints.down('lg'));
  const columns = isBelowSm ? 1 : isBelowMd ? 2 : isBelowLg ? 3 : 4;

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
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
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
