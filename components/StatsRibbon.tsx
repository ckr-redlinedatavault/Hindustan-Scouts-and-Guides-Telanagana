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
            label: "Character development rating",
            meta: "Performance"
        },
        {
            value: "82%",
            label: "Community engagement rate",
            meta: "Outreach"
        },
        {
            value: "100%",
            label: "Accredited training programs",
            meta: "Quality"
        }
    ];

    return (
        <section className="bg-white px-6 relative z-30">
            <div className="max-w-[1500px] mx-auto -mt-20 lg:-mt-32">

                <div className="bg-[#000080] border-b-8 border-orange-600 shadow-[0_30px_60px_rgba(0,0,128,0.25)]">

                    <div className="flex items-center justify-between px-8 py-2 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-orange-600"></span>
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">
                                Yearly impact report 2026
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-white/20 text-[9px] font-bold lowercase tracking-widest">
                                verified data council
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col py-6 px-8 lg:px-12 relative ${index !== stats.length - 1 ? "md:border-r border-white/5" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-orange-600 font-black text-[10px]">0{index + 1}</span>
                                    <span className="w-3 h-[1px] bg-white/20"></span>
                                    <span className="text-white/30 text-[9px] font-bold uppercase tracking-widest">
                                        {stat.meta}
                                    </span>
                                </div>

                                <div className="flex items-end gap-6">
                                    <div className="text-5xl lg:text-6xl font-black text-orange-600 tracking-tighter leading-none">
                                        <CountUpNumber target={stat.value} />
                                    </div>
                                    <div className="text-[14px] lg:text-[16px] font-bold text-white/90 leading-tight mb-1 max-w-[140px]">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
            />
        </section>
    );
};

export default StatsRibbon;
