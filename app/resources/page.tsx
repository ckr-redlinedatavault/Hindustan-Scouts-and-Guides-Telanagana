"use client";

import React, { useState } from "react";
import {
    FileText, Download, Search, Filter,
    FileCode, ShieldCheck, ChevronRight,
    ArrowRight, Info
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

const resources = [
    {
        category: "Application Forms",
        items: [
            { title: "Student Admission Form", size: "1.2 MB", format: "PDF", date: "Jan 2026" },
            { title: "Trainer Enrollment Application", size: "850 KB", format: "PDF", date: "Feb 2026" },
            { title: "Unit Registration Form", size: "1.5 MB", format: "DOCX", date: "Oct 2025" },
            { title: "Merit Badge Request Form", size: "420 KB", format: "PDF", date: "Dec 2025" }
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
            { title: "National Event Participation", size: "1.1 MB", format: "PDF", date: "Feb 2026" },
            { title: "District HQ Appointments", size: "380 KB", format: "PDF", date: "Jan 2026" }
        ]
    }
];

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...resources.map(r => r.category)];

    const filteredResources = resources.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat =>
        (activeCategory === "All" || cat.category === activeCategory) && cat.items.length > 0
    );

    return (
        <div className="min-h-screen bg-white font-outfit">
            <Navbar />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#000033]">
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle at 20% 50%, #1e3a8a 0%, transparent 50%)` }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10 mb-6 inline-block">
                        Digital Repository
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Resources & <span className="text-orange-500">Documents</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
                        Access and download official application forms, physical documents, and latest circulars from the HSGA Telangana State Headquarters.
                    </p>

                    {/* Search & Filter Bar */}
                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex flex-col md:row items-center gap-2">
                        <div className="relative flex-grow w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search for documents or forms..."
                                className="w-full bg-transparent py-4 pl-12 pr-6 text-white focus:outline-none placeholder:text-white/20"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 p-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === cat
                                        ? "bg-white text-[#000033] shadow-lg"
                                        : "text-white/60 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Document Listing */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    {filteredResources.length > 0 ? (
                        <div className="space-y-20">
                            {filteredResources.map((section, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-4 mb-10">
                                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{section.category}</h2>
                                        <div className="h-px flex-grow bg-slate-200" />
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{section.items.length} Files</span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 flex flex-col">
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#000066] group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                        <FileText className="w-6 h-6" />
                                                    </div>
                                                    <span className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 uppercase rounded-lg">
                                                        {item.format}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#000066] transition-colors leading-tight">
                                                    {item.title}
                                                </h3>

                                                <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-8">
                                                    <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5" /> {item.size}</span>
                                                    <span>•</span>
                                                    <span>{item.date}</span>
                                                </div>

                                                <button className="mt-auto w-full py-3 bg-slate-50 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#000066] group-hover:text-white transition-all">
                                                    Download <Download className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No documents found</h3>
                            <p className="text-slate-400 text-sm">Try broadening your search or selecting another category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Quick Support Banner */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto bg-[#f0f9ff] border border-blue-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            Official Documentation
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Need a physically signed form for your school?</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            If you require hard copies of certificates or authenticated circulars, please contact the State Headquarters directly with your request.
                        </p>
                        <button className="px-8 py-4 bg-[#000066] text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-3">
                            Contact HQ <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800"
                            alt="Documents Pile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ResourcesPage;
