import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import animation from '../assets/animation.gif';

const Introduction = () => {
  return (
    <InView>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={animation} alt="Animation" />
        </motion.div>
      )}
    </InView>
  );
};

export default Introduction;
