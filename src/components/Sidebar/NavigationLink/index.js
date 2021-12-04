import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';

const styles = () => ({
  root: {
    position: 'relative',
    height: 150,
    overflow: 'hidden',
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: (theme) => theme.appStyles.boxShadow,
    '&:hover': {
      '.NavigationLink-text': {
        fontSize: 22,
      },
    },
  },
  image: {
    position: 'absolute',
    opacity: 0,
    backgroundSize: 'cover',
    transition: 'opacity 5s ease-in-out',
    width: '100%',
    filter: 'grayscale(80%)',
  },
  activeImage: {
    opacity: 0.8,
  },
  text: {
    position: 'absolute',
    color: 'white.main',
    cursor: 'pointer',
    transition: '0.2s',
    letterSpacing: '2px',
    backgroundColor: 'black.main',
    borderRadius: 2,
    p: 1,
    py: 1,
    width: '90%',
    '&:hover': {
      backgroundColor: 'black.transparent',
    },
  },
});

export default function NavigationLink({ path, text, images = [] }) {
  const navigate = useNavigate();
  const sx = styles();
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
    <Box sx={sx.root} onClick={handleClick}>
      {images.map((image, key) => (
        <img
          style={{ ...sx.image, ...(key === int ? sx.activeImage : {}) }}
          key={key}
          src={image}
        />
      ))}
      <Typography className="NavigationLink-text" sx={sx.text}>
        {text}
      </Typography>
    </Box>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.array,
};
