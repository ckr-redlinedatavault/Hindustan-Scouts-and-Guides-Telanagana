"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const Donation = () => {
    return (
        /* Reduced Height (lg:h-[450px]) and Scouting Green Background */
        <section className="relative bg-[#1b4332] lg:h-[450px] w-full overflow-hidden border-b border-white/5">
            
            <div className="flex flex-col lg:flex-row h-full w-full max-w-[1500px] mx-auto items-stretch">
                
                {/* LEFT SIDE: Slanted Image Pillar - Fits Top to Bottom */}
                <div 
                    className="w-full lg:w-[45%] relative h-[300px] lg:h-full group order-2 lg:order-1"
                    style={{ 
                        clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                        alt="Scouting Impact"
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Solid Orange Slant Accent */}
                    <div 
                        className="absolute inset-0 pointer-events-none border-r-[3px] border-orange-500"
                        style={{ clipPath: "polygon(84.5% 0, 85% 0, 100% 100%, 99.5% 100%)" }}
                    />

                    {/* Compact Floating Quote */}
                    <div className="absolute bottom-8 left-8 bg-white p-5 max-w-[280px] hidden md:block border-l-4 border-orange-500 shadow-xl">
                        <p className="text-slate-900 font-bold text-sm leading-relaxed">
                            "The best way to find yourself is to lose yourself in the service of others."
                        </p>
                        <p className="text-[#1b4332] font-bold mt-2 text-[10px]">— Mahatma Gandhi</p>
                    </div>
                </div>

                {/* RIGHT SIDE: Content Area */}
                <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-12 lg:py-0 z-20 order-1 lg:order-2">
                    
                    {/* Minimalist Top Marker - Sentence Case */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[1.5px] bg-orange-500"></span>
                        <span className="text-white/60 font-bold text-[11px]">
                            Invest in our leadership fund
                        </span>
                    </div>

                    {/* Heading - Sentence Case (No Italics) */}
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-black text-white leading-[1.1] tracking-tighter mb-4">
                        Your contribution <br /> 
                        <span className="text-orange-500 font-bold">shapes young lives.</span>
                    </h2>

                    {/* Subtitle - Normal font lowercase */}
                    <div className="mb-6">
                        <span className="text-lg lg:text-xl font-normal text-white/40 lowercase tracking-tight">
                            empowering scouts across the state of telangana
                        </span>
                    </div>

                    {/* Description - Compact */}
                    <p className="text-[14px] text-white/60 leading-relaxed mb-8 max-w-lg">
                        We believe every young person deserves the opportunity to lead. 
                        Your donation provides training kits and scholarships for scouts 
                        from underserved backgrounds.
                    </p>

                    {/* Solid Action Buttons - Sentence Case */}
                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="https://hushsga-final.vercel.app/donate"
                            className="group flex items-center gap-3 bg-orange-500 text-white px-7 py-3.5 transition-all hover:bg-white hover:text-[#1b4332]"
                        >
                            <span className="font-bold text-[13px]">Donate now</span>
                            <Heart className="w-4 h-4 fill-current" />
                        </Link>

                        <Link
                            href="https://hushsga-final.vercel.app/contact"
                            className="group flex items-center gap-2 text-white font-bold text-[12px] border-b border-white/20 hover:border-white transition-all pb-1"
                        >
                            Become a partner
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Donation;