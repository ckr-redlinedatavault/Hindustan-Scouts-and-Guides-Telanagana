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

    const marqueeItems = [...stories, ...stories, ...stories];

    return (
        <section id="success-stories" className="py-10 lg:py-14 bg-white overflow-hidden border-t border-gray-50">
            <div className="max-w-[1500px] mx-auto px-6 mb-8">
                {/* Segmented Marker - Compact */}
                <div className="inline-flex items-center bg-orange-50 border border-orange-100 mb-4">
                    <div className="px-2.5 py-1 border-r border-orange-100">
                        <span className="text-[9px] font-black tracking-widest text-orange-600 uppercase">Impact</span>
                    </div>
                    <div className="px-2.5 py-1 bg-white">
                        <span className="text-[9px] font-black tracking-widest text-[#000080] uppercase">Success Stories</span>
                    </div>
                </div>

                {/* Reduced Heading Font Size */}
                <h2 className="text-2xl md:text-3xl font-[1000] text-gray-900 tracking-tighter uppercase leading-none">
                    Voices of <span className="text-[#000080]">Excellence</span>
                </h2>
            </div>

            <div className="flex flex-col gap-2 relative group">
                {/* Row 1: Moving Left */}
                <div className="flex overflow-x-hidden">
                    <div className="flex animate-marquee whitespace-nowrap py-2">
                        {marqueeItems.map((item, idx) => (
                            <div key={`row1-${idx}`} className="inline-block px-3">
                                <div className="w-[350px] md:w-[400px] h-[150px] flex bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 overflow-hidden relative group/card">
                                    <div className="w-[120px] h-full flex-shrink-0 bg-gray-100 border-r border-gray-50">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[60%] group-hover/card:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <div className="flex-grow p-4 flex flex-col justify-between overflow-hidden">
                                        <div className="whitespace-normal">
                                            <div className="flex items-center gap-1.5 mb-2">
                                                <Star className="w-2.5 h-2.5 fill-orange-600 text-orange-600" />
                                                <span className="text-[8px] font-black uppercase tracking-widest text-orange-600">{item.achievement}</span>
                                            </div>
                                            <p className="text-gray-600 text-[12px] font-medium leading-relaxed line-clamp-2 italic">"{item.quote}"</p>
                                        </div>
                                        <div className="pt-2 border-t border-gray-50">
                                            <h4 className="text-[13px] font-[1000] text-gray-900 tracking-tight uppercase leading-none">{item.name}</h4>
                                            <p className="text-[8px] font-black text-[#000080] uppercase tracking-widest mt-1">{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-[3px] h-full bg-orange-600 opacity-0 group-hover/card:opacity-100 transition-opacity" />
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
                                <div className="w-[350px] md:w-[400px] h-[150px] flex bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 overflow-hidden relative group/card">
                                    <div className="w-[120px] h-full flex-shrink-0 bg-gray-100 border-r border-gray-50">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[60%] group-hover/card:grayscale-0 transition-all duration-700" />
                                    </div>
                                    <div className="flex-grow p-4 flex flex-col justify-between overflow-hidden">
                                        <div className="whitespace-normal">
                                            <div className="flex items-center gap-1.5 mb-2">
                                                <Star className="w-2.5 h-2.5 fill-orange-600 text-orange-600" />
                                                <span className="text-[8px] font-black uppercase tracking-widest text-orange-600">{item.achievement}</span>
                                            </div>
                                            <p className="text-gray-600 text-[12px] font-medium leading-relaxed line-clamp-2 italic">"{item.quote}"</p>
                                        </div>
                                        <div className="pt-2 border-t border-gray-50">
                                            <h4 className="text-[13px] font-[1000] text-gray-900 tracking-tight uppercase leading-none">{item.name}</h4>
                                            <p className="text-[8px] font-black text-[#000080] uppercase tracking-widest mt-1">{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-[3px] h-full bg-orange-600 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Edges Fading */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee { animation: marquee 35s linear infinite; }
                .animate-marquee-reverse { animation: marquee-reverse 35s linear infinite; }
                .group:hover .animate-marquee,
                .group:hover .animate-marquee-reverse { animation-play-state: paused; }
            `}</style>
        </section>
    );
};

export default SuccessStories;