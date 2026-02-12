"use client";

import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import {
    BookOpen, Award, CheckCircle2, ChevronRight,
    ShieldCheck, GraduationCap, Users, Star,
    Compass, Heart, Zap, Medal
} from "lucide-react";

const PrashikshamPage = () => {
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
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Educational Methodology</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Pragatisheel <span className="text-orange-500">Prashikshan</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                A comprehensive, approved training framework designed to build character, resilience, and leadership through structured advancement stages.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Preface Section */}
                <section className="py-20 max-w-[1500px] mx-auto px-6">
                    <div className="bg-white border border-slate-100 p-10 md:p-16 border-l-[8px] border-orange-600 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8 text-[#000080]">
                            <BookOpen className="w-8 h-8 text-orange-600" />
                            <h2 className="text-3xl font-[1000] tracking-tighter uppercase">Preface & National Guidelines</h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                            Hindustan Scouts and Guides presents the **Boy and Girl Programme**, duly approved by the National Training team and National Council. This curriculum is designed to ensure a uniform standard of excellence across all units in the state.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 group transition-all">
                                <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-sm font-bold text-gray-700 leading-snug">Every Scout/Guide must maintain an official Test Card according to their age group and advancement state.</p>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 group transition-all">
                                <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="text-sm font-bold text-gray-700 leading-snug">Members should progressively qualify for the next stage within one year of their successful enrollment in the movement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advancement Overview Grid */}
                <section className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
                    <div className="max-w-[1500px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter uppercase">Advancement Stages</h2>
                            <div className="h-1 w-16 bg-orange-600 mx-auto mt-5"></div>
                            <p className="text-gray-500 font-bold tracking-widest text-[9px] uppercase mt-4">Age-wise progression and time requirements</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
                            {[
                                {
                                    title: "Cub / Bulbul",
                                    age: "6-10+ Yrs",
                                    stages: [
                                        ["1. Praveshika", "3 Months"],
                                        ["2. Rajat Kiran", "6 Months"],
                                        ["3. Swarn Kiran", "6 Months"],
                                        ["4. Heerak Kiran", "9 Months"],
                                        ["5. Rajya Puraskar", "7 Months", true]
                                    ]
                                },
                                {
                                    title: "Scout / Guide",
                                    age: "11-17+ Yrs",
                                    highlight: true,
                                    stages: [
                                        ["1. Praveshika", "3 Months"],
                                        ["2. Rajat Pad", "6 Months"],
                                        ["3. Swarn Pad", "9 Months"],
                                        ["4. Heerak Pad", "9 Months"],
                                        ["5. Rajya Puraskar", "12 Months"],
                                        ["6. President Award", "6 Months", true]
                                    ]
                                },
                                {
                                    title: "Rover / Ranger",
                                    age: "17-35 Yrs",
                                    stages: [
                                        ["1. Praveshika", "3 Months"],
                                        ["2. Rajat Sitara", "6 Months"],
                                        ["3. Swarn Sitara", "9 Months"],
                                        ["4. Heerak Sitara", "12 Months"],
                                        ["President Award", "12 Months", true]
                                    ]
                                }
                            ].map((group, idx) => (
                                <div key={idx} className={`bg-white p-10 border-r border-b border-slate-200 group transition-all duration-300 ${group.highlight ? 'bg-orange-50/20' : ''}`}>
                                    <div className="text-orange-600 font-black text-xs uppercase tracking-widest mb-3">{group.age}</div>
                                    <h3 className="text-2xl font-[1000] text-[#000080] tracking-tighter uppercase mb-8">{group.title}</h3>
                                    <ul className="space-y-4">
                                        {group.stages.map((st, sidx) => (
                                            <li key={sidx} className={`flex justify-between items-end border-b border-slate-100 pb-2 transition-colors ${st[2] ? 'text-orange-600 font-black' : 'text-gray-600 font-bold'}`}>
                                                <span className="text-xs uppercase tracking-tight">{st[0]}</span>
                                                <span className="text-[10px] uppercase font-black">{st[1]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Curriculum Chapters */}
                <section className="py-24 max-w-[1500px] mx-auto px-6">
                    <div className="space-y-24">
                        {[
                            {
                                chapter: "Chapter II",
                                title: "Cubs & Bulbuls",
                                desc: "Early childhood training focused on observation, hand-eye coordination, and basic social discipline.",
                                cards: [
                                    {
                                        head: "Swarn Kiran",
                                        items: ["Handicraft out of waste", "Yoga & Meditation", "Reef Knot & Clove hitch", "Compass (8 points)"]
                                    },
                                    {
                                        head: "Heerak Kiran",
                                        items: ["Open Savings Account", "Earn 4 Proficiency badges", "Good-turn at public place", "Knowledge of State/Town"]
                                    }
                                ]
                            },
                            {
                                chapter: "Chapter III",
                                title: "Scouts & Guides",
                                desc: "Technical proficiency in pioneering, first-aid, survival skills, and structured community service projects.",
                                cards: [
                                    {
                                        head: "Rajat & Swarn Pad",
                                        items: ["16 Directions Compass", "Pioneering & Lashing", "10km Nature Study", "First-Aid box setup"]
                                    },
                                    {
                                        head: "Rajya Puraskar",
                                        orange: true,
                                        items: ["3 Day Pradeshik Test Camp", "12 Hours service in Slums", "Sarva Shiksha Project", "Literacy Campaign"]
                                    }
                                ]
                            }
                        ].map((ch, idx) => (
                            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                <div className="lg:col-span-4 lg:sticky lg:top-32">
                                    <span className="text-orange-600 font-black text-xs uppercase tracking-widest block mb-3">{ch.chapter}</span>
                                    <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter uppercase mb-6 leading-none">{ch.title}</h2>
                                    <p className="text-gray-500 font-medium leading-relaxed">{ch.desc}</p>
                                    <div className="h-1 w-12 bg-orange-600 mt-8"></div>
                                </div>
                                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-slate-100">
                                    {ch.cards.map((card, cidx) => (
                                        <div key={cidx} className={`p-10 border-r border-b border-slate-100 transition-all ${card.orange ? 'bg-[#000080] text-white' : 'bg-white text-slate-900'}`}>
                                            <h4 className={`text-sm font-black uppercase tracking-widest mb-6 border-b pb-4 ${card.orange ? 'border-white/10 text-orange-500' : 'border-slate-100 text-[#000080]'}`}>
                                                {card.head}
                                            </h4>
                                            <ul className="space-y-4">
                                                {card.items.map((it, iidx) => (
                                                    <li key={iidx} className="flex items-center gap-3">
                                                        <div className={`w-1.5 h-1.5 rotate-45 ${card.orange ? 'bg-orange-500' : 'bg-orange-600'}`} />
                                                        <span className={`text-[13px] font-bold ${card.orange ? 'text-white/80' : 'text-gray-600'}`}>{it}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Proficiency Badges */}
                <section className="py-24 bg-[#000080] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-[1000] tracking-tighter uppercase mb-4">Proficiency Badges</h2>
                            <p className="text-orange-400 font-black text-[10px] uppercase tracking-widest">Specialized skills for overall human development</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                            {[
                                "Blood Donor", "Civil Defense", "Self Defense", "Community Worker",
                                "Climber", "Folk Life", "Education for All", "Soil Conservation",
                                "World Friendship", "Yoga", "Salesman", "Ecologist", "Family Life"
                            ].map((badge, i) => (
                                <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-widest hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all cursor-default">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Adult Leadership CTA */}
                <section className="py-24 max-w-[1500px] mx-auto px-6">
                    <div className="bg-slate-50 border border-slate-100 p-12 md:p-20 flex flex-col items-center text-center">
                        <Users className="w-16 h-16 text-orange-600 mb-8" />
                        <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter uppercase mb-6">Join Adult Leadership</h2>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl leading-relaxed mb-10">
                            On completion of 21 (Rover) or 25 (Ranger) years of age, members are encouraged to transition into adult leadership, serving as trainers and mentors to the next generation.
                        </p>
                        <button className="bg-[#000080] text-white px-12 py-5 font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all">
                            Apply for Leadership Commission <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default PrashikshamPage;