import Link from "next/link"

export default function ServicesAbout() {
  const services = [
    {
      title: "Import & Export",
      description: "Comprehensive import and export services facilitating seamless international trade across multiple product categories.",
      icon: "📦"
    },
    {
      title: "Global Sourcing", 
      description: "Strategic sourcing solutions connecting businesses with quality suppliers and manufacturers worldwide.",
      icon: "🌍"
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions optimizing logistics, inventory, and distribution processes.",
      icon: "🚚"
    },
    {
      title: "Trading Consultancy",
      description: "Expert consulting services for market entry strategies, trade regulations, and international business development.",
      icon: "💼"
    },
    {
      title: "Warehousing & Storage",
      description: "Secure warehousing and storage solutions with advanced inventory tracking and management systems.",
      icon: "🏭"
    },
    {
      title: "Financial Services",
      description: "Trade finance solutions including letters of credit, payment processing, and risk management services.",
      icon: "💰"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and inspection services ensuring all products meet international standards.",
      icon: "✅"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From sourcing to delivery, BUILDON offers a complete suite of trading services 
            designed to streamline your international business operations and maximize efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Need Custom Trading Solutions?
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a tailored solution for your business needs.
            </p>
            <Link href="/contact">
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Custom Quote
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
