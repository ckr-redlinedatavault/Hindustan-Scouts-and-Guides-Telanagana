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
            <div className="max-w-[1400px] mx-auto -mt-16 lg:-mt-20">
                <div className="bg-[#0a0a0b] rounded-2xl overflow-hidden backdrop-blur-3xl border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-6 py-10 px-8 lg:px-12 transition-all duration-300 hover:bg-white/[0.02]"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-white tracking-tighter shrink-0">
                                    <CountUpNumber target={stat.value} />
                                </div>
                                <div className="flex flex-col justify-between h-full">
                                    <p className="text-[13px] lg:text-[14px] font-medium text-slate-400 leading-snug">
                                        {stat.label}
                                    </p>
                                    <span className="text-[10px] font-mono text-slate-600 mt-2 block opacity-50 uppercase tracking-tighter">
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