"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import { MapPin, Users, HeartHandshake, ChevronRight, GraduationCap, Clock } from "lucide-react";

const CareersPage = () => {
    const opportunities = [
        {
            id: 1,
            title: "District Training Commissioner",
            type: "Full-Time",
            location: "Khammam / Warangal",
            desc: "Experienced adult leader required to oversee district-level curriculum and trainer validation.",
            icon: GraduationCap
        },
        {
            id: 2,
            title: "Administrative Assistant",
            type: "Full-Time",
            location: "State HQ, Hyderabad",
            desc: "Managing member database, enrollment records, and inter-district communication.",
            icon: Users
        },
        {
            id: 3,
            title: "Volunteer Scout Master",
            type: "Volunteer",
            location: "Multiple Districts",
            desc: "Passionate individuals to lead local school units and conduct weekend scouting activities.",
            icon: HeartHandshake
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-outfit text-slate-900">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
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
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl font-[1000] text-[#000080] tracking-tighter uppercase">Current Opportunities</h2>
                            <p className="text-gray-500 font-medium mt-2">Join our mission across various districts in Telangana.</p>
                        </div>
                        <div className="bg-orange-50 px-6 py-2 border border-orange-100 flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-600 rotate-45" />
                            <span className="text-orange-700 text-[11px] font-black uppercase tracking-widest">3 Positions Open</span>
                        </div>
                    </div>

                    {/* Job Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
                        {opportunities.map((job) => (
                            <div key={job.id} className="group bg-white p-10 border-r border-b border-slate-100 hover:border-orange-500 hover:z-10 transition-all duration-300 flex flex-col rounded-none">
                                <div className="w-14 h-14 bg-slate-50 text-[#000080] flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                                    <job.icon className="w-7 h-7" />
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center gap-1.5 text-[10px] font-black text-orange-600 uppercase tracking-widest">
                                        <Clock className="w-3.5 h-3.5" /> {job.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-black text-[#000080] mb-4 tracking-tight leading-tight uppercase group-hover:text-orange-600 transition-colors">
                                    {job.title}
                                </h3>

                                <div className="flex items-center gap-2 text-slate-500 mb-6">
                                    <MapPin className="w-4 h-4 text-orange-600" />
                                    <span className="text-xs font-bold uppercase tracking-tight">{job.location}</span>
                                </div>

                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 grow">
                                    {job.desc}
                                </p>

                                <button className="flex items-center justify-center gap-3 w-full py-4 bg-[#000080] text-white text-[11px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
                                    View Details
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* General Inquiry Section */}
                    <div className="mt-24 border border-slate-100 bg-slate-50/50 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-[1000] text-[#000080] tracking-tighter mb-4 uppercase">Can't Find the Right Fit?</h3>
                            <p className="text-gray-600 font-medium max-w-xl leading-relaxed">
                                We are always looking for passionate volunteers and visionaries to lead sections. Send your profile and statement of purpose to
                                <span className="text-orange-600 font-black ml-2 block sm:inline">hsgatelangana@gmail.com</span>
                            </p>
                        </div>
                        <button className="px-8 py-5 bg-white border-2 border-[#000080] text-[#000080] font-black text-xs uppercase tracking-widest hover:bg-[#000080] hover:text-white transition-all whitespace-nowrap">
                            Submit General Application
                        </button>
                    </div>
                </div>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default CareersPage;