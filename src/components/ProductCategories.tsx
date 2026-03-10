'use client';
import Link from "next/link"
import { useState } from "react";
export default function ProductCategories() {
  const categories = [
  {
    title: "Safety Products",
    description: "Personal protective equipment designed for industrial and construction safety.",
    image: "/images/Category/safety_products.png",
    tags: ["Shoes", "Gloves", "Vests", "Helmets"]
  },
  {
    title: "Fasteners",
    description: "High-strength fastening components for construction and industrial applications.",
    image: "/images/Category/fastners.png",
    tags: ["Bolts", "Nuts", "Rivets", "Threaded Rods"]
  },
  {
    title: "Packing Materials",
    description: "Reliable packaging materials for industrial transport and protection.",
    image: "/images/Category/packing_materials.png",
    tags: ["Industrial Packaging", "Protection", "Shipping"]
  },
  {
    title: "Silicone & Sealants",
    description: "Industrial grade silicone and sealing solutions for construction and maintenance.",
    image: "/images/Category/silicon.png",
    tags: ["Sealants", "Adhesives", "Construction"]
  },
  {
    title: "Abrasives",
    description: "Grinding, polishing and finishing abrasives for professional applications.",
    image: "/images/Category/abbrasives.png",
    tags: ["Grinding", "Polishing", "Sanding"]
  },
  {
    title: "Drill Bits & Router Bits",
    description: "Precision cutting tools for drilling and routing operations.",
    image: "/images/Category/drill_bits.png",
    tags: ["Drill Bits", "Router Bits", "Metal Cutting"]
  },
  {
    title: "Hand Tools",
    description: "Durable professional hand tools for construction and maintenance.",
    image: "/images/Category/hand_tools.png",
    tags: ["Wrenches", "Screwdrivers", "Hammers"]
  },
  {
    title: "Power Tools",
    description: "High-performance electric and cordless tools for industrial work.",
    image: "/images/Category/power_tools.png",
    tags: ["Drills", "Grinders", "Cutters"]
  },
  {
    title: "Lockings & Hinges",
    description: "Secure locking systems and hinges for industrial and construction use.",
    image: "/images/Category/lockings.png",
    tags: ["Locks", "Hinges", "Door Hardware"]
  }
]
  const [category,setCategory] = useState("All");
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Industrial Product
            <span className="text-yellow-400"> Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our range of industrial safety equipment, professional tools, and 
            construction products designed for modern worksites and industrial operations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex flex-col h-full shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="relative">
                <div className={`absolute top-4 left-4 z-10 ${category.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {category.badge}
                </div>
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                <div className="mt-auto pt-4">
                <Link href={`/products?category=${encodeURIComponent(category.title)}`}>
                <button className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors">
                  View Products
                </button>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Need a specific industrial product?
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              BUILDON can source a wide range of industrial tools, safety equipment, and construction products. Contact our team to find the right solution for your needs.
            </p>
            <Link href="/contact">
            <button className="bg-black text-yellow-400 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Our Team
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
