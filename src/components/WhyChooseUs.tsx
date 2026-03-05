import Link from "next/link"

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      title: "Quality Products",
      description: "We supply industrial-grade safety equipment, tools, and construction products designed for durability, safety, and professional performance."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Competitive Pricing",
      description: "Strong relationships with manufacturers allow us to offer competitive pricing while maintaining high industrial quality standards."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m-1 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Fast Delivery",
      description: "Our efficient logistics network ensures reliable delivery of industrial products across the UAE, GCC, and international markets."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2m-6 0l6 6m0-9L3 9m0 0L9 3m0 9h.01" />
      ),
      title: "Expert Support",
      description: "Our team helps you select the right safety equipment, tools, and industrial products to meet your operational requirements."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Wide Range",
      description: "A wide range of safety equipment, power tools, and industrial products designed to support modern construction and industrial operations."
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      title: "Reliable Service",
      description: "Consistent product quality and dependable service make BUILDON a trusted partner for contractors and industrial professionals."
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-section-alt text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Why Choose <span className="text-primary">BUILDON</span>
          </h2>
          <p className="text-lg text-text-body max-w-3xl mx-auto">
            Discover why contractors and industrial buyers trust BUILDON for safety equipment, professional tools, and construction supplies
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group">
              {/* Icon */}
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-text-heading mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-text-body leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/products">
          <button className="bg-primary text-text-heading px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 ease-in">
            View Product Catalogue
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
