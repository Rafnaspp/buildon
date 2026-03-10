"use client";
import { useState,useMemo } from "react";
import { galleryImages } from "@/data/gallery";
import GalleryGrid from "./GalleryGrid";
import GalleryToolbar from "./GalleryToolbar";
import GalleryList from "./GalleryList";

export default function GalleryContainer(){
    const [type,setType] = useState("all"); // category filter state
    const [gridView,setGridView] = useState(true); //view toggle state
    const filteredGallery = useMemo(()=>{
        return galleryImages.filter((gallery)=>{
            
            const matchesType = type === "all" || gallery.type === type;
            
            return matchesType; //Only type filter is applied in this version
        });
    },[type]);

    return (
        <>
            <section id="gallery" className="max-w-7xl mx-auto py-16 px-6">
            <div className="flex justify-center gap-4 pointer-events-auto overflow-x-auto">
            <GalleryToolbar 
            type={type}
            setType={setType}
            gridView={gridView}
            setGridView={setGridView}
            />
            </div>
            {/* render grid or list based on state */}
            {gridView ? (
                <GalleryGrid gallery={filteredGallery} />
            ) : (
                <GalleryList gallery={filteredGallery} />
            )}
            {/*show count of filtered products */}
            <p className="mt-6 text-sm text-gray-500">Showing {filteredGallery.length} of {galleryImages.length}</p>
        </section>
    </>
    )
}