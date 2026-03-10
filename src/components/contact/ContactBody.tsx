'use client';
import { Clock, Facebook, FileBadge, Globe, Headset, Instagram, Mail, MapPinHouse, Phone, Truck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
interface Options {
    value:string;
    label:string;
}
// function to handle form data after submit
const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await fetch("https://script.google.com/macros/s/AKfycbwv7GWiw7MvgX59AGX0bpUDnkR8ZgYBqSfRxOnDckSCMUn-wrB3u1eFZ-wv2rkGjg-E/exec",{
            method:"POST",    
            body:JSON.stringify({
                name:e.target.name.value,
                email:e.target.email.value,
                phone:e.target.phone.value,
                company:e.target.company.value,
                service:e.target.service.value,
                message:e.target.message.value
        }),
    }
    )
        const data = await res.json();
        if(data.status === "success"){
            alert("Message sent successfully!");
            e.target.reset();
        }else{
            alert("Failed to send message. Please try again.");
    }
    }catch(error){
        console.error("Error:", error);
        alert("An error occurred while sending the message. Please try again later.");
    }
}
export default function ContactBody(){
    const [selected , setSelected] = useState('');
    const options:Options[] = [
        {value:'General Enquiry', label:'General Enquiry'},
        {value:'Production Quotation', label:'Production Quotation'},
        {value:'Bulk Orders', label:'Bulk Orders'},
        {value:'Technical Support', label:'Technical Support'},
        {value:'Partnership Opportunities', label:'Partnership Opportunities'},
        {value:'Supplier Registration', label:'Supplier Registration'},
        {value:'Quality Concerns', label:'Quality Concerns'},
        {value:'Other', label:'Other'}
    ];
    return(
        <section className="py-16 md:py-20 px-4 md:px-6  bg-gray-100">
            {/* Form */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                <div className="bg-white p-10 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-3 text-black">Send us a message</h2>
                    <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                    <form onSubmit={handleSubmit} className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col"> 
                            <label htmlFor="name" className="text-black font-bold">Full Name</label>
                            <input type='text' name="name" id="name" className="w-full bg-gray-100 rounded-lg px-4 h-12 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-black font-bold">Email Adress</label>
                            <input type='text' name="email" id="email" className="w-full bg-gray-100 rounded-lg h-12 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-black font-bold">Phone Number</label>
                            <input type='text' name="phone" id="phone" className="w-full bg-gray-100 rounded-lg px-4 h-12 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="company" className="text-black font-bold">Company Name</label>
                            <input type='text' name="company" id="company" className="w-full h-12 bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div className="flex flex-col">
                            {/* Service type dropdown */}
                            <label htmlFor="service" className="text-black font-bold">Service Type</label>
                            <select name="service" id="service" value={selected} onChange={(e)=>setSelected(e.target.value)} className="h-12 border border-black bg-gray-200 focus:ring-yellow-400 focus:border-yellow-400 w-full rounded-lg px-4 py-3 outline-none transition ease-in">
                                <option value="" disabled>Select Service Type</option>
                                {options.map((option)=>(
                                    <option key ={option.value} value={option.value}>{option.label}</option>   
                                ))}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="message" className="text-black font-bold">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-100 rounded-lg px-4 py-3 h-32 outline-none focus:ring-2 focus:ring-yellow-400"/>
                        </div>
                        <button type="submit" className="mt-8 h-11 md:col-span-2 w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors ease-in">
                            Send Message
                          </button>
                          
                        </form>
                    </div>
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 text-black">Get In Touch</h2>
                            <p className="text-gray-500">
                                Connect with our team through multiple channels
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md space-y-3">
                            <h3 className="text-xl font-semibold text-black">Our Office</h3>
                            <h4 className="font-semibold text-black">Builton Headquarters</h4>
                            <Link href="https://www.google.com/maps?q=Media+City,AL+Massaned,Sharjah">
                            <p className="text-gray-600 hover:text-yellow-400 transition-all ease-in hover:translate-x-1"><MapPinHouse />Media City, Al Massaned, Sharjah</p>
                            </Link>
                            <Link href="tel:+971 56 269 6505">
                            <p className="text-gray-600 hover:text-yellow-400 transition-all ease-in hover:translate-x-1"><Phone/>+971 56 269 6505</p>
                            </Link>
                            <Link href="mailto:info@buildontradingllc.com">
                            <p className="text-gray-600 hover:text-yellow-400 transition-all ease-in hover:translate-x-1"><Mail />info@buildontradingllc.com</p>
                            </Link>
                            <Link href="https://www.buildontradingllc.com "><p className="text-gray-600 hover:text-yellow-400 transition-all ease-in hover:translate-x-1"><Globe />www.buildontradingllc.com</p></Link>
                            <Link href="https://www.google.com/maps?q=Media+City,AL+Massaned,Sharjah">
                            <p className="text-gray-600 hover:text-yellow-400 transition-all ease-in hover:translate-x-1"><Clock />9:00 - 17:00</p>
                            </Link>
                            {/* Google Maps Embed */}
                            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1490212054373!2d55.41953117621071!3d25.29919682756029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f64d5696e7f%3A0xe51568072150e336!2sMEDIA%20CITY!5e0!3m2!1sen!2sin!4v1772644633951!5m2!1sen!2sin" 
                                className="w-full h-full border-0" loading="lazy" ></iframe>
                            </div>
                        </div>
                        {/* Badges and Why choose buildon section */}
                        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-xl font-semibold text-black">Why Choose Buildon</h3>
                            <div className="bg-gray-100 p-4 group rounded-xl hover:border hover:border-yellow-400  hover:-translate-y-1 transition ease-in flex items-center  space-x-4">
                                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:shadow-xl transition-all ease-in">
                                    <FileBadge className="w-7 h-7 text-yellow-600"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-black">Quality assured</p>
                                    <p className="text-gray-500 text-sm">ISO certified material and processes</p>
                                </div>
                                
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl group hover:border hover:border-yellow-400  hover:-translate-y-1 transition ease-in flex items-center  space-x-4">
                                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:shadow-xl transition-all ease-in">
                                    <Truck className="w-8 h-8 text-yellow-600"/> 
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-black">Fast Delivery</p>
                                    <p className="text-gray-500 text-sm">Same-day delivery</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl hover:border group hover:border-yellow-400  hover:-translate-y-1 transition ease-in flex items-center  space-x-4">
                                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:shadow-xl transition-all ease-in">
                                    <Headset className="w-8 h-8 text-yellow-600"/> 
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-black">24/7 support</p>
                                    <p className="text-gray-500 text-sm">Round the clock customer service</p>
                                </div>
                            </div>
                        </div>
                        {/*Follow us section */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold mb-4 ">Follow Us</h3>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-100 hover:text-yellow-400 hover:outline-1 hover:outline-yellow-400 transition-all ease-in hover:translate-x-1">
                                    <Facebook />
                                </div>
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-100 hover:text-yellow-400 hover:outline-1 hover:outline-yellow-400 transition-all ease-in hover:translate-x-1">
                                    <Instagram />
                            </div>
                            <Link href="https://www.buildontradingllc.com">
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold hover:bg-gray-100 hover:text-yellow-400 hover:outline-1 hover:outline-yellow-400 transition-all ease-in hover:translate-x-1">
                                    <Globe />
                            </div>
                            </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}