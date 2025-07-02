'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import ImageGallery from '../../../components/ImageGallery';
import { Collection } from '../../../types';

// This would typically come from an API or a data source
const allCollections: Collection[] = [
  {
    id: 'spring-2024',
    name: 'Spring 2024 Collection',
    image: '/images/collection1.jpg',
    description: 'A vibrant and fresh collection inspired by the awakening of nature.',
    images: [
      { src: '/images/spring2024-1.jpg', alt: 'Spring 2024 Look 1' },
      { src: '/images/spring2024-2.jpg', alt: 'Spring 2024 Look 2' },
      { src: '/images/spring2024-3.jpg', alt: 'Spring 2024 Look 3' },
      { src: '/images/spring2024-4.jpg', alt: 'Spring 2024 Look 4' },
      { src: '/images/spring2024-5.jpg', alt: 'Spring 2024 Look 5' },
    ], // Add these images to public/images
  },
  {
    id: 'fall-2023',
    name: 'Fall 2023 Collection',
    image: '/images/collection2.jpg',
    description: 'Rich textures and warm tones define this elegant autumn line.',
    images: [
      { src: '/images/fall2023-1.jpg', alt: 'Fall 2023 Look 1' },
      { src: '/images/fall2023-2.jpg', alt: 'Fall 2023 Look 2' },
      { src: '/images/fall2023-3.jpg', alt: 'Fall 2023 Look 3' },
    ],
  },
  {
    id: 'couture-2023',
    name: 'Couture 2023 Collection',
    image: '/images/collection3.jpg',
    description: 'Exquisite handcrafted pieces showcasing unparalleled artistry.',
    images: [
      { src: '/images/couture2023-1.jpg', alt: 'Couture 2023 Look 1' },
      { src: '/images/couture2023-2.jpg', alt: 'Couture 2023 Look 2' },
      { src: '/images/couture2023-3.jpg', alt: 'Couture 2023 Look 3' },
      { src: '/images/couture2023-4.jpg', alt: 'Couture 2023 Look 4' },
    ],
  },
];

export default function CollectionDetailPage() {
  const params = useParams();
  const { slug } = params;

  const collection = allCollections.find((col) => col.id === slug);

  if (!collection) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-600">Collection Not Found</h1>
        <p className="text-lg text-gray-700 mt-4">The collection you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">{collection.name}</h1>
      <p className="text-center text-xl text-gray-700 mb-12">{collection.description}</p>

      {collection.images && collection.images.length > 0 ? (
        <ImageGallery images={collection.images} />
      ) : (
        <p className="text-center text-lg text-gray-600">No images available for this collection yet.</p>
      )}
    </motion.div>
  );
}