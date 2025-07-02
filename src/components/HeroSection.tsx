'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/images/collection-hero.jpg)' }} // Make sure to add a hero image in public/images
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Elegance Redefined
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Discover the latest collections from a visionary in fashion, where art meets attire.
        </motion.p>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 }}
          className="mt-8 px-8 py-3 bg-white text-gray-900 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
        >
          <Link href="/collections">
            View Collections/Work
          </Link>
        </motion.button>
      </div>
    </section>
  );
}