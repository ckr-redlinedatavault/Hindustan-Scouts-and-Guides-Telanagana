"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const MainCTA = () => {
    return (
        <section className="bg-[#000080] py-12 md:py-16 relative overflow-hidden border-b-4 border-orange-600">
            {/* Professional Background Detail */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
            />

            {/* Subtle glow behind buttons */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/4 h-full bg-orange-500/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                    {/* Left Side: Impact Heading */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-8 bg-orange-600"></span>
                            <span className="text-white/80 text-sm font-semibold tracking-wide">
                                Official enrollment 2026
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                            Ready to <span className="text-orange-500">lead?</span> Join the <br className="hidden md:block" />
                            national scouting movement.
                        </h2>
                    </div>

                    {/* Right Side: Primary Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
                        <Link
                            href="https://hushsga-final.vercel.app/contact"
                            className="w-full sm:w-64 lg:w-auto px-8 py-4 bg-orange-600 text-white font-bold text-base transition-all hover:bg-white hover:text-[#000080] shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
                        >
                            Contact us
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="https://hushsga-final.vercel.app/volunteer"
                            className="w-full sm:w-64 lg:w-auto px-8 py-4 border-2 border-white/20 text-white font-bold text-base transition-all hover:border-white hover:bg-white/5 flex items-center justify-center gap-2 group"
                        >
                            Volunteer
                            <ChevronRight className="w-5 h-5 opacity-60 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainCTA;