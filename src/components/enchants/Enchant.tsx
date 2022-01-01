import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';

import AppUser from 'components/common/AppUser';

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
  // because sm screens only have 1 width.
  // grid column must always result in 1 width if so.
  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));

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
    // if the image height ratio is 30% taller than it is wide give it two blocks.
    if (heightRatio > 1.3) return { gridRow: 'span 2' };
    // if screen is very small there is not two columns to take up.
    if (isBelowSm) return {};
    // if width is 50% wider than tall it is a very wide image.
    // let it take up two columns.
    if (widthRatio > 1.5) return { gridColumn: 'span 2' };
    // else one block is fine.
    else return {};
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: 'auto',
        ...getSpan(),
        borderRadius: (theme) => theme.spacing(0.5),
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AppUser username={username} userAvatar={userAvatar} />
      </Box>
      <img
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '100%',
          width: '100%',
        }}
        loading="lazy"
        src={images[0].url}
        alt={`An depiction of ${username}'s item`}
      />
    </Box>
  );
}

export default Enchant;
