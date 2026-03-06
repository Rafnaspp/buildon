'use client'
import {categories} from "@/data/products";
import { Search , LayoutGrid, List } from "lucide-react";
interface ProductsToolbarProps {
    search: string;
    setSearch: (value: string) => void;
    filterBrand: string;
    setFilterBrand: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    gridView: boolean;
    setGridView: (value: boolean) => void;
}

export default function ProductsToolbar({
    search,
    setSearch,
    // filterBrand,
    // setFilterBrand,
    category,
    setCategory,
    gridView,
    setGridView
}: ProductsToolbarProps) {
    return (
        <>
        {/* toolbar grid container */}
        <div className="grid grid-cols-1 gap-4 w-full px-8 py-6 mb-8 isolate-auto ">
            {/* first row: search + filter  */}
            <div className="md:col-span-3 absolute-fix">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 sticky top-20 z-20">
                    <div className="relative w-full lg:w-2/3 xl:w-1/2">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></Search>
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition ease-in"
                        />
                    </div>
                    {/* <select
                        value={filterBrand}
                        onChange={(e)=>setFilterBrand(e.target.value)}
                        className="mt-4 md:mt-0 w-full md:w-1/4 border rounded-lg px-4 py-2"
                    >
                        <option value="">All Brands</option>
                        {brands.map((brand)=>(
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select> */}
                    <button className={`px-3 py-2 rounded-lg hidden md:block ${gridView ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}transition ease-in`} onClick={()=>setGridView(true)}><LayoutGrid/></button>
                    <button className={`px-3 py-2 rounded-lg hidden md:block ${gridView ? 'bg-gray-200 text-gray-800' : 'bg-primary text-white'}`} onClick={()=>setGridView(false)}><List/></button>
                </div>
            </div>

            {/* second row: category buttons across grid */}
            <div className="md:col-span-3 w-full h-full">
                <div className="flex flex-col gap-8 md:flex-row justify-between items-start md:items-center   p-8 w-full ">
                    <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("All")}
                className={`min-w-[140px] whitespace-nowrap px-4 py-2 rounded-full ${
                    category === 'All' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >All Products</button>
            </div>
            {categories.map((pro_cat)=>(
                <div className="flex gap-3 flex-wrap">
                    <button onClick={()=>setCategory(pro_cat)}
                    className={`min-w-[140px] px-4 py-2 whitespace-nowrap rounded-full ${
                        category === pro_cat ? 'bg-primary text-black hover:scale-105 transition ease-in ': 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                    }`}
                    >{pro_cat}</button>
                    </div>
            ))}
            
                </div>
            </div>
        </div>
        </>
    )
}