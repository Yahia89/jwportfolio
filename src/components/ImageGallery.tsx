'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {images.map((image, index) => (
        <motion.div key={index} variants={itemVariants} className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
        </motion.div>
      ))}
    </motion.div>
  );
}