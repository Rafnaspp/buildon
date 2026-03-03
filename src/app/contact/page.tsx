import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactHero from "@/components/contact/ContactHero"
export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col">
        <Navbar/>
        <ContactHero/>
        <Footer/>
        </main>
    )
}