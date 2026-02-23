"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";

const TopBanner = () => {
    return (
        <div className="bg-orange-600 text-white py-2.5 px-6 relative z-50 overflow-hidden border-b border-white/10">
            {/* Clean background texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: '16px 16px' }}
            />

            <div className="max-w-[1500px] mx-auto relative z-10 flex items-center justify-between gap-6">

                {/* Left Side: Brand Marker & Official Status */}
                <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                    {/* Signature Marker Line */}
                    <div className="hidden md:flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-white/40"></span>
                        <span className="text-[10px] font-black tracking-widest uppercase opacity-80">
                            Status
                        </span>
                    </div>

                    <div className="flex items-center gap-3 md:gap-5">
                        {/* Compact Badge */}
                        <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 border border-white/20">
                            <ShieldCheck className="w-3 h-3 text-white" />
                            <span className="text-[10px] font-bold tracking-tight">Official HQ</span>
                        </div>

                        {/* Recognition Text - Sentence Case */}
                        <p className="text-[11px] md:text-[12px] font-medium tracking-tight whitespace-nowrap">
                            <span className="hidden sm:inline text-white/60 mr-2 lowercase italic">Recognized by</span>
                            Ministry of Youth Affairs and Sports
                        </p>
                    </div>
                </div>

                {/* Right Side: Action Link */}
                <div className="flex items-center gap-6">
                    {/* Enrollment Status - Subtle Marker */}
                    <div className="hidden lg:flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[11px] font-bold tracking-tight text-white/80">
                            Enrollment 2026 open
                        </span>
                    </div>

                    {/* Creative Action Link */}
                    <a
                        href="https://hushsga-final.vercel.app/membership"
                        className="group flex items-center gap-2 text-[11px] font-black tracking-widest uppercase border-l border-white/20 pl-6 transition-all hover:text-slate-900"
                    >
                        Membership
                        <div className="w-5 h-5 flex items-center justify-center bg-white/10 group-hover:bg-white group-hover:text-orange-600 transition-all">
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default TopBanner;