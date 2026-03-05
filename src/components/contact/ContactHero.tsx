import Image from "next/image";
import ContactHeroButton from "./ContactHeroButtons";
export default function ContactHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 sm:pt-28 lg:pt-32">
            <div className="absolute inset-0">
                    <Image
                        src="/hero.png"
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"> </div>
            </div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-yellow-400
                 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-xl filter
                  animate-gradient mb-8 " style={{backgroundSize:'200% 200%'
                  }}>Let's Build Something <br></br>Amazing Together</h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md sm:max-w-xl lg:max-w-2xl mx-auto px-2">Ready to start your construction project? Our team of
                 experts is here to help you find the perfect materials and solutions for your needs.
             </p>
             <div className="mt-10">
                <ContactHeroButton/>
             </div>
        </div>
        </section>
    )
}