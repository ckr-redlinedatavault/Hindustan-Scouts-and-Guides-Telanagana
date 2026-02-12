"use client";

import React from "react";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import {
    Users,
    GraduationCap,
    ShieldCheck,
    School,
    ArrowRight,
    LogIn,
    UserPlus,
    Lock
} from "lucide-react";

const GetStartedPage = () => {
    const portals = [
        {
            id: "student",
            title: "Student / Scout Portal",
            icon: GraduationCap,
            desc: "Access your digital logbook, track advancement, and view test card progress.",
            link: "#", // Placeholder for actual login URL
            color: "orange"
        },
        {
            id: "trainer",
            title: "Trainer / Leader Portal",
            icon: Users,
            desc: "Manage unit activities, approve advancements, and access training resources.",
            link: "#",
            color: "blue"
        },
        {
            id: "unit",
            title: "School / Unit Login",
            icon: School,
            desc: "Register new members, manage unit renewals, and coordinate with district HQ.",
            link: "#",
            color: "blue"
        },
        {
            id: "admin",
            title: "District / State Admin",
            icon: ShieldCheck,
            desc: "Administrative dashboard for district commissioners and state officials.",
            link: "#",
            color: "orange"
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
                <div className="bg-[#000080] pt-16 pb-20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 font-[1000] bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                            <Lock className="w-3 h-3 text-orange-500" />
                            <span className="text-white/90 text-[10px] uppercase tracking-[0.2em]">Secure Access Portal</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                            Get Started with <span className="text-orange-500">HSGA</span>
                        </h1>
                        <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                            Welcome to the digital ecosystem of Hindustan Scouts and Guides. Select your role below to login or register a new account.
                        </p>
                    </div>
                </div>

                {/* Portals Grid */}
                <div className="max-w-[1500px] mx-auto px-6 -mt-12 relative z-20 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {portals.map((portal) => (
                            <div key={portal.id} className="bg-white p-8 border border-slate-100 shadow-xl shadow-slate-900/5 group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                                <div className={`w-14 h-14 ${portal.color === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-[#000080]'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <portal.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-[1000] text-[#000080] mb-3 tracking-tight uppercase leading-tight">
                                    {portal.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 grow">
                                    {portal.desc}
                                </p>
                                <Link
                                    href={portal.link}
                                    className={`flex items-center justify-between w-full py-4 px-5 ${portal.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-[#000080] hover:bg-[#000066]'} text-white text-[11px] font-black uppercase tracking-widest transition-all`}
                                >
                                    Login Now
                                    <LogIn className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Registration Section */}
                <section className="bg-slate-50 border-t border-slate-200 py-24">
                    <div className="max-w-[1500px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6 text-orange-600">
                                    <UserPlus className="w-6 h-6" />
                                    <span className="text-xs font-black uppercase tracking-widest">New Registration</span>
                                </div>
                                <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter mb-6 uppercase">
                                    Join the Movement
                                </h2>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8 max-w-xl">
                                    Not yet a member? Schools and individual units can register with the State Headquarters to obtain their official charter and start their scouting journey.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "Official Unit Charter & Recognition",
                                        "Access to National Training Events",
                                        "Digital Advancement Tracking",
                                        "Government Recognized Certification"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-orange-600 rotate-45" />
                                            <span className="text-sm font-bold text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/resources"
                                        className="px-8 py-4 bg-[#000080] text-white font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all flex items-center gap-2"
                                    >
                                        Download Forms <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-black uppercase text-xs tracking-widest hover:border-[#000080] hover:text-[#000080] transition-all"
                                    >
                                        Contact Support
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Side */}
                            <div className="relative h-[500px] lg:h-[600px] w-full bg-slate-200 overflow-hidden shadow-2xl skew-y-3 lg:skew-y-0 lg:-skew-x-3 border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000"
                                    alt="Scouts Team"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                                />
                                <div className="absolute inset-0 bg-[#000080]/20 mix-blend-multiply pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default GetStartedPage;
