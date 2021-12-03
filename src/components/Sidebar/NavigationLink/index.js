import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@mui/material';
import throttle from 'lodash.throttle';
import { useNavigate } from 'react-router-dom';

const styles = () => ({
  root: {
    fontFamily: 'families.cursive',
    color: 'white.main',
    cursor: 'pointer',
    transition: '0.2s',
    letterSpacing: '2px',
    py: 1,
    '&:hover': {
      transform: 'translateX(15px)',
    },
  },
});

export default function NavigationLink({ path, text }) {
  const navigate = useNavigate();
  const sx = styles();
  const handleRouteChange = () => navigate(path);

  const handleClick = throttle(handleRouteChange, 500, { trailing: false });

  return (
    <Typography sx={sx.root} onClick={handleClick}>
      {text}
    </Typography>
  );
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
