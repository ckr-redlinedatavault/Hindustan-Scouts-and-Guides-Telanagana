"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import { Users, ArrowRight, ShieldCheck } from "lucide-react";

const StateTeamPage = () => {
    const stateLeaders = [
        {
            name: "Dr. Addanki Dayakar",
            role: "State Chief Commissioner",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516881/1_jwsiab.jpg"
        },
        {
            name: "Putta Praveen",
            role: "State Chairperson",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/2_lwgwjj.jpg"
        },
        {
            name: "Veeramalla Vamshi Krishna",
            role: "President",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/4_muzcwj.jpg"
        },
        {
            name: "Soora Harikrishna",
            role: "State Vice President",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/3_rt9xqj.jpg"
        },
        {
            name: "Jeedipally Ashwini",
            role: "State Vice President",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/6_vdmx2p.jpg"
        },
        {
            name: "Dr. Kunchapu Suresh",
            role: "State Secretary",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516883/5_cen1xi.jpg"
        },
        {
            name: "Gannarapy Vijay",
            role: "State Treasurer",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/7_zdupey.jpg"
        },
        {
            name: "G. Srikanth",
            role: "State Joint Secretary",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516885/8_nnzxlo.jpg"
        },
        {
            name: "T. Dhilip",
            role: "State Assistant Commissioner",
            image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516887/13_nz2hhq.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-outfit text-slate-900">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#000080] pt-16 pb-14 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-6 font-[1000]">
                                <span className="h-[1.5px] w-10 bg-orange-500"></span>
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">State Headquarters • Hyderabad</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                State <span className="text-orange-500">Leadership</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                The executive council responsible for the growth, administration, and training excellence of Hindustan Scouts and Guides in Telangana.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Leadership Grid */}
                <div className="max-w-[1500px] mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-0">
                        {stateLeaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="group bg-white border border-slate-100 overflow-hidden hover:border-orange-500 hover:z-10 transition-all duration-300 flex flex-col"
                            >
                                {/* Portrait Image Container */}
                                <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 border-t-4 border-r-4 border-orange-600"></div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 flex flex-col border-t border-slate-50">
                                    <p className="text-orange-600 text-[9px] font-black uppercase tracking-widest mb-1.5">
                                        {leader.role}
                                    </p>
                                    <h3 className="text-[16px] font-[1000] text-[#000080] leading-tight tracking-tight uppercase">
                                        {leader.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Administrative Info Strip */}
                <div className="bg-[#000080] border-t-[6px] border-orange-600 py-14">
                    <div className="max-w-[1500px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 text-orange-500 flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black uppercase tracking-wider">Verified Council Members</h4>
                                <p className="text-[11px] text-white/50 font-medium tracking-wide">OFFICIAL LEADERSHIP RECORD FOR {new Date().getFullYear() - 1}-{new Date().getFullYear() + 1} TENURE</p>
                            </div>
                        </div>

                        <div className="flex gap-12">
                            <div className="text-center group">
                                <p className="text-2xl font-[1000] text-orange-500 mb-1 group-hover:scale-110 transition-transform">33</p>
                                <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Districts</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <div className="text-center group">
                                <p className="text-2xl font-[1000] text-orange-500 mb-1 group-hover:scale-110 transition-transform">150k+</p>
                                <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Active Scouts</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <div className="text-center group">
                                <p className="text-2xl font-[1000] text-orange-500 mb-1 group-hover:scale-110 transition-transform">HQ</p>
                                <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Hyderabad</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h3 className="text-3xl font-[1000] text-[#000080] tracking-tighter mb-4">Looking to connect with the State Council?</h3>
                    <p className="text-gray-500 mb-10 font-medium text-lg leading-relaxed">
                        For administrative inquiries, district formation requests, or state-level coordination, please reach out to our headquarters.
                    </p>
                    <button className="bg-[#000080] text-white px-10 py-5 font-black flex items-center gap-3 mx-auto hover:bg-orange-600 transition-all text-xs uppercase tracking-[0.2em]">
                        Contact State Headquarters <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default StateTeamPage;