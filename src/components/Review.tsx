import { userReviews } from "@/data/review"
import { Star, Stars } from "lucide-react"
export default function Review(){
    return(
        <div className="flex flex-col justify-center items-center  bg-gray-100 p-6">
            {/* Button Client Reviews */}
            <div className= "bg-yellow-400 font-bold text-white rounded-full w-48 h-12 flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300">
                CLIENT REVIEW    
            </div> 
            <div className="mt-10 mb-16 text-center font-bold text-7xl text-black">What Our <span className="bg-gradient-to-l  from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Clients Say</span>
            </div>
            {/* Cards */}
            <div className="flex gap-8 max-w-6xl">
                {userReviews.map((review)=>(
                    <div className="bg-white flex flex-col gap-6 rounded-2xl max-w-5xl p-6  shadow-lg">
                        <div className="flex text-yellow-300">
                            {[...Array(review.stars)].map((_,i)=>(
                                <Star key={i} className={`w-5 h-5 ${i<review.stars ? "fill-yellow-300 text-yellow-300" : "text-gray-300"}`} />
                            ))}
                        </div>
                        <div className="italic leading-relaxed text-md text-gray-500">
                            <p>{review.text}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-14 h-14 rounded-full">
                                <img src={review.dp} alt={review.user} className="w-14 h-14 rounded-full object-cover"/>
                            </div>
                            <div className="pl-4">
                                <div>
                                    <h1 className="font-semibold text-md">{review.user}</h1>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{review.org}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}