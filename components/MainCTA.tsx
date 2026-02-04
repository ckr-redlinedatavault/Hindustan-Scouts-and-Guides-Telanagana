"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Users, ShieldCheck } from "lucide-react";

const MainCTA = () => {
    return (
        <section className="bg-[#000055] py-10 relative overflow-hidden font-outfit">
            {/* Subtle light effect to add depth without height */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-full bg-orange-500/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left: Message Block */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 mb-3 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Enrollment 2026</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Build Leadership. <span className="text-orange-500">Serve the Nation.</span>
                        </h2>
                        <p className="text-blue-100/60 text-sm mt-1 font-medium">
                            Join over 1.2 Million members in the HSGA Telangana movement.
                        </p>
                    </div>

                    {/* Right: Actions & Slim Stats */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Compact Stats */}
                        <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-6">
                            <div className="text-right">
                                <p className="text-white font-bold text-sm leading-none">33 Districts</p>
                                <p className="text-white/40 text-[9px] uppercase tracking-tighter mt-1">Active Presence</p>
                            </div>
                            <ShieldCheck className="w-5 h-5 text-orange-500/50" />
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/membership"
                                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-lg shadow-orange-900/20"
                            >
                                Register
                            </Link>
                            <Link
                                href="/careers"
                                className="border border-white/20 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2"
                            >
                                Volunteer
                                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainCTA;