"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const About = () => {
    return (
        // Reduced vertical padding from py-20 to py-8/12
        <section id="about" className="py-8 lg:py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Visual Card - Wide but with reduced height */}
                    <div className="lg:col-span-7">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg"
                                alt="HSGA Telangana Scouts Training"
                                // Reduced height from 550px to 450px to make section shorter
                                className="w-full h-[300px] lg:h-[450px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase mb-2">
                            Our Legacy
                        </span>

                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                            Scouting History
                        </h2>

                        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                            <p>
                                Scouting is a global movement dedicated to supporting young people in their physical, mental, and spiritual development, empowering them to play constructive roles in society.
                            </p>

                            <p>
                                Since 1910, our movement has grown to foster inclusive growth across all age groups, building character through traditional values.
                            </p>

                            {/* Tighter Quote */}
                            <div className="border-l-4 border-[#000080] pl-4 py-1 mt-4">
                                <p className="text-gray-900 font-bold italic text-md leading-snug">
                                    "Lawrie Dring was one of the founding members of our Federation and always guided us in traditional scouting."
                                </p>
                            </div>
                        </div>

                        {/* Modern Compact Button */}
                        <button className="mt-6 flex items-center gap-2 bg-[#000080] text-white px-7 py-3 rounded-full font-bold text-xs tracking-widest transition-all hover:bg-navy-900 hover:shadow-lg active:scale-95">
                            READ HISTORY
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;