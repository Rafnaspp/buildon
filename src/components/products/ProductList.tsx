interface Product {
    slug: string;
    title: string;
    category: string;
    description: string;
    price: number;
    features: string[];
    brand: string;
    tags: string[];
    image: string;
}

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps){
    return (
        <section className="py-16 bg-gray-50 p-6 relative" style={{ isolation: 'isolate' }}>
            <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto px-6 relative z-20">
                {products.map((product) => (
                    <div 
                        key={product.slug} 
                        className="flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition transform overflow-hidden hover:scale-105 duration-300 ease-in-out relative z-30"
                    >
                        <div className="w-full h-56 md:w-64 lg:w-72 flex-shrink-0">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex-1">
                          <h2 className="text-lg font-extrabold text-font-heading">{product.title}</h2>
                          <p className="text-font-body mb-4">{product.description}</p>
                          <button className="mt-4 w-full md:w-auto bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors">
                            Available Now
                          </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
