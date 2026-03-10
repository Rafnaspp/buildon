import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryContainer from "@/components/gallery/GalleryContainer";
export default function Gallery(){
    return(
        <main className="min-h-screen bg-background text-text-body">
            <Navbar/>
            <GalleryHero/>
            <GalleryContainer/>
            <Footer/>
        </main>
    )
}