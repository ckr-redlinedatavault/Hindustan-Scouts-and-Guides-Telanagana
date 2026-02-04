"use client";

import React from "react";
import { Zap } from "lucide-react";

const BottomBanner = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand Section */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tighter text-white">
                                RED<span className="text-orange-500">LIX</span>
                            </span>
                        </div>

                        <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
                                Technical Partner
                            </span>
                        </div>
                    </div>

                    {/* Rights & Support Section */}
                    <div className="flex flex-col md:items-end gap-3">
                        <div className="flex items-center gap-6 text-[11px] tracking-wide">
                            <p className="text-zinc-500 font-medium">
                                © {currentYear} <span className="text-zinc-300">HSGA Telangana</span>. All rights reserved.
                            </p>

                            <div className="h-3 w-[1px] bg-white/10" />

                            <a
                                href="#"
                                className="flex items-center gap-1.5 text-zinc-400 hover:text-orange-500 transition-all duration-300"
                            >
                                <Zap className="w-3.5 h-3.5" />
                                <span className="uppercase font-bold tracking-widest text-[9px]">Support</span>
                            </a>
                        </div>

                        {/* Subtle Location/Identity Tag */}
                        <div className="flex items-center gap-2 opacity-40">
                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-white">
                                Hyderabad, India
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default BottomBanner;