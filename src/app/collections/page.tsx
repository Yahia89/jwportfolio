'use client';

import { motion } from 'framer-motion';
import CollectionCard from '../../components/CollectionCard';
import { Collection } from '../../types';

const collections: Collection[] = [
  {
    id: 'spring-2024',
    name: 'Spring 2024 Collection',
    image: '/images/collection1.jpg', // Add image in public/images
    description: 'A vibrant and fresh collection inspired by the awakening of nature.',
  },
  {
    id: 'fall-2023',
    name: 'Fall 2023 Collection',
    image: '/images/collection2.jpg', // Add image in public/images
    description: 'Rich textures and warm tones define this elegant autumn line.',
  },
  {
    id: 'couture-2023',
    name: 'Couture 2023 Collection',
    image: '/images/collection3.jpg', // Add image in public/images
    description: 'Exquisite handcrafted pieces showcasing unparalleled artistry.',
  },
];

export default function CollectionsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">My Collections and Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </motion.div>
  );
}