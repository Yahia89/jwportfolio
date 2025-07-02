"use client";

import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Collections</h2>
        <p className="text-center text-lg text-gray-700 mb-12">Explore our latest and most iconic designs.</p>
        {/* You can add featured CollectionCards here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example of a featured collection card */}
          {/* <CollectionCard collection={{ id: 'spring-2024', name: 'Spring 2024', image: '/images/collection1.jpg', description: 'A vibrant collection inspired by nature.' }} /> */}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
