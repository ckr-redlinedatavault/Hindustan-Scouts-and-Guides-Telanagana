"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-white overflow-hidden lg:h-[550px] flex items-center border-b border-gray-100">

            {/* Background decorative element */}
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gray-50/50 -skew-x-12 -translate-x-20 pointer-events-none" />

            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

                    {/* LEFT SIDE: Content */}
                    <div className="py-12 lg:py-0 z-20">
                        {/* Status Ribbon - Sharp Edged & Segmented */}
                        <div className="inline-flex items-center bg-slate-50 border border-slate-200 mb-7 shadow-sm">
                            <div className="px-4 py-2 border-r border-slate-200 flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 bg-orange-600 rotate-45"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">ESTD 1951</span>
                            </div>
                            <div className="px-4 py-2 border-r border-slate-200">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#000080]">Telangana State</span>
                            </div>
                            <div className="px-4 py-2 bg-white/50">
                                <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Official HQ</span>
                            </div>
                        </div>

                        {/* Heading - Reduced sizes further */}
                        <h1 className="text-2xl md:text-3xl lg:text-[42px] font-[1000] text-gray-900 leading-[1.05] tracking-tighter mb-5">
                            Hindustan Scouts And <br />
                            <span className="text-[#000080]">Guides Association</span> <br />
                            <span className="text-orange-600 uppercase">Telangana</span>
                        </h1>

                        {/* Description - Refined spacing */}
                        <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed mb-10 max-w-sm border-l-4 border-[#000080] pl-5 font-medium">
                            Developing character and leadership in young people through
                            value-based education and the spirit of the Scout Promise.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="https://hushsga-final.vercel.app/contact"
                                className="px-7 py-3.5 bg-[#000080] text-white font-black uppercase text-[11px] tracking-widest transition-all flex items-center gap-2 group hover:bg-orange-600 shadow-xl shadow-blue-900/10"
                            >
                                Contact Headquarters
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="#about"
                                className="px-7 py-3.5 bg-white border-2 border-gray-200 text-gray-800 font-black uppercase text-[11px] tracking-widest transition-all hover:border-[#000080] hover:text-[#000080]"
                            >
                                Mission & Goals
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Image - Width expanded, shifted for balanced position */}
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full lg:w-[110%] lg:translate-x-10 xl:translate-x-14 mt-8 lg:mt-0">
                        <div
                            className="absolute inset-0 bg-gray-200 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] rounded-lg"
                        >
                            <img
                                src="https://scontent.fhyd5-2.fna.fbcdn.net/v/t39.30808-6/475854477_932161619094821_1510006816916662555_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FeUCM9mSW3wQ7kNvwG4jMLU&_nc_oc=AdkZ2IL0AqmCahzv6eVIn6Ng7DqApw6bLy49pUccXd4TEd5U1ny_o5H7uZTQNueGEno&_nc_zt=23&_nc_ht=scontent.fhyd5-2.fna&_nc_gid=GHRnghcp_b3UQ9SJjB8LWA&oh=00_AfvptTuCDuoDXKaUahjyEBWHZkFsVoDfRGg1m_wD0CoyFA&oe=6993D3AE"
                                alt="HSGA Telangana Scouts"
                                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                            />
                            {/* Gradient Overlay for professional depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Solid Orange Accent line on the left side */}
                        <div
                            className="absolute top-0 left-0 w-[6px] h-full bg-orange-600 opacity-80 rounded-l-lg z-20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;