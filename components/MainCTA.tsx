"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, GraduationCap } from "lucide-react";

const MainCTA = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="relative bg-[#e65100] lg:h-[350px] w-full overflow-hidden flex items-center border-b border-orange-700">

            <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
                <span className="text-white/10 text-7xl font-bold whitespace-nowrap select-none tracking-tighter">
                    Since 1951
                </span>
            </div>

            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '30px 30px' }}
            />

            <div className="flex flex-col lg:flex-row h-full w-full max-w-[1500px] mx-auto items-stretch relative z-10">

                <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-0">

                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-sm border border-white/20 uppercase tracking-wider">
                            Enrollment {currentYear}
                        </div>
                        <span className="text-white/80 font-medium text-[13px]">
                            Join the movement in Telangana
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight mb-8">
                        Shape your future through <br />
                        <span className="text-slate-900">leadership and service.</span>
                    </h2>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            href="https://hus.hsgatelangana.com/membership"
                            className="group flex items-center gap-3 bg-slate-950 text-white px-8 py-4 transition-all hover:bg-white hover:text-[#e65100] rounded-sm shadow-xl shadow-black/10"
                        >
                            <span className="font-bold text-[14px]">Register as a Scout</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="https://hus.hsgatelangana.com/volunteer"
                            className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 transition-all hover:bg-slate-950 hover:text-white rounded-sm shadow-xl shadow-black/5"
                        >
                            <span className="font-bold text-[14px]">Become a Volunteer</span>
                            <Users className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[42%] relative h-[300px] lg:h-full group">
                    <img
                        src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg"
                        alt="Scouting Leadership"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#e65100] via-transparent to-transparent hidden lg:block w-40" />

                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-4 border border-white/20 rounded-sm hidden sm:block">
                        <div className="flex items-center gap-3">
                            <GraduationCap className="text-white w-5 h-5" />
                            <div>
                                <p className="text-white font-bold text-[13px] leading-none">Standardized Training</p>
                                <p className="text-white/70 text-[10px] mt-1 font-medium">Certified by National HQ</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MainCTA;