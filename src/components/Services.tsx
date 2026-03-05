export default function Services() {
  const services = [
  {
    title: "Industrial Safety Equipment",
    description: "High-quality personal protective equipment designed to ensure safety across construction and industrial environments.",
    features: ["Safety Helmets", "Protective Gloves", "Safety Goggles & PPE"]
  },
  {
    title: "Professional Power Tools",
    description: "Reliable power tools engineered for precision, durability, and performance in demanding worksite conditions.",
    features: ["Heavy-Duty Tools", "Industrial Equipment", "Precision Engineering"]
  },
  {
    title: "Construction Supplies",
    description: "Essential construction materials and tools supporting contractors and developers across multiple project stages.",
    features: ["Construction Tools", "Worksite Equipment", "Durable Materials"]
  },
  {
    title: "Global Product Sourcing",
    description: "Direct sourcing of high-quality industrial products from trusted international manufacturers.",
    features: ["Supplier Network", "Quality Verification", "Competitive Pricing"]
  },
  {
    title: "Bulk Supply Solutions",
    description: "Efficient bulk supply services tailored for contractors, distributors, and industrial buyers.",
    features: ["Large Order Fulfillment", "Reliable Stock Availability", "Flexible Supply Options"]
  },
  {
    title: "Industrial Product Distribution",
    description: "Streamlined logistics and distribution ensuring timely delivery of industrial products across regional markets.",
    features: ["Logistics Coordination", "Reliable Delivery", "Supply Chain Efficiency"]
  }
]

  return (
    <section id="services" className="py-16 lg:py-24 bg-background text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-section-alt border border-gray-800 rounded-full mb-6">
            <span className="text-primary text-sm font-medium">Our Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Industrial
            <span className="text-primary"> Trading</span> Solutions
          </h2>
          
          <p className="text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
            BUILDON provides industrial safety equipment, professional tools, and construction
             supplies designed to support contractors, engineers, and industrial operations with reliable and high-quality products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-section-alt border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-text-heading mb-4">{service.title}</h3>
              <p className="text-text-body leading-relaxed mb-6">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-text-secondary text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-section-alt rounded-2xl p-12 text-center border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Ready to Expand Your Global Trade?
            </h2>
            <p className="text-text-body mb-8 max-w-2xl mx-auto">
              Let's discuss how our trading expertise can help your business reach new markets and achieve growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-text-heading px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors">
                View Services
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
