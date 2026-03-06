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
        <div className="grid grid-cols-1 gap-4 w-full px-8 mb-8 isolate-auto ">
            {/* first row: search + filter  */}
            <div className="md:col-span-3 absolute-fix max-w-7xl flex justify-center gap-4">
                <div className="bg-white flex items-center gap-4">
                    {/* Search bar div */}
                    <div className="relative "> 
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 "></Search>
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-12 w-full lg:w-[520px]  h-4 max-w-5xl pr-4 py-4 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition ease-in"
                        />
                    </div>
                    <button className={`px-3 py-2 flex-end rounded-lg hidden md:block ${gridView ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}transition ease-in`} onClick={()=>setGridView(true)}><LayoutGrid/></button>
                    <button className={`px-3 py-2 rounded-lg hidden md:block ${gridView ? 'bg-gray-200 text-gray-800' : 'bg-primary text-white'}`} onClick={()=>setGridView(false)}><List/></button>
                </div>
            </div>
            <div className="border-y-2 w-max-8xl">
            {/* second row: category buttons across grid */}
            <div className="border-y-2">

  {/* full width scroll wrapper */}
  <div className="w-full">

    {/* centered content container */}
    <div className="max-w-7xl mx-auto px-8">

      {/* scrollable row */}
      <div className="flex gap-3 overflow-x-auto flex-nowrap py-6 scrollbar-hide">

        <button
          onClick={() => setCategory("All")}
          className={`min-w-max whitespace-nowrap px-4 py-2 rounded-full ${
            category === "All"
              ? "bg-primary text-black"
              : "border border-gray-800 hover:bg-gray-100"
          }`}
        >
          All Products
        </button>

        {categories.map((pro_cat) => (
          <button
            key={pro_cat}
            onClick={() => setCategory(pro_cat)}
            className={`min-w-max whitespace-nowrap px-4 py-2 rounded-full ${
              category === pro_cat
                ? "bg-primary text-black"
                : "border border-gray-800 hover:bg-gray-100"
            }`}
          >
            {pro_cat}
          </button>
        ))}

      </div>

    </div>
  </div>

</div>
        </div>
        </div>
        </>
    )
}