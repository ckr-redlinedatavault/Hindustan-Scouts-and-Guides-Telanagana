"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
    Calendar, Newspaper, ArrowRight, Tag, Bell,
    Search, Info, BookOpen, Globe, Activity, Trophy, Users, Target
} from "lucide-react";

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
        },
        {
            id: 101,
            title: "Sustainable Development Goals: Mission 2030",
            date: "Mar 04, 2026",
            category: "Mission 2030",
            excerpt: "How HSGA Telangana is mobilizing scouts to solve global challenges through direct local community action and environmental stewardship.",
            content: "Our commitment to the Sustainable Development Goals (SDGs) is at the core of our scouting mission. For 2025-26, we have identified primary focus areas: SDG 1 (No Poverty) through service to weaker sections, SDG 3 (Good Health) through state-wide Yoga and First Aid workshops, and SDG 4 (Quality Education) through our non-formal badge system. Each scout lodge is recording impact metrics to contribute to the global 'Scouts for SDGs' initiative. By 2030, we aim to have 100% of our scouts engaged in at least three SDG-aligned projects annually."
        },
        {
            id: 102,
            title: "NEP 2020: Shaping Holistic Learners",
            date: "Mar 04, 2026",
            category: "Framework",
            excerpt: "Integrating scouting into the National Education Policy framework to build intellectual, physical, and social skills through experiential education.",
            content: "The National Education Policy (NEP) 2020 emphasizes holistic and experiential learning, a philosophy that has been the bedrock of scouting for over a century. HSGA Telangana is working closely with the State Education Department to integrate scouting credits into the formal curriculum. Our focus remains on vocational skills via the proficiency badge system, value-based education through the scout promise, and active citizenship. Through NEP 2020 alignment, we are ensuring that every child in Telangana has access to character-building opportunities that transcend the classroom."
        }
    ];


    return (
        <div className="bg-white flex flex-col font-outfit text-slate-900 w-full relative">
            <Breadcrumbs />

            <div className="w-full">
                {/* HERO SECTION */}
                <div className="bg-[#000080] pt-14 pb-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-4 font-[1000]">
                                <span className="h-[1.5px] w-10 bg-orange-500"></span>
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Official Blogs</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-[1000] mb-5 tracking-tighter leading-[1.1]">
                                Empowering Youth Through <br />
                                <span className="text-orange-500">Shared Narratives.</span>
                            </h1>
                            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                From official administrative bulletins to student-led scouting stories, our blog is the heartbeat of HSGA Telangana's mission and impact.
                            </p>
                        </div>
                    </div>
                </div>

                {/* OFFICIAL BLOGS SECTION */}
                <div className="max-w-[1500px] mx-auto px-6 py-14">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Archive</span>
                            <h2 className="text-3xl font-[1000] text-[#000080] tracking-tight uppercase">Latest Bulletins</h2>
                        </div>
                        <div className="hidden md:block">
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#000080]/50 hover:text-orange-600 transition-colors">
                                View full archive <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100 mb-24">
                        {newsItems.slice(1, 3).map((news) => (
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
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ref #{news.id + 200}</span>
                                    </div>
                                    <button className="text-[10px] font-black text-orange-600 uppercase tracking-widest hover:text-[#000080] transition-colors flex items-center gap-2">
                                        Full Story <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ALIGNMENT PILLARS - SDG & NEP (Styled like Blog Cards) */}
                    <div className="mb-12">
                        <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Our Commitment</span>
                        <h2 className="text-3xl font-[1000] text-[#000080] tracking-tight uppercase">National & Global Alignment</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 border-t border-l border-slate-100">
                        {newsItems.slice(3).map((news) => (
                            <div key={news.id}
                                className="group bg-white p-10 border-r border-b border-slate-100 hover:border-orange-500 hover:z-10 transition-all duration-300 flex flex-col rounded-none cursor-pointer"
                                onClick={() => setSelectedNews(news)}>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="px-3 py-1 bg-orange-50 text-orange-600 text-[9px] font-black uppercase tracking-widest border border-orange-100 rounded-none">
                                        {news.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold">
                                        <Globe className="w-3.5 h-3.5 text-orange-600" />
                                        Framework 2025
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
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vision Doc</span>
                                    </div>
                                    <button className="text-[10px] font-black text-orange-600 uppercase tracking-widest hover:text-[#000080] transition-colors flex items-center gap-2">
                                        Read Document <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            {/* FULL BLOG OVERLAY - WIKI REDESIGN */}
            {selectedNews && (
                <div className="fixed inset-0 z-[500] bg-slate-950/60 backdrop-blur-sm flex items-start justify-center p-0 md:p-12 overflow-y-auto transition-all duration-300"
                    onClick={() => setSelectedNews(null)}>

                    <div className="w-full max-w-5xl bg-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-300 ease-out flex flex-col md:flex-row min-h-screen md:min-h-[auto]"
                        onClick={(e) => e.stopPropagation()}>

                        {/* WIKI LEFT SIDE - MAIN CONTENT */}
                        <div className="flex-1 p-6 md:p-10 border-r border-slate-100">
                            {/* BREADCRUMB STYLE HEADER */}
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
                                <span>Blogs</span>
                                <span>/</span>
                                <span className="text-orange-600">{selectedNews.category}</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-[1000] text-slate-900 mb-6 tracking-tight leading-tight">
                                {selectedNews.title}
                            </h1>

                            {/* WIKI TABLE OF CONTENTS (MINI) */}
                            <div className="bg-slate-50 border border-slate-200 p-4 mb-8 inline-block min-w-[240px]">
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#000080] mb-3 border-b border-slate-200 pb-1">Contents</div>
                                <ul className="space-y-1.5">
                                    {["Overview", "Background", "Key Objectives", "Community Impact", "See Also"].map((item, i) => (
                                        <li key={i} className="text-xs font-medium text-slate-500 hover:text-orange-600 cursor-pointer flex gap-2">
                                            <span className="text-slate-300">{i + 1}</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* MAIN ARTICLE BODY */}
                            <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-6 max-w-none">
                                <p className="font-bold text-slate-900 border-l-4 border-orange-500 pl-6 italic bg-slate-50 py-4">
                                    {selectedNews.excerpt}
                                </p>

                                <p>
                                    {selectedNews.content}
                                </p>

                                {/* INLINE IMAGE 1 */}
                                <div className="my-8 border border-slate-100 p-1">
                                    <img
                                        src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/b_og8pcm.jpg"
                                        alt="Scouting Community Service in Telangana"
                                        className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="bg-slate-50 p-3 text-[10px] font-medium text-slate-500 italic border-t border-slate-100">
                                        Fig 1.1: Local HSGA scouts participating in a community service project, demonstrating civic responsibility and the scout promise.
                                    </div>
                                </div>

                                <h2 className="text-xl font-black text-[#000080] border-b border-slate-100 pb-2 mt-10">Strategic Development</h2>
                                <p>
                                    The implementation follows strict guidelines aligned with national standards for excellence. Every activity is documented and reviewed by the state headquarters to ensure maximum efficacy and adherence to the scout promise.
                                </p>

                                {/* INLINE IMAGE 2 */}
                                <div className="my-8 border border-slate-100 p-1">
                                    <img
                                        src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/i_mdzjev.jpg"
                                        alt="Scout Camp Telangana"
                                        className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="bg-slate-50 p-3 text-[10px] font-medium text-slate-500 italic border-t border-slate-100">
                                        Fig 1.2: Practical training session on woodcraft and survival skills at one of our regional training centers in Telangana.
                                    </div>
                                </div>

                                <h2 className="text-xl font-black text-[#000080] border-b border-slate-100 pb-2 mt-10">References</h2>
                                <ul className="text-xs text-slate-400 space-y-1 list-decimal pl-4">
                                    <li>HSGA Telangana State Constitution, Article IV (revised 2024).</li>
                                    <li>National Scouting Framework (Draft 2025).</li>
                                    <li>State Education Department, Circular No. 112/GS/2024.</li>
                                </ul>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-slate-300">Last edited: March 04, 2026</span>
                                <button onClick={() => setSelectedNews(null)} className="px-6 py-2 border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors">
                                    Close Reading
                                </button>
                            </div>
                        </div>

                        {/* WIKI RIGHT SIDE - INFOBOX */}
                        <div className="w-full md:w-[320px] bg-white p-6 md:p-8 shrink-0">
                            <div className="border border-slate-200 p-1 shadow-sm">
                                <div className="bg-slate-50 text-center py-3 border-b border-slate-200">
                                    <span className="text-[11px] font-black text-[#000080] uppercase tracking-tighter">Official Scout Record</span>
                                </div>
                                <div className="p-1 border-b border-slate-100">
                                    <img
                                        src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516928/q_ly7xyj.jpg"
                                        alt="Scouting Excellence"
                                        className="w-full h-44 object-cover"
                                    />
                                </div>
                                <table className="w-full text-left">
                                    <tbody className="divide-y divide-slate-100 text-[11px]">
                                        {[
                                            { label: "Date", val: selectedNews.date },
                                            { label: "Category", val: selectedNews.category },
                                            { label: "Archive ID", val: `#${selectedNews.id + 200}` },
                                            { label: "Publisher", val: "HSGA Telangana H.Q." },
                                            { label: "Verified", val: "YES ✓" },
                                            { label: "Status", val: "Public Release" }
                                        ].map((row, i) => (
                                            <tr key={i}>
                                                <td className="py-3 px-3 font-black text-slate-400 uppercase tracking-tight w-24">{row.label}</td>
                                                <td className="py-3 px-3 font-bold text-slate-700">{row.val}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Related Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Training", "E-Scouting", "Governance", "Leadership"].map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-50 text-[9px] font-bold text-slate-500 border border-slate-100">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CLOSE BUTTON (DESKTOP FLOATING) */}
                        <button
                            onClick={() => setSelectedNews(null)}
                            className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-xl z-50 hidden md:flex"
                        >
                            <span className="text-xl font-light">&times;</span>
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default BlogsPage;