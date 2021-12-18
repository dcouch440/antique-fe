import { ButtonGroup } from '@mui/material';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import TopBarButton from '../TopBarButton';

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
      <TopBarButton>
        <MenuIcon />
      </TopBarButton>
      <TopBarButton>
        <EmailIcon />
      </TopBarButton>
      <TopBarButton>
        <DynamicFeedIcon />
      </TopBarButton>
    </ButtonGroup>
  );
}
