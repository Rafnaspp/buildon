"use client";
import { useState,useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductGrid from "./ProductGrid";
import ProductsToolbar from "./ProductToolbar";
import ProductList from "./ProductList";

export default function ProductContainer(){
    const SearchParams = useSearchParams();
    const categoryFormUrl = (SearchParams.get("category"))
    const [search,setSearch] = useState(""); // search query state
    const [category,setCategory] = useState(categoryFormUrl||"All"); // category filter state
    const [filterBrand,setFilterBrand] = useState(""); // brand filter state
    const [gridView,setGridView] = useState(true); //view toggle state
    const filteredProducts = useMemo(()=>{
        return products.filter((product)=>{
            const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
            || product.description.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = category === "All" || product.category === category;
            const matchesBrand = !filterBrand || product.brand === filterBrand;
            return matchesSearch && matchesCategory && matchesBrand; //All filters must match for product to be included
        });
    },[search,category,filterBrand]);

    return (
        <>
            <section className="max-w-7xl mx-auto py-16 px-6">
            <div className="flex justify-center gap-4 pointer-events-auto overflow-x-auto">
            <ProductsToolbar 
            search={search}
            setSearch={setSearch}
            filterBrand={filterBrand}
            setFilterBrand={setFilterBrand}
            category={category}
            setCategory={setCategory}
            gridView={gridView}
            setGridView={setGridView}
            />
            </div>
            {/* render grid or list based on state */}
            {gridView ? (
                <ProductGrid products={filteredProducts} />
            ) : (
                <ProductList products={filteredProducts} />
            )}
            {/*show count of filtered products */}
            <p className="mt-6 text-sm text-gray-500">Showing {filteredProducts.length} of {products.length}</p>
        </section>
    </>
    )
}