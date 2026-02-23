"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

const BottomBanner = () => {
    return (
        /* Deep Black Background with strictly Bold font weight */
        <footer className="w-full bg-[#050505] border-t border-white/5 py-6 pb-10 md:pb-6 font-bold">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                    {/* Left Side: Partner Identity */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-white/30 text-[11px] tracking-tight">
                                Developed by
                            </span>
                            
                            <a
                                href="https://redlix.co.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 group transition-all"
                            >
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770405388/icon-removebg-preview_v3cxkb.png"
                                    alt="Redlix"
                                    className="h-5 md:h-6 w-auto transition-opacity duration-300 group-hover:opacity-80"
                                />
                                <span className="text-white text-sm tracking-tighter group-hover:text-orange-500 transition-colors">
                                    Redlix
                                </span>
                            </a>
                        </div>

                        {/* Status Badge with Vertical Divider */}
                        <div className="flex items-center gap-3 border-l border-white/10 pl-8">
                            <ShieldCheck className="w-4 h-4 text-orange-600" />
                            <span className="text-[11px] text-white/50">
                                Official technical partner
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Status & Solid Support Button */}
                    <div className="flex items-center gap-6 lg:gap-10">
                        {/* Live Indicator */}
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[11px] text-white/40">
                                System live
                            </span>
                        </div>

                        {/* Location Badge (Desktop) */}
                        <div className="hidden lg:block">
                            <span className="text-[11px] text-white/20">
                                Hyderabad, India
                            </span>
                        </div>

                        {/* Solid Support Button - High Visibility Orange */}
                        <a
                            href="https://redlix.co.in/support"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-6 py-2.5 bg-orange-600 text-white text-[11px] transition-all hover:bg-white hover:text-[#050505]"
                        >
                            <Zap className="w-3.5 h-3.5 fill-current transition-all" />
                            <span className="tracking-tight">
                                Technical support
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default BottomBanner;