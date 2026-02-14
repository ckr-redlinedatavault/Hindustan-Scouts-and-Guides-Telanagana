"use client";

import React, { useState, useEffect } from "react";

const CountUpNumber = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const targetValue = parseInt(target.replace(/[^0-9]/g, ""));
    const suffix = target.replace(/[0-9]/g, "");

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease out quad function for smooth deceleration
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

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
            label: "Character development rating",
            id: "[1]"
        },
        {
            value: "82%",
            label: "Community engagement rate",
            id: "[2]"
        },
        {
            value: "100%",
            label: "Accredited training programs",
            id: "[3]"
        }
    ];

    return (
        <section className="bg-white px-4 pb-8 relative z-20">
            <div className="max-w-[1500px] mx-auto -mt-6 lg:-mt-8">
                <div className="bg-[#000080] rounded-none p-0 shadow-2xl relative overflow-hidden border-b-4 border-orange-600">
                    <div className="grid grid-cols-1 md:grid-cols-3 relative z-10">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-6 py-8 px-8 md:px-12 relative ${index !== stats.length - 1 ? "md:border-r border-white/20" : ""
                                    }`}
                            >
                                <div className="text-4xl md:text-5xl font-[1000] text-orange-600 tracking-tighter">
                                    <CountUpNumber target={stat.value} />
                                </div>
                                <div className="text-[12px] md:text-[14px] font-black uppercase tracking-wider text-white/90 leading-tight max-w-[180px]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Subtle decorative background textures */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rotate-45 translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[120px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default StatsRibbon;
