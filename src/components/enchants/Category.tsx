import { ConnectedProps, connect } from 'react-redux';
import {
  ENCHANT_SEARCH_TYPE_FRIEND,
  ENCHANT_SEARCH_TYPE_NEW,
  ENCHANT_SEARCH_TYPE_POPULAR,
} from 'constantVariables';

import { ButtonGroup } from '@mui/material';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GroupIcon from '@mui/icons-material/Group';
import { IAppState } from 'store/types';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { TopBarButton } from 'components/TopBar';
import { searchTypeUpdated } from 'store/enchant/actionCreators';
import { swellMenuTypeUpdated } from 'store/sidebar/actionCreators';

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

/**
 * @description Category component changes what type of search it is based on constants in the store
 */

function Category({ searchType, searchTypeUpdated }: Props): JSX.Element {
  const isActive: (type: string) => string = (type) =>
    searchType === type ? '#616161' : 'transparent';
  const handleClick = (type: string) => searchTypeUpdated(type);

  return (
    <ButtonGroup
      variant="text"
      aria-label="outlined primary button group"
      sx={{
        overflow: 'hidden',
        display: 'flex',
        height: '100%',
      }}
    >
      <TopBarButton
        onMouseDown={() => handleClick(ENCHANT_SEARCH_TYPE_FRIEND)}
        key="friends"
        sx={{
          backgroundColor: isActive(ENCHANT_SEARCH_TYPE_FRIEND),
          '&:focus': {
            backgroundColor: '#616161',
          },
        }}
      >
        <GroupIcon />
      </TopBarButton>
      <TopBarButton
        key="new"
        onMouseDown={() => handleClick(ENCHANT_SEARCH_TYPE_NEW)}
        sx={{
          backgroundColor: isActive(ENCHANT_SEARCH_TYPE_NEW),
          '&:focus': {
            backgroundColor: '#616161',
          },
        }}
      >
        <FiberNewIcon />
      </TopBarButton>
      <TopBarButton
        onMouseDown={() => handleClick(ENCHANT_SEARCH_TYPE_POPULAR)}
        sx={{
          backgroundColor: isActive(ENCHANT_SEARCH_TYPE_POPULAR),
          '&:focus': {
            backgroundColor: '#616161',
          },
        }}
      >
        <LocalFireDepartmentIcon />
      </TopBarButton>
    </ButtonGroup>
  );
}

export default connector(Category);
