'use client'
import { useState } from "react"
import { categories } from "@/data/products"
import { Search, LayoutGrid, List } from "lucide-react"

interface ProductsToolbarProps {
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  gridView: boolean
  setGridView: (value: boolean) => void
}

export default function ProductsToolbar({
  search,
  setSearch,
  category,
  setCategory,
  gridView,
  setGridView,
}: ProductsToolbarProps) {
  const [showFilter, setShowFiler] = useState(false)
  return (
    <>
      {/* toolbar grid container */}
      <div className="grid grid-cols-1 w-full gap-4 px-8 mb-8 isolate-auto">
        
        {/* first row: search + view toggle */}
        <div className="md:col-span-3 absolute-fix max-w-7xl flex justify-center gap-4">
          <div className="flex items-center gap-4 bg-white">

            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 pr-4 py-4 h-4 w-full lg:w-[520px] max-w-5xl border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition ease-in"
              />
            </div>

            {/* Grid view button */}
            <button
              onClick={() => setGridView(true)}
              className={`px-3 py-2 rounded-lg hidden md:block transition ease-in ${
                gridView
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <LayoutGrid />
            </button>

            {/* List view button */}
            <button
              onClick={() => setGridView(false)}
              className={`px-3 py-2 rounded-lg hidden md:block ${
                gridView
                  ? "bg-gray-200 text-gray-800"
                  : "bg-primary text-white"
              }`}
            >
              <List />
            </button>
            {/* Filter button nav */}
            <button
              onClick={()=>setShowFiler(!showFilter)}
              className="px-3 py-2 rounded-lg sm:hidden bg-primary text-white">Filter
            </button>
          </div>
        </div>
        
        {/* Mobile category Navigation bar */}
        {showFilter && (
          <div className="sm:hidden px-8 mt-4">
            <select
              value = {category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option value="All">All products</option>
              {categories.map((cat)=>(
                <option key={cat} value={cat}>
                  {cat}
                  </option>))}
            </select>
            </div>
        )}
        {/* second row container */}
        <div className="border-y-2 w-max-8xl">

          {/* category buttons */}
          <div className="hidden sm:block border-y-2">

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