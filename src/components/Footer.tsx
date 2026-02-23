export default function Footer() {
  return (
    <footer className="bg-section-alt text-text-body border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded mr-3"></div>
              <h3 className="text-xl font-bold text-text-heading mb-6">About <span className="text-primary">BUILDON</span></h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Leading global trading company delivering excellence in international commerce. 
              Connecting businesses worldwide through innovative trading solutions since 2010.
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
              {['About Us', 'Services', 'Case Studies', 'Markets', 'Partners', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-text-heading mb-6">Trading Services</h3>
            <ul className="space-y-2">
              {[
                'Import & Export',
                'Global Sourcing',
                'Supply Chain Management',
                'Trading Consultancy',
                'Warehousing & Storage',
                'Financial Services'
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
                  <p className="text-text-secondary text-sm">123 Trade Center</p>
                  <p className="text-text-secondary text-sm">Global City, GC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-text-secondary text-sm">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-text-secondary text-sm">trade@buildon.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-text-body mb-2">Trading Updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-text-heading placeholder-text-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
                />
                <button className="w-full bg-primary text-text-heading px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
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
