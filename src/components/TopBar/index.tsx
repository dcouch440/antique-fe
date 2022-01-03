import { Box, Typography, useTheme } from '@mui/material';
import {
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import AppSidebarTypeSelector from 'components/common/AppSidebarTypeSelector';
import { ConnectedProps } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function TopBar(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        width: '100%',
        zIndex: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        boxShadow: 5,
      }}
      key="SidebyTypeSectorsz"
    >
      <Typography
        color="secondary"
        sx={{
          pl: 1,
          fontWeight: 500,
          fontFamily: (theme) => theme.custom.typography.families.cursive,
        }}
      >
        Enchants
      </Typography>
      <Box>
        <AppSidebarTypeSelector
          variantType="Button"
          aria-label="Messages"
          color="secondary"
          constantVariable={SIDEBAR_MESSAGES}
        >
          <EmailIcon />
        </AppSidebarTypeSelector>
        <AppSidebarTypeSelector
          variantType="Button"
          aria-label="Feed"
          color="secondary"
          constantVariable={SIDEBAR_FEED}
        >
          <NotificationsActiveIcon />
        </AppSidebarTypeSelector>
        <AppSidebarTypeSelector
          variantType="Button"
          aria-label="Navigate"
          color="secondary"
          constantVariable={SIDEBAR_NAVIGATION}
        >
          <MenuIcon />
        </AppSidebarTypeSelector>
      </Box>
    </Box>
  );
}

export default connector(TopBar);
