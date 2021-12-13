import { MotionStyle } from 'framer-motion/types/motion/types';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IOpacityContainer {
  children: ReactNode;
  style?: MotionStyle;
}

export default function OpacityContainer({
  children,
  style,
  ...props
}: IOpacityContainer): JSX.Element {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
