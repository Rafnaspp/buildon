import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background text-text-body overflow-hidden">
      {/* Background Pattern */}
      <div className="relative absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-section-alt border border-gray-800 rounded-full mb-8">
          <span className="text-primary text-sm font-medium">Trusted Industrial Supplier</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 leading-tight">
          Looking for Reliable
          <span className="text-primary"> Industrial Supplies</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-text-body mb-8 max-w-3xl mx-auto leading-relaxed">
          BUILDON supplies high-quality safety products, fasteners, tools, and industrial
           equipment trusted by contractors, engineers, and industrial professionals across the region.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link href="tel:+971 56 269 6505">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-2">Call Us</h3>
            <p className="text-text-secondary">+971 56 269 6505</p>
          </div>
          </Link>
          <Link href="mailto:info@buildontradingllc.com">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-text-heading mb-2">Email Us</h3>
            <p className="text-text-body">info@buildontradingllc.com</p>
          </div>
          </Link>
          <Link href="https://www.google.com/maps?q=Media+City,AL+Massaned,Sharjah">
          <div className="text-center group hover:text-yell">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-heading mb-2">Visit Us</h3>
            <p className="text-text-secondary">Media City<br />Al Massaned, Sharjah</p>
          </div>
          </Link>
        </div>

        {/* CTA Buttons */}
       

        {/* Trust Indicators */}
      
      </div>
    </section>
  )
}
