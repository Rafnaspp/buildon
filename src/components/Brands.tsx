export default function Brands() {
  const brands = [
    { name: "Dewalt", logo: "/images/brands/dewalt.png" },
    { name: "Makita", logo: "/images/brands/makita.png" },
    { name: "Bosch", logo: "/images/brands/bosch.png" },
    { name: "Clarke", logo: "/images/brands/clarke.png" },
    { name: "Geepas", logo: "/images/brands/geepas.png" },
    { name: "Stanley", logo: "/images/brands/stanley.png" },
    { name: "Uken", logo: "/images/brands/uken.png" },
    { name: "Starrett", logo: "/images/brands/starret.png" },
    { name: "Karcher", logo: "/images/brands/karcher.png" },
    { name: "Araldite", logo: "/images/brands/araldite.png" },
    { name: "National paints", logo: "/images/brands/national_pains.png" },
    { name: "Pidilite", logo: "/images/brands/pidilite.png" },
    { name: "Insize", logo: "/images/brands/dewalt.png" },
    { name: "Mitutoyo", logo: "/images/brands/makita.png" },
    { name: "Dormer", logo: "/images/brands/dormer.png" },
    { name: "WD-40", logo: "/images/brands/wd-40.png" },
    { name: "RR Kabel", logo: "/images/brands/rr_kabel.png" },
    { name: "Scheider Electric", logo: "/images/brands/schneider.png" },
    { name: "Andeli", logo: "/images/brands/andeli.png" },
    { name: "Philips", logo: "/images/brands/philips.png" },
    { name: "Gewiss", logo: "/images/brands/gewiss.png" },
    { name: "Admore", logo: "/images/brands/admore.png" },
    { name: "Khaleegia", logo: "/images/brands/khaleegia.png" },
    { name: "Duracell", logo: "/images/brands/duracell.png" },
    { name: "Groher", logo: "/images/brands/groher.png" },
    { name: "KludiRak", logo: "/images/brands/kludirak.png" },
    { name: "Milano", logo: "/images/brands/milano.png" },
    { name: "Aristone", logo: "/images/brands/ariston.png" },
    { name: "Tredex", logo: "/images/brands/tredex.png" },
    { name: "Khads", logo: "/images/brands/khads.png" },
    { name: "Vaultex", logo: "/images/brands/vaultex.png" },
    { name: "Zecchin", logo: "/images/brands/zecchin.png" },
    { name: "Honeywell", logo: "/images/brands/honeywell.png" },
    { name: "Armstrong", logo: "/images/brands/armstrong.png" },
    { name: "Miller", logo: "/images/brands/miller.png" },
    { name: "Workland", logo: "/images/brands/workland.png" }
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
            We collaborate with trusted global manufacturers to deliver reliable industrial tools,
             safety products, fasteners, and construction supplies used by professionals across the
              region.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex items-center justify-center h-32 hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-20 md:max-h-24 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-400 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Need products from a specific manufacturer?
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
