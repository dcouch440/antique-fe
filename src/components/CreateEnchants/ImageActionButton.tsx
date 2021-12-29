import { Box, SxProps, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {
  onClick: () => void;
  children: ReactElement | ReactElement[];
  sx?: SxProps;
}

function ImageActionButton({ onClick, children, sx }: Props): ReactElement {
  const theme = useTheme();
  return (
    <Box
      sx={{
        right: 0,
        backgroundColor: theme.custom.palette.secondary.transparent,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 1,
        width: 'fit-content',
        ...sx,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </Box>
  );
}

export default ImageActionButton;
