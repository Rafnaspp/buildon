export default function ProductCategories() {
  const categories = [
    {
      title: "Building Materials",
      description: "Premium quality construction materials for all your building needs",
      image: "/material.png",
      tags: ["Cement", "Steel", "Bricks", "Sand"],
      badge: "BEST SELLER",
      badgeColor: "bg-green-500"
    },
    {
      title: "Hardware & Tools",
      description: "Professional-grade tools and hardware for construction projects",
      image: "/hardware-tools.jpg",
      tags: ["Power Tools", "Hand Tools", "Fasteners", "Safety"],
      badge: "CERTIFIED",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Plumbing Supplies",
      description: "Complete plumbing solutions for residential and commercial projects",
      image: "/plumbing.jpg",
      tags: ["Pipes", "Fittings", "Valves", "Fixtures"],
      badge: "PREMIUM",
      badgeColor: "bg-purple-500"
    },
    {
      title: "Electrical Equipment",
      description: "High-quality electrical components and safety equipment",
      image: "/electrical.jpg",
      tags: ["Wiring", "Switches", "Circuit Breakers", "Lighting"],
      badge: "PRO GRADE",
      badgeColor: "bg-orange-500"
    },
    {
      title: "Paint & Finishes",
      description: "Wide range of paints, coatings, and finishing materials",
      image: "/paint.jpg",
      tags: ["Interior Paint", "Exterior Paint", "Primers", "Coatings"],
      badge: "PROFESSIONAL",
      badgeColor: "bg-red-500"
    },
    {
      title: "Safety Equipment",
      description: "Essential safety gear and equipment for construction sites",
      image: "/safety.jpg",
      tags: ["Helmets", "Gloves", "Vests", "Signage"],
      badge: "INNOVATION",
      badgeColor: "bg-indigo-500"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Complete Construction
            <span className="text-yellow-400"> Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From foundation to finishing, BUILDON provides comprehensive construction materials 
            and equipment for every phase of your project.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="relative">
                <div className={`absolute top-4 left-4 z-10 ${category.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {category.badge}
                </div>
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={"/material.png"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                <button className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors">
                  Available Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              We source thousands of products. Contact our team to find exactly what you need for your project.
            </p>
            <button className="bg-black text-yellow-400 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
