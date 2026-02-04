"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MissionVision = () => {
    const items = [
        {
            number: "01",
            image: "https://img.freepik.com/free-vector/gradient-our-mission-concept-illustrated_23-2149108413.jpg",
            title: "Our Mission",
            description: "To contribute to the development of young people in achieving their full physical, intellectual, social, and spiritual potentials as individuals and responsible citizens.",
            accent: "from-blue-600 to-indigo-600",
            glow: "bg-blue-500/20"
        },
        {
            number: "02",
            image: "https://media.istockphoto.com/id/1304020328/vector/happy-woman-holding-huge-tourists-binocular.jpg?s=612x612&w=0&k=20&c=095ojLDyYGQTDKXaCK24Yhk3I3LXdV8hPwlggSsTyGY=",
            title: "Our Vision",
            description: "To be the leading youth movement in Telangana, empowering youth to create a better world and fostering national integration through scouting.",
            accent: "from-orange-500 to-red-600",
            glow: "bg-orange-500/20"
        },
        {
            number: "03",
            image: "https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/blog/Core%20Values/1-Core-Values-and-Ideology.png",
            title: "Core Values",
            description: "Humanity, Inclusivity, Service, Integrity, and Leadership. We believe in building character through traditional scouting values.",
            accent: "from-green-500 to-emerald-700",
            glow: "bg-green-500/20"
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
            {/* Subtle background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#000080]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Modern Grids - Refined for Light Theme */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col h-full bg-white rounded-[2.5rem] p-3 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-700"
                        >
                            {/* Number Background */}
                            <div className="absolute top-10 right-10 text-8xl font-black text-gray-50 tracking-tighter select-none transition-all duration-700 group-hover:text-gray-100 group-hover:scale-110">
                                {item.number}
                            </div>

                            {/* Rounded Image Container */}
                            <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Floating Category Badge */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-100 text-[9px] font-black text-gray-900 uppercase tracking-widest shadow-sm">
                                        Section {item.number}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="px-5 pb-8 flex flex-col grow relative z-10">
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#000080] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base mb-8 grow">
                                    {item.description}
                                </p>

                                {/* Modern CTA/Button integrated */}
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                                    <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.accent}`} />
                                    <Link href="/about/mission-vision" className="flex items-center gap-2 text-gray-400 group-hover:text-[#000080] transition-all font-bold text-xs uppercase tracking-widest">
                                        Explore More
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;