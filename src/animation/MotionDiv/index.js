import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';

export default function MotionDiv({
  animate,
  initial,
  transition,
  children,
  ...props
}) {
  return (
    <motion.div
      animate={animate}
      initial={initial}
      exit={initial}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

MotionDiv.propTypes = {
  animate: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  initial: PropTypes.object.isRequired,
  transition: PropTypes.object.isRequired,
};
