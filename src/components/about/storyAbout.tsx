import Image from 'next/image'

export default function StoryAbout() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our <span className="text-yellow-400">Story</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global leadership, discover the journey that shaped BUILDON 
            into the trusted trading partner we are today.
          </p>
        </div>

        {/* Side by Side Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Founded on Excellence
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              BUILDON Trading LLC was founded in 2008 with a simple yet ambitious vision: 
              to become the most trusted name in construction materials across the region. 
              What started as a small trading company in Dubai has grown into a comprehensive 
              solution provider serving thousands of clients across 20+ countries.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey has been marked by continuous innovation, unwavering commitment to quality, 
              and an absolute dedication to customer satisfaction. Today, we stand as a testament 
              to what's possible when expertise meets passion.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/about-story.jpg"
                alt="BUILDON Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Join Our Success Story
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Be part of our continuing journey as we build the future of trading excellence.
            </p>
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
