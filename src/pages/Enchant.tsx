import { Box, Button, Typography } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AppDivider from 'components/common/AppDivider';
import AppGroupDisplay from 'components/common/AppGroupDisplay';
import AppHeader from 'components/common/AppHeader';
import AppSpacingBox from 'components/common/AppSpacingBox';
import AppUser from 'components/common/AppUser';
import { IAppState } from 'store/types';
import { PageWithBackplateLayout } from 'Layout';
import SlideShow from 'components/enchant/SlideShow';
import { enchantUpdatePath } from 'config/paths';
import { getEnchant } from 'store/enchant/thunkCreators';

const mapStateToProps = ({
  enchant: { enchant },
  user: { id },
}: IAppState) => ({ enchant, id });

const mapDispatchToProps = {
  getEnchant,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

/**
 * @description Displays a users Enchant.
 */

function Enchant({ getEnchant, enchant, id }: PropsFromRedux): ReactElement {
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (!params?.enchantId) return;
    getEnchant(params.enchantId);
  }, []);

  if (enchant === null) return <></>;

  const handleClick = () => nav(enchantUpdatePath(enchant?.id));

  return (
    <PageWithBackplateLayout>
      <>
        {id === enchant?.userId && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClick}>Update</Button>
          </Box>
        )}
      </>
      <AppUser
        userAvatar={enchant?.userAvatar ?? ''}
        username={enchant.username}
        sx={{ borderRadius: 1 }}
      />
      <AppSpacingBox mb>
        <AppHeader text={enchant?.title ?? ''} size="xl" component="h1" />
        <Typography color="primary">{enchant?.itemName ?? ''}</Typography>
      </AppSpacingBox>
      <Box
        sx={{
          display: 'flex',
          p: 1,
          height: '100vh',
          maxHeight: 1080,
          alignSelf: 'center',
          flexDirection: 'column',
        }}
      >
        <SlideShow images={enchant?.images ?? []} />
        <Box
          sx={{
            flex: 1,
            color: 'primary',
            height: '100%',
          }}
        >
          {enchant?.about && (
            <>
              <AppDivider />
              <AppSpacingBox mt mb>
                <AppHeader
                  text="About"
                  size="sub"
                  component="h2"
                  sx={{ mb: 1 }}
                />
                <Typography color="primary">{enchant.about}</Typography>
              </AppSpacingBox>
            </>
          )}
          {(enchant?.whereFound || enchant?.condition || enchant?.origin) && (
            <>
              <AppDivider />
              <AppSpacingBox mt mb>
                <AppGroupDisplay
                  items={[
                    { title: 'Found at', text: enchant?.whereFound },
                    { title: 'Condition', text: enchant?.condition },
                    { title: 'Origin', text: enchant?.origin },
                  ]}
                />
              </AppSpacingBox>
            </>
          )}
        </Box>
      </Box>
    </PageWithBackplateLayout>
  );
}

export default connector(Enchant);
