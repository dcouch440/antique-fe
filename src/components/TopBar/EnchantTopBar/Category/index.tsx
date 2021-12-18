import {
  Button,
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isActive: (type: string) => string = (type) =>
    searchType === type ? '#636363' : '';

  const handleClick = (type: string) => {
    setTimeout(() => {
      searchTypeUpdated(type);
      swellMenuTypeUpdated(null);
    }, 200);
  };

  return (
    <ButtonGroup
      variant="text"
      aria-label="outlined primary button group"
      sx={{
        overflow: 'hidden',
        display: 'flex',
        height: '100%',
        width: '50%',
      }}
    >
      <Button
        onClick={() => handleClick(ENCHANT_SEARCH_TYPE_FRIEND)}
        sx={{
          flex: 1,
          backgroundColor: isActive(ENCHANT_SEARCH_TYPE_FRIEND),
          p: 1,
          height: '100%',
        }}
      >
        {!isMediumScreen && <Typography color="primary">Friends</Typography>}
        <GroupIcon />
      </Button>
      <Button
        onClick={() => handleClick(ENCHANT_SEARCH_TYPE_NEW)}
        sx={{ flex: 1, backgroundColor: isActive(ENCHANT_SEARCH_TYPE_NEW) }}
      >
        {!isMediumScreen && <Typography color="primary">New</Typography>}
        <FiberNewIcon />
      </Button>
      <Button
        onClick={() => handleClick(ENCHANT_SEARCH_TYPE_POPULAR)}
        sx={{ flex: 1, backgroundColor: isActive(ENCHANT_SEARCH_TYPE_POPULAR) }}
      >
        {!isMediumScreen && <Typography color="primary">Popular</Typography>}
        <LocalFireDepartmentIcon />
      </Button>
    </ButtonGroup>
  );
}

export default connector(Category);
