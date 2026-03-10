import Link from "next/link"

export default function Foundation() {
  const stats = [
  {
    number: "8+",
    title: "Years Experience",
    description: "Serving construction & industrial sectors",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    number: "500+",
    title: "Industrial Products",
    description: "Safety equipment & professional tools",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h1v4h1m-1 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    number: "1000+",
    title: "Trusted Clients",
    description: "Contractors & industrial partners",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m-1 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    number: "Global",
    title: "Supply Network",
    description: "China to GCC distribution",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a1 1 0 001 1h1m-6 0l9 9m0-9l-9 9m0-9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  }
]

  return (
    <section className="py-16 lg:py-24 bg-white text-black">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-yellow-400 rounded-2xl p-6 text-center border border-yellow-500">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            See why <span className="text-black">1000+</span> contractors and industrial buyers trust <span className="text-white">BUILDON</span> for safety equipment and professional tools
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/products">
            <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center">
              VIEW PRODUCT CATALOGUE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            </Link>
          </div>
          {/* Benefits List*/}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-black">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Reliable Global Supply
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Industrial Grade Quality
            </div>
          </div>
          
          <p className="text-sm text-text-secondary">
            Join thousands of successful projects
          </p>
        </div>
      </div>

      {/* Our Foundation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-primary">Foundation</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Built on quality, trust and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-section-alt rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              01. Our <span className="text-primary">Mission</span>
            </h3>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              To supply high-quality industrial safety equipment, professional tools, and construction products that support safe and efficient work environments across industrial and construction sectors.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-heading">Industrial-grade safety products</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-heading">Trusted partnerships</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-section-alt rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 0a9 9 0 019 0 9 9 0 00-9 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1A1 1 0 001 1h1m-6 0L9 9m0-9L-9 9m0-9h.01" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              02. Our <span className="text-primary">Vision</span>
            </h3>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              To become a trusted global supplier of industrial safety equipment, professional tools, and construction solutions known for reliability, quality, and long-term partnerships.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-heading">Industry leadership</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-heading">Sustainable solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact in Numbers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Impact in <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-lg text-text-body">
            Trusted by contractors and industrial professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-section-alt rounded-2xl p-6 text-center border border-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {stat.icon}
                </svg>
              </div>
              
              <div className="text-3xl font-bold text-text-heading mb-2">
                {stat.number}
              </div>
              
              <h4 className="text-lg font-semibold text-text-heading mb-2">
                {stat.title}
              </h4>
              
              <div className="border-t border-border pt-3">
                <p className="text-sm text-text-body">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
