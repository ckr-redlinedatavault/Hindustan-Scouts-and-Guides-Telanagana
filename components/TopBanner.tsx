"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const TopBanner = () => {
    return (
        <div className="bg-[#e65100] text-white py-2.5 px-6 relative overflow-hidden">
            {/* Subtle background texture for a premium feel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: '12px 12px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-3">

                {/* Information Side */}
                <div className="flex items-center gap-3 text-[11px] md:text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 rounded border border-white/20">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span className="uppercase font-bold tracking-tighter">Official</span>
                    </div>
                    <p className="opacity-95 flex items-center gap-2">
                        Membership Enrollment 2026
                        <span className="hidden md:inline opacity-40">•</span>
                        <span className="hidden md:inline">Recognized by Govt. of India (MYAS)</span>
                        <span className="hidden md:inline opacity-40">•</span>
                        <span className="font-bold">HSGA Telangana</span>
                    </p>
                </div>

                {/* Transparent Border Button */}
                <a
                    href="/membership"
                    className="group flex items-center gap-2 px-4 py-1 border border-white/40 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                    Join HSGA
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};

export default TopBanner;