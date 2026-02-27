import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
    Users,
    ShieldCheck,
    School,
    ArrowRight,
    Lock,
    CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Get Started",
    description: "Access the HSGA Telangana digital portals for leadership, institutions, and administrative coordination.",
};

const GetStartedPage = () => {
    const portals = [
        {
            id: "01",
            label: "Leadership",
            title: "Trainer and Leader Portal",
            icon: Users,
            desc: "Access unit management tools, member advancement tracking, and official training curricula.",
            link: "https://hus.hsgatelangana.com/trainer/login",
            btnColor: "bg-[#000080]"
        },
        {
            id: "02",
            label: "Institutional",
            title: "School and Unit Login",
            icon: School,
            desc: "Register new scouting units, manage annual renewals, and coordinate with district authorities.",
            link: "https://hus.hsgatelangana.com/insti/login",
            btnColor: "bg-[#000080]"
        },
        {
            id: "03",
            label: "Administrative",
            title: "District and State Admin",
            icon: ShieldCheck,
            desc: "Unified dashboard for commissioners and state officials to manage regional scouting operations.",
            link: "https://hus.hsgatelangana.com/admin/login",
            btnColor: "bg-slate-800"
        }
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans text-slate-800 w-full">

            <section className="relative bg-[#000080] pt-16 pb-28 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-start max-w-2xl">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-6 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                                Digital Access Portal
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-5">
                            Get started with <br />
                            <span className="text-orange-500">HSGA Telangana.</span>
                        </h1>

                        <p className="text-blue-100/60 text-base md:text-[17px] font-normal tracking-tight mb-8">
                            Official Digital Gateway for Scouts, Leaders, and Institutional Partners
                        </p>

                        <div className="flex items-center gap-3 py-2 px-4 bg-white/5 border border-white/10">
                            <Lock className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-white/70 text-[11px] font-medium tracking-wide">
                                Secured by 256-bit encryption for safe data handling
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1500px] mx-auto px-6 lg:px-12 -mt-12 relative z-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-200 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                    {portals.map((portal) => (
                        <div key={portal.id} className="group relative flex flex-col bg-white border-r border-b border-gray-200 p-8 lg:p-10 transition-all duration-500">

                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-600 font-bold text-xs">{portal.id}</span>
                                    <span className="w-3 h-[1px] bg-gray-200"></span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                        {portal.label}
                                    </span>
                                </div>
                                <div className="p-2.5 bg-slate-50 border border-slate-100 group-hover:border-orange-100 transition-colors">
                                    <portal.icon className="w-5 h-5 text-slate-400 group-hover:text-orange-600" />
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                {portal.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-normal">
                                {portal.desc}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    href={portal.link}
                                    className={`flex items-center justify-between w-full py-3.5 px-6 ${portal.btnColor} text-white text-[10px] font-semibold uppercase tracking-[0.15em] transition-all hover:bg-orange-600`}
                                >
                                    Login to portal
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-600 transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 py-6 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600 opacity-70" />
                        <span className="text-[12px] font-semibold text-slate-400">Ministry of Youth Affairs Recognized</span>
                    </div>
                    <div className="hidden md:block w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-blue-600 opacity-70" />
                        <span className="text-[12px] font-semibold text-slate-400">WFIS Worldwide Affiliated</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetStartedPage;
