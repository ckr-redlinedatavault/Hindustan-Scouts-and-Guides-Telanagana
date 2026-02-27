"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";

const Hero = () => {
    const images = [
        "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772204710/Screenshot_2026-02-27_at_20.31.37_cmgeog.png",
        "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772206077/Screenshot_2026-02-27_at_20.57.08_qib3cv.png",
        "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772204692/WhatsApp_Image_2026-02-27_at_19.54.43_uze4oz.jpg",
        "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772204691/WhatsApp_Image_2026-02-27_at_19.54.42_u1c9sz.jpg",
        "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772206304/Screenshot_2026-02-27_at_21.01.21_bgxf3h.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

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

                {/* RIGHT IMAGE SECTION - SCROLLABLE CAROUSEL */}
                <div className="w-full lg:w-1/2 h-[350px] lg:h-full relative overflow-hidden group">
                    <div
                        className="flex h-full w-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 relative">
                                <img
                                    src={src}
                                    alt={`HSGA Telangana Scouts ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Subtle Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none hidden lg:block"></div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 p-2 rounded-full backdrop-blur-sm text-[#000080] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 p-2 rounded-full backdrop-blur-sm text-[#000080] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 shadow-sm ${index === currentImageIndex ? "w-6 bg-orange-500" : "w-2 bg-white/60 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
