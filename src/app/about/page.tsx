'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">About the Designer</h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 mb-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/designer-profile.jpg" // Add a designer profile image in public/images
            alt="Designer Profile"
            width={600}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Driven by a passion for innovative design and timeless elegance, JW creates collections that transcend trends.
            Each piece is a testament to meticulous craftsmanship, luxurious materials, and a deep understanding of the human form.
            Our philosophy centers on empowering individuals through fashion, allowing them to express their unique identity with confidence and grace.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          From humble beginnings to international acclaim, JW's journey has been marked by relentless creativity and a commitment to excellence.
          With a keen eye for detail and an unwavering dedication to pushing boundaries, the brand has become synonymous with avant-garde yet wearable art.
          We continue to evolve, drawing inspiration from global cultures, art, and the ever-changing landscape of modern life.
        </p>
      </motion.div>
    </motion.div>
  );
}