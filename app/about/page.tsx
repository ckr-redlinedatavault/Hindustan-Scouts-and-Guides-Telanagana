"use client";

import React from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import SimilarOrganisations from "@/components/SimilarOrganisations";
import {
    ChevronRight, Award, Shield, Target, BookOpen,
    Users, Clock, Heart, Zap, Globe, Sparkles,
    CheckCircle2, Milestone, GraduationCap, Briefcase
} from "lucide-react";

const AboutPage = () => {
    const characteristics = [
        "Voluntary participation",
        "Non-political organization",
        "Open to all without distinction of gender, race, or caste",
        "Education for life",
        "Creating active and responsible citizens",
        "Manifesting a feeling of unison",
        "Evolving and growing the individual",
        "Desire to make a better world"
    ];

    const whyScouting = [
        { title: "Time Utilization", desc: "Learning the value of time and management through good companionship.", icon: <Clock className="w-6 h-6" /> },
        { title: "Character Formation", desc: "Inherently building good character and ethical values.", icon: <Shield className="w-6 h-6" /> },
        { title: "Noble Citizenship", desc: "Imparting education to be a noble citizen, the pride of the nation.", icon: <Award className="w-6 h-6" /> },
        { title: "Service Religion", desc: "For a scout/guide, service is their primary religion and duty.", icon: <Heart className="w-6 h-6" /> },
        { title: "Good Habits", icon: <Zap className="w-6 h-6" />, desc: "Learning habits that encourage participation in good works." },
        { title: "Credibility", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Speaking the truth and respecting others as a credible being." },
        { title: "Health & Wellbeing", icon: <Heart className="w-6 h-6" />, desc: "Physical and mental development through fresh air activities." },
        { title: "Talent Development", icon: <Sparkles className="w-6 h-6" />, desc: "Evolving hidden talents to reform the future." },
        { title: "Pleasant Nature", icon: <Target className="w-6 h-6" />, desc: "Working collectively amidst nature to complete difficult tasks." },
        { title: "Comprehensive Approach", icon: <Globe className="w-6 h-6" />, desc: "Expanding knowledge through international scout contacts." }
    ];

    const timeline = [
        { year: "1899-1902", title: "Boer War (Mafeking)", desc: "The idea of scouting for boys emerged in the mind of Lord Baden Powell." },
        { year: "1907", title: "Experimental Camp", desc: "The movement began with 22 boys at Brownsea Island in the English Channel." },
        { year: "1908", title: "Scouting for Boys", desc: "Successfully published, laying the foundation for the global movement." },
        { year: "1909", title: "Crystal Palace Rally", desc: "First big rally held. Girl scouting started when B.P.'s sister took charge." },
        { year: "1910", title: "India Arrival", desc: "Scouting started in India initially only for English boys." },
        { year: "1921", title: "Hindustan Scouts", desc: "Pt. Madan Mohan Malaviya established the Hindustan Scouts Association for Indians." },
        { year: "1950", title: "Unity Attempt", desc: "All organizations unified under 'The Bharat Scouts & Guides' post-independence." },
        { year: "1998", title: "HSGA Foundation", desc: "Sh. Shriniwas Sharma launched Hindustan Scouts and Guides on 26 November 1998." },
        { year: "2001", title: "Govt. Recognition", desc: "Official recognition granted on 07-03-2001 by Ministry of Youth Affairs & Sports." }
    ];

    return (
        <div className="bg-white w-full">

            <Breadcrumbs />

            {/* HERO SECTION - ABOUT US */}
            <section className="relative pt-16 pb-14 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
                />
                <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 mb-6 font-[1000]">
                            <span className="h-[1.5px] w-10 bg-orange-500"></span>
                            <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Historical Legacy</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-[1000] text-white tracking-tighter leading-[1.1] mb-8">
                            The Spirit of <br />
                            <span className="text-orange-500">Noble Citizenship.</span>
                        </h1>
                        <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                            Scouting is a youth-oriented educational movement dedicated to building physical, mental, and spiritual strength through voluntary, value-based participation.
                        </p>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 space-y-10">
                            <div>
                                <h2 className="text-2xl font-[1000] text-[#000080] tracking-tighter mb-6 flex items-center gap-4">
                                    <Milestone className="w-6 h-6 text-orange-600" />
                                    Characteristics
                                </h2>
                                <ul className="space-y-3.5">
                                    {characteristics.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <div className="mt-2 w-1.5 h-1.5 bg-orange-600 rotate-45 group-hover:scale-125 transition-transform" />
                                            <span className="text-gray-700 font-bold text-[14px] leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <h2 className="text-3xl font-[1000] text-[#000080] tracking-tighter mb-10 text-center lg:text-left">
                                Why Scouting Matters
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {whyScouting.map((item, i) => (
                                    <div key={i} className="p-7 bg-slate-50 border-l-4 border-[#000080] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                                        <div className="text-orange-600 mb-3 group-hover:scale-110 transition-transform origin-left">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-[17px] font-black text-gray-900 tracking-tight mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-[13.5px] font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter">Journey of a Century</h2>
                        <div className="h-1 w-16 bg-orange-600 mx-auto mt-5"></div>
                        <p className="text-gray-500 font-bold tracking-widest text-[9px] uppercase mt-4">Evolution in India</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {timeline.map((item, i) => (
                            <div key={i} className="relative bg-white p-8 shadow-sm border border-slate-200 group hover:border-orange-600 transition-colors">
                                <div className="absolute -top-3.5 left-8 px-3.5 py-1 bg-orange-600 text-white font-black text-[10px] uppercase tracking-widest transform -skew-x-12">
                                    {item.year}
                                </div>
                                <h3 className="text-lg font-black text-[#000080] tracking-tight mb-3 mt-1">{item.title}</h3>
                                <p className="text-gray-600 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOUNDER SECTION */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-2xl relative group">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                    alt="HSGA Founder"
                                    className="w-full h-full object-contain p-14 scale-105 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 right-0 p-6">
                                    <div className="w-16 h-16 border-t-8 border-r-8 border-orange-600"></div>
                                </div>
                                <div className="absolute top-0 left-0 p-6">
                                    <div className="w-10 h-10 border-b-4 border-l-4 border-[#000080]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <span className="text-orange-600 font-black text-[10px] tracking-widest uppercase">The Visionary</span>
                                </div>
                                <h2 className="text-4xl font-[1000] text-[#000080] tracking-tighter leading-[1.1] mb-4">
                                    Sh. Shriniwas <br />
                                    <span className="text-orange-600">Sharma</span>
                                </h2>
                                <p className="text-gray-500 font-bold text-[11px] uppercase tracking-widest mb-6">Founder, Hindustan Scouts & Guides</p>

                                <p className="text-gray-600 text-md md:text-lg font-medium leading-relaxed border-l-4 border-[#000080] pl-6">
                                    A scout since 1950, Sh. Shriniwas Sharma established the Hindustan Scouts & Guides Association based on the inspiration of Dr. K. R. Narayanan, the then President of India.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2 text-[#000080]">
                                        <GraduationCap className="w-4 h-4" />
                                        <span className="font-black text-[9px] uppercase tracking-widest">Education</span>
                                    </div>
                                    <p className="text-gray-800 font-bold text-sm tracking-tight">M.A., B.Ed</p>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2 text-[#000080]">
                                        <Clock className="w-4 h-4" />
                                        <span className="font-black text-[9px] uppercase tracking-widest">Birth</span>
                                    </div>
                                    <p className="text-gray-800 font-bold text-sm tracking-tight">13th February 1937, U.P.</p>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2 text-[#000080]">
                                        <Briefcase className="w-4 h-4" />
                                        <span className="font-black text-[9px] uppercase tracking-widest">Profession</span>
                                    </div>
                                    <p className="text-gray-800 font-bold text-sm tracking-tight">Delhi School Lecturer (Rtd. 1997)</p>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2 text-[#000080]">
                                        <Shield className="w-4 h-4" />
                                        <span className="font-black text-[9px] uppercase tracking-widest">Experience</span>
                                    </div>
                                    <p className="text-gray-800 font-bold text-sm tracking-tight">Scouting Leader Since 1959</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="bg-slate-50 p-6 border-l-4 border-orange-600 italic font-medium text-gray-700 text-sm">
                                    "After retirement, he traveled across the length and breadth of India to expand the organization, ensuring the movement reached those who were previously left behind."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RECOGNITION STRIP */}
            <section className="py-14 bg-[#000080] border-t-[6px] border-orange-600">
                <div className="max-w-[1500px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white">
                            <h3 className="text-2xl font-[1000] tracking-tighter mb-2">Global Credibility</h3>
                            <p className="opacity-50 font-bold uppercase text-[9px] tracking-widest">National & International Affiliations</p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-sm">
                                <Globe className="w-8 h-8 text-orange-500" />
                                <div>
                                    <h4 className="text-white font-black text-sm tracking-tight mb-0.5">WFIS Germany</h4>
                                    <p className="text-white/50 text-[11px] font-medium leading-tight">World Federation of Independent Scouts (UNO)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-sm">
                                <Shield className="w-8 h-8 text-orange-500" />
                                <div>
                                    <h4 className="text-white font-black text-sm tracking-tight mb-0.5">Govt. of India</h4>
                                    <p className="text-white/50 text-[11px] font-medium leading-tight">Ministry of Youth Affairs & Sports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SimilarOrganisations />

        </div>
    );
};

export default AboutPage;
