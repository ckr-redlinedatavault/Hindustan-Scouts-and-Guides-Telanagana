"use client";

import React, { useState, useEffect } from "react";

const CountUpNumber = ({ target, duration = 2500 }: { target: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const targetValue = parseInt(target.replace(/[^0-9]/g, ""));
    const suffix = target.replace(/[0-9]/g, "");

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easedProgress * targetValue));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [targetValue, duration]);

    return (
        <span className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const StatsRibbon = () => {
    const stats = [
        {
            value: "95%",
            label: "Character development and ethical leadership rating",
            id: "[01]"
        },
        {
            value: "82%",
            label: "Active community engagement rate across Telangana",
            id: "[02]"
        },
        {
            value: "100%",
            label: "Standardized and accredited official training programs",
            id: "[03]"
        }
    ];

    return (
        <section className="relative z-50 px-4 sm:px-12 lg:px-20 -mb-16 lg:-mb-20">
            <div className="max-w-[1500px] mx-auto -mt-16 lg:-mt-20 flex justify-end">
                <div className="relative bg-[#000080] border-y border-r border-white/10 backdrop-blur-3xl 
                    [clip-path:polygon(40px_0,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(60px_0,100%_0,100%_100%,0_100%)] 
                    w-full md:w-[85%] lg:w-[75%] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                    <div className="absolute left-0 top-0 h-full w-[60px] bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 pl-8 md:pl-16">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-6 py-8 px-6 lg:px-10 transition-all duration-300 hover:bg-white/[0.02] ${index !== stats.length - 1 ? "md:border-r border-white/5" : ""
                                    }`}
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tighter shrink-0">
                                    <CountUpNumber target={stat.value} />
                                </div>
                                <div className="flex flex-col justify-between h-full">
                                    <p className="text-[12px] lg:text-[13px] font-medium text-blue-100/70 leading-snug">
                                        {stat.label}
                                    </p>
                                    <span className="text-[9px] font-mono text-white/30 mt-2 block uppercase tracking-tighter">
                                        {stat.id}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsRibbon;