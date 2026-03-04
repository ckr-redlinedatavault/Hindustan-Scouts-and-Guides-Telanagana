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
        {
            title: "Humanity",
            desc: "Treating all individuals with dignity and extending support to those in need. We believe that every person, regardless of their background, deserves respect and care.",
            longDesc: "Our commitment to humanity goes beyond simple kindness. It is an active pursuit of social justice and equity, ensuring that our scouts are empathetic leaders who stand up for the vulnerable and contribute to a more compassionate society."
        },
        {
            title: "Integrity",
            desc: "Upholding the highest moral and ethical standards in every mission. Honesty and transparency are the bedrocks of our organization.",
            longDesc: "Integrity in scouting means doing the right thing even when no one is watching. We train our youth to be men and women of their word, developing a strong moral compass that guides them through life's complex challenges."
        },
        {
            title: "Excellence",
            desc: "Striving for quality in training, service, and youth development. We aim for the highest standards in everything we do.",
            longDesc: "Excellence is not an act, but a habit. Through rigorous training and constant reflection, we encourage our scouts to push their boundaries, master new skills, and deliver service that truly makes a difference."
        },
        {
            title: "Loyalty",
            desc: "Unwavering commitment to the nation and the movement. We foster a sense of belonging and duty to the country.",
            longDesc: "Loyalty is the thread that binds our organization. We instill a deep-seated love for the motherland, teaching our youth that true leadership begins with a sense of responsibility toward their community and nation."
        }
    ];

    const fourAims = [
        {
            id: "01",
            title: "Formation of character",
            desc: "The realization of God through woodcraft, responsibilities, and appreciating nature's beauty.",
            details: "Taught through the patrol system, Scout/Guide Law, and resourcefulness in camp work. We emphasize self-reliance and the development of a resilient spirit."
        },
        {
            id: "02",
            title: "Health and strength",
            desc: "Securing physical and mental wellbeing through knowledge of personal hygiene and diet.",
            details: "Practiced via games, regular exercises, and yoga to ensure moral and physical efficiency. A healthy body is the vessel for a strong mind and a serving heart."
        },
        {
            id: "03",
            title: "Handicraft and skill",
            desc: "Acquiring useful skills that make us efficient workers and self-reliant individuals.",
            details: "Achieved through pioneering, bridge-building, expeditions, and self-expression through arts. These practical skills build confidence and prepare youth for life."
        },
        {
            id: "04",
            title: "Service to others",
            desc: "Developing the spirit of service by substituting 'Self' with the ambition to serve fellowmen.",
            details: "Developed through 'Good Turns', community service, and active loyalty to the country. Service is the ultimate goal of all our training and activities."
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
        "Faith in the richness of Indian Culture",
        "Promotion of secularism and inclusivity",
        "Emphasis on environmental stewardship",
        "Development of emotional intelligence"
    ];

    return (
        <div className="bg-white flex flex-col font-sans text-slate-900 w-full">
            <Breadcrumbs />

            <section className="relative pt-14 pb-14 bg-[#000080] overflow-hidden">
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
                            Purpose and <br />
                            <span className="text-orange-500">Principles.</span>
                        </h1>
                        <p className="text-blue-100/70 text-lg md:text-xl font-medium tracking-tight border-l-2 border-orange-500 pl-8">
                            Hindustan Scouts and Guides Association Telangana: A commitment to
                            building character, fostering leadership, and serving the nation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-gray-100 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                Building the <span className="text-[#000080]">Foundation of Youth</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-[16px] leading-relaxed font-medium">
                                <p>
                                    Our mission is to contribute to the education of young people, through a value system based on the Scout Promise and Law, to help build a better world where people are self-fulfilled as individuals and play a constructive role in society.
                                </p>
                                <p>
                                    As a part of the **global "Scouts for SDGs" initiative**, we are dedicated to mobilizing our youth to take action on the 17 Sustainable Development Goals, fostering a sense of global responsibility and local action.
                                </p>
                                <p>
                                    We achieve this by involving them throughout their formative years in a non-formal educational process, using a specific method that makes each individual the principal agent of his or her development as a self-reliant, supportive, responsible, and committed person.
                                </p>
                            </div>
                            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-50 border-l-4 border-orange-500">
                                    <h4 className="text-slate-900 font-bold mb-2">Character First</h4>
                                    <p className="text-slate-500 text-sm">Focusing on ethical development and personal integrity.</p>
                                </div>
                                <div className="p-6 bg-slate-50 border-l-4 border-[#000080]">
                                    <h4 className="text-slate-900 font-bold mb-2">Service Always</h4>
                                    <p className="text-slate-500 text-sm">Instilling a lifelong commitment to community help.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771854077/WhatsApp_Image_2026-02-22_at_12.39.52_j00ceg.jpg"
                                alt="Mission"
                                className="w-full h-[300px] lg:h-[400px] object-cover shadow-2xl grayscale-[20%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771839944/WhatsApp_Image_2026-02-22_at_12.39.50_1_vywsen.jpg"
                                alt="Vision"
                                className="w-full h-[300px] lg:h-[400px] object-cover shadow-2xl"
                            />
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                    Our Vision
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                Shaping the <span className="text-[#000080]">Leaders of Tomorrow</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-[16px] leading-relaxed font-medium">
                                <p>
                                    By 2030, we envision Hindustan Scouts and Guides Telangana as a premier youth movement, reaching every corner of the state and engaging over 500,000 young people in dynamic, skill-building activities.
                                </p>
                                <p>
                                    Our vision is deeply aligned with the **National Education Policy (NEP 2020)**, aiming to provide "holistic education" that bridges the gap between academics and character building, ensuring our youth are prepared for the challenges of the 21st century.
                                </p>
                                <p>
                                    Our vision is to empower young individuals to be global citizens who are capable of solving local challenges through innovative leadership, environmental stewardship, and a deep-seated commitment to world peace and friendship.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-8">
                                <div className="text-center">
                                    <p className="text-3xl font-black text-[#000080]">500K+</p>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Target Youth</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-black text-orange-500">33</p>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Districts Impacted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            The Four-Fold Aims
                        </h2>
                        <span className="text-orange-600 font-bold text-sm uppercase tracking-[0.3em]">
                            Constitutional objectives
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fourAims.map((aim, i) => (
                            <div key={i} className="group p-8 border border-gray-100 hover:border-orange-500/30 hover:bg-slate-50 transition-all duration-300">
                                <div className="text-4xl font-black text-orange-500/20 mb-6 group-hover:text-orange-500/40 transition-colors">
                                    {aim.id}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight uppercase">
                                    {aim.title}
                                </h3>
                                <p className="text-slate-600 text-[14px] font-bold leading-relaxed mb-6">
                                    {aim.desc}
                                </p>
                                <p className="text-slate-400 text-[12px] font-medium leading-relaxed border-t border-gray-100 pt-4">
                                    {aim.details}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative py-12 px-10 bg-slate-900 text-white mt-20 max-w-5xl mx-auto overflow-hidden">
                        <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="w-20 h-20 bg-orange-500 flex items-center justify-center shrink-0">
                                <Quote className="text-white w-10 h-10" />
                            </div>
                            <div>
                                <p className="text-xl font-medium italic text-white/90 leading-relaxed mb-4">
                                    "To improve the character and health; to replace self with service; to make the youth
                                    individually morally and physically efficient, with the objective of using that
                                    efficiency for service to their fellowmen."
                                </p>
                                <span className="text-orange-500 font-black text-xs uppercase tracking-[0.4em]">
                                    — Lord Baden-Powell
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-4">
                            <div className="sticky top-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                    <span className="text-slate-900 font-black text-xs uppercase tracking-widest">
                                        Fundamental principles
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold mb-8">The pillars of our movement</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {fundamentals.map((principle, i) => (
                                        <div key={i} className="flex items-center gap-4 py-1.5 border-b border-gray-200 last:border-0">
                                            <div className="w-1.5 h-1.5 bg-orange-600 shrink-0" />
                                            <span className="text-slate-700 font-bold text-[14px]">{principle}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-[#000080]"></span>
                                <span className="text-slate-900 font-black text-xs uppercase tracking-widest">
                                    Core Values
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold mb-12">Integrating Values Into Life</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {values.map((val, i) => (
                                    <div key={i} className="p-10 bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                        <h4 className="text-xl font-bold text-[#000080] mb-4 tracking-tight uppercase">
                                            {val.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm font-bold mb-6 leading-relaxed">
                                            {val.desc}
                                        </p>
                                        <p className="text-slate-400 text-xs font-medium leading-relaxed italic border-t border-gray-50 pt-4">
                                            {val.longDesc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVisionPage;