"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, Newspaper, ArrowRight, Tag, Bell } from "lucide-react";

const BlogsPage = () => {
    const [selectedNews, setSelectedNews] = React.useState<any>(null);
    const newsItems = [
        {
            id: 1,
            title: "Formation of HSGA Telangana State Executive Committee",
            date: `Feb 02, ${new Date().getFullYear()}`,
            category: "Official",
            excerpt: "The state committee has been formally established with new leadership appointments to drive scouting initiatives across all districts of Telangana.",
            content: "We are proud to announce the formal establishment of the HSGA Telangana State Executive Committee. This strategic body has been formed to oversee and streamline scouting activities across all 33 districts. The committee includes seasoned educators, community leaders, and veteran scouting officials dedicated to youth development. Key objectives for the upcoming year include digital record management for all members, expanding rural reach by 40%, and launching state-wide skill certification programs. This marks a new era of organized growth for HSGA in Telangana."
        },
        {
            id: 3,
            title: "National Science Day Celebration & Innovation Fair",
            date: "Feb 19, 2025",
            category: "Events",
            excerpt: "Telangana scouts participated in a grand exhibition showcasing innovative projects in renewable energy and sustainable scouting.",
            content: "National Science Day was celebrated with great fervor as scouts from across Telangana gathered for the 2025 Innovation Fair. The event showcased over 200 projects focusing on 'Science for a Sustainable Future.' Highlights included solar-powered camping gear, low-cost water filtration systems for rural treks, and innovative knot-tying tools developed by junior scouts. The Chief Guest lauded the scientific temper displayed by the youth and emphasized the importance of integrating technology with traditional scouting values."
        },
        {
            id: 4,
            title: "Praveshika Program: Enabling Digital Citizenship",
            date: "Dec 15, 2025",
            category: "Training",
            excerpt: "A new module focusing on digital literacy and online safety for junior scouts was launched during the winter camp session.",
            content: "In alignment with the modern challenges of the 21st century, HSGA Telangana has successfully launched the 'Digital Citizenship' module under the Praveshika training program. This initiative aims to educate young scouts about safe internet practices, cyber-bullying awareness, and the responsible use of social media. The program includes interactive workshops led by IT experts and senior scouts. By the end of this year, we aim to certify over 10,000 scouts in basic digital safety, ensuring they are as prepared online as they are in the outdoors."
        }
    ];

    return (
        <div className="bg-white flex flex-col font-outfit text-slate-900 w-full relative">
            <Breadcrumbs />

            <div className="w-full">
                <div className="bg-[#000080] pt-16 pb-14 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-6 font-[1000]">
                                <span className="h-[1.5px] w-10 bg-orange-500"></span>
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Official Blogs</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Latest News & <span className="text-orange-500">Event Logs</span>
                            </h1>
                            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                Detailed administrative announcements and event reports from the HSGA Telangana State Headquarters.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1500px] mx-auto px-6 py-20">
                    <div className="mb-20">
                        <div className="relative p-10 md:p-16 bg-[#000080] border-l-[8px] border-orange-600 overflow-hidden shadow-2xl transition-all duration-500 rounded-none group cursor-pointer"
                            onClick={() => setSelectedNews(newsItems[0])}>
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
                                <h2 className="text-2xl md:text-4xl font-[1000] text-white mb-8 tracking-tighter leading-tight uppercase">
                                    {newsItems[0].title}
                                </h2>
                                <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-10">
                                    {newsItems[0].excerpt}
                                </p>
                                <div className="inline-flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                                    Read Full Log
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
                        {newsItems.slice(1).map((news) => (
                            <div key={news.id}
                                className="group bg-white p-10 border-r border-b border-slate-100 hover:border-orange-500 hover:z-10 transition-all duration-300 flex flex-col rounded-none cursor-pointer"
                                onClick={() => setSelectedNews(news)}>
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

                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-4">
                                    {news.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-600 rotate-45" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Archive Ref #{news.id + 200}</span>
                                    </div>
                                    <button className="text-[10px] font-black text-orange-600 uppercase tracking-widest hover:text-[#000080] transition-colors flex items-center gap-2 font-[1000]">
                                        Full Story <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center border-t border-slate-100 pt-16">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Notice of Authenticity</p>
                        <p className="text-slate-400 text-xs font-medium italic opacity-60">
                            All blog items listed above are part of the official HSGA Telangana training and event logs.
                        </p>
                    </div>
                </div>
            </div>

            {/* FULL BLOG OVERLAY */}
            {selectedNews && (
                <div className="fixed inset-0 z-[500] bg-slate-950/40 backdrop-blur-sm flex items-center justify-end p-0 md:p-6 transition-all duration-500"
                    onClick={() => setSelectedNews(null)}>
                    <div className="w-full max-w-2xl h-full bg-white shadow-2xl overflow-y-auto relative animate-in slide-in-from-right duration-500 ease-out"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 right-0 p-6 bg-white/80 backdrop-blur-md flex justify-between items-center border-b border-slate-100 z-20">
                            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{selectedNews.category} Log</span>
                            <button onClick={() => setSelectedNews(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <span className="text-2xl font-light">&times;</span>
                            </button>
                        </div>

                        <div className="p-8 md:p-14">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-4 h-4 text-orange-600" />
                                <span className="text-sm font-bold text-slate-400">{selectedNews.date}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-[1000] text-[#000080] mb-10 tracking-tighter leading-[1.1] uppercase">
                                {selectedNews.title}
                            </h2>
                            <div className="w-16 h-1 bg-orange-600 mb-10" />
                            <div className="text-slate-600 text-lg font-medium leading-relaxed space-y-6">
                                <p className="text-xl text-slate-900 font-bold italic leading-relaxed">
                                    {selectedNews.excerpt}
                                </p>
                                <p className="border-t border-slate-100 pt-8">
                                    {selectedNews.content}
                                </p>
                            </div>

                            <div className="mt-20 p-8 bg-slate-50 border border-slate-100 text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">End of Official Statement</p>
                                <button onClick={() => setSelectedNews(null)} className="px-8 py-3 bg-[#000080] text-white text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
                                    Back to Directory
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogsPage;