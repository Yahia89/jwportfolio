'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Elevate Your Style?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Explore our exclusive collections and find your next masterpiece.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 }}
        >
          <Link href="/collections" className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}