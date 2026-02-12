"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MissionVision = () => {
    const items = [
        {
            number: "01",
            title: "Our Mission",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg",
            description: "To contribute to the development of young people in achieving their full physical, intellectual, social, and spiritual potentials as individuals and responsible citizens.",
        },
        {
            number: "02",
            title: "Our Vision",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg",
            description: "To be the leading youth movement in Telangana, empowering youth to create a better world and fostering national integration through scouting.",
        },
        {
            number: "03",
            title: "Core Values",
            image: "https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/blog/Core%20Values/1-Core-Values-and-Ideology.png",
            description: "Humanity, Inclusivity, Service, Integrity, and Leadership. We believe in building character through traditional scouting values.",
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Structured decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Border Wrapper */}
                <div className="border-4 border-orange-600 p-1">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative flex flex-col h-full bg-white transition-all duration-500 border-y border-gray-100 lg:border-y-0 ${index !== items.length - 1 ? "lg:border-r border-gray-100" : ""
                                    }`}
                            >
                                {/* Card Content Interior */}
                                <div className="flex flex-col h-full p-8 md:p-12">
                                    {/* Segmented Marker/Header */}
                                    <div className="inline-flex items-center mb-10 self-start">
                                        <div className="bg-[#000080] text-white px-3 py-1 font-black text-[10px] tracking-widest uppercase">
                                            {item.number}
                                        </div>
                                        <div className="bg-orange-50 border-y border-r border-orange-100 px-3 py-1">
                                            <span className="text-[10px] font-black tracking-widest text-orange-600 uppercase">
                                                {item.title.split(" ")[1] || "VALUE"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* IMAGE Section - Reintegrated */}
                                    <div className="relative mb-8 shadow-xl overflow-hidden aspect-[16/9]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <h3 className="text-2xl font-[1000] text-gray-900 mb-5 tracking-tighter uppercase leading-tight group-hover:text-[#000080] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-[15px] mb-10">
                                        {item.description}
                                    </p>

                                    {/* Premium Link */}
                                    <div className="mt-auto pt-8 border-t border-gray-100">
                                        <Link href="/about/mission-vision" className="inline-flex items-center gap-3 text-[#000080] font-black text-[11px] uppercase tracking-[0.2em] group/btn">
                                            Learn More
                                            <div className="flex items-center justify-center w-6 h-6 border border-[#000080]/20 group-hover/btn:bg-[#000080] group-hover/btn:text-white transition-all">
                                                <ChevronRight className="w-3.3 h-3.3 transition-transform group-hover/btn:translate-x-0.5" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover Bottom Accent */}
                                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-orange-600 transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;