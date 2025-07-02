'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CollectionCardProps {
  collection: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link href={`/collections/${collection.id}`}>
        <div className="relative w-full h-64">
          <Image
            src={collection.image}
            alt={collection.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{collection.name}</h3>
          <p className="text-gray-600 text-base">{collection.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}