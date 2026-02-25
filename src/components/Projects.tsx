// export default function Projects() {
//   const projects = [
//     {
//       title: "Asia-Pacific Expansion",
//       category: "Market Entry",
//       description: "Successfully facilitated market entry for electronics manufacturer across 12 Asian markets with full regulatory compliance.",
//       features: ["12 Markets", "100% Compliance", "6-Month Timeline"],
//       status: "Completed"
//     },
//     {
//       title: "European Supply Chain",
//       category: "Logistics",
//       description: "Established comprehensive supply chain network for automotive parts distributor serving 8 European countries.",
//       features: ["8 Countries", "24/7 Delivery", "Cost Reduction 30%"],
//       status: "Completed"
//     },
//     {
//       title: "Americas Trading Hub",
//       category: "Distribution",
//       description: "Created centralized distribution hub for consumer goods company covering North and South American markets.",
//       features: ["15 Countries", "Central Hub", "Inventory Optimization"],
//       status: "In Progress"
//     },
//     {
//       title: "Middle East Sourcing",
//       category: "Sourcing",
//       description: "Developed strategic sourcing partnerships for construction materials across Gulf Cooperation Council countries.",
//       features: ["6 GCC Countries", "50+ Suppliers", "Quality Certified"],
//       status: "Completed"
//     },
//     {
//       title: "African Trade Network",
//       category: "Network Development",
//       description: "Built comprehensive trading network for agricultural products connecting 20+ African nations with global markets.",
//       features: ["20+ Countries", "Agri Products", "Direct Farm Links"],
//       status: "In Progress"
//     },
//     {
//       title: "Global E-Commerce Platform",
//       category: "Digital Trading",
//       description: "Launched digital trading platform connecting 1000+ suppliers with buyers across 50+ countries worldwide.",
//       features: ["1000+ Suppliers", "50+ Countries", "Digital Platform"],
//       status: "Planning"
//     }
//   ]

//   const categories = ["All", "Market Entry", "Logistics", "Distribution", "Sourcing", "Network Development"]

//   return (
//     <section id="projects" className="py-16 lg:py-24 bg-section-alt text-text-body">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-black border border-gray-800 rounded-full mb-6">
//             <span className="text-primary text-sm font-medium">Success Stories</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
//             Featured
//             <span className="text-primary"> Case Studies</span>
//           </h2>
          
//           <p className="text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
//             Discover how we've helped businesses expand globally through our innovative trading solutions 
//             and strategic partnerships across multiple industries and markets.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 category === "All"
//                   ? "bg-primary text-text-heading"
//                   : "bg-background text-text-body border border-border hover:border-primary"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
//             >
//               {/* Image Placeholder */}
//               <div className="aspect-video bg-gradient-to-br from-primary/20 to-transparent relative">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-2"></div>
//                     <p className="text-text-body mb-4">{project.description}</p>
//                   </div>
//                 </div>
                
//                 {/* Status Badge */}
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     project.status === "Completed" 
//                       ? "bg-green-900/80 text-green-300"
//                       : project.status === "In Progress"
//                       ? "bg-blue-900/80 text-blue-300"
//                       : "bg-yellow-900/80 text-yellow-300"
//                   }`}>
//                     {project.status}
//                   </span>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-primary text-sm font-medium">{project.category}</span>
//                   <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h3>
                
//                 <p className="text-text-body text-sm mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 {/* Features */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.features.map((feature, featureIndex) => (
//                     <span
//                       key={featureIndex}
//                       className="px-3 py-1 bg-section-alt border border-gray-700 rounded-full text-xs text-text-body"
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="mt-16 text-center">
//           <button className="bg-primary text-text-heading px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
//             View All Case Studies
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

