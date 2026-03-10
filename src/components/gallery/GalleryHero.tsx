import Image from "next/image"
export default function GalleryHero() {
    return (
        <section className="relative min-h-screen flex items-start justify-center pt-32">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/hero.png"
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
            </div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="font-extrabold pb-4 text-6xl mt-60 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-xl filter animate-gradient" style={{backgroundSize:'200% 200%'}}>Our Gallery</h1>
                <p className="mt-8 justify-center">Explore our wide range of industrial products including fasteners,
                safety equipment, abrasives, packing materials, and professional tools.</p>
                <a href="#gallery">
                <button className="mt-10 w-40  bg-yellow-400 text-black font-semibold py-2 
                px-4 rounded-full hover:bg-gradient-to-r from-yellow-400 via-yellow-200
                 to-white transition-colors hover:drop-shadow-xl filter animate-gradient" 
                 style={{backgroundSize:'200% 200%'}} >
                            Browse Gallery
                          </button></a>
            </div>
        </section>
    )
}