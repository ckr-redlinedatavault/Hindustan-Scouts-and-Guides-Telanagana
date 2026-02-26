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

            <section className="relative pt-16 pb-16 bg-[#000080] overflow-hidden">
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
                        <h1 className="text-2xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-8">
                            Pragatisheel <br />
                            <span className="text-orange-500">Prashikshan Yojana.</span>
                        </h1>
                        <p className="text-blue-100/70 text-base md:text-lg font-medium tracking-tight border-l-2 border-orange-500 pl-8">
                            A comprehensive, approved training framework designed to build character, resilience, and leadership.
                            Our curriculum is rooted in experiential learning and value-based education.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-gray-100 bg-white overflow-hidden">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-6 relative h-[300px] lg:h-[500px]">
                            <div className="absolute inset-0 group">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771838041/WhatsApp_Image_2026-02-22_at_12.39.49_hcj8ru.jpg"
                                    alt="Training Guidelines"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-0 right-0 w-[5px] h-full bg-orange-600" />
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

            <section className="py-20 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative group overflow-hidden border border-gray-100">
                            <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199923/WhatsApp_Image_2025-02-09_at_08.19.10_1_z9yofc.jpg" alt="Cub Training" className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                                <span className="text-[10px] font-black uppercase tracking-widest">Category I</span>
                                <h4 className="font-bold">Cub & Bulbul</h4>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden border border-gray-100">
                            <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199923/WhatsApp_Image_2025-02-09_at_08.19.11_sxtm9g.jpg" alt="Scout Training" className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                                <span className="text-[10px] font-black uppercase tracking-widest">Category II</span>
                                <h4 className="font-bold">Scout & Guide</h4>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden border border-gray-100">
                            <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771838042/WhatsApp_Image_2026-02-22_at_12.39.42_hsgvlo.jpg" alt="Rover Training" className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                                <span className="text-[10px] font-black uppercase tracking-widest">Category III</span>
                                <h4 className="font-bold">Rover & Ranger</h4>
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
                        },
                        {
                            chapter: "Chapter IV",
                            title: "Rovers & Rangers",
                            desc: "Advanced leadership, specialized vocational training, and high-impact social service for young adults.",
                            cards: [
                                {
                                    head: "Rajat & Swarn Sitara",
                                    items: ["Civil Defense Training", "Disaster Management", "Vocational skill mastery", "Rural Development project"]
                                },
                                {
                                    head: "President Award",
                                    orange: true,
                                    items: ["15 Day Service Camp", "Blood Donation Drive", "Micro-finance awareness", "National Integration Camp"]
                                }
                            ]
                        }
                    ].map((ch, idx) => (
                        <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-4 lg:sticky lg:top-32">
                                <span className="text-orange-600 font-bold text-[10px] uppercase tracking-widest block mb-3">{ch.chapter}</span>
                                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight uppercase mb-6 leading-none">{ch.title}</h2>
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

            <section className="py-20 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em]">Training Philosophy</span>
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">
                                The Scout Method
                            </h2>
                            <p className="text-slate-600 text-sm font-bold leading-relaxed mb-10">
                                Our educational system is not just about teaching skills, but about facilitating
                                growth through a specific system of non-formal education.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Learning by Doing", desc: "Practical activities and outdoor experiences as the primary classroom." },
                                    { title: "Patrol System", desc: "Small group dynamics fostering teamwork and peer leadership." },
                                    { title: "Symbolic Framework", desc: "Themes and stories that inspire and guide the youth's imagination." }
                                ].map((m, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                            <span className="text-orange-600 font-bold text-xs">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-bold text-sm mb-1">{m.title}</h4>
                                            <p className="text-slate-500 text-xs font-medium">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-[#000080] text-white">
                                    <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                                    <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">Safe from Harm</h3>
                                    <p className="text-white/60 text-xs font-medium leading-relaxed">
                                        We maintain a strictly safe environment. All adult leaders undergo mandatory
                                        child protection training and background verification to ensure the highest
                                        safeguarding standards.
                                    </p>
                                </div>
                                <div className="p-8 bg-white border border-gray-200">
                                    <Medal className="w-10 h-10 text-[#000080] mb-6" />
                                    <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">Merit Recognition</h3>
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                                        Every achievement is recognized through a structured badge system, motivating
                                        scouts to explore diverse fields from environment to digital literacy.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 p-10 bg-orange-600 text-white flex flex-col md:flex-row items-center gap-10">
                                <Zap className="w-16 h-16 shrink-0 opacity-20" />
                                <div>
                                    <h3 className="text-xl font-bold mb-3 uppercase">Youth Empowerment</h3>
                                    <p className="text-white/80 text-sm font-medium leading-relaxed">
                                        We believe in "Youth in Governance." Our senior scouts are involved in the
                                        decision-making process, ensuring the movement stays relevant and progressive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div className="bg-slate-50 border border-slate-100 p-8 md:p-14 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-20 h-20 bg-orange-100 flex items-center justify-center shrink-0">
                        <Users className="w-10 h-10 text-orange-600" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight uppercase mb-4 font-black">Join Adult Leadership</h2>
                        <p className="text-slate-500 text-sm font-bold max-w-2xl leading-relaxed">
                            On completion of 21 (Rover) or 25 (Ranger) years of age, members are encouraged to transition into adult leadership, serving as trainers and mentors to the next generation of scouts in Telangana.
                        </p>
                    </div>
                    <button className="whitespace-nowrap bg-slate-950 text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all rounded-none shadow-xl">
                        Leadership Commission <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PrashikshamPage;