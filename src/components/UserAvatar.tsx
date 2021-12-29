import React, { ReactElement } from 'react';

import { Avatar } from '@mui/material';
import bottleLogo from 'assets/img/waxSealImg.webp';

interface Props {
  src: string;
  alt: string;
}

function UserAvatar({ src, ...props }: Props): ReactElement {
  const hasAvatar = Boolean(src);
  const url = hasAvatar ? src : bottleLogo;
  return <Avatar sx={{ backgroundColor: 'secondary' }} src={url} {...props} />;
}

export default UserAvatar;
