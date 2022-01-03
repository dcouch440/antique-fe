import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useEffect } from 'react';

import { Box } from '@mui/material';
import { IAppState } from 'store/types';
import { PageWithBackplateLayout } from 'Layout';
import SlideShow from 'components/enchant/SlideShow';
import { getEnchant } from 'store/enchant/thunkCreators';
import { useParams } from 'react-router-dom';

const mapStateToProps = ({ enchant: { enchant } }: IAppState) => ({ enchant });
const mapDispatchToProps = {
  getEnchant,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

/**
 * @description Displays a users Enchant.  * None functional *
 */

function Enchant({ getEnchant, enchant }: PropsFromRedux): ReactElement {
  const params = useParams();

  useEffect(() => {
    if (!params?.enchantId) return;
    getEnchant(params.enchantId);
  }, []);

  return (
    <PageWithBackplateLayout>
      <Box
        sx={{
          display: 'flex',
          p: 1,
          height: '100%',
          minHeight: '100%',
          flexDirection: ['column', 'column', 'row'],
          backgroundColor: (theme) => theme.palette.secondary.light,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SlideShow images={enchant?.images || []} />
        </Box>
        <Box sx={{ flex: 1, color: 'primary', height: '100%' }}></Box>
      </Box>
    </PageWithBackplateLayout>
  );
}

export default connector(Enchant);
