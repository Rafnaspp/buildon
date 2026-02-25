'use client'
import Image from 'next/image'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const heroVariations = [
  {
    heading: "EXPORT-IMPORT",
    subheading: "China to GCC Solutions",
    description: "Direct sourcing from China to GCC countries with quality assurance",
    tagline: "Bridging Quality. Connecting Markets."
  },
  {
    heading: "PREMIUM QUALITY",
    subheading: "Building Materials Excellence", 
    description: "Discover our comprehensive range of premium construction materials",
    tagline: "Where Innovation Meets Precision"
  },
  {
    heading: "METAL SOLUTIONS",
    subheading: "Industrial Grade Materials",
    description: "High-quality steel, aluminum, and specialty metals", 
    tagline: "Strength. Durability. Performance."
  }
]

function TypingText({ text, className = "" }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50) // Typing speed
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const [variationIndex, setVariationIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTypingComplete(false)
      setVariationIndex((prevIndex) => (prevIndex + 1) % heroVariations.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentContent = heroVariations[variationIndex]
  return (
    <>
      {/* Top Contact Bar Section */}
      <section className="bg-yellow-400 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +971 52 682 2173
              </span>
              <span className="ml-4 flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@buildon.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-text-heading hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-text-heading hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/hero.png" 
            alt="Hero background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-primary text-black text-xs font-medium px-3 py-1 rounded-full">
              Leading Construction Materials Supplier
            </span>
            <span className="bg-primary text-black text-xs font-medium px-3 py-1 rounded-full">
              UAE: Sharjah Media City (SHAMS)
            </span>
            <span className="bg-primary text-black text-xs font-medium px-3 py-1 rounded-full">
              China: Yiwu City, Zhejiang Province
            </span>
            <span className="bg-primary text-black text-xs font-medium px-3 py-1 rounded-full">
              Export-Import China to GCC
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-500 ease-in-out">
            {currentContent.heading}
          </h1>
          
          {/* Subheading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 transition-all duration-500 ease-in-out">
            {currentContent.subheading}
          </h2>

          {/* Description */}
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto transition-all duration-500 ease-in-out">
            {currentContent.description}
          </p>
          
          <p className="text-2xl font-semibold text-white mb-8 transition-all duration-500 ease-in-out">
            {currentContent.tagline}
          </p>

          {/* CTA Button */}
          <button className="bg-primary text-text-heading px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
            Explore Catalog
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              A Trusted Partner for Global Trading
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              We don't call them clients, we call them partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">8+</div>
              <div className="text-black font-semibold">YEARS EXPERIENCE</div>
              <div className="text-black text-sm mt-2">Trusted industry expertise</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">5000+</div>
              <div className="text-black font-semibold">HAPPY CLIENTS</div>
              <div className="text-black text-sm mt-2">Satisfied customers worldwide</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">10000+</div>
              <div className="text-black font-semibold">PRODUCTS</div>
              <div className="text-black text-sm mt-2">Premium quality items</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <div className="text-black font-semibold">SUPPORT</div>
              <div className="text-black text-sm mt-2">Round-the-clock assistance</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
