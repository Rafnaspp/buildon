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
            From humble beginnings to becoming a trusted supplier of safety products,
             tools, fasteners, and construction materials, discover the journey that shaped BUILDON.
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
              BUILDON Building Materials Trading LLC was established with the goal of
              supplying reliable construction materials, safety equipment, fasteners,
              and industrial tools to contractors and businesses. Starting as a small
              supplier, the company steadily built a reputation for dependable products
              and strong customer relationships.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, BUILDON supports a wide range of construction and industrial
              projects by providing quality materials, safety products, tools,
              and hardware. Our focus remains on reliability, competitive pricing,
              and delivering the right products when our customers need them.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/about/about.png"
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
              Work With BUILDON
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Looking for reliable construction materials, safety products,
              or industrial tools? Our team is ready to support your project.   
            </p>
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
