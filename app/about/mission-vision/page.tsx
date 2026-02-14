"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
    Target, Eye, Heart, Shield, Award, CheckCircle2,
    Activity, Star, Wrench, Users, ShieldCheck, Milestone,
    Globe, Zap, GraduationCap, Briefcase
} from "lucide-react";

const MissionVisionPage = () => {
    const values = [
        { icon: Heart, title: "Humanity", desc: "Treating all individuals with dignity and extending support to those in need." },
        { icon: Shield, title: "Integrity", desc: "Upholding the highest moral and ethical standards in every mission." },
        { icon: Award, title: "Excellence", desc: "Striving for quality in training, service, and youth development." }
    ];

    const fourAims = [
        {
            title: "Formation of Character",
            desc: "The realization of God through woodcraft, responsibilities, and appreciating nature's beauty.",
            icon: <Star className="w-8 h-8" />,
            details: "Taught through the patrol system, Scout/Guide Law, and resourcefulness in camp work."
        },
        {
            title: "Health & Strength",
            desc: "Securing physical and mental wellbeing through knowledge of personal hygiene and diet.",
            icon: <Activity className="w-8 h-8" />,
            details: "Practiced via games, regular exercises, and yoga to ensure moral and physical efficiency."
        },
        {
            title: "Handicraft & Skill",
            desc: "Acquiring useful skills that make us efficient workers and self-reliant individuals.",
            icon: <Wrench className="w-8 h-8" />,
            details: "Achieved through pioneering, bridge-building, expeditions, and self-expression through arts."
        },
        {
            title: "Service to Others",
            desc: "Developing the spirit of service by substituting 'Self' with the ambition to serve fellowmen.",
            icon: <Heart className="w-8 h-8" />,
            details: "Developed through 'Good Turns', community service, and active loyalty to the country."
        }
    ];

    const fundamentals = [
        "Belief in God & His goodness",
        "Practice of the Scout Law & Promise",
        "Learning by doing (Practical)",
        "Use of outdoor activities only",
        "Voluntary membership",
        "Patrol Method of System",
        "Loyalty to the Country",
        "Faith in World Friendship",
        "Independent of political influence",
        "Service to others as primary duty",
        "Faith in Indian Culture"
    ];

    return (
        <div className="bg-white flex flex-col font-outfit text-slate-900 w-full">
            <Breadcrumbs />

            <div className="w-full">
                {/* Hero Section */}
                <div className="bg-[#000080] pt-16 pb-14 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-6 font-[1000]">
                                <span className="h-[1.5px] w-10 bg-orange-500"></span>
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Our Philosophy</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Mission, Vision & <span className="text-orange-500">Aims</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                The constitutional foundation, four-fold aims, and futuristic roadmap of the Hindustan Scouts and Guides Association.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <section className="py-20 max-w-[1500px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 relative group">
                            <div className="absolute -inset-4 bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-colors" />
                            <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=800&fit=crop"
                                    alt="Mission"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 right-0 p-6">
                                    <div className="w-16 h-16 border-t-8 border-r-8 border-orange-600"></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-8 lg:pl-10">
                            <div className="flex items-center gap-4 text-[#000080]">
                                <Target className="w-8 h-8 text-orange-600" />
                                <h2 className="text-3xl font-[1000] tracking-tighter">Our Mission</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                To contribute to the development of young people in achieving their full physical, intellectual, social, and spiritual potentials as individuals, and as responsible citizens.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    "Fostering national integration through youth movement.",
                                    "Individual character building and leadership training.",
                                    "Commitment to secularism and social service."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="mt-2 w-1.5 h-1.5 bg-orange-600 rotate-45 group-hover:scale-125 transition-transform" />
                                        <span className="text-gray-700 font-bold text-[15px] leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE FOUR-FOLD AIMS */}
                <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
                    <div className="max-w-[1500px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter">The Four-Fold Aims</h2>
                            <div className="h-1 w-16 bg-orange-600 mx-auto mt-5"></div>
                            <p className="text-gray-500 font-bold tracking-widest text-[9px] uppercase mt-4">The Object of Scout & Guide Training</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                            {fourAims.map((aim, i) => (
                                <div key={i} className="group bg-white p-10 border border-slate-100 hover:border-orange-500 hover:z-10 transition-all duration-300">
                                    <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                                        {aim.icon}
                                    </div>
                                    <h3 className="text-[18px] font-black text-[#000080] tracking-tight mb-3 uppercase">{aim.title}</h3>
                                    <p className="text-gray-600 text-[14px] font-bold leading-relaxed mb-4">
                                        {aim.desc}
                                    </p>
                                    <p className="text-gray-500 text-[12px] font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4 group-hover:border-orange-500 transition-colors">
                                        {aim.details}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 max-w-4xl mx-auto p-8 bg-white border border-slate-100">
                            <p className="text-gray-600 text-md font-medium leading-relaxed italic text-center">
                                "To improve the Character and Health; to replace self with service; to make the lads individually morally and physically efficient, with the objective of using that efficiency for service to their fellowmen."
                                <br />
                                <span className="text-[#000080] font-black text-xs uppercase tracking-widest block mt-4">— Lord Baden-Powell</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-20">
                    <div className="max-w-[1500px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6 order-2 lg:order-1 space-y-8 lg:pr-10">
                                <div className="flex items-center gap-4 text-[#000080]">
                                    <Eye className="w-8 h-8 text-orange-600" />
                                    <h2 className="text-3xl font-[1000] tracking-tighter">Our Vision</h2>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    To be the leading youth movement in the state of Telangana, empowering youth to create a better world by inspiring a culture of peace and national pride.
                                </p>
                                <div className="p-8 bg-slate-50 border-l-4 border-orange-600 italic font-medium text-gray-700 text-sm shadow-sm">
                                    "We envision a society where every young person is a leader in their own right, capable of solving global challenges through local scouting initiatives."
                                </div>
                            </div>
                            <div className="lg:col-span-6 order-1 lg:order-2 relative group">
                                <div className="absolute -inset-4 bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-colors" />
                                <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=800&fit=crop"
                                        alt="Vision"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 left-0 p-6">
                                        <div className="w-10 h-10 border-b-4 border-l-4 border-[#000080]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FUNDAMENTAL PRINCIPLES */}
                <section className="py-20 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-[1500px] mx-auto px-6 text-center">
                        <h2 className="text-3xl font-[1000] text-[#000080] tracking-tighter mb-12">Fundamental Principles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {fundamentals.map((principle, i) => (
                                <div key={i} className="bg-white p-5 border border-slate-100 group hover:border-orange-600 transition-all">
                                    <div className="w-full flex items-center gap-4">
                                        <div className="w-8 h-8 bg-orange-600 text-white flex items-center justify-center font-black text-xs rotate-45 group-hover:rotate-0 transition-transform">
                                            <span className="-rotate-45 group-hover:rotate-0 transition-transform">{i + 1}</span>
                                        </div>
                                        <span className="text-gray-700 font-black text-[13px] text-left uppercase tracking-tight">{principle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE SPIRIT OF METHODOLOGY */}
                <section className="py-24 max-w-[1500px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8 space-y-10">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-[1000] text-[#000080] tracking-tighter flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                                    Faith & Duty to God
                                </h3>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed border-l-4 border-orange-600 pl-8">
                                    Faith in God and belief in His goodness is central. There is no place in the movement for those who do not believe. They are taught that God is kind to everyone and has abundant love for all.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-[1000] text-[#000080] tracking-tighter flex items-center gap-3">
                                    <Globe className="w-6 h-6 text-orange-600" />
                                    The Great Outdoors
                                </h3>
                                <p className="text-gray-600 text-lg font-medium leading-relaxed border-l-4 border-orange-600 pl-8">
                                    Outdoor life and all activities in the open are the working principles followed. We believe in doing all our work in the great outdoors, rarely moving indoors unless the weather is inclement.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-4 bg-[#000080] p-10 text-white flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 -mr-16 -mt-16 rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                            <h3 className="text-3xl font-[1000] tracking-tighter mb-6 relative z-10">Voluntary <br /> Membership</h3>
                            <p className="text-white/70 text-sm font-medium leading-relaxed mb-8 relative z-10">
                                Boys and girls join Scouting and Guiding voluntarily. It is a movement designed for youth, where every youth should claim an equal right to participation.
                            </p>
                            <div className="relative z-10">
                                <div className="h-1 w-12 bg-orange-500"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-[1500px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-[1000] text-[#000080] tracking-tighter">Scouting Core Values</h2>
                            <div className="h-1 w-16 bg-orange-600 mx-auto mt-5" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((val, i) => (
                                <div key={i} className="group p-10 bg-white border border-slate-100 hover:border-[#000080] hover:shadow-xl transition-all duration-300">
                                    <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                                        <val.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-black text-gray-900 tracking-tight mb-3">{val.title}</h4>
                                    <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default MissionVisionPage;