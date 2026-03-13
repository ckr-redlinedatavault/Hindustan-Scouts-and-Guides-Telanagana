"use client";

import React from "react";
import { ArrowRight, Info } from "lucide-react";

const TopBanner = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-[#d84315] text-white py-2.5 px-4 sm:px-8 relative z-[110] border-b border-white/10 shadow-sm">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '20px 20px' }}
            />

            <div className="max-w-[1500px] mx-auto relative z-10 flex items-center justify-between gap-4">

                <div className="flex items-center gap-4 lg:gap-6 min-w-0">
                    <div className="flex items-center gap-2 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-none">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shrink-0" />
                        <span className="text-[11px] sm:text-[12px] font-semibold tracking-tight">
                            Official State Portal
                        </span>
                    </div>

                    <p className="hidden md:block text-[12px] lg:text-[13px] font-medium text-white/90 border-l border-white/20 pl-4">
                        Recognized by the <span className="font-bold text-white">Ministry of Youth Affairs & Sports</span>
                    </p>
                </div>

                <div className="flex items-center gap-4 sm:gap-8 shrink-0">

                    <div className="hidden lg:flex items-center gap-2 text-[13px]">
                        <span className="text-white/70 font-medium">Status:</span>
                        <span className="bg-white text-[#d84315] px-2 py-0.5 rounded-none font-bold text-[12px]">
                            {currentYear} Enrollment Open
                        </span>
                    </div>

                    <a
                        href="https://hus.hsgatelangana.com/membership"
                        className="group flex items-center gap-2 text-[12px] sm:text-[13px] font-bold transition-all hover:text-white"
                    >
                        <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-all">
                            Membership registration
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default TopBanner;