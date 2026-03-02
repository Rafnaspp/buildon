export const categories = [
  'Electronics',
  'Apparel',
  'Home',
  'Industrial',
  'Accessories',
]

export const brands = [
  'Lumina',
  'Northfield',
  'GlowHome',
  'ForgeTech',
  'CableCo',
]

export const products = [
  {
    slug: 'widget-alpha',
    title: 'Widget Alpha',
    category: 'Electronics',
    description: 'A compact, high-performance widget for consumer electronics.',
    price: 49.99,
    features: ['Compact', 'Energy Efficient', '2-year warranty'],
    brand: 'Lumina',
    tags: ['compact', 'energy-efficient', 'electronics'],
    image: '/widget_alpha.png',
  },
  {
    slug: 'canvas-backpack',
    title: 'Canvas Backpack',
    category: 'Apparel',
    description: 'Durable canvas backpack ideal for daily commute and light travel.',
    price: 79.0,
    features: ['Water resistant', 'Laptop sleeve', 'Multiple pockets'],
    brand: 'Northfield',
    tags: ['durable', 'commute', 'travel', 'apparel'],
    image: '/canvas_backpack.webp',
  },
  {
    slug: 'smart-lamp',
    title: 'Smart Lamp',
    category: 'Home',
    description: 'Wi‑Fi connected lamp with adjustable color temperature and dimming.',
    price: 59.5,
    features: ['App control', 'Warm/cool light', 'Energy saving'],
    brand: 'GlowHome',
    tags: ['smart-home', 'lighting', 'energy-saving'],
    image: '/smart_lamp.jpg',
  },
  {
    slug: 'industrial-gasket',
    title: 'Industrial Gasket',
    category: 'Industrial',
    description: 'High-temperature gasket for heavy machinery and industrial use.',
    price: 24.0,
    features: ['High-temp', 'Chemical resistant', 'Custom sizes'],
    brand: 'ForgeTech',
    tags: ['industrial', 'high-temp', 'chemical-resistant'],
    image: '/industrial_gasket.png',
  },
  {
    slug: 'usb-c-cable-pro',
    title: 'USB-C Cable Pro',
    category: 'Accessories',
    description: 'Braided USB-C cable with fast charging support and reinforced ends.',
    price: 14.99,
    features: ['Fast charge', 'Braided', '1.5m length'],
    brand: 'CableCo',
    tags: ['cables', 'fast-charge', 'accessories'],
    image: '/usb_c_cable.jpg',
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category?: string) {
  if (!category || category === 'All') return products
  return products.filter((p) => p.category === category)
}

export function getAllCategories() {
  return ['All', ...categories]
}
