import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';

export default function PresenceContainer({ children }) {
  return (
    <motion.div
      key="child"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

PresenceContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
