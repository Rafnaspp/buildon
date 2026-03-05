export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-section-alt text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Welcome Section */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-white mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              INDUSTRIAL SAFETY & CONSTRUCTION SUPPLIES
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Welcome to <span className="text-yellow-400">BUILDON</span> Building Materials Trading LLC, your trusted supplier of
               <span className="text-yellow-400"> industrial safety equipment, tools, and construction supplies</span>
            </h2>
            <p className="text-black text-lg mb-8 leading-relaxed">
              We provide a wide range of industrial safety equipment, professional tools, and construction products
               designed for modern worksites. From protective gear to heavy-duty tools, BUILDON supports contractors,
                engineers, and industrial professionals with reliable and high-quality solutions.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-1 md:flex md:columns-3 gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-black border border-gray-800 rounded-full">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-medium">Industrial Grade Products</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-black border border-gray-800 rounded-full">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-medium">Quality Assured</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-black border border-gray-800 rounded-full">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-medium">8+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-transparent rounded-2xl border border-border">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-text-body">BUILDON Product & Safety Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
