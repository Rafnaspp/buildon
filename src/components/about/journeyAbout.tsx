import Link from "next/link"

export default function JourneyAbout() {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "BUILDON was established in UAE focusing on construction materials and industrial supply trading."
    },
    {
      year: "2018",
      title: "Regional Expansion",
      description: "Expanded supply network across GCC markets and established partnerships with major manufacturers."
    },
    {
      year: "2020",
      title: "Product Diversification",
      description: "Introduced safety equipment, fasteners, power tools, and packing materials to serve industrial clients."
    },
    {
      year: "2024",
      title: "Trusted Global Supplier",
      description: "Serving contractors, factories, and distributors with reliable sourcing and logistics support."
    }
  ]

  return (
    <section id="journey" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our <span className="text-yellow-400">Journey</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small trading firm to a global leader, discover how BUILDON has evolved 
            while staying true to our core values of quality, trust, and innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center">
                {/* Year Badge */}
                <div className="flex-shrink-0 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {milestone.year}
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Join us as we continue to grow and innovate in the global trading industry.
              Your success is our success story.
            </p>
            <Link href="/contact">
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Request a Quote
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
