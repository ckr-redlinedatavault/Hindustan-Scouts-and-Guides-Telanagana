"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import { Target, Eye, Heart, Shield, Award, CheckCircle2 } from "lucide-react";

const MissionVisionPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-outfit text-slate-900">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#000066] py-20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest mb-6">
                            Our Philosophy
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Mission, Vision & <span className="text-orange-400">Core Values</span>
                        </h1>
                        <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                            The constitutional foundation and futuristic roadmap of the Hindustan Scouts and Guides Association in Telangana.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <section className="py-16 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-50 rounded-[2rem] group-hover:bg-blue-100 transition-colors" />
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=800&fit=crop"
                                    alt="Mission"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-8">
                            <div className="flex items-center gap-3 text-[#000066]">
                                <Target className="w-8 h-8" />
                                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                To contribute to the development of young people in achieving their full physical, intellectual, social, and spiritual potentials as individuals, and as responsible citizens.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    "Fostering national integration through youth movement.",
                                    "Individual character building and leadership training.",
                                    "Commitment to secularism and social service."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
                                <div className="flex items-center gap-3 text-[#000066]">
                                    <Eye className="w-8 h-8" />
                                    <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    To be the leading youth movement in the state of Telangana, empowering youth to create a better world by inspiring a culture of peace and national pride.
                                </p>
                                <p className="text-slate-500 italic border-l-4 border-orange-500 pl-4 py-1">
                                    "We envision a society where every young person is a leader in their own right, capable of solving global challenges through local scouting initiatives."
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute -inset-4 bg-orange-50 rounded-[2rem] group-hover:bg-orange-100 transition-colors" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=800&fit=crop"
                                        alt="Vision"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Scouting Core Values</h2>
                        <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Humanity", desc: "Treating all individuals with dignity and extending support to those in need." },
                            { icon: Shield, title: "Integrity", desc: "Upholding the highest moral and ethical standards in every mission." },
                            { icon: Award, title: "Excellence", desc: "Striving for quality in training, service, and youth development." }
                        ].map((val, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 bg-white">
                                <div className="w-14 h-14 bg-blue-50 text-[#000066] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#000066] group-hover:text-white transition-colors">
                                    <val.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                                <p className="text-slate-600 text-[15px] leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </div>
    );
};

export default MissionVisionPage;