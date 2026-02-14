"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Users, HeartHandshake, ChevronRight, GraduationCap, Clock } from "lucide-react";

const CareersPage = () => {
    const opportunities = [];

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
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Careers & Leadership</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Build the Future of <br />
                                <span className="text-orange-500">Scouting in Telangana.</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                Join the HSGA Telangana leadership team and help us develop the next generation of disciplined, visionary, and responsible citizens.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-[1500px] mx-auto px-6 py-20">
                    <div className="bg-white border border-slate-100 p-10 md:p-16 shadow-xl shadow-slate-900/5 text-left flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full">
                            <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-orange-700">Centralized Portal</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-[1000] text-[#000080] tracking-tighter mb-6 leading-tight">
                            Access opportunities via <br />
                            <span className="text-orange-600">HSGA Unified Systems</span>
                        </h2>
                        <p className="text-gray-500 font-medium text-lg max-w-2xl leading-relaxed mb-10">
                            All career, volunteer, and leadership opportunities are now centrally managed through our new digital ecosystem. Please visit the Unified Systems portal to view open positions and submit applications.
                        </p>
                        <a
                            href="https://hushsga-final.vercel.app/careers"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#000080] text-white text-[11px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-[#000080]/20"
                        >
                            Go to HSGA Unified Systems
                            <ChevronRight className="w-4 h-4" />
                        </a>
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

export default CareersPage;