"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Quote } from "lucide-react";

const About = () => {
    const imageUrl1 = "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771838041/WhatsApp_Image_2026-02-22_at_12.39.50_soxfft.jpg";
    const imageUrl2 = "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg";

    return (
        <section id="about" className="py-10 lg:py-16 bg-white overflow-hidden border-b border-gray-50">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    <div className="lg:col-span-6 relative">
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-slate-50 border border-slate-100 -z-10" />

                        <div className="flex flex-col gap-5">
                            <div className="relative group bg-white border border-gray-100 p-1.5">
                                <img
                                    src={imageUrl1}
                                    alt="HSGA Activities"
                                    className="w-full h-auto block"
                                />
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-orange-600" />
                            </div>

                            <div className="relative group bg-white border border-gray-100 p-1.5">
                                <img
                                    src={imageUrl2}
                                    alt="HSGA Training"
                                    className="w-full h-auto block"
                                />
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-orange-600" />

                                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 border-l-4 border-[#000080] shadow-sm">
                                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">Affiliation</p>
                                    <p className="text-[11px] font-bold text-slate-900">WFIS Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col items-start lg:sticky lg:top-10">

                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-6 h-[1.5px] bg-orange-600"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                Legacy since 1951
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-[38px] font-black text-slate-900 leading-[1.1] tracking-tighter mb-5">
                            Empowering Youth through <br />
                            <span className="text-[#000080]">Traditional Scouting</span>
                        </h2>

                        <div className="space-y-4 text-gray-600 text-[14px] leading-relaxed mb-6">
                            <p className="font-medium">
                                Scouting is a global movement dedicated to supporting young people in their
                                physical, mental, and spiritual development.
                            </p>

                            <p className="font-medium">
                                Since 1910, our movement has grown to foster inclusive growth across all
                                age groups, building character through traditional values and discipline.
                            </p>

                            <div className="relative py-4 px-6 bg-slate-50 border-l-2 border-orange-600 mt-4">
                                <Quote className="absolute top-3 right-3 w-6 h-6 text-slate-200" />
                                <p className="text-slate-800 font-bold italic text-[14px] leading-relaxed relative z-10">
                                    "Lawrie Dring was one of the founding members of our Federation and always guided us in traditional scouting."
                                </p>
                                <p className="text-[9px] uppercase tracking-widest font-black text-[#000080] mt-2">
                                    — Legacy Citation
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link href="/about"
                                className="px-6 py-3 bg-[#000080] text-white font-bold text-[10px] tracking-widest uppercase transition-all hover:bg-orange-600 flex items-center gap-2">
                                Discover History
                                <ChevronRight className="w-4 h-4" />
                            </Link>

                            <Link href="/about/mission-vision"
                                className="px-6 py-3 bg-slate-100 text-slate-700 font-bold text-[10px] tracking-widest uppercase transition-all hover:bg-slate-200">
                                Mission & Vision
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
