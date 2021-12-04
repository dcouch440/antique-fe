import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';

const styles = () => ({
  root: {
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
    boxShadow: (theme) => theme.appStyles.boxShadow,
    '&:hover': {
      '& img': {
        transform: 'scale(1.05)',
        filter: 'grayscale(0%)',
      },
    },
  },
  image: {
    position: 'absolute',
    opacity: 0,
    backgroundSize: 'cover',
    transition: 'opacity 5s ease-in-out, transform 0.2s ease-in-out',
    width: '100%',
    filter: 'grayscale(80%)',
  },
  activeImage: {
    opacity: 0.8,
  },
  textBox: {
    position: 'absolute',
    color: 'white.main',
    cursor: 'pointer',
    transition: '0.2s',
    letterSpacing: '2px',
    backgroundColor: 'black.transparent',
    backdropFilter: 'blur(24px)',
    borderRadius: 2,
  },
  title: {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: 1,
    ml: 1,
    p: 1,
    py: 1,
  },
  description: {
    zIndex: 1,
    mb: 1,
    mx: 1,
    bottom: 0,
    right: 0,
    p: 1,
    borderRadius: 2,
    fontSize: 'sizes.reg',
  },
});

export default function NavigationLink({ path, title, images, description }) {
  const navigate = useNavigate();
  const style = styles();
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
    <Box sx={style.root} onClick={handleClick}>
      {images.map((image, key) => (
        <img
          style={{ ...style.image, ...(key === int ? style.activeImage : {}) }}
          key={key}
          src={image}
        />
      ))}
      <Typography sx={[style.title, style.textBox]}>{title}</Typography>
      <Typography sx={[style.description, style.textBox]}>
        {description}
      </Typography>
    </Box>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  description: PropTypes.string.isRequired,
};
