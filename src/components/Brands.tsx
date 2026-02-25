export default function Brands() {
  const brands = [
    { name: "Brand 1", logo: "/brand1.png" },
    { name: "Brand 2", logo: "/brand2.png" },
    { name: "Brand 3", logo: "/brand3.png" },
    { name: "Brand 4", logo: "/brand4.png" },
    { name: "Brand 5", logo: "/brand5.png" },
    { name: "Brand 6", logo: "/brand6.png" },
    { name: "Brand 7", logo: "/brand7.png" },
    { name: "Brand 8", logo: "/brand8.png" },
    { name: "Brand 9", logo: "/brand9.png" },
    { name: "Brand 10", logo: "/brand10.png" },
    { name: "Brand 11", logo: "/brand11.png" },
    { name: "Brand 12", logo: "/brand12.png" }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Trusted by Leading
            <span className="text-yellow-400"> Brands</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with world-renowned manufacturers and suppliers to bring you 
            the highest quality construction materials and equipment.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src="image.png"
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Want to Become a Partner?
            </h2>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Join our network of trusted brands and reach thousands of construction professionals across the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-yellow-400 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
                Become a Partner
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
                View All Brands
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
