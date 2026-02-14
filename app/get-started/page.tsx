"use client";

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
    Users,
    ShieldCheck,
    School,
    LogIn,
    Lock
} from "lucide-react";

const GetStartedPage = () => {
    const portals = [

        {
            id: "trainer",
            title: "Trainer / Leader Portal",
            icon: Users,
            desc: "Manage unit activities, approve advancements, and access training resources.",
            link: "https://hushsga-final.vercel.app/trainer/login",
            color: "blue"
        },
        {
            id: "unit",
            title: "School / Unit Login",
            icon: School,
            desc: "Register new members, manage unit renewals, and coordinate with district HQ.",
            link: "https://hushsga-final.vercel.app/insti/login",
            color: "blue"
        },
        {
            id: "admin",
            title: "District / State Admin",
            icon: ShieldCheck,
            desc: "Administrative dashboard for district commissioners and state officials.",
            link: "https://hushsga-final.vercel.app/admin/login",
            color: "orange"
        }
    ];

    return (
        <div className="bg-white flex flex-col font-outfit text-slate-900 w-full">
            <Breadcrumbs />

            <div className="w-full">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div >
    );
};

export default GetStartedPage;
