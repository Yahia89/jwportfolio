// src/types/index.d.ts
export interface Collection {
  id: string;
  name: string;
  image: string;
  description: string;
  images?: { src: string; alt: string }[];
}