"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import { Calendar, Newspaper, ArrowRight, Tag, Bell } from "lucide-react";

const NewsPage = () => {
    const newsItems = [
        {
            "id": 1,
            "title": "Formation of HSGA Telangana State Executive Committee",
            "date": "Feb 02, 2026",
            "category": "Official",
            "excerpt": "The state committee has been formally established with new leadership appointments to drive scouting initiatives across all districts of Telangana. This landmark decision aims to streamline administrative operations and expand the reach of the movement to rural sectors.",
        },
        {
            "id": 2,
            "title": "HMTV Coverage: HSGA Telangana Youth Empowerment",
            "date": "Jan 20, 2026",
            "category": "Media",
            "excerpt": "Watch the special segment on HMTV featuring the impact of Hindustan Scouts and Guides on youth discipline and leadership development. The segment highlights successful student case studies and our community service milestones.",
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

    return (
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-outfit text-slate-800">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Minimal Header */}
                <div className="bg-white border-b border-slate-100 py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-2 text-orange-600 mb-4">
                            <Newspaper className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Official Newsroom</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            Latest Updates & <span className="text-[#000066]">Media</span>
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl font-medium">
                            Administrative announcements and official bulletins from the HSGA Telangana State Headquarters.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12">

                    {/* Featured Article - Text Focus */}
                    <div className="mb-12">
                        <div className="relative p-8 md:p-12 bg-[#000066] rounded-3xl overflow-hidden shadow-xl shadow-blue-900/10 transition-all duration-500">
                            {/* Decorative Background Icon */}
                            <Bell className="absolute -right-8 -top-8 w-64 h-64 text-white/5 rotate-12 pointer-events-none" />

                            <div className="relative z-10 max-w-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                                        Important Bulletin
                                    </span>
                                    <span className="text-blue-200 text-sm font-medium flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" /> {newsItems[0].date}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                    {newsItems[0].title}
                                </h2>
                                <p className="text-blue-100/80 text-lg leading-relaxed mb-4">
                                    {newsItems[0].excerpt}
                                </p>
                                <div className="w-20 h-1 bg-orange-500 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* News Grid - Text Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems.slice(1).map((news) => (
                            <div key={news.id} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300 flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded border border-slate-100">
                                        {news.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                                        {news.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#000066] transition-colors">
                                    {news.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {news.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Official Record #{news.id + 200}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Simple Bottom Message */}
                    <div className="mt-16 text-center border-t border-slate-100 pt-12">
                        <p className="text-slate-400 text-sm font-medium italic">
                            All news items listed above are part of the official HSGA Telangana public records.
                        </p>
                    </div>
                </div>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </div>
    );
};

export default NewsPage;