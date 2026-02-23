"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

const MainCTA = () => {
    return (
        <section className="relative bg-orange-600 lg:h-[320px] w-full overflow-hidden flex items-center border-b border-orange-700">

            <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
                <span className="text-orange-500/30 text-6xl font-black whitespace-nowrap select-none tracking-tighter">
                    ESTD 1951
                </span>
            </div>

            <div className="flex flex-col lg:flex-row h-full w-full max-w-[1500px] mx-auto items-stretch">

                <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10 lg:py-0 z-20">

                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-slate-900 text-white text-[8px] font-black px-2 py-0.5 uppercase tracking-widest">
                            Official
                        </div>
                        <span className="text-white font-bold text-[9px] uppercase tracking-widest opacity-90">
                            Enrollment 2026
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-[52px] font-black text-white leading-[0.9] tracking-tighter mb-8">
                        LEAD <br />
                        <span className="text-slate-900">OTHERS.</span>
                    </h2>

                    <div className="flex items-center gap-8">
                        <Link
                            href="https://hushsga-final.vercel.app/contact"
                            className="group flex items-center gap-3 bg-slate-900 text-white px-6 py-3.5 transition-all hover:bg-white hover:text-orange-600"
                        >
                            <span className="font-black uppercase text-[10px] tracking-widest">Join Now</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="https://hushsga-final.vercel.app/volunteer"
                            className="group flex items-center gap-3 bg-white text-slate-900 px-6 py-3.5 transition-all hover:bg-slate-900 hover:text-white shadow-lg"
                        >
                            <span className="font-black uppercase text-[10px] tracking-widest">Volunteer</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>

                <div
                    className="w-full lg:w-[40%] relative h-[250px] lg:h-full group"
                    style={{
                        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
                    }}
                >
                    <img
                        src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg"
                        alt="Scouting Leadership"
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
                    />

                    <div
                        className="absolute inset-0 pointer-events-none border-l-[1.5px] border-white/20"
                        style={{ clipPath: "polygon(20% 0, 21% 0, 1% 100%, 0% 100%)" }}
                    />

                    <div className="absolute bottom-8 left-10 bg-white px-4 py-2 flex items-center gap-3 shadow-xl">
                        <Globe className="w-3 h-3 text-orange-600" />
                        <span className="text-slate-900 font-black text-[8px] uppercase tracking-widest">
                            State HQ
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MainCTA;
