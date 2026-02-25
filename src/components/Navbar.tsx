'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image 
                src="/buldon.png" 
                alt="BUILDON Logo" 
                width={122} 
                height={162}
                className="mr-3"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-black-300 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-black-300 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#products" className="text-black-300 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#gallery" className="text-black-300 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-black-300 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-400 transition-colors">
              Start Trading
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              About
            </a>
            <a href="#products" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Products
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Contact
            </a>
            <div className="pt-2">
              <button className="bg-primary text-black px-6 py-2 rounded-md text-sm font-semibold w-full">
                Start Trading
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
