import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
                                Leading global trading company delivering excellence in international commerce.
                                Connecting businesses worldwide through innovative trading solutions since 2015.
                            </p>

                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                With a strong presence across UAE, China, and GCC countries, BUILDON has established
                                itself as a trusted partner for construction materials, industrial supplies, and
                                comprehensive trading solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-yellow-400 text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                                    Get Quote Now
                                </button>
                                <button className="border border-black text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-black hover:text-white transition-colors">
                                    Our Services
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Image/Video */}
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl border border-yellow-400/30 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                                            <span className="text-black text-4xl font-bold">B</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-black mb-4">BUILDON</h3>
                                        <p className="text-gray-700 px-8">
                                            Building Trust Since 2015
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
