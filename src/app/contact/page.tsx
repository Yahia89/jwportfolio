'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 mb-6 text-center"
        >
          We would love to hear from you! Please fill out the form below or reach out through our contact details.
        </motion.p>

        <form className="space-y-6">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
          </motion.div>

          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={6} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
          </motion.div>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.6 }}
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Send Message
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Other Ways to Connect</h3>
          <p className="text-lg text-gray-700 mb-2">Email: info@jwportfolio.com</p>
          <p className="text-lg text-gray-700">Phone: +1 (123) 456-7890</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Twitter</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}