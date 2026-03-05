'use client';
import { useState } from "react";
interface Options {
    value:string;
    label:string;
}
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
        {value:'Qaulity Concerns', label:'Qaulity Concerns'},
        {value:'Other', label:'Other'}
    ];
    return(
        <section className="py-20 px-6 bg-gray-100">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <div className="bg-white p-10 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-3 text-black">Send us a message</h2>
                    <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                        <div> 
                            <label htmlFor="name " className="text-black font-bold">Full Name</label><br></br>
                            <input type='text' name="name" id="name" className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-black font-bold">Email Adress</label><br></br>
                            <input type='text' name="email" id="email" className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-black font-bold">Phone Number</label><br></br>
                            <input type='text' name="phone" id="phone" className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div>
                            <label htmlFor="company" className="text-black font-bold">Company Name</label><br></br>
                            <input type='text' name="company" id="company" className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition ease-in"/>
                        </div>
                        <div>
                            {/* Service type dropdown */}
                            <label htmlFor="service" className="text-black font-bold">Service Type</label><br></br>
                            <select name="service" id="service" value={selected} onChange={(e)=>setSelected(e.target.value)} className="border border-black bg-gray-200 focus:ring-yellow-400 focus:border-yellow-400 w-full rounded-lg px-4 py-3 outline-none transition ease-in">
                                <option value="" disabled>Select Service Type</option>
                                {options.map((option)=>(
                                    <option key ={option.value} value={option.value}>{option.label}</option>   
                                ))}
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="message" className="text-black font-bold">Message</label><br></br>
                            <textarea id="message" name="message" className="w-full bg-gray-100 rounded-lg px-4 py-3 h-32 outline-none focus:ring-2 focus:ring-yellow-400"/>
                        </div>
                        <button type="submit" className="mt-8 h-11 col-span-2 w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors ease-in">
                            Send Message
                          </button>
                          
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 text-black">Get In Touch</h2>
                            <p className="text-gray-500">
                                Connect with our team through multiple channels
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md space-y-3">
                            <h3 className="text-xl font-semibold text-black">Our Office</h3>
                            <h4 className="font-semibold text-black">BuiltOn Headquarters</h4>
                            <p className="text-gray-600">Address</p>
                            <p className="text-gray-600">Phone Numbers</p>
                            <p className="text-gray-600">Email Address</p>
                            <p className="text-gray-600">Website</p>
                            <p className="text-gray-600">Working Hours</p>
                            {/* Google Maps Embed */}
                            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1490212054373!2d55.41953117621071!3d25.29919682756029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f64d5696e7f%3A0xe51568072150e336!2sMEDIA%20CITY!5e0!3m2!1sen!2sin!4v1772644633951!5m2!1sen!2sin" 
                                width="600" height="450"  loading="lazy" ></iframe>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-xl font-semibold text-black">Why Choose Buildon</h3>
                            <div className="bg-gray-100 p-4 rounded-xl">
                                <p className="font-semibold text-black">Quality assured</p>
                                <p className="text-gray-500 text-sm">ISO certified material and processes</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl">
                                <p className="font-semibold text-black">Fast Delivery</p>
                                <p className="text-gray-500 text-sm">Same-day delivery</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl">
                                <p className="font-semibold text-black">24/7 support</p>
                                <p className="text-gray-500 text-sm">Round the clock customer service</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold mb-4 ">Follow Us</h3>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                                    F
                                </div>
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                                    I
                            </div>
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                                    W
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}