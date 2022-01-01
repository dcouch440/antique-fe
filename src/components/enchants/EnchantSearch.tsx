import { Box, Button } from '@mui/material';
import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement } from 'react';
import {
  enchantsArrayCleared,
  tagAdded,
  tagRemoved,
} from 'store/enchant/actionCreators';

import AppSearchBar from 'components/common/AppSearchBar';
import AppTag from 'components/common/AppTag';
import { IAppState } from 'store/types';
import { refreshAndGetEnchants } from 'store/enchant/thunkCreators';

const mapStateToProps = ({ enchant: { searchTags } }: IAppState) => ({
  searchTags,
});

const mapDispatchToProps = {
  tagAdded,
  tagRemoved,
  refreshAndGetEnchants,
  enchantsArrayCleared,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function EnchantSearch({
  searchTags,
  tagAdded,
  tagRemoved,
  enchantsArrayCleared,
}: Props): ReactElement {
  const handleClick = () => {
    enchantsArrayCleared();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 1,
        justifyContent: 'space-between',
      }}
    >
      <AppSearchBar
        buttonContents="Add"
        placeholder="Search by tags"
        sx={{ width: '100%' }}
        onSubmit={tagAdded}
        renderExtraButton={
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ height: '100%' }}
          >
            Search
          </Button>
        }
      />
      <Box sx={{ flex: 1, flexWrap: 'wrap', gap: 1, display: 'flex' }}>
        {searchTags.map((tag: string) => (
          <AppTag tag={tag} key={tag} onClick={tagRemoved} />
        ))}
      </Box>
    </Box>
  );
}

export default connector(EnchantSearch);
