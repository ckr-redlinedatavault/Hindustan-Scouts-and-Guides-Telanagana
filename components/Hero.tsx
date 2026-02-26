"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-white lg:h-[620px] overflow-hidden">
            {/* Very subtle background texture */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row h-full w-full">

                {/* LEFT CONTENT */}
                <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 py-16 lg:py-0">

                    {/* Clean Typography Layout */}
                    <div className="relative mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-orange-600"></span>
                            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">
                                Welcome to
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.2] tracking-tight">
                            Hindustan Scouts <br />
                            <span className="text-[#000080]">And Guides Association</span>
                        </h1>
                        <p className="text-lg lg:text-xl font-medium text-orange-600 mt-2">
                            Telangana State
                        </p>
                    </div>

                    <p className="text-[16px] text-slate-600 leading-relaxed mb-10 max-w-lg font-normal">
                        Dedicated to the development of young people through a value-based
                        system. We foster leadership, discipline, and national integration
                        to build a more resilient and self-fulfilled society.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3.5 bg-[#1b4332] text-white font-semibold text-[12px] tracking-wider transition-all flex items-center gap-2 hover:bg-[#000080] shadow-md shadow-green-900/10"
                        >
                            Contact Us
                            <ChevronRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="#about"
                            className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-semibold text-[12px] tracking-wider transition-all hover:bg-slate-50 flex items-center gap-2"
                        >
                            Mission & Goals
                            <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative hidden lg:block">
                    <img
                        src="https://scontent.fbpm5-1.fna.fbcdn.net/v/t39.30808-6/485792573_1070589281777122_1943023866077957457_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=o5TGd6RBUUMQ7kNvwEkERlR&_nc_oc=AdnjoCsfjOqBArDo7o1MZv1kU2aFz0bUcKM78n5HmKcv-ax_IcoF9uTgBnxZlxKl7hU&_nc_zt=23&_nc_ht=scontent.fbpm5-1.fna&_nc_gid=WwQP8A5VM5qP37X2P1WMWw&oh=00_AfvZmNo2mZVsLDj7_A1ekDpvVFmS2Ds6SkONQt_VS6KRLQ&oe=69A5FF7C"
                        alt="HSGA Telangana Scouts"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Mobile View Image */}
                <div className="w-full h-[350px] relative lg:hidden">
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771838041/WhatsApp_Image_2026-02-22_at_12.39.49_hcj8ru.jpg"
                        alt="HSGA Telangana Scouts"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
