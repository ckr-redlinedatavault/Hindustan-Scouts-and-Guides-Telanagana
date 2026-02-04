"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import { Flag, ArrowRight, Compass } from "lucide-react";

const NationalTeamPage = () => {
    const nationalLeaders = [
        {
            name: "K. Karunakar Pradhan",
            role: "National Chairman",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516891/20_bjmamy.jpg"
        },
        {
            name: "Narsingh Mehanji",
            role: "National President",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/27_pbghji.jpg"
        },
        {
            name: "Madhusudhan Gupta",
            role: "National Chief Commissioner",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/21_jz7zrj.jpg"
        },
        {
            name: "Dr. Ved Prakash Singh",
            role: "National General Secretary",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/23_elskvx.jpg"
        },
        {
            name: "Girish Juyal",
            role: "National Secretary",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/28_ukogac.jpg"
        },
        {
            name: "Dr. Atul Kumar",
            role: "National Joint Secretary",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516894/25_y46nzu.jpg"
        },
        {
            name: "Harswaroop Sharma",
            role: "Sr. Vice President",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/22_slxxzr.jpg"
        },
        {
            name: "Vanita Sharma",
            role: "Vice President",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/24_rtic8p.jpg"
        },
        {
            name: "Y. K. Saxena",
            role: "National Training Commissioner",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/26_nbjtko.jpg"
        },
        {
            name: "Dr. M. Rajani",
            role: "International Commissioner - Guides",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516896/29_gu6ndl.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-outfit text-slate-900">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#000066] py-16 text-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex items-center gap-2 text-orange-400 mb-4">
                            <Flag className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">National HQ • New Delhi</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            National <span className="text-orange-500">Leadership</span>
                        </h1>
                        <p className="text-blue-100/80 text-lg max-w-2xl font-medium">
                            The central governing body representing the Hindustan Scouts and Guides Association on national and international scouting platforms.
                        </p>
                    </div>
                </div>

                {/* Leadership Grid */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {nationalLeaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-1">
                                        {leader.role}
                                    </p>
                                    <h3 className="text-[15px] font-bold text-slate-900 leading-tight">
                                        {leader.name}
                                    </h3>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regional HQ Information */}
                <section className="bg-white border-y border-slate-200 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Regional HQ Commands</h2>
                                <p className="text-slate-500 mt-2 font-medium">Federal coordination across five administrative zones.</p>
                            </div>
                            <div className="h-px flex-grow bg-slate-100 mx-8 hidden md:block" />
                            <Compass className="w-12 h-12 text-slate-200" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { zone: "North Zone", location: "New Delhi", cover: "Punjab, Himachal, Haryana, J&K" },
                                { zone: "South Zone", location: "Hyderabad", cover: "Telangana, AP, Karnataka, Kerala" },
                                { zone: "East Zone", location: "Kolkata", cover: "WB, Odisha, Assam, NE States" }
                            ].map((region, i) => (
                                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-[#fcfcfc] hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">{region.zone}</span>
                                    <h4 className="text-xl font-bold text-[#000066] mt-2 mb-4">{region.location}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        <span className="text-slate-900 block mb-1">Jurisdiction:</span>
                                        {region.cover}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Statistics Banner */}
                <div className="py-12 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8">
                        {[
                            { label: "State Units", val: "32" },
                            { label: "Active Members", val: "1.2M+" },
                            { label: "Int'l Affiliations", val: "WFIS" },
                            { label: "Years of Service", val: "75+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl font-bold text-slate-900">{stat.val}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </div>
    );
};

export default NationalTeamPage;