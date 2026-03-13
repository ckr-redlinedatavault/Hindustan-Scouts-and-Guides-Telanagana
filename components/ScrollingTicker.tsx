"use client";

import React from "react";

const ScrollingTicker = () => {
    const announcements = [
        "Official Announcement: The Hindustan Scouts and Guides Association (HSGA) Telangana State Headquarters is now accepting new memberships for the academic year 2026-27.",
        "National Recognition: Our organization is proudly recognized by the Ministry of Youth Affairs & Sports, Government of India, for our commitment to youth excellence.",
        "Join the Movement: Empowering the next generation of leaders through discipline, service, and traditional scouting values across all districts of Telangana.",
        "State News: Registration for the upcoming State-Level Scouts and Guides Rally is now open for all affiliated units across the state.",
        "Global Standards: Affiliated with WFIS Germany, bringing world-class scouting methodologies and opportunities to the heart of Telangana.",
        "Our Mission: To contribute to the holistic development of young people, helping them achieve their full physical, intellectual, social, and spiritual potentials."
    ];

    return (
        <div className="bg-[#000033] bg-gradient-to-r from-[#000033] via-[#000066] to-[#000033] text-white py-2 overflow-hidden border-b border-white/10 relative z-[120] shadow-2xl">
            <div className="flex whitespace-nowrap animate-marquee">
                <div className="flex gap-16 px-4 items-center">
                    {announcements.map((text, index) => (
                        <div key={`first-${index}`} className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
                                <span className="text-[10px] bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded-full font-black tracking-widest uppercase border border-orange-500/30">
                                    Update
                                </span>
                            </span>
                            <span className="text-[12px] sm:text-[13px] font-semibold tracking-wide text-white/95">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-16 px-4 items-center">
                    {announcements.map((text, index) => (
                        <div key={`second-${index}`} className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
                                <span className="text-[10px] bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded-full font-black tracking-widest uppercase border border-orange-500/30">
                                    Update
                                </span>
                            </span>
                            <span className="text-[12px] sm:text-[13px] font-semibold tracking-wide text-white/95">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 60s linear infinite;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default ScrollingTicker;
