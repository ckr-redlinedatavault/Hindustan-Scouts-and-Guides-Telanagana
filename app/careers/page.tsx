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
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-outfit text-slate-800">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Simplified Hero Section */}
                <div className="bg-[#000066] py-16 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                                Build the future of <span className="text-orange-500">Scouting.</span>
                            </h1>
                            <p className="text-blue-100 text-lg font-medium leading-relaxed opacity-90">
                                Join the HSGA Telangana leadership team and help us develop the next generation of disciplined and visionary citizens.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Current Opportunities</h2>
                            <p className="text-slate-500 mt-1">Join our mission across various districts in Telangana.</p>
                        </div>
                        <div className="bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                            <span className="text-orange-700 text-xs font-bold uppercase tracking-wider">3 Positions Open</span>
                        </div>
                    </div>

                    {/* Job Grid - More Professional Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {opportunities.map((job) => (
                            <div key={job.id} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col">
                                <div className="w-12 h-12 bg-blue-50 text-[#000066] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#000066] group-hover:text-white transition-colors">
                                    <job.icon className="w-6 h-6" />
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <span className="flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">
                                        <Clock className="w-3 h-3" /> {job.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#000066] transition-colors">
                                    {job.title}
                                </h3>

                                <div className="flex items-center gap-1.5 text-slate-500 mb-4">
                                    <MapPin className="w-4 h-4 text-orange-500" />
                                    <span className="text-sm font-medium">{job.location}</span>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8 grow">
                                    {job.desc}
                                </p>

                                <button className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-[#000066] transition-all">
                                    View Details
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Simplified General Inquiry Section */}
                    <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Can't find the right fit?</h3>
                            <p className="text-slate-600 max-w-md">
                                We are always looking for passionate volunteers and leaders. Send your profile to
                                <span className="text-[#000066] font-bold ml-1">hsgatelangana@gmail.com</span>
                            </p>
                        </div>
                        <button className="px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap">
                            Submit General Application
                        </button>
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

export default CareersPage;