"use client";

import React from "react";
import Link from "next/link";
import {
    School,
    ShieldCheck,
    ChevronRight,
    Users,
    Lock,
    Phone,
    Mail
} from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";

const GetStartedPage = () => {
    const portals = [
        {
            title: "School Portal",
            subtitle: "Admissions & Institutional Records",
            description: "Access your school's admission records, check student application status, and manage institutional profile data.",
            icon: School,
            path: "Schools / Educational Institutions",
            accent: "from-blue-600 to-indigo-700",
            href: "/login/school"
        },
        {
            title: "Trainer Portal",
            subtitle: "Scouts & Guides Instructors",
            description: "Dedicated portal for trainers and instructors to manage certifications, unit records, and training modules.",
            icon: Users,
            path: "Trainers / Instructors",
            accent: "from-orange-500 to-red-600",
            href: "/login/trainer"
        },
        {
            title: "Admin Portal",
            subtitle: "Official HQ Control",
            description: "Authorized access for officials to perform administrative tasks, validations, and data management.",
            icon: ShieldCheck,
            path: "HQ / Administration",
            accent: "from-emerald-600 to-teal-800",
            href: "/login/admin"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-outfit text-slate-900">
            <TopBanner />
            <div className="z-[100] bg-white border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-1 flex flex-col justify-center items-center px-4 relative">
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

                <div className="w-full max-w-6xl mx-auto flex flex-col">
                    {/* Header Section - Tightened */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                            <Lock className="w-3.5 h-3.5 text-blue-700" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Secure Gateway</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                            Digital <span className="text-blue-800">Portals</span>
                        </h1>
                        <p className="text-base text-slate-500 max-w-xl mx-auto">
                            Select your dedicated management system to access institutional records and operations.
                        </p>
                    </div>

                    {/* Portal Grids - Scaled for Viewport */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {portals.map((portal, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col"
                            >
                                {/* Icon Header */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${portal.accent} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <portal.icon className="w-7 h-7 text-white" />
                                </div>

                                <div className="mb-2">
                                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{portal.subtitle}</span>
                                    <h3 className="text-xl font-bold text-slate-900 mt-1">{portal.title}</h3>
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                                    {portal.description}
                                </p>

                                {/* Footer-like Link */}
                                <Link
                                    href={portal.href}
                                    target="_blank"
                                    className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50 group/btn"
                                >
                                    <span className="text-xs font-bold text-slate-400 group-hover/btn:text-blue-800 transition-colors uppercase tracking-wider">
                                        Enter Portal
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-blue-800 group-hover/btn:text-white transition-all">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Assistance - Compact */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-blue-800" />
                            <span className="text-xs font-semibold">Support: 040-31607502</span>
                        </div>
                        <div className="hidden sm:block h-3 w-px bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-blue-800" />
                            <span className="text-xs font-semibold">hsgatelangana@gmail.com</span>
                        </div>
                    </div>
                </div>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
                body {
                    overflow: hidden;
                }
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </div>
    );
};

export default GetStartedPage;