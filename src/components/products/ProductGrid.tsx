import { Phone } from "lucide-react";
import Link from "next/link";

interface Product { // Define the Product interface to specify the structure of product objects
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

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps){
    return (
        <section className="py-16 h-full bg-gray-50 p-6 relative" style={{ isolation: 'isolate' }}>
            <div className="grid w-full h-full md:grid-cols-4  gap-8 max-w-7xl mx-auto px-6 relative z-20">
                {products.map((product) => (
                    <div  //pruct details
                        key={product.slug} 
                        className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-lg transition transform overflow-hidden hover:scale-105 duration-300 ease-in-out relative z-30"
                    >
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-56 object-cover rounded-t-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                        <div className="p-4 flex flex-col flex-1"> 
                          <h2 className="text-lg font-extrabold text-font-heading">{product.title}</h2>
                          <p className="text-font-body flex-1">{product.description}</p>
                          <Link href="tel:+971 56 269 6505">
                          <button className="mt-auto w-full flex justify-center items-center gap-4  py-2 px-4 border border-gray-300 rounded-2xl font-extralight
                            hover:outline-1 hover:border-yellow-400 hover:outline-yellow-400 hover:text-yellow-400 transition-all ease-in hover:bg-gray-100">
                            <Phone className="h-5 "/> 
                            <div>
                                Call for Quote
                            </div>
                          </button>
                          </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
