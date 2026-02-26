"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const SuccessStories = () => {
    const stories = [
        {
            name: "Rahul Sharma",
            role: "President's Scout",
            image: "https://raajratna.com/wp-content/uploads/2019/01/person6.jpg",
            achievement: "President's scout 2024",
            quote: "Scouting gave me the discipline to aim for the highest honors and leadership roles."
        },
        {
            name: "Ananya Reddy",
            role: "Patrol Leader",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV99IJOGUBMQBy9kccOQsAyq36yzt0BRYUw&s",
            achievement: "Leadership excellence",
            quote: "Leading my patrol taught me teamwork beyond the traditional classroom setting."
        },
        {
            name: "Kiran Kumar",
            role: "Volunteer",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
            achievement: "100+ Service hours",
            quote: "It's a life-long commitment to making the world a significantly better place."
        },
        {
            name: "Sriya Rao",
            role: "State Awardee",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
            achievement: "Rajya puraskar scout",
            quote: "I carry these survival techniques and values into my daily professional life."
        }
    ];

    const marqueeItems = [...stories, ...stories, ...stories];

    return (
        <section id="success-stories" className="py-16 lg:py-24 bg-white overflow-hidden border-t border-gray-50">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 mb-12">

                <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-[1.5px] bg-orange-600"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                        Alumni and impact
                    </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.1] tracking-tighter mb-4">
                    Voices of <span className="text-[#000080]">Excellence</span>
                </h2>

                <p className="text-orange-600 font-normal text-lg lowercase tracking-tight">
                    testimonials from our scouting community
                </p>
            </div>

            <div className="flex flex-col gap-6 relative group">
                <div className="flex overflow-x-hidden">
                    <div className="flex animate-marquee whitespace-nowrap py-4">
                        {marqueeItems.map((item, idx) => (
                            <div key={`row1-${idx}`} className="inline-block px-4">
                                <div className="w-[380px] md:w-[450px] h-[180px] flex bg-white border border-gray-100 shadow-sm transition-all duration-500 relative group/card">
                                    <div className="w-[140px] h-full flex-shrink-0 bg-gray-50 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                                    </div>

                                    <div className="flex-grow p-6 flex flex-col justify-between overflow-hidden">
                                        <div className="whitespace-normal">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Star className="w-3 h-3 text-orange-600 fill-orange-600" />
                                                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{item.achievement}</span>
                                            </div>
                                            <p className="text-slate-600 text-[14px] font-medium leading-relaxed italic">
                                                "{item.quote}"
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-gray-50">
                                            <h4 className="text-[15px] font-black text-slate-900 tracking-tight">{item.name}</h4>
                                            <p className="text-[10px] font-bold text-[#000080] lowercase tracking-tight opacity-70">{item.role}</p>
                                        </div>
                                    </div>

                                    <div className="absolute top-0 right-0 w-[4px] h-full bg-orange-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex overflow-x-hidden">
                    <div className="flex animate-marquee-reverse whitespace-nowrap py-4">
                        {marqueeItems.map((item, idx) => (
                            <div key={`row2-${idx}`} className="inline-block px-4">
                                <div className="w-[380px] md:w-[450px] h-[180px] flex bg-white border border-gray-100 shadow-sm transition-all duration-500 relative group/card">
                                    <div className="w-[140px] h-full flex-shrink-0 bg-gray-50 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow p-6 flex flex-col justify-between overflow-hidden">
                                        <div className="whitespace-normal">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Star className="w-3 h-3 text-orange-600 fill-orange-600" />
                                                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{item.achievement}</span>
                                            </div>
                                            <p className="text-slate-600 text-[14px] font-medium leading-relaxed italic">
                                                "{item.quote}"
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-gray-50">
                                            <h4 className="text-[15px] font-black text-slate-900 tracking-tight">{item.name}</h4>
                                            <p className="text-[10px] font-bold text-[#000080] lowercase tracking-tight opacity-70">{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-[4px] h-full bg-orange-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
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
                .animate-marquee { animation: marquee 50s linear infinite; }
                .animate-marquee-reverse { animation: marquee-reverse 50s linear infinite; }
                .group:hover .animate-marquee,
                .group:hover .animate-marquee-reverse { animation-play-state: paused; }
            `}</style>
        </section>
    );
};

export default SuccessStories;