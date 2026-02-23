import type { Metadata } from "next";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
    BookOpen, Award, CheckCircle2, ChevronRight,
    ShieldCheck, GraduationCap, Users, Star,
    Compass, Heart, Zap, Medal
} from "lucide-react";

export const metadata: Metadata = {
    title: "Prashiksham Yojana",
    description: "Explore the Pragatisheel Prashikshan educational framework. A comprehensive training roadmap for Cubs, Scouts, and Rovers of HSGA Telangana.",
};

const PrashikshamPage = () => {
    return (
        <div className="bg-white flex flex-col font-sans text-slate-900 w-full">
            <Breadcrumbs />

            <section className="relative pt-16 pb-20 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-start max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Educational Methodology
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-8">
                            Pragatisheel <br />
                            <span className="text-orange-600">Prashikshan.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight border-l border-white/20 pl-8">
                            A comprehensive, approved training framework designed to build character, resilience, and leadership.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-gray-100 bg-white overflow-hidden">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-6 relative h-[400px] lg:h-[650px]">
                            <div className="absolute inset-0 group" style={{ clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0% 100%)' }}>
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771838041/WhatsApp_Image_2026-02-22_at_12.39.49_hcj8ru.jpg"
                                    alt="Training Guidelines"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-0 right-0 w-[5px] h-full bg-orange-600/30" />
                            </div>
                        </div>
                        <div className="lg:col-span-6 py-16 px-6 lg:px-20">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                    Approved Curriculum
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-tight tracking-tight mb-8">
                                Preface and <br />
                                <span className="text-[#000080]">National Guidelines</span>
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed mb-10 font-medium">
                                Hindustan Scouts and Guides presents the Boy and Girl Programme, duly approved
                                by the National Training team and National Council. This curriculum ensures a
                                uniform standard of excellence across all units in Telangana.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-50 border-l-4 border-orange-600">
                                    <p className="text-slate-800 font-bold text-sm leading-relaxed">
                                        Test cards should be maintained according to age group and stage.
                                    </p>
                                </div>
                                <div className="p-6 bg-slate-50 border-l-4 border-[#000080]">
                                    <p className="text-slate-800 font-bold text-sm leading-relaxed">
                                        Members should qualify for the next stage within one year.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 uppercase">
                            Advancement Stages
                        </h2>
                        <span className="text-orange-600 font-normal text-lg lowercase tracking-tight">
                            age-wise progression and time requirements
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-200 bg-white shadow-sm overflow-hidden">
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
                            <div key={idx} className={`p-10 border-r border-b border-gray-200 transition-all ${group.highlight ? 'bg-orange-50/20' : ''}`}>
                                <div className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">{group.age}</div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase mb-8">{group.title}</h3>
                                <ul className="space-y-4">
                                    {group.stages.map((st, sidx) => (
                                        <li key={sidx} className={`flex justify-between items-end border-b border-slate-100 pb-2 ${st[2] ? 'text-orange-600 font-bold' : 'text-slate-500 font-medium'}`}>
                                            <span className="text-xs uppercase tracking-tight">{st[0]}</span>
                                            <span className="text-[10px] uppercase font-bold">{st[1]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 max-w-[1500px] mx-auto px-6 lg:px-12">
                <div className="space-y-16">
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
                        <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-4 lg:sticky lg:top-32">
                                <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest block mb-3">{ch.chapter}</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight uppercase mb-6 leading-none">{ch.title}</h2>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{ch.desc}</p>
                                <div className="h-1 w-10 bg-orange-600 mt-8"></div>
                            </div>
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 bg-white border-t border-l border-gray-100 shadow-sm">
                                {ch.cards.map((card, cidx) => (
                                    <div key={cidx} className={`p-10 border-r border-b border-gray-100 transition-all ${card.orange ? 'bg-[#000080] text-white' : 'bg-white text-slate-900'}`}>
                                        <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-6 border-b pb-4 ${card.orange ? 'border-white/10 text-orange-500' : 'border-slate-100 text-[#000080]'}`}>
                                            {card.head}
                                        </h4>
                                        <ul className="space-y-4">
                                            {card.items.map((it, iidx) => (
                                                <li key={iidx} className="flex items-start gap-3">
                                                    <div className={`w-1 h-1 mt-1.5 shrink-0 ${card.orange ? 'bg-orange-500' : 'bg-orange-600'}`} />
                                                    <span className={`text-[13px] font-bold ${card.orange ? 'text-white/80' : 'text-slate-700'}`}>{it}</span>
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

            <section className="py-20 bg-[#000080] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight uppercase mb-4">Proficiency Badges</h2>
                        <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest">Specialized skills for overall human development</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {[
                            "Blood Donor", "Civil Defense", "Self Defense", "Community Worker",
                            "Climber", "Folk Life", "Education for All", "Soil Conservation",
                            "World Friendship", "Yoga", "Salesman", "Ecologist", "Family Life"
                        ].map((badge, i) => (
                            <span key={i} className="px-5 py-3 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all cursor-default">
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 max-w-[1500px] mx-auto px-6 lg:px-12">
                <div className="bg-slate-50 border border-slate-100 p-12 md:p-16 flex flex-col items-center text-center">
                    <Users className="w-12 h-12 text-orange-600 mb-6 opacity-30" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight uppercase mb-6">Join Adult Leadership</h2>
                    <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed mb-10">
                        On completion of 21 (Rover) or 25 (Ranger) years of age, members are encouraged to transition into adult leadership, serving as trainers and mentors to the next generation.
                    </p>
                    <button className="bg-[#000080] text-white px-10 py-4 font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all shadow-sm">
                        Apply for Leadership Commission <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PrashikshamPage;