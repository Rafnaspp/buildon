interface Gallery { // Define the Product interface to specify the structure of product objects
    id: number;
  title: string;
  description: string;
  type: 'product' | 'material' | 'equipment' | 'installation' | 'project';
  location: string;
  alt: string;
}

interface GalleryListProps {
    gallery: Gallery[];
}

export default function GalleryList({ gallery }: GalleryListProps){
    return (
        <section className="py-16 bg-gray-50 p-6 relative" style={{ isolation: 'isolate' }}>
            <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto px-6 relative z-20">
                {gallery.map((image) => (
                    <div 
                        key={image.id} 
                        className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition transform overflow-hidden hover:scale-105 duration-300 ease-in-out relative z-30"
                    >
                        {image.type == "Videos" ? (
                            <div className="w-full h-56 md:w-64 lg:w-72 flex-shrink-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                >
                                    <source src={image.location} type="video/mp4"></source>
                                </video>
                            </div>
                        ) : (
                            <div className="w-full h-56 md:w-64 lg:w-72 flex-shrink-0">
                                <img
                                    src = {image.location}
                                    alt = {image.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <div className="p-4 flex-1">
                          <h2 className="text-lg font-extrabold text-font-heading">{image.title}</h2>
                          <p className="text-font-body mb-4">{image.description}</p>
                        
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
