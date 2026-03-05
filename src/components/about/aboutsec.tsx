import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPageSec() {
    return (
        <div className="min-h-screen bg-white text-black">


            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                                About <span className="text-yellow-400">BUILDON</span>
                            </h1>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                BUILDON Building Materials Trading LLC supplies high-quality construction
                                materials, safety products, fasteners, and industrial tools trusted by
                                contractors, engineers, and project developers across the UAE.
                            </p>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                With a growing network of suppliers and partners across the UAE and
                                international markets, BUILDON provides reliable access to essential
                                construction materials, safety equipment, tools, and industrial
                                hardware for projects of every scale.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-yellow-400 text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                                    Request a Quote
                                </button>
                                <Link href="/products">
                                <button className="border border-black text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-black hover:text-white transition-colors">
                                    View Products
                                </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Image/Video */}
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl border border-yellow-400/30 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center relative z-10">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                                            <span className="text-black text-4xl font-bold">B</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-black mb-4">BUILDON</h3>
                                        <p className="text-gray-700 px-8">
                                            Trusted by Contractors Across the UAE
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
