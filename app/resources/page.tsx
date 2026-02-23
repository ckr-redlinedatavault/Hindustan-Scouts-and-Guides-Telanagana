"use client";

import React, { useState } from "react";
import {
    FileText, Download, Search, Filter,
    FileCode, ShieldCheck, ChevronRight,
    ArrowRight, Info, Globe
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const resources = [
    {
        category: "Application Forms",
        items: [
            { title: "Student Registration Form", size: "Online", format: "LINK", date: "2026", href: "https://hushsga-final.vercel.app/register", isLink: true },
            { title: "Membership Registration Form", size: "765 KB", format: "DOCX", date: "2026", href: "/documents/membership.docx" },
            { title: "Volunteer Application Form", size: "16 KB", format: "DOCX", date: "2026", href: "/documents/volunteer.docx" },
            { title: "Unit Registration Form", size: "715 KB", format: "DOCX", date: "2026", href: "/documents/Unit Registration Form.docx" },
            { title: "College Admission Form (TG)", size: "507 KB", format: "DOC", date: "2026", href: "/documents/college ADMISSION FORM-TG" },
            { title: "Institutional Admission Form", size: "362 KB", format: "DOC", date: "2026", href: "/documents/INSTITUTIONAL ADMISSION form" },
            { title: "Trainer Enrollment Form", size: "1.2 MB", format: "DOC", date: "2026", href: "/documents/HSGA_Trainer_Enrollmen" },
            { title: "Form A3 - Scout Guide", size: "715 KB", format: "DOCX", date: "2026", href: "/documents/Form_A3_Scout Guide.docx" },
            { title: "Form A2 - Cub and Bulbul", size: "715 KB", format: "DOC", date: "2026", href: "/documents/cubs and bulbuls Form A2" }
        ]
    },
    {
        category: "Official Documents",
        items: [
            { title: "Training Framework (Complete)", size: "553 KB", format: "PDF", date: "2026", href: "/documents/HSG_Complete_Training_Framework.pdf" },
            { title: "Praveshika Training Manual", size: "6.2 MB", format: "PDF", date: "2026", href: "/documents/Praveshika.pdf" },
            { title: "Annual Activity Calendar", size: "432 KB", format: "DOC", date: "2026", href: "/documents/calander" },
            { title: "HSGA Telangana Constitution", size: "3.4 MB", format: "PDF", date: "2024 Edition", href: "#" },
            { title: "State Bye-Laws & Rules", size: "2.1 MB", format: "PDF", date: "v2.1", href: "#" }
        ]
    }
];

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const filteredResources = resources.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="bg-white flex flex-col font-sans text-slate-900 w-full">
            <Breadcrumbs />

            <section className="relative pt-10 pb-12 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-start max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Official Media & Docs
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-8">
                            Resources & <br />
                            <span className="text-orange-600">Downloads.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight border-l border-white/20 pl-8 max-w-2xl">
                            Access official application forms, training manuals, and administrative
                            documentation for Hindustan Scouts and Guides Telangana.
                        </p>
                    </div>
                </div>
            </section>

            <div className="border-b border-slate-100 bg-white sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative flex-grow w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search resources, forms, or manuals..."
                                className="w-full bg-slate-50 border border-slate-200 py-4 pl-12 pr-4 text-sm font-medium focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            {["all", "Forms", "Manuals"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all border ${activeTab === tab
                                        ? "bg-[#000080] text-white border-[#000080]"
                                        : "bg-white text-slate-500 border-slate-200 hover:border-orange-500 hover:text-orange-600"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-16">
                <div className="space-y-16">
                    {filteredResources.map((category, idx) => (
                        <section key={idx}>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="w-8 h-[1.5px] bg-orange-600" />
                                <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">
                                    {category.category}
                                </h2>
                                <span className="ml-4 px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {category.items.length} Files
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100 shadow-sm">
                                {category.items.map((item: any, iidx: number) => (
                                    <div key={iidx} className="group p-10 border-r border-b border-gray-100 hover:bg-slate-50 transition-all flex flex-col">
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-12 h-12 bg-[#000080]/5 text-[#000080] flex items-center justify-center border border-[#000080]/10 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                                                {item.format === "LINK" ? <Globe className="w-5 h-5" /> : item.format === "PDF" ? <FileText className="w-5 h-5" /> : <FileCode className="w-5 h-5" />}
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                {item.size} • {item.format}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight leading-tight uppercase group-hover:text-orange-600 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-tight mb-10">
                                            Year: {item.date}
                                        </p>

                                        <a
                                            href={item.href}
                                            download={!item.isLink ? true : undefined}
                                            target={item.isLink ? "_blank" : undefined}
                                            rel={item.isLink ? "noopener noreferrer" : undefined}
                                            className="flex items-center justify-between gap-3 w-full py-4 px-6 bg-[#000080] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all mt-auto shadow-sm"
                                        >
                                            {item.isLink ? "Register Online" : "Download Document"}
                                            {item.isLink ? <ArrowRight className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {filteredResources.length === 0 && (
                    <div className="py-24 text-center border-2 border-dashed border-slate-100 bg-slate-50/50">
                        <Search className="w-10 h-10 text-slate-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">No Resources Found</h3>
                        <p className="text-slate-400 font-medium text-sm mt-2">Try adjusting your search query.</p>
                    </div>
                )}
            </div>

            <section className="py-20 max-w-[1500px] mx-auto px-6 lg:px-12 mb-16">
                <div className="bg-[#000080] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '20px 20px' }} />

                    <div className="relative z-10 text-center lg:text-left">
                        <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">
                            Looking for official portal access?
                        </h3>
                        <p className="text-blue-100/60 font-medium max-w-xl leading-relaxed">
                            Access the centralized member portal for digital registrations, certifications,
                            and real-time organizational updates.
                        </p>
                    </div>
                    <a href="/get-started" className="relative z-10 px-10 py-5 bg-white text-[#000080] font-bold text-[11px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all flex items-center gap-3">
                        Visit Member Portal
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;
