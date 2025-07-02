'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
        >
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
            JW Portfolio
          </Link>
        </motion.div>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + navLinks.indexOf(link) * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
            >
              <Link href={link.href} className="text-gray-700 hover:text-gray-900 text-lg font-medium">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}