import { motion, useMotionValue } from 'framer-motion';

import { ReactNode } from 'react';

interface IOwnProps {
  onReleaseOutOfBounds: () => void;
  range: number;
  opacity: number;
  children: ReactNode;
}

export default function MotionDrag({
  onReleaseOutOfBounds,
  range,
  opacity,
  children,
}: IOwnProps): JSX.Element {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);

  const handleDragEnd = () => {
    for (const coord of [x, y]) {
      if (Math.abs(coord.get()) > range) {
        onReleaseOutOfBounds();
      }
    }
  };

  return (
    <motion.div
      drag
      style={{ x, y, opacity, width: 'fit-content' }}
      whileDrag={{ scale: 1.2 }}
      onDragEnd={handleDragEnd}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
