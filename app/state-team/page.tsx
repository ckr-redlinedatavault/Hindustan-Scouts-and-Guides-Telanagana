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
                            <Users className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">State Headquarters • Hyderabad</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            State <span className="text-orange-500">Leadership</span>
                        </h1>
                        <p className="text-blue-100/80 text-lg max-w-2xl font-medium leading-relaxed">
                            The executive council responsible for the growth, administration, and training excellence of Hindustan Scouts and Guides in Telangana.
                        </p>
                    </div>
                </div>

                {/* Leadership Grid */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {stateLeaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-300 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 flex flex-col"
                            >
                                {/* Portrait Image Container */}
                                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Text Content */}
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

                {/* Administrative Info Strip */}
                <div className="bg-white border-y border-slate-200 py-12">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 text-[#000066] rounded-xl flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">Verified Council Members</h4>
                                <p className="text-xs text-slate-500">Official leadership record for the 2024-2026 tenure.</p>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="text-center">
                                <p className="text-lg font-bold text-slate-900">33</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Districts</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100 hidden md:block" />
                            <div className="text-center">
                                <p className="text-lg font-bold text-slate-900">150k+</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Scouts</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100 hidden md:block" />
                            <div className="text-center">
                                <p className="text-lg font-bold text-slate-900">HQ</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hyderabad</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Looking to connect with the State Council?</h3>
                    <p className="text-slate-500 mb-8 font-medium">
                        For administrative inquiries, district formation requests, or state-level coordination, please reach out to our headquarters.
                    </p>
                    <button className="bg-[#000066] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-slate-900 transition-all text-sm uppercase tracking-widest">
                        Contact State Headquarters <ArrowRight className="w-4 h-4" />
                    </button>
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

export default StateTeamPage;