import type { Metadata } from "next";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "Mission & Vision",
    description: "Our constitutional foundation, four-fold aims, and fundamental principles. Building character, health, and service in the youth of Telangana.",
};

const MissionVisionPage = () => {
    const values = [
        { title: "Humanity", desc: "Treating all individuals with dignity and extending support to those in need." },
        { title: "Integrity", desc: "Upholding the highest moral and ethical standards in every mission." },
        { title: "Excellence", desc: "Striving for quality in training, service, and youth development." }
    ];

    const fourAims = [
        {
            id: "01",
            title: "Formation of character",
            desc: "The realization of God through woodcraft, responsibilities, and appreciating nature's beauty.",
            details: "Taught through the patrol system, Scout/Guide Law, and resourcefulness in camp work."
        },
        {
            id: "02",
            title: "Health and strength",
            desc: "Securing physical and mental wellbeing through knowledge of personal hygiene and diet.",
            details: "Practiced via games, regular exercises, and yoga to ensure moral and physical efficiency."
        },
        {
            id: "03",
            title: "Handicraft and skill",
            desc: "Acquiring useful skills that make us efficient workers and self-reliant individuals.",
            details: "Achieved through pioneering, bridge-building, expeditions, and self-expression through arts."
        },
        {
            id: "04",
            title: "Service to others",
            desc: "Developing the spirit of service by substituting 'Self' with the ambition to serve fellowmen.",
            details: "Developed through 'Good Turns', community service, and active loyalty to the country."
        }
    ];

    const fundamentals = [
        "Belief in God and His goodness",
        "Practice of the Scout Law and Promise",
        "Learning by doing (Practical application)",
        "Use of outdoor activities as primary classroom",
        "Voluntary membership for all youth",
        "Implementation of the Patrol Method",
        "Unwavering loyalty to the Country",
        "Faith in World Friendship and peace",
        "Independent of political influence",
        "Service to others as a primary duty",
        "Faith in the richness of Indian Culture"
    ];

    return (
        <div className="bg-white flex flex-col font-sans text-slate-900 w-full">
            <Breadcrumbs />

            {/* HERO SECTION */}
            <section className="relative pt-16 pb-20 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-start max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Constitutional Foundation
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-8">
                            The foundation of <br />
                            <span className="text-orange-600">our purpose.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight border-l border-white/20 pl-8">
                            Mission, Vision and the Four-fold Aims
                        </p>
                    </div>
                </div>
            </section>

            {/* MISSION SECTION - FULL HEIGHT IMAGE */}
            <section className="border-b border-gray-100 bg-white overflow-hidden">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-6 relative h-[400px] lg:h-[600px]">
                            <div className="absolute inset-0 group" style={{ clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0% 100%)' }}>
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771854077/WhatsApp_Image_2026-02-22_at_12.39.52_j00ceg.jpg"
                                    alt="Mission"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-0 right-0 w-[5px] h-full bg-orange-600/30" />
                            </div>
                        </div>
                        <div className="lg:col-span-6 py-16 px-6 lg:px-20">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                Contributing to the <br />
                                <span className="text-[#000080]">development of youth</span>
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed mb-10 font-medium">
                                To contribute to the development of young people in achieving their full
                                physical, intellectual, social, and spiritual potentials as individuals,
                                and as responsible citizens of the nation.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Fostering national integration through youth movements.",
                                    "Individual character building and leadership training.",
                                    "Commitment to secularism and social service."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-orange-600 shrink-0" />
                                        <span className="text-slate-800 font-bold text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE FOUR-FOLD AIMS - DOSSIER GRID */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            The four-fold aims
                        </h2>
                        <span className="text-orange-600 font-normal text-lg lowercase tracking-tight">
                            the constitutional object of scout and guide training
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 bg-white shadow-sm">
                        {fourAims.map((aim, i) => (
                            <div key={i} className="group p-10 border-r border-b border-gray-200 hover:bg-slate-50 transition-all">
                                <div className="flex items-center gap-2 mb-8">
                                    <span className="text-orange-600 font-bold text-xs">{aim.id}</span>
                                    <span className="w-4 h-[1px] bg-gray-200"></span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight leading-tight uppercase">
                                    {aim.title}
                                </h3>
                                <p className="text-slate-600 text-[14px] font-bold leading-relaxed mb-6">
                                    {aim.desc}
                                </p>
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-slate-400 text-[12px] font-medium leading-relaxed">
                                        {aim.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Editorial Quote Block */}
                    <div className="relative py-10 px-8 bg-white border border-gray-200 mt-16 max-w-4xl mx-auto text-center shadow-sm">
                        <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-orange-600 bg-white p-2" />
                        <p className="text-slate-800 font-bold italic text-[17px] leading-relaxed">
                            "To improve the character and health; to replace self with service; to make the lads
                            individually morally and physically efficient, with the objective of using that
                            efficiency for service to their fellowmen."
                        </p>
                        <p className="text-[10px] uppercase tracking-widest font-black text-[#000080] mt-6">
                            — Lord Baden-Powell
                        </p>
                    </div>
                </div>
            </section>

            {/* VISION SECTION */}
            <section className="bg-white overflow-hidden">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-6 py-12 px-6 lg:px-20 order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                    Our Vision
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                Leading the future of <br />
                                <span className="text-[#000080]">youth in telangana</span>
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed mb-10 font-medium">
                                To be the leading youth movement in the state, empowering young individuals
                                to create a better world by inspiring a culture of peace, national pride,
                                and selfless service.
                            </p>
                            <div className="p-8 bg-slate-50 border-l-4 border-orange-600">
                                <p className="text-slate-700 font-bold text-sm leading-relaxed italic">
                                    "We envision a society where every young person is a leader in their own
                                    right, capable of solving global challenges through local initiatives."
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative h-[400px] lg:h-[600px] order-1 lg:order-2">
                            <div className="absolute inset-0 group" style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771839944/WhatsApp_Image_2026-02-22_at_12.39.50_1_vywsen.jpg"
                                    alt="Vision"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-0 left-0 w-[5px] h-full bg-orange-600/30" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FUNDAMENTALS - CLEAN LIST GRID */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-8 h-[1.5px] bg-orange-600"></span>
                        <h2 className="text-slate-900 font-bold text-sm uppercase tracking-widest">
                            Fundamental principles
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                        {fundamentals.map((principle, i) => (
                            <div key={i} className="flex items-start gap-4 py-2">
                                <div className="w-1.5 h-1.5 bg-orange-600 mt-2 shrink-0" />
                                <span className="text-slate-800 font-bold text-[14px] leading-snug">{principle}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CORE VALUES - ARCHITECTURAL CARDS */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            Scouting core values
                        </h2>
                        <span className="text-orange-600 font-normal text-lg lowercase tracking-tight">
                            the moral compass of our organization
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-100 shadow-sm">
                        {values.map((val, i) => (
                            <div key={i} className="p-10 border-r border-b border-gray-100 hover:bg-slate-50 transition-colors group">
                                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">
                                    {val.title}
                                </h4>
                                <p className="text-slate-500 text-[14px] font-medium leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVisionPage;