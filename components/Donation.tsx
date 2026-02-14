"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const Donation = () => {
    return (
        <section className="py-10 lg:py-14 bg-[#000080] relative overflow-hidden text-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-20" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-10 bg-orange-500" />
                            <span className="text-orange-500 font-bold text-sm">Support our cause</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-5 tracking-tight">
                            Your contribution <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                shapes the future
                            </span>
                        </h2>

                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                            Every donation helps us empower young minds, foster leadership, and build a stronger community through scouting. Join us in making a difference today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://hushsga-final.vercel.app/donate"
                                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-orange-600 text-white font-bold overflow-hidden transition-all hover:bg-orange-700"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Donate now
                                    <Heart className="w-5 h-5 fill-current" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 origin-bottom" />
                            </Link>

                            <Link
                                href="https://hushsga-final.vercel.app/contact"
                                className="group inline-flex items-center justify-center px-7 py-3.5 border border-white/20 hover:border-white/50 text-white font-bold transition-all"
                            >
                                <span className="mr-3">Partner with us</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        {/* Trust Indicators Removed */}
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative z-10 border-4 border-white/10 p-2 bg-white/5 backdrop-blur-sm">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                                alt="Donation Impact"
                                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-2xl max-w-xs hidden md:block border-l-4 border-orange-600">
                                <p className="text-gray-800 font-bold italic text-base leading-snug">
                                    "The best way to find yourself is to lose yourself in the service of others."
                                </p>
                                <p className="text-[#000080] font-bold mt-2 text-sm">- Mahatma Gandhi</p>
                            </div>
                        </div>

                        {/* Decorative Background for Image */}
                        <div className="absolute top-6 right-6 w-full h-full border-2 border-orange-500/30 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;