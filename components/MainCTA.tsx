"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const MainCTA = () => {
    return (
        <section className="bg-[#000080] py-10 relative overflow-hidden border-b-4 border-orange-600">
            {/* Professional Background Detail */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
            />

            {/* Subtle glow behind buttons */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/4 h-full bg-orange-500/10 blur-[100px] pointer-events-none" />

            <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

                    {/* Left Side: Impact Heading */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-10 bg-orange-600"></span>
                            <span className="text-white/70 text-[11px] font-black uppercase tracking-[0.3em]">Official Enrollment 2026</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[42px] font-[1000] text-white tracking-tighter uppercase leading-[1.05]">
                            Ready to <span className="text-orange-500">Lead?</span> Join the <br className="hidden md:block" />
                            National Scouting Movement.
                        </h2>
                    </div>

                    {/* Right Side: Primary Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-orange-600 text-white font-[1000] text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#000080] shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-5 border-2 border-white/20 text-white font-[1000] text-[11px] uppercase tracking-[0.2em] transition-all hover:border-white hover:bg-white/5 flex items-center justify-center gap-2 group"
                        >
                            Volunteer
                            <ChevronRight className="w-4 h-4 opacity-50 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainCTA;