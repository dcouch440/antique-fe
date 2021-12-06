import { Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import PropTypes from 'prop-types';
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
    boxShadow: 1,
    '&:hover': {
      '& img': {
        transform: 'scale(1.03)',
        filter: 'none',
      },
    },
  },
  image: {
    position: 'absolute',
    opacity: 0,
    backgroundSize: 'cover',
    transition: 'opacity 5s ease-in-out, transform 0.2s ease-in-out',
    width: '100%',
    filter: 'grayscale(10%)',
  },
  activeImage: {
    opacity: 0.8,
  },
  textBox: {
    position: 'absolute',
    cursor: 'pointer',
    transition: '0.2s',
    letterSpacing: '2px',
    backdropFilter: 'blur(3px)',
    borderRadius: 2,
    height: '100%',
    width: '100%',
    p: 1,
    bottom: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 'sizes.lg',
    p: 1,
  },
  description: {
    zIndex: 1,
    p: 1,
    borderRadius: 2,
    fontSize: 'sizes.lg',
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
      <Box sx={style.textBox}>
        <Typography color="primary" sx={style.title}>
          {title}
        </Typography>
        <Divider variant="middle" color="white" />
        <Typography color="primary" sx={style.description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  description: PropTypes.string.isRequired,
};
