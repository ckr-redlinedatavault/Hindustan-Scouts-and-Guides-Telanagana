"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-white lg:h-[620px] border-b border-gray-100">
            <div className="flex flex-col lg:flex-row h-full w-full">

                <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 py-12 lg:pb-32 lg:py-0">

                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-[1.5px] bg-orange-600"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Welcome to
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-[48px] font-black text-slate-900 leading-[1.1] tracking-tighter mb-3">
                        Hindustan Scouts And <br />
                        <span className="text-[#000080]">Guides Association</span>
                    </h1>

                    <div className="mb-6">
                        <span className="text-xl lg:text-2xl font-normal text-gray-400  tracking-tight">
                            Telangana
                        </span>
                    </div>

                    <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-lg">
                        Contributing to the education of young people through a value
                        system based on the Scout Promise and Law, to build a better
                        world where people are self-fulfilled as individuals.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="https://hushsga-final.vercel.app/contact"
                            className="px-7 py-3.5 bg-[#000080] text-white font-bold uppercase text-[10px] tracking-widest transition-all flex items-center gap-2 hover:bg-orange-600"
                        >
                            Contact
                            <ChevronRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="#about"
                            className="px-7 py-3.5 bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-widest transition-all hover:bg-slate-200"
                        >
                            Mission & Goals
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[55%] h-[400px] lg:h-full relative overflow-hidden hidden lg:block"
                    style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771838041/WhatsApp_Image_2026-02-22_at_12.39.49_hcj8ru.jpg"
                        alt="HSGA Telangana Scouts"
                        className="w-full h-full object-cover"
                    />
                </div>

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
