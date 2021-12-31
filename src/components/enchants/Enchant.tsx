import { Avatar, Box, Typography } from '@mui/material';
import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import AppUser from 'components/AppUser';
import UserAvatar from 'components/AppUserAvatar';

interface IEnchant {
  username: string;
  userAvatar: string;
  likes: number;
  itemName: string;
  images: Array<{ url: string }>;
}

/**
 * Renders a given image by first setting an images height and width to unset.
 * After the image loads into the ref the images height and width is captured in state and it choses a span of either long or square based on its height and width.
 */
function Enchant({
  username,
  userAvatar,
  likes,
  itemName,
  images,
}: IEnchant): ReactElement {
  const [img, setImage] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const image = new Image();
    image.src = images[0].url;
    image.onload = () => {
      setImage({ height: image.height, width: image.width });
    };
  }, []);

  if (images.length === 0 || images[0]?.url === '') return <></>;
  if (img.height === 0 || img.width === 0) return <></>;

  const getSpan = () => {
    const heightRatio = img.height / img.width;
    const widthRatio = img.width / img.height;
    // if the image height ratio is 50% taller than it is wide give it two blocks.
    if (heightRatio > 1.3) return { gridRow: 'span 2' };
    // same for width.
    if (widthRatio > 1.4) return { gridColumn: 'span 2' };
    // else one block is fine.
    else return {};
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: 'auto',
        ...getSpan(),
        borderRadius: (theme) => theme.spacing(1),
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AppUser username={username} userAvatar={userAvatar} />
        <Box>
          <Typography color="primary">{itemName}</Typography>
          <Typography color="primary">
            {likes ? likes : 'Be the first to like'}
          </Typography>
        </Box>
      </Box>
      <img
        style={{
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        }}
        src={images[0].url}
        alt={`An depiction of ${username}'s item`}
      />
    </Box>
  );
}

export default Enchant;
