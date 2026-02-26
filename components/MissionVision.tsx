"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MissionVision = () => {
    const items = [
        {
            number: "01",
            label: "Purpose",
            title: "Our Mission",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg",
            description: "To contribute to the development of young people in achieving their full physical, intellectual, social, and spiritual potentials.",
        },
        {
            number: "02",
            label: "Future",
            title: "Our Vision",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg",
            description: "To be the leading youth movement in Telangana, empowering youth to create a better world through traditional scouting.",
        },
        {
            number: "03",
            label: "Ethics",
            title: "Core Values",
            image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771839944/WhatsApp_Image_2026-02-22_at_12.39.50_1_vywsen.jpg",
            description: "Humanity, Inclusivity, Service, Integrity, and Leadership. We believe in building character through discipline.",
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12">

                <div className="flex flex-col items-start mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-[1.5px] bg-orange-600"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Foundation
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black text-slate-900 leading-tight tracking-tighter">
                        The Pillars of our <span className="text-[#000080]">Organization</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-gray-100">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-white border-r border-b border-gray-100 transition-all duration-500"
                        >
                            <div className="p-8 lg:p-10 flex flex-col h-full">

                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-[#000080] font-black text-[11px] tracking-widest">{item.number}</span>
                                    <span className="w-4 h-[1px] bg-gray-200"></span>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-600">{item.label}</span>
                                </div>

                                <div className="relative mb-6 bg-gray-100 overflow-hidden aspect-video">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-0 right-0 w-[3px] h-full bg-orange-600" />
                                </div>

                                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tighter uppercase">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed text-[13.5px] mb-8 font-medium">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href="/about/mission-vision"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-900 font-bold text-[9px] uppercase tracking-widest hover:bg-[#000080] hover:text-white transition-all group/btn border border-slate-100"
                                    >
                                        Details
                                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-600 transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;