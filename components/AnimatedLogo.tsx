import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedLogo: React.FC = () => {
  return (
    <Link to="/">
      <motion.div
        className="flex items-center cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1dxsYOR-B3HwShDO_7EQPkQUW3g4uBMw4" 
            alt="Travel Hub Logo" 
            className="h-20 w-20 object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;
