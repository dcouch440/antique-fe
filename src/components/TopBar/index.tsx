import { Box, useTheme } from '@mui/material';
import {
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import { ConnectedProps } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SidebarTypeSelector from 'components/common/AppSidebarTypeSelector';
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
        justifyContent: 'flex-end',
        backgroundColor: theme.palette.secondary.dark,
        borderBottom: '1px solid ' + theme.palette.primary.dark,
        boxShadow: 5,
      }}
      key="SidebyTypeSectorsz"
    >
      <SidebarTypeSelector
        variantType="Button"
        aria-label="Messages"
        constantVariable={SIDEBAR_MESSAGES}
      >
        <EmailIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        variantType="Button"
        aria-label="Feed"
        constantVariable={SIDEBAR_FEED}
      >
        <NotificationsActiveIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        variantType="Button"
        aria-label="Navigate"
        constantVariable={SIDEBAR_NAVIGATION}
      >
        <MenuIcon />
      </SidebarTypeSelector>
    </Box>
  );
}

export default connector(TopBar);
