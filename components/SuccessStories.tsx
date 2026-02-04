"use client";

import React from "react";
import { Star } from "lucide-react";

const SuccessStories = () => {
    const stories = [
        {
            name: "Rahul Sharma",
            role: "President's Scout",
            image: "https://raajratna.com/wp-content/uploads/2019/01/person6.jpg",
            achievement: "President's Scout 2024",
            quote: "Scouting gave me the discipline to aim for the highest honors and leadership roles."
        },
        {
            name: "Ananya Reddy",
            role: "Patrol Leader",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV99IJOGUBMQBy9kccOQsAyq36yzt0BRYUw&s",
            achievement: "Leadership Excellence",
            quote: "Leading my patrol taught me teamwork beyond the traditional classroom setting."
        },
        {
            name: "Kiran Kumar",
            role: "Volunteer",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
            achievement: "100+ Service Hours",
            quote: "It's a life-long commitment to making the world a significantly better place."
        },
        {
            name: "Sriya Rao",
            role: "State Awardee",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
            achievement: "Rajya Puraskar Scout",
            quote: "I carry these survival techniques and values into my daily professional life."
        }
    ];

    const marqueeItems = [...stories, ...stories];

    return (
        <section id="success-stories" className="py-12 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-8">
                <span className="text-[10px] font-bold tracking-[0.3em] text-orange-600 uppercase mb-1 block">
                    Voices of Impact
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter">
                    Stories of <span className="text-[#000080]">Excellence</span>
                </h2>
            </div>

            <div className="flex flex-col gap-6 relative group">
                {/* Row 1: Moving Left */}
                <div className="flex overflow-x-hidden">
                    <div className="flex animate-marquee whitespace-nowrap py-2">
                        {marqueeItems.map((item, idx) => (
                            <div key={`row1-${idx}`} className="inline-block px-3">
                                <div className="w-[380px] md:w-[420px] h-[170px] flex bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                    <div className="w-1/3 h-full flex-shrink-0 bg-gray-100">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[20%]" />
                                    </div>
                                    <div className="w-2/3 p-5 flex flex-col justify-between overflow-hidden">
                                        <div className="whitespace-normal">
                                            <div className="flex items-center gap-1.5 text-orange-500 mb-2">
                                                <Star className="w-3 h-3 fill-orange-500 flex-shrink-0" />
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{item.achievement}</span>
                                            </div>
                                            <p className="text-gray-600 text-xs italic leading-relaxed line-clamp-3">"{item.quote}"</p>
                                        </div>
                                        <div className="mt-auto border-t border-gray-50 pt-3">
                                            <h4 className="text-sm font-black text-gray-900 leading-none truncate">{item.name}</h4>
                                            <p className="text-[9px] font-bold text-[#000080] uppercase tracking-widest mt-1">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Moving Right */}
                <div className="flex overflow-x-hidden">
                    <div className="flex animate-marquee-reverse whitespace-nowrap py-2">
                        {marqueeItems.map((item, idx) => (
                            <div key={`row2-${idx}`} className="inline-block px-3">
                                <div className="w-[380px] md:w-[420px] h-[170px] flex bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                    <div className="w-1/3 h-full flex-shrink-0 bg-gray-100">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[20%]" />
                                    </div>
                                    <div className="w-2/3 p-5 flex flex-col justify-between overflow-hidden">
                                        <div className="whitespace-normal">
                                            <div className="flex items-center gap-1.5 text-orange-500 mb-2">
                                                <Star className="w-3 h-3 fill-orange-500 flex-shrink-0" />
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{item.achievement}</span>
                                            </div>
                                            <p className="text-gray-600 text-xs italic leading-relaxed line-clamp-3">"{item.quote}"</p>
                                        </div>
                                        <div className="mt-auto border-t border-gray-50 pt-3">
                                            <h4 className="text-sm font-black text-gray-900 leading-none truncate">{item.name}</h4>
                                            <p className="text-[9px] font-bold text-[#000080] uppercase tracking-widest mt-1">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left & Right Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee { animation: marquee 40s linear infinite; }
                .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
                .group:hover .animate-marquee,
                .group:hover .animate-marquee-reverse { animation-play-state: paused; }
            `}</style>
        </section>
    );
};

export default SuccessStories;