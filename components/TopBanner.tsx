"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

const TopBanner = () => {
    const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="bg-[#e65100] text-white py-2 px-6 relative overflow-hidden border-b border-white/5">
            {/* Original radial texture kept as requested */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: '12px 12px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-row items-center justify-between gap-4">

                {/* Left Side: Badges and Official Info */}
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 rounded border border-white/20 backdrop-blur-sm shrink-0">
                        <ShieldCheck className="w-3 h-3" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Official</span>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-medium truncate">
                        <p className="flex items-center gap-2">
                            <span className="hidden sm:inline font-bold text-orange-100 uppercase tracking-tighter">HSGA Telangana</span>
                            <span className="hidden sm:inline opacity-30">|</span>
                            <span className="opacity-95 truncate">
                                Recognized by <span className="font-semibold text-white">Ministry of Youth Affairs and Sports (MYAS)</span>
                            </span>
                        </p>
                        <span className="hidden lg:inline-flex items-center gap-1.5 opacity-70">
                            <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                            Enrollment {currentYear} Open
                        </span>
                    </div>
                </div>

                {/* Right Side: Button - kept slim to maintain height */}
                <a
                    href="/membership"
                    className="group flex items-center gap-2 px-3 py-1 border border-white/30 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#e65100] hover:border-white shrink-0 shadow-sm"
                >
                    <span className="hidden xs:inline">Join HSGA</span>
                    <span className="xs:hidden">Join</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
            </div>
        </div>
    );
};

export default TopBanner;