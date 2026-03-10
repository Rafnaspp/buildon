interface Gallery { // Define the Product interface to specify the structure of product objects
    id: number;
  title: string;
  description: string;
  type: string;
  location: string;
  alt: string;
}

interface GalleryGridProps {
    gallery: Gallery[];
}

export default function GalleryGrid({ gallery }: GalleryGridProps){
    return (
        <section className="py-16 bg-gray-50 p-6 relative" style={{ isolation: 'isolate' }}>
            <div className="grid  md:grid-cols-3  gap-8 max-w-7xl mx-auto px-6 relative z-20">
                {gallery.map((image) => (
                    <div key={image.id} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative z-30 h-80">
                        {/* Image Container */}
                        {image.type === "Videos" ? (
                            <div className="relative w-full h-full overflow-hidden">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                >
                                    <source src={image.location} type="video/mp4"/>
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
                                {/* Content - slides up from bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h2 className="text-white text-xl font-bold mb-2">{image.title}</h2>
                                    <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
            
                
                                </div>
                            </div>
                        ) : (
                        <div className="relative w-full h-full overflow-hidden">
                            <img 
                                src={image.location} 
                                alt={image.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
        
                            {/* Yellow gradient overlay that appears on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
                                {/* Content - slides up from bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h2 className="text-white text-xl font-bold mb-2">{image.title}</h2>
                                    <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
            
                
                                </div>
                            </div>
                            )}
                        </div>
                        
                ))}
            </div>
        </section>
    )
}
