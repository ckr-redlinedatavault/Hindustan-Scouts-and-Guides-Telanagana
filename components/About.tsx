"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const About = () => {
    return (
        // Reduced vertical padding for a tighter section height
        <section id="about" className="py-10 lg:py-14 bg-white overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* Visual Card - Reduced image height */}
                    <div className="lg:col-span-6 relative group">
                        <div className="relative overflow-hidden bg-gray-100 shadow-xl">
                            <img
                                src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg"
                                alt="HSGA Telangana Scouts Training"
                                // Reduced from 500px to 400px
                                className="w-full h-[280px] lg:h-[400px] object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Signature Orange Accent Bar */}
                            <div className="absolute top-0 right-0 w-[6px] h-full bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.2)]" />
                        </div>
                        {/* Subtle background decorative box */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-slate-50 border border-slate-100 -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-6 flex flex-col items-start relative">
                        {/* Compact Segmented Marker */}
                        <div className="inline-flex items-center bg-orange-50 border border-orange-100 mb-4">
                            <div className="px-2.5 py-1 border-r border-orange-100">
                                <span className="text-[9px] font-black tracking-widest text-orange-600 uppercase">Our Legacy</span>
                            </div>
                            <div className="px-2.5 py-1 bg-white">
                                <span className="text-[9px] font-black tracking-widest text-[#000080] uppercase">Since 1951</span>
                            </div>
                        </div>

                        {/* Reduced Heading Size */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-[1000] text-gray-900 leading-[1.2] tracking-tighter mb-5">
                            Empowering Youth through <br />
                            <span className="text-[#000080]">Traditional Scouting</span>
                        </h2>

                        {/* Reduced Body Text Sizes */}
                        <div className="space-y-4 text-gray-600 text-sm md:text-[14.5px] leading-relaxed mb-8">
                            <p className="font-medium">
                                Scouting is a global movement dedicated to supporting young people in their physical, mental, and spiritual development, empowering them to play constructive roles in society.
                            </p>

                            <p className="font-medium">
                                Since 1910, our movement has grown to foster inclusive growth across all age groups, building character through traditional values and discipline.
                            </p>

                            {/* Refined Quote Block */}
                            <div className="bg-slate-50 border-l-[4px] border-[#000080] p-4 shadow-sm">
                                <p className="text-gray-900 font-bold italic text-[14px] leading-snug">
                                    "Lawrie Dring was one of the founding members of our Federation and always guided us in traditional scouting."
                                </p>
                            </div>
                        </div>

                        {/* Tighter CTA Button */}
                        <Link href="/about" className="group relative px-6 py-3.5 bg-[#000080] text-white font-black text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-orange-600 active:scale-95 shadow-lg shadow-blue-900/10 text-center">
                            <span className="relative z-10 flex items-center gap-2.5">
                                Discover Our History
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;