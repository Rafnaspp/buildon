export default function MissionAbout() {
  const missionFeatures = [
  {
    title: "Reliable Materials",
    description: "We supply high-quality construction materials, safety equipment, and industrial tools trusted by contractors and businesses.",
    icon: "🛠️"
  },
  {
    title: "Contractor Support",
    description: "We work closely with contractors and companies to ensure they receive the right materials at the right time.",
    icon: "🤝"
  },
  {
    title: "Global Sourcing",
    description: "Our international supplier network allows us to source high-quality products from trusted manufacturers worldwide.",
    icon: "🌍"
  },
  {
    title: "Efficient Supply",
    description: "Fast logistics and dependable delivery ensure our clients can keep their projects moving without delays.",
    icon: "🚚"
  }
]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our <span className="text-yellow-400">Mission</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide reliable construction materials, safety products,
             and industrial tools that empower contractors, manufacturers, and builders to deliver projects efficiently and safely.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Building Tomorrow, Today
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At BUILDON, we're not just trading materials – we're building relationships, 
              fostering growth, and creating opportunities that shape the future of construction 
              and development across the globe.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Join Our Mission
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Partner with us and be part of a mission that's building a better future through quality and excellence.
            </p>
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
