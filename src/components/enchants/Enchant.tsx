import { Avatar, Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

import Image from 'components/Image';
import UserAvatar from 'components/UserAvatar';

const enchantData = {
  id: '61c91b06d8c88a7ed654a63c',
  userId: '61c78ed61ad43f99877d5430',
  username: 'dan',
  userAvatar: '',
  tags: ['bottle'],
  likes: 0,
  itemName: 'Poison',
  images: [
    {
      id: '61c91b06d8c88a7ed654a63b',
      url: 'https://enchants.s3.us-west-2.amazonaws.com/eacbd3ad.png',
      favorite: true,
      caption: 'This bottle was great.',
    },
  ],
  condition: 'poor',
  origin: 'USA',
  title: 'The oldest bottle.',
  whereFound: 'Yard sale',
};

function Enchant(): ReactElement {
  const { username, userAvatar, likes, itemName, images } = enchantData;
  if (images.length === 0 || images[0]?.url === '') {
    return <></>;
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 'absolute',
          }}
        >
          <UserAvatar src={userAvatar} alt={username} />
          <Typography color="primary">{username}</Typography>
        </Box>
        <Box>
          <Typography color="primary">{itemName}</Typography>
          <Typography color="primary">
            {likes ? likes : 'Be the first to like'}
          </Typography>
        </Box>
      </Box>
      <Image src={images[0].url} alt={`An depiction of ${username}'s item`} />
    </Box>
  );
}

export default Enchant;
