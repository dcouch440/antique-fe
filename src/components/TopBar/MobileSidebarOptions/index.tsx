import {
  SIDEBAR_FEED,
  SIDEBAR_MESSAGES,
  SIDEBAR_NAVIGATION,
} from 'constantVariables';

import { ButtonGroup } from '@mui/material';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarTypeSelector from 'components/Sidebar/SidebarTypeSelector';

export default function MobileSidebarOptions() {
  return (
    <ButtonGroup
      variant="text"
      aria-label="outlined primary button group"
      sx={{
        height: '100%',
        flex: [null, 1],
      }}
    >
      <SidebarTypeSelector
        constantVariable={SIDEBAR_NAVIGATION}
        variantType="Button"
      >
        <MenuIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector
        constantVariable={SIDEBAR_MESSAGES}
        variantType="Button"
      >
        <EmailIcon />
      </SidebarTypeSelector>
      <SidebarTypeSelector variantType="Button" constantVariable={SIDEBAR_FEED}>
        <DynamicFeedIcon />
      </SidebarTypeSelector>
    </ButtonGroup>
  );
}
