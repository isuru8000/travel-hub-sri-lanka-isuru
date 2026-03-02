import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
            scale: [1, 1.2, 1, 1.2, 1],
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <MapPin className="text-green-400 h-8 w-8 mr-2" />
        </motion.div>
        <div className="flex flex-col items-start leading-none">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-green-400">Travel</span>
            <span className="text-[#F59E0B]"> Hub</span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 mt-0.5">Sri Lanka</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLogo;
