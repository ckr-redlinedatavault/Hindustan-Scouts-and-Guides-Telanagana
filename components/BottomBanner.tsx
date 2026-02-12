"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

const BottomBanner = () => {
    return (
        <footer className="w-full bg-[#080808] border-t border-white/10 py-2.5">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-row items-center justify-between gap-4">

                    {/* Left: Partner Identity (Compact Single Line) */}
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:block text-[9px] font-bold text-white uppercase tracking-[0.2em] opacity-50">
                            Developed by
                        </span>
                        <a
                            href="https://redlix.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center group"
                        >
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770405388/icon-removebg-preview_v3cxkb.png"
                                alt="Redlix"
                                className="h-6 md:h-7 w-auto transition-transform duration-300 group-hover:scale-110"
                            />
                        </a>
                        <div className="hidden lg:flex items-center gap-2 border-l border-white/20 pl-4">
                            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-[10px] font-black text-white uppercase tracking-tight">Official Tech Partner</span>
                        </div>
                    </div>

                    {/* Right: Status & Support (Compact Single Line) */}
                    <div className="flex items-center gap-6">
                        {/* Live Indicator */}
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                            </span>
                            <span className="text-[9px] font-black text-white uppercase tracking-tighter">System Live</span>
                        </div>

                        <div className="h-3 w-[1px] bg-white/20" />

                        {/* Support Link */}
                        <a
                            href="https://redlix.co.in/support"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 text-white transition-all"
                        >
                            <Zap className="w-3 h-3 text-orange-500 group-hover:animate-pulse" />
                            <span className="font-black tracking-widest text-[9px] uppercase">Support</span>
                        </a>

                        <div className="hidden sm:block h-3 w-[1px] bg-white/20" />

                        <span className="hidden sm:block text-[9px] font-bold text-white uppercase tracking-[0.3em] opacity-30">
                            Hyderabad, IN
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default BottomBanner;