import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import { Suspense, lazy, useEffect, useLayoutEffect, useRef } from 'react';

import EnchantTagSearch from 'components/enchants/EnchantSearch';
import { IAppState } from 'store/types';
import { PageWithBackplateLayout } from 'Layout';
import { clearEnchantData } from 'store/enchant/actionCreators';
import { getEnchants } from 'store/enchant/thunkCreators';

const LazyEnchant = lazy(() => import('components/enchants/Enchant'));

const mapStateToProps = ({ enchant: { enchants } }: IAppState) => ({
  enchants,
});

const mapDispatchToProps = {
  getEnchants,
  clearEnchantData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function Enchants({
  getEnchants,
  clearEnchantData,
  enchants,
}: Props): JSX.Element {
  const theme = useTheme();
  const BBRef = useRef();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isBelowLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isAboveExtraLg = useMediaQuery(theme.breakpoints.up('xl'));
  const isVeryTallScreen = useMediaQuery(`media(max-height: 1000px)`);

  const columns = isBelowSm
    ? 1
    : isBelowMd
    ? 2
    : isBelowLg
    ? 3
    : isAboveExtraLg
    ? 4
    : 3;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.intersectionRatio > 0) {
        getEnchants();
      }
    }, options);
    if (BBRef.current) observer.observe(BBRef.current);
    return () => {
      if (BBRef.current) observer.unobserve(BBRef.current);
    };
  }, [options]);

  useEffect(() => {
    return () => {
      clearEnchantData();
    };
  }, []);

  return (
    <PageWithBackplateLayout header="Enchants">
      <EnchantTagSearch />
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
        <Box ref={BBRef} />
      </Box>
    </PageWithBackplateLayout>
  );
}

export default connector(Enchants);
