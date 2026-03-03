import Image from "next/image";
import ContactHeroButton from "./ContactHeroButtons";
export default function ContactHero() {
    return (
        <section className="relative min-h-screen flex items-start justify-center pt-32">
            <div className="absolute inset-0">
                    <Image
                        src="/hero.png"
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"> </div>
            ></div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-extrabold text-6xl mt-40 bg-gradient-to-r from-yellow-400
                 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-xl filter
                  animate-gradient mb-8 " style={{backgroundSize:'200% 200%'
                  }}>Let's Build Something <br></br>Amazing Together</h1>
            <p className="mt-8 justify-center">Ready to start your construction project? Our team of
                 experts is here to help you find <br></br>the perfect materials and solutions for your needs.
             </p>
             <div className="-translate-y-36">
                <ContactHeroButton/>
             </div>
        </div>
        </section>
    )
}