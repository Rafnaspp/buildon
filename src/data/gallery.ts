export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  type: string;
  location: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Container Loading Operations',
    description: 'Efficient loading and unloading of construction materials from shipping containers',
    type: 'Warehouse & storage',
    location: '/images/gallery/warehouse.webp',
    alt: 'Warehouse image',
  },
  {
    id: 2,
    title: 'Material Storage Facility',
    description: 'State-of-the-art storage facility for construction materials and supplies',
    type: 'Warehouse & storage',
    location: '/images/gallery/meterial-storage.webp',
    alt: 'Canvas backpack product',
  },
  {
    id: 3,
    title: 'Distribution Center Operations',
    description: 'Organized distribution and packaging of construction materials for delivery',
    type: 'Logistics & Distribution',
    location: '/images/gallery/distribution.webp',
    alt: 'Hero banner image',
  },
  // {
  //   id: 4,
  //   title: 'Team Management & Planning',
  //   description: 'Buildon team coordinating project planning and material distribution strategies',
  //   type: 'Team & Operations',
  //   location: '/images/gallery/team.webp',
  //   alt: 'Product showcase',
  // },
  {
    id: 5,
    title: 'Industrial Equipment Handling',
    description: 'Professional handling and transportation of heavy industrial equipment',
    type: 'Logistics & Distribution',
    location: '/images/gallery/equipment.webp',
    alt: 'Industrial gasket',
  },
  {
    id: 6,
    title: 'Buildon Operations Showcase',
    description: "Complete overview of Buildon's material handling, storage, and distribution operations",
    type: 'Videos',
    location: '/videos/operations.mp4',
    alt: 'Smart lamp design',
  }
];
