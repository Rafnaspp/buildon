'use client'
import { galleryImages } from "@/data/gallery";
import { LayoutGrid, List } from "lucide-react";
interface GalleryToolbarProps { 
    type: string;
    setType: (value: string) => void;
    gridView: boolean;
    setGridView: (value: boolean) => void;
}

export default function GalleryToolbar({

    type,
    setType,
    gridView,
    setGridView
}: GalleryToolbarProps) {
    const uniqueTypes = Array.from(new Set(galleryImages.map(image => image.type)));
    return (
        
        <>
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start px-8 py-6">
                    <button 
                    onClick={()=>setType('all')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${type === 'all' ? 'bg-primary text-white shadow-lg scale-105' 
                            :'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                        }`}>
                            All
                        </button>
                {uniqueTypes.map((categoryType) => (
                    <button 
                    onClick={()=>setType(categoryType)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${type === categoryType ? 'bg-primary text-white shadow-lg scale-105' 
                            :'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                        }`}>
                            {categoryType}
                        </button>
                    
                ))}
                <button className={`px-4 py-2 rounded-lg hidden md:block ${gridView ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`} onClick={()=>setGridView(true)}><LayoutGrid /></button>
                    <button className={`px-4 py-2 rounded-lg hidden md:block ${gridView ? 'bg-gray-200 text-gray-800' : 'bg-primary text-white'}`} onClick={()=>setGridView(false)}><List /></button>
            </div>
        </>
    )
}