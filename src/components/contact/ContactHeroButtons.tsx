export default function ContactHeroButton(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10 mt-6  md:mt-10 w-full max-w-6xl mx-auto pb-10">
            <div className="group w-full h-[320px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <img 
                src="/Call.png"
                alt= "Call Us"
                className="rounded-full w-12 h-12 justify-center group-hover:rotate-12 group-hover:scale-110 transition ease-linear "
                />
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
            <div className="group w-full h-[320px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col h-[320px] items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <img 
                src="/mail.png"
                alt= "Mail Us"
                className="rounded-full w-12 h-12 justify-center group-hover:rotate-12 group-hover:scale-110 transition ease-linear"
                />
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
            <div className="group w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col h-[320px] items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <img 
                src="/web.png"
                alt= "Visit Website"
                className="rounded-full w-12 h-12 justify-center group-hover:rotate-12 group-hover:scale-110 transition ease-linear"
                />
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
            <div className="group w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 flex flex-col h-[320px] items-center gap-4 hover:border-yellow-400/60 transition ease-in">
                <img 
                src="/calendar.png"
                alt= "Schedule meeting"
                className="rounded-full w-12 h-12 justify-center group-hover:rotate-12 group-hover:scale-110 transition ease-linear"
                />
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
        </div>
    )
}