import { Box, Button, Typography, useTheme } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AboutSection from 'components/enchant/AboutSection';
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
  const theme = useTheme();
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (!params?.enchantId) return;
    getEnchant(params.enchantId);
  }, []);

  if (enchant === null) return <></>;

  const handleClick = () => nav(enchantUpdatePath(enchant?.id));

  return (
    <PageWithBackplateLayout sx={{ px: 1, pt: 3, pb: 3 }}>
      <>
        {id === enchant?.userId && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClick}>Update</Button>
          </Box>
        )}
      </>
      <Box
        sx={{
          display: 'flex',
          alignSelf: 'center',
          flexDirection: 'column',
        }}
      >
        <SlideShow images={enchant.images} />
        <AppUser
          userAvatar={enchant?.userAvatar ?? ''}
          username={enchant.username}
          sx={{ borderRadius: 1, mb: 3 }}
        />
        <Box
          sx={{
            flex: 1,
            color: 'primary',
            height: '100%',
            backgroundColor: (theme) =>
              theme.custom.palette.secondary.transparent,
            p: 1,
          }}
        >
          <AppHeader text={enchant?.itemName ?? ''} size="xl" component="h2" />
          {enchant?.about && (
            <AboutSection header="About" content={enchant.about} />
          )}
          {enchant?.whereFound && (
            <AboutSection
              header="Where I found it."
              content={enchant?.whereFound}
            />
          )}
          {enchant?.origin && (
            <AboutSection
              header="Origin / Backstory"
              content={enchant?.origin}
            />
          )}
          {enchant?.condition && (
            <AboutSection header="Condition" content={enchant?.condition} />
          )}
        </Box>
      </Box>
    </PageWithBackplateLayout>
  );
}

export default connector(Enchant);
