'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.4,
        ease: 'easeIn',
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const topBarVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const middleBarVariant = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomBarVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <>
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
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + navLinks.indexOf(link) * 0.1, type: 'spring', stiffness: 100, damping: 20 }}
              >
                <Link href={link.href} className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors duration-300">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col justify-around items-center z-50 relative"
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="block w-full h-0.5 bg-gray-800"
                variants={topBarVariant}
              ></motion.span>
              <motion.span
                className="block w-full h-0.5 bg-gray-800"
                variants={middleBarVariant}
              ></motion.span>
              <motion.span
                className="block w-full h-0.5 bg-gray-800"
                variants={bottomBarVariant}
              ></motion.span>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 backdrop-blur-md flex items-center justify-center"
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-4xl font-bold hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}