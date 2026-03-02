import {products} from "@/data/products";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/products/ProductHero";

import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProductContainer from "@/components/products/ProductContainer";
export default function ProductsPage(){
    return(
        <main className="min-h-screen bg-background text-text-body">
            <Navbar/>
            <ProductHero/> 
            <ProductContainer/>
            <Footer/>
        </main>
    )}