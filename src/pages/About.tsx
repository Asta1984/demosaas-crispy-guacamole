import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Font styling utility
const fontStyles = {
  heroHeading: "font-Type_writer text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
  heroSubheading: "font-Type_writer text-lg sm:text-xl md:text-2xl font-medium",
  button: "font-Type_writer text-base sm:text-lg font-bold"
};

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={` font-OnlinePrivileges md:text-5xl text-white mb-4 sm:mb-6`}
          >
            Revolutionizing DePIN Networks
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${fontStyles.heroSubheading} text-gray-300 mb-6 sm:mb-8`}
          >
            Join the future of decentralized physical infrastructure networks with our groundbreaking protocol
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
       
            
            <button 
              className={`${fontStyles.button} px-6 sm:px-8 py-3 border border-purple-500 rounded-full text-white hover:bg-purple-500/20 transition-colors transform hover:scale-105 duration-200 ease-in-out`}
            >
              Claim Airdrop
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};