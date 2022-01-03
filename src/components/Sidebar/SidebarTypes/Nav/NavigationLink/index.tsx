import { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';

interface IOwnProps {
  path: string;
  title: string;
  images: string[];
}

/**
 * @description features a morphing image along with a title that represents the link that is selected. The component will cycle through the images in the given array.
 */

export default function NavigationLink({
  path,
  title,
  images,
}: IOwnProps): JSX.Element {
  const navigate = useNavigate();
  const handleRouteChange = () => navigate(path);
  const [int, setInt] = useState(0);
  const handleClick = throttle(handleRouteChange, 500, { trailing: false });
  const imagesLength = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setInt((prev) => {
        if (prev >= imagesLength - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesLength]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        overflow: 'hidden',
        borderRadius: 2,
        display: 'flex',
        cursor: 'pointer',
        mt: 2,
        '&:last-child': {
          mb: 2,
        },
        boxShadow: 1,
        '&:hover': {
          '& img': {
            transform: 'scale(1.03)',
            filter: 'none',
          },
        },
      }}
      onClick={handleClick}
    >
      {images.map((image: string, key: number) => (
        <img
          style={{
            position: 'absolute',
            opacity: 0,
            backgroundSize: 'cover',
            transition: 'opacity 5s ease-in-out, transform 0.2s ease-in-out',
            width: '100%',
            ...(key === int
              ? {
                  opacity: 0.8,
                }
              : {}),
          }}
          key={key}
          src={image}
          alt="Navigation Image Slide"
        />
      ))}
      <Box
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          transition: '0.2s',
          letterSpacing: '2px',
          borderRadius: 2,
          p: 1,
          bottom: 0,
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: 'sizes.lg',
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: 2,
            p: 1,
          }}
          component="h3"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
