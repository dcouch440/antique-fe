import {
  ButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import {
  ENCHANT_SEARCH_TYPE_FRIEND,
  ENCHANT_SEARCH_TYPE_NEW,
  ENCHANT_SEARCH_TYPE_POPULAR,
} from 'constantVariables';

import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import { IAppState } from 'store/types';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TopBarButton from 'components/TopBar/TopBarButton';
import { searchTypeUpdated } from 'store/enchant/actionCreators';
import { swellMenuTypeUpdated } from 'store/sidebar/actionCreators';

/**
 * @description Category component changes what type of search it is based on constants in the store
 */

const mapStateToProps = ({ enchant: { searchType } }: IAppState) => ({
  searchType,
});

const mapDispatchToProps = {
  searchTypeUpdated,
  swellMenuTypeUpdated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface OwnProps {
  orientation?: 'open' | 'closed';
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

function Category({ searchType, searchTypeUpdated }: Props): JSX.Element {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isActive: (type: string) => string = (type) =>
    searchType === type ? '#616161' : '';

  const handleClick = (type: string) => searchTypeUpdated(type);

  return (
    <ButtonGroup
      variant="text"
      aria-label="outlined primary button group"
      sx={{
        overflow: 'hidden',
        display: 'flex',
        height: '100%',
        flex: [null, 1],
      }}
    >
      <TopBarButton
        onClick={() => handleClick(ENCHANT_SEARCH_TYPE_FRIEND)}
        sx={{
          backgroundColor: isActive(ENCHANT_SEARCH_TYPE_FRIEND),
        }}
      >
        {!isMediumScreen && <Typography color="primary">Friends</Typography>}
        <GroupIcon />
      </TopBarButton>
      <TopBarButton
        onClick={() => handleClick(ENCHANT_SEARCH_TYPE_NEW)}
        sx={{
          backgroundColor: isActive(ENCHANT_SEARCH_TYPE_NEW),
        }}
      >
        {!isMediumScreen && <Typography color="primary">New</Typography>}
        <FiberNewIcon />
      </TopBarButton>
      <TopBarButton
        onClick={() => handleClick(ENCHANT_SEARCH_TYPE_POPULAR)}
        sx={{ backgroundColor: isActive(ENCHANT_SEARCH_TYPE_POPULAR) }}
      >
        {!isMediumScreen && <Typography color="primary">Popular</Typography>}
        <LocalFireDepartmentIcon />
      </TopBarButton>
    </ButtonGroup>
  );
}

export default connector(Category);
