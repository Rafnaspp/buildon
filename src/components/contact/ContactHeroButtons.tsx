import { CalendarSearch, Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactHeroButton(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10 mt-6  md:mt-10 w-full max-w-6xl mx-auto pb-10">
            <a href="tel:++967 56 269 6505">
            <div className="group w-full h-[320px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group-hover:rotate-12 transition ease-in">
                    <Phone className="w-8 h-8" />
                </div>
                <h1 className="text-white pt-10     ">
                    Call Us
                </h1>
                <p className="text-white text-sm">
                    Speak with our experts
                </p>
                <p className="text-yellow-400">
                    +967 56 269 6505
                </p>
            </div>
            </a>
            <a href="mailto:info@buildontradingllc.com">
            <div className="group w-full h-[320px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col h-[320px] items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group-hover:rotate-12 transition ease-in">
                    <Mail className="w-9 h-9" />
                </div>
                <h1 className="text-white pt-10 ">
                    Email Us
                </h1>
                <p className="text-white text-sm">
                    Get detailed responses
                </p>
                <p className="text-yellow-400">
                    info@buildontradinglls.com
                </p>
            </div>
            </a>
            <a href="https://www.buildontradingllc.com">
            <div className="group w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col h-[320px] items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group-hover:rotate-12 transition ease-in">
                    <Globe className="w-9 h-9" />
                </div>
                <h1 className="text-white pt-10 ">
                    Visit Us
                </h1>
                <p className="text-white text-sm">
                    Explore our online presence
                </p>
                <p className="text-yellow-400">
                    www.buildontradingllc.com
                </p>
            </div>
            </a>
            <a href="tel:++967 56 269 6505">
            <div className="group w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col h-[320px] items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center group-hover:rotate-12 transition ease-in">
                    <CalendarSearch className="w-9 h-9" />
                </div>
                <h1 className="text-white pt-10 ">
                    Schedule Meeting
                </h1>
                <p className="text-white text-sm">
                    Book a consultation with our team
                </p>
                <p className="text-yellow-400">
                    Free Consultation
                </p>
            </div>
            </a>
        </div>
    )
}