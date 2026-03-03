export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  type: 'product' | 'material' | 'equipment' | 'installation' | 'project';
  location: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Build-On Branding',
    description: 'Official Build-On company logo and branding assets',
    type: 'product',
    location: '/buldon.png',
    alt: 'Build-On logo',
  },
  {
    id: 2,
    title: 'Canvas Backpack',
    description: 'Durable canvas backpack material showcase',
    type: 'material',
    location: '/canvas_backpack.webp',
    alt: 'Canvas backpack product',
  },
  {
    id: 3,
    title: 'Hero Banner',
    description: 'Main hero section imagery for promotional campaigns',
    type: 'installation',
    location: '/hero.png',
    alt: 'Hero banner image',
  },
  {
    id: 4,
    title: 'Product Showcase',
    description: 'General product display and showcase materials',
    type: 'product',
    location: '/image.png',
    alt: 'Product showcase',
  },
  {
    id: 5,
    title: 'Industrial Gasket',
    description: 'Precision industrial gasket material implementation',
    type: 'material',
    location: '/industrial_gasket.png',
    alt: 'Industrial gasket',
  },
  {
    id: 6,
    title: 'Smart Lamp Design',
    description: 'Modern smart lamp fixture with integrated technology',
    type: 'product',
    location: '/smart_lamp.jpg',
    alt: 'Smart lamp design',
  },
  {
    id: 7,
    title: 'USB-C Cable',
    description: 'High-quality USB-C connectivity solution',
    type: 'equipment',
    location: '/usb_c_cable.jpg',
    alt: 'USB-C cable product',
  },
  {
    id: 8,
    title: 'Widget Alpha',
    description: 'Alpha version widget prototype and testing materials',
    type: 'product',
    location: '/widget_alpha.png',
    alt: 'Widget alpha prototype',
  },
  {
    id: 9,
    title: 'Material Reference',
    description: 'Generic material reference and specification guide',
    type: 'material',
    location: '/material.png',
    alt: 'Material reference',
  },
];
