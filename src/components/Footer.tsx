'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
      className="bg-gray-800 text-white py-8 mt-12"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg"
        >
          &copy; {new Date().getFullYear()} JW Portfolio. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-6 mt-4"
        >
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Twitter
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}