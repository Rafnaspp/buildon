import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-section-alt text-text-body border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image 
                src="/buldon.png" 
                alt="BUILDON Logo" 
                width={132} 
                height={32}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-text-heading mb-6">About <span className="text-primary">BUILDON</span></h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              BUILDON Building Materials Trading LLC supplies high-quality safety products, 
              fasteners, tools, and industrial supplies trusted by contractors, engineers, 
              and construction professionals.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-section-alt border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-text-heading transition-colors"
                >
                  <span className="text-xs text-text-secondary hover:text-text-heading">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-text-heading mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {['About','Products','Gallery','Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-text-heading mb-6">Product Categories</h3>
            <ul className="space-y-2">
              {[
                'Safety Products',
                'Fasteners',
                'Packing Materials',
                'Drill Bits & Router Bits',
                'Hand Tools',
                'Power Tools',
                'Lockings & Hinges'
].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-text-heading mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-text-secondary text-sm">Media City</p>
                  <p className="text-text-secondary text-sm">Al Massaned, Sharjah</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-text-secondary text-sm">+971 56 269 6505</p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-text-secondary text-sm">info@buildontradingllc.com</p>
              </div>
            </div>

            {/* Newsletter */}
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-body">&copy; 2024 BUILDON Building Materials Trading LLC. All rights reserved.</p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Compliance', 'Cookie Policy'].map((policy) => (
                <a
                  key={policy}
                  href="#"
                  className="text-text-secondary text-sm hover:text-primary transition-colors"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
