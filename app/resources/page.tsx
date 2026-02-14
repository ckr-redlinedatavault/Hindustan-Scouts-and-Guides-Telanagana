"use client";

import React, { useState } from "react";
import {
    FileText, Download, Search, Filter,
    FileCode, ShieldCheck, ChevronRight,
    ArrowRight, Info
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const resources = [
    {
        category: "Application Forms",
        items: [
            { title: "Student Admission Form", size: "1.2 MB", format: "PDF", date: `Jan ${new Date().getFullYear()}` },
            { title: "Trainer Enrollment Application", size: "850 KB", format: "PDF", date: `Feb ${new Date().getFullYear()}` },
            { title: "Unit Registration Form", size: "1.5 MB", format: "DOCX", date: `Oct ${new Date().getFullYear() - 1}` },
            { title: "Merit Badge Request Form", size: "420 KB", format: "PDF", date: `Dec ${new Date().getFullYear() - 1}` }
        ]
    },
    {
        category: "Official Documents",
        items: [
            { title: "HSGA Telangana Constitution", size: "3.4 MB", format: "PDF", date: "2024 Edition" },
            { title: "State Bye-Laws & Rules", size: "2.1 MB", format: "PDF", date: "v2.1" },
            { title: "Scouting Manual (Beginners)", size: "10.2 MB", format: "PDF", date: "2025" },
            { title: "Safety Guidelines Protocol", size: "1.8 MB", format: "PDF", date: "2026" }
        ]
    },
    {
        category: "Circulars & Notices",
        items: [
            { title: "Training Camp Circular 2026", size: "560 KB", format: "PDF", date: "Recent" },
            { title: "National Event Participation", size: "1.1 MB", format: "PDF", date: `Feb ${new Date().getFullYear()}` },
            { title: "District HQ Appointments", size: "380 KB", format: "PDF", date: `Jan ${new Date().getFullYear()}` }
        ]
    }
];

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    // ... (resources array stays same)

    const filteredResources = resources.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

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
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Official Media & Docs</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Resources & <span className="text-orange-500">Downloads</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                Access official application forms, training manuals, and administrative documentation for HSGA Telangana.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Unified Systems Alert */}
                <div className="bg-orange-50 border-b border-orange-100 relative z-20">
                    <div className="max-w-[1500px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 rounded-full text-orange-600 shrink-0">
                                <Info className="w-4 h-4" />
                            </div>
                            <p className="text-sm font-bold text-orange-900">
                                Looking for relevant documents? Go to the <span className="font-black">HSGA Unified Systems</span> page to access the new document repository.
                            </p>
                        </div>
                        <a href="https://hushsga-final.vercel.app/documents" className="shrink-0 px-5 py-2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-orange-700 transition-colors flex items-center gap-2">
                            Go to Unified Systems
                            <ArrowRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Search & Utility Bar */}
                <div className="border-b border-slate-100 bg-slate-50/50 sticky top-[73px] z-50 backdrop-blur-md">
                    <div className="max-w-[1500px] mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="relative flex-grow w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search resources, forms, or manuals..."
                                    className="w-full bg-white border border-slate-200 py-4 pl-12 pr-4 text-sm font-medium focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none rounded-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#000080] mr-2">Quick Filter:</span>
                                {["all", "Forms", "Manuals"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border ${activeTab === tab
                                            ? "bg-[#000080] text-white border-[#000080]"
                                            : "bg-white text-slate-500 border-slate-200 hover:border-orange-500 hover:text-orange-600"
                                            } rounded-none`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="max-w-[1500px] mx-auto px-6 py-20">
                    <div className="space-y-24">
                        {filteredResources.map((category, idx) => (
                            <section key={idx}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-1.5 h-8 bg-orange-600" />
                                    <h2 className="text-3xl font-[1000] text-[#000080] tracking-tighter uppercase">{category.category}</h2>
                                    <span className="ml-4 px-4 py-1 bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        {category.items.length} Files
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
                                    {category.items.map((item, iidx) => (
                                        <div key={iidx} className="group bg-white p-10 border-r border-b border-slate-100 hover:border-orange-500 hover:z-10 transition-all duration-300 flex flex-col rounded-none">
                                            <div className="flex items-start justify-between mb-8">
                                                <div className="w-12 h-12 bg-slate-50 text-[#000080] flex items-center justify-center border border-slate-100 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                                                    {item.format === "PDF" ? <FileText className="w-6 h-6" /> : <FileCode className="w-6 h-6" />}
                                                </div>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                    {item.size} • {item.format}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-black text-[#000080] mb-4 tracking-tight leading-tight uppercase group-hover:text-orange-600 transition-colors">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-500 text-xs font-bold uppercase tracking-tight mb-10">
                                                Last Updated: {item.date}
                                            </p>

                                            <button className="flex items-center justify-between gap-3 w-full py-4 px-6 bg-[#000080] text-white text-[11px] font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all mt-auto">
                                                Download Source
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredResources.length === 0 && (
                        <div className="py-32 text-center border border-dashed border-slate-200 bg-slate-50/50">
                            <Info className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                            <h3 className="text-2xl font-black text-[#000080] uppercase tracking-tighter">No Resources Found</h3>
                            <p className="text-gray-500 font-medium mt-2">Adjust your search or filter to find what you're looking for.</p>
                        </div>
                    )}
                </div>
                {/* Unified Systems CTA */}
                <section className="py-24 max-w-[1500px] mx-auto px-6">
                    <div className="bg-[#000080] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-white border-l-[10px] border-orange-600 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '16px 16px' }} />

                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-3xl font-[1000] tracking-tighter mb-4 uppercase">All New Resources are Hosted on<br /><span className="text-orange-500">Unified Systems</span></h3>
                            <p className="text-white/70 font-medium max-w-xl leading-relaxed">
                                Our document management has moved. Access the centralized portal for the latest forms, circulars, and manuals.
                            </p>
                        </div>
                        <a href="/get-started" className="relative z-10 px-10 py-5 bg-white text-[#000080] font-black text-xs uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all whitespace-nowrap flex items-center gap-2">
                            Access Unified Systems
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default ResourcesPage;
