"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, Newspaper, ArrowRight, Tag, Bell } from "lucide-react";

const NewsPage = () => {
    const newsItems = [
        {
            "id": 1,
            "title": "Formation of HSGA Telangana State Executive Committee",
            "date": `Feb 02, ${new Date().getFullYear()}`,
            "category": "Official",
            "excerpt": "The state committee has been formally established with new leadership appointments to drive scouting initiatives across all districts of Telangana. This landmark decision aims to streamline administrative operations and expand the reach of the movement to rural sectors.",
        },
        {
            "id": 3,
            "title": "National Science Day Celebration & Innovation Fair",
            "date": "Feb 19, 2025",
            "category": "Events",
            "excerpt": "Telangana scouts participated in a grand exhibition showcasing innovative projects in renewable energy and sustainable scouting. Over 500 participants presented prototypes focused on eco-friendly camping solutions.",
        },
        {
            "id": 4,
            "title": "Praveshika Program: Enabling Digital Citizenship",
            "date": "Dec 15, 2025",
            "category": "Training",
            "excerpt": "A new module focusing on digital literacy and online safety for junior scouts was launched during the winter camp session. This program equips young scouts with the tools to navigate the digital world responsibly.",
        }
    ];

    const galleryImages = [
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095861/WhatsApp_Image_2026-02-15_at_12.30.05_AM_2_k0qep8.jpg", // 1
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095860/WhatsApp_Image_2026-02-15_at_12.30.05_AM_kmmrxa.jpg", // 2
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095860/WhatsApp_Image_2026-02-15_at_12.30.06_AM_1_nyzyko.jpg", // 3
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095860/WhatsApp_Image_2026-02-15_at_12.30.06_AM_3_ue5pux.jpg", // 4
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095860/WhatsApp_Image_2026-02-15_at_12.30.04_AM_1_wcvcpv.jpg", // 5
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095860/WhatsApp_Image_2026-02-15_at_12.30.06_AM_2_ucz4kc.jpg", // 6
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.04_AM_sruudm.jpg", // 7
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095858/WhatsApp_Image_2026-02-15_at_12.30.03_AM_2_g5myug.jpg", // 8
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.05_AM_3_atnnfu.jpg", // 9
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.03_AM_1_cz2zi1.jpg", // 10
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.05_AM_1_kbyi1d.jpg", // 11
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.04_AM_2_vhf9cs.jpg", // 12
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095858/WhatsApp_Image_2026-02-15_at_12.30.04_AM_3_orjpp3.jpg", // 13
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095858/WhatsApp_Image_2026-02-15_at_12.30.04_AM_4_i0pq45.jpg", // 14
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095858/WhatsApp_Image_2026-02-15_at_12.30.03_AM_k5b2hf.jpg", // 14
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095857/WhatsApp_Image_2026-02-15_at_12.30.02_AM_ywgemn.jpg", // 14
        "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095857/WhatsApp_Image_2026-02-15_at_12.30.06_AM_kynwzm.jpg", // 15
    ];

    return (
        <div className="bg-white flex flex-col font-outfit text-slate-900 w-full">
            <Breadcrumbs />

            <div className="w-full">
                {/* Hero Section */}
                <div className="bg-[#000080] pt-16 pb-14 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-6 font-[1000]">
                                <span className="h-[1.5px] w-10 bg-orange-500"></span>
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Official Newsroom</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Latest Updates & <span className="text-orange-500">Media Coverage</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                Administrative announcements, official bulletins, and press coverage from the HSGA Telangana State Headquarters.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1500px] mx-auto px-6 py-20">
                    {/* Featured Article */}
                    <div className="mb-20">
                        <div className="relative p-10 md:p-16 bg-[#000080] border-l-[8px] border-orange-600 overflow-hidden shadow-2xl transition-all duration-500 rounded-none">
                            <Bell className="absolute -right-8 -top-8 w-64 h-64 text-white/5 rotate-12 pointer-events-none" />

                            <div className="relative z-10 max-w-3xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded-none">
                                        Important Bulletin
                                    </span>
                                    <span className="text-orange-200 text-sm font-bold flex items-center gap-2">
                                        <Calendar className="w-4 h-4" /> {newsItems[0].date}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-[1000] text-white mb-8 tracking-tighter leading-tight uppercase">
                                    {newsItems[0].title}
                                </h2>
                                <p className="text-white/70 text-lg font-medium leading-relaxed mb-10">
                                    {newsItems[0].excerpt}
                                </p>
                                <div className="inline-flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-widest group cursor-pointer">
                                    Read Full Transcript
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
                        {newsItems.slice(1).map((news) => (
                            <div key={news.id} className="group bg-white p-10 border-r border-b border-slate-100 hover:border-orange-500 hover:z-10 transition-all duration-300 flex flex-col rounded-none">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="px-3 py-1 bg-slate-50 text-[#000080] text-[9px] font-black uppercase tracking-widest border border-slate-100 rounded-none">
                                        {news.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold">
                                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                                        {news.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-[#000080] mb-6 tracking-tight leading-tight uppercase group-hover:text-orange-600 transition-colors">
                                    {news.title}
                                </h3>

                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                                    {news.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-600 rotate-45" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Archive Ref #{news.id + 200}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Media Gallery Section - UPDATED FOR LARGER IMAGES */}
                    <div className="mt-24">
                        <div className="inline-flex items-center gap-3 mb-10 font-[1000]">
                            <span className="h-[1.5px] w-10 bg-orange-500"></span>
                            <span className="text-slate-900/70 text-[10px] uppercase tracking-[0.2em]">Media Highlights & Gallery</span>
                        </div>

                        {/* 
                            UPDATES:
                            1. Changed grid-cols to max 3 (lg:grid-cols-3) to make images much larger.
                            2. Changed aspect ratio to aspect-[3/2] for better photography visibility.
                            3. Increased gap to gap-8.
                        */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.map((src, i) => (
                                <div key={i} className="aspect-[3/2] bg-slate-50 border border-slate-200 group relative overflow-hidden transition-all duration-500 hover:border-orange-500 hover:shadow-xl hover:-translate-y-1">
                                    {src ? (
                                        <img
                                            src={src}
                                            alt={`Gallery item ${i + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                            <Newspaper className="w-12 h-12 text-slate-200 group-hover:text-orange-500/20 transition-all duration-500 group-hover:scale-110" />
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-orange-600 transition-colors">IMG {i + 1}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-4 right-4">
                                        <div className="w-3 h-3 bg-slate-200 group-hover:bg-orange-500 rotate-45 transition-colors shadow-sm" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Simple Bottom Message */}
                    <div className="mt-20 text-center border-t border-slate-100 pt-16">
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Notice of Authenticity</p>
                        <p className="text-slate-400 text-sm font-medium italic opacity-60">
                            All news items listed above are part of the official HSGA Telangana public records.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default NewsPage;