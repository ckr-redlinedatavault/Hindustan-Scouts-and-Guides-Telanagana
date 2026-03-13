"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const Donation = () => {
    return (
        <section className="relative bg-[#1b4332] lg:h-[380px] w-full overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '24px 24px' }}
            />

            <div className="flex flex-col lg:flex-row h-full w-full max-w-[1500px] mx-auto">

                <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10 lg:py-0 z-20">

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-5 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-white/90 text-[11px] font-semibold tracking-wide uppercase">Youth Empowerment Fund</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white leading-tight tracking-tight mb-4">
                        Your contribution helps us <br />
                        <span className="text-orange-400">shape the leaders of tomorrow.</span>
                    </h2>

                    <p className="text-[15px] text-white/70 leading-relaxed mb-8 max-w-xl font-normal">
                        Support our mission to provide training kits, leadership camps, and
                        scholarships for scouts across the state of Telangana. Every contribution
                        directly impacts a young life.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            href="https://hus.hsgatelangana.com/donate"
                            className="group flex items-center gap-3 bg-orange-500 text-white px-7 py-3 transition-all hover:bg-white hover:text-[#1b4332] shadow-lg shadow-black/10 rounded-sm"
                        >
                            <span className="font-bold text-[13px]">Support our mission</span>
                            <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </Link>

                        <Link
                            href="https://hus.hsgatelangana.com/contact"
                            className="group flex items-center gap-2 text-white/80 font-semibold text-[13px] border-b border-transparent hover:border-white/40 transition-all pb-0.5"
                        >
                            Become a partner
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[42%] relative h-[250px] lg:h-full">
                    <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                        alt="Scouting Impact"
                        className="w-full h-full object-cover grayscale-[10%]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332] via-transparent to-transparent hidden lg:block w-32" />

                    <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
                        <p className="text-white text-[10px] font-bold uppercase tracking-widest">HSGA Telangana Impact</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Donation;