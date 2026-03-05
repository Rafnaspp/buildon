import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactHero from "@/components/contact/ContactHero"
import ContactBody from "@/components/contact/ContactBody"
export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col">
        <Navbar/>
        <ContactHero/>
        <ContactBody/>
        <Footer/>
        </main>
    )
}