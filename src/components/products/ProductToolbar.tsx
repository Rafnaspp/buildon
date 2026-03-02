'use client'

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
    filterBrand,
    setFilterBrand,
    category,
    setCategory,
    gridView,
    setGridView
}: ProductsToolbarProps) {
    return (
        <>
        {/* toolbar grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-8 py-6 mb-8">
            {/* first row: search + filter  */}
            <div className="md:col-span-3">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <input
                        type="text"
                        placeholder="Search Products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full lg:w-2/3 xl:w-1/2 border rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <select
                        value={filterBrand}
                        onChange={(e) => setFilterBrand(e.target.value)}
                        className="mt-4 md:mt-0 w-full md:w-1/4 border rounded-lg px-4 py-2"
                    >
                        <option value="">All Brands</option>
                        <option value="Lumina">Lumina</option>
                        <option value="Northfield">Northfield</option>
                        <option value="GlowHome">GlowHome</option>
                        <option value="ForgeTech">ForgeTech</option>
                        <option value="CableCo">CableCo</option>
                    </select>
                    <button className={`px-4 py-2 rounded-lg hidden md:block ${gridView ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`} onClick={()=>setGridView(true)}>Grid</button>
                    <button className={`px-4 py-2 rounded-lg hidden md:block ${gridView ? 'bg-gray-200 text-gray-800' : 'bg-primary text-white'}`} onClick={()=>setGridView(false)}>List</button>
                </div>
            </div>

            {/* second row: category buttons across grid */}
            <div className="md:col-span-3">
                <div className="flex flex-col gap-8 md:flex-row justify-between items-start md:items-center border-y-2 border-x-0 border-gray-100 p-8 w-full ">
                    <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("All")}
                className={`px-4 py-2 rounded-full ${
                    category === 'All' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >All Products</button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("Electronics")}
                className={`px-4 py-2 rounded-full ${
                    category === 'Electronics' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >Electronics</button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("Apparel")}
                className={`px-4 py-2 rounded-full ${
                    category === 'Apparel' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >Apparel</button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("Home")}
                className={`px-4 py-2 rounded-full ${
                    category === 'Home' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >Home</button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("Industrial")}
                className={`px-4 py-2 rounded-full ${
                    category === 'Industrial' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >Industrial</button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <button onClick={()=>setCategory("Accessories")}
                className={`px-4 py-2 rounded-full ${
                    category === 'Accessories' ? 'bg-primary text-black hover:scale-105 transition ease-in' : 'bg-white-100 border border-gray-800 hover:bg-gray-100 transition ease-in'
                }`}
                >Accessories</button>
            </div>
                </div>
            </div>
        </div>
        </>
    )
}