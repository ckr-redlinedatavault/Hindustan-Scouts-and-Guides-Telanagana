"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-white lg:min-h-[450px] flex items-center overflow-hidden border-b border-gray-100">
            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-0 items-stretch min-h-[400px] lg:min-h-[450px]">

                    {/* LEFT SIDE: Content */}
                    <div className="flex flex-col justify-center items-start py-8 lg:py-10 lg:pr-16">
                        {/* Official Badge */}
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#000080]/5 border border-[#000080]/10 rounded-sm mb-4">
                            <Shield className="w-3 h-3 text-[#000080]" />
                            <span className="text-[#000080] text-[9px] font-bold uppercase tracking-widest">
                                Official State Headquarters
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
                            Welcome To <br />
                            <span className="text-[#000080]">Hindustan Scouts And Guides </span><br />
                            <span className="text-orange-600 font-semibold">Association, Telangana.</span>
                        </h1>

                        {/* Mission Statement */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-medium max-w-xl">
                            Contributing to the education of young people through a value system based
                            on the Scout Promise and Law to help build a better world where individuals
                            play a constructive role in society.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                            <Link
                                href="/register"
                                className="w-full sm:w-auto px-6 py-2.5 bg-[#000080] hover:bg-[#000060] text-white font-semibold uppercase text-[12px] tracking-wider transition-all flex items-center justify-center gap-2 group"
                            >
                                Join the Movement
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                                href="#about"
                                className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-gray-300 hover:border-[#000080] hover:text-[#000080] text-gray-600 font-semibold uppercase text-[12px] tracking-wider transition-all flex items-center justify-center"
                            >
                                Mission & Goals
                            </Link>
                        </div>

                    </div>

                    {/* RIGHT SIDE: Image - Full Height, No Slant */}
                    <div className="relative group w-full h-full lg:-mr-8">
                        <div className="h-full w-full overflow-hidden shadow-sm">
                            <img
                                src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg"
                                alt="HSGA Telangana Scouts"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                            {/* Professional subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10 pointer-events-none" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;