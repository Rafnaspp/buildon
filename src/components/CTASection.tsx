export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background text-text-body overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-section-alt border border-gray-800 rounded-full mb-8">
          <span className="text-primary text-sm font-medium">Start Trading Globally</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 leading-tight">
          Ready to Expand Your
          <span className="text-primary"> Business</span> Globally?
        </h2>

        {/* Description */}
        <p className="text-lg text-text-body mb-8 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of successful businesses that have partnered with BUILDON for their international trading needs. 
          Let's discuss how we can help you reach new markets and grow your business.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-2">Call Us</h3>
            <p className="text-text-secondary">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Email Us</h3>
            <p className="text-text-body">trade@buildon.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-heading mb-2">Visit Us</h3>
            <p className="text-text-secondary">123 Trade Center<br />Global City, GC 12345</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary text-text-heading px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
            Start Trading Partnership
          </button>
          <button className="border border-border text-text-heading px-8 py-4 rounded-md text-lg font-semibold hover:bg-section-alt transition-colors">
            Download Trading Guide
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-text-secondary mb-6">Trusted by leading global companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Global Corp", "Trade Int'l", "World Trade", "Export Plus", "Import Pro"].map((company, index) => (
              <div key={index} className="w-24 h-8 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
