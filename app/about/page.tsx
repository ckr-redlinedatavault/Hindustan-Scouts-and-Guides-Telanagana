import type { Metadata } from "next";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SimilarOrganisations from "@/components/SimilarOrganisations";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover the history, values, and leadership of the Hindustan Scouts and Guides Association Telangana. Founded on the principles of character building and selfless service.",
};

const AboutPage = () => {
    const characteristics = [
        "Voluntary participation for all young people",
        "Non-political organization focused on character building",
        "Open to all without distinction of gender, race, or caste",
        "Providing education for life through practical application",
        "Creating active and responsible citizens for the nation",
        "Manifesting a feeling of unison and brotherhood",
        "Continuous evolution of the individual’s potential",
        "Deep-rooted desire to make a better world through service"
    ];

    const scoutingValues = [
        { attribute: "Time utilization", benefit: "Learning the value of management through discipline and companionship." },
        { attribute: "Character formation", benefit: "Inherently building ethical values and integrity in daily life." },
        { attribute: "Noble citizenship", benefit: "Imparting education to be a pride of the nation." },
        { attribute: "Service as duty", benefit: "Prioritizing selfless service to the community as a core religion." },
        { attribute: "Healthy habits", benefit: "Developing physical and mental wellbeing through nature-based activities." },
        { attribute: "Global credibility", benefit: "Expanding knowledge through international scout contacts and standards." }
    ];

    const historicalRecord = [
        { period: "1907", event: "Experimental Camp", detail: "Movement began with 22 boys at Brownsea Island under Lord Baden Powell." },
        { period: "1910", event: "Arrival in India", detail: "Scouting officially reached India, initially catering to English boys." },
        { period: "1921", event: "Hindustan Scouts", detail: "Pt. Madan Mohan Malaviya established the association specifically for Indians." },
        { period: "1950", event: "Post-Independence Unity", detail: "Scouting bodies unified under a single national banner after 1947." },
        { period: "1998", event: "HSGA Foundation", detail: "Sh. Shriniwas Sharma launched Hindustan Scouts and Guides on 26 November." },
        { period: "2001", event: "Government Recognition", detail: "Official recognition granted by the Ministry of Youth Affairs and Sports." }
    ];

    return (
        <div className="bg-white w-full font-sans text-slate-900">
            <Breadcrumbs />

            {/* HERO SECTION */}
            <section className="relative pt-20 pb-24 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}
                />
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-start max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Institutional Profile
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight mb-8">
                            Developing character. <br />
                            <span className="text-orange-600">Fostering leadership.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight border-l border-white/20 pl-8">
                            Hindustan Scouts and Guides Association is a value-based educational movement
                            dedicated to the holistic development of youth across Telangana.
                        </p>
                    </div>
                </div>
            </section>

            {/* CORE PHILOSOPHY & CHARACTERISTICS */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Characteristics List */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-6 h-[1.5px] bg-orange-600"></span>
                                <h2 className="text-slate-900 font-bold text-sm uppercase tracking-widest">
                                    Organization characteristics
                                </h2>
                            </div>
                            <ul className="space-y-5">
                                {characteristics.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-2 w-1.5 h-1.5 bg-orange-600 shrink-0" />
                                        <span className="text-slate-600 font-medium text-[15px] leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Values Table */}
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-6 h-[1.5px] bg-orange-600"></span>
                                <h2 className="text-slate-900 font-bold text-sm uppercase tracking-widest">
                                    Why scouting matters
                                </h2>
                            </div>
                            <div className="border-t border-l border-gray-100 grid grid-cols-1 md:grid-cols-2">
                                {scoutingValues.map((item, i) => (
                                    <div key={i} className="p-8 border-r border-b border-gray-100 hover:bg-slate-50 transition-colors">
                                        <h3 className="text-[#000080] font-bold text-lg mb-2 tracking-tight">
                                            {item.attribute}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                            {item.benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HISTORICAL EVOLUTION TABLE */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            Historical record and evolution
                        </h2>
                        <span className="text-orange-600 font-normal text-lg lowercase tracking-tight">
                            from global beginnings to national recognition
                        </span>
                    </div>

                    <div className="bg-white border border-gray-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest border-r border-white/10">Year</th>
                                    <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest border-r border-white/10">Milestone</th>
                                    <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-widest hidden md:table-cell">Administrative detail</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {historicalRecord.map((record, i) => (
                                    <tr key={i} className="hover:bg-orange-50/30 transition-colors">
                                        <td className="py-6 px-8 text-orange-600 font-bold text-sm border-r border-gray-100">{record.period}</td>
                                        <td className="py-6 px-8 text-slate-900 font-bold text-sm border-r border-gray-100">{record.event}</td>
                                        <td className="py-6 px-8 text-slate-500 text-sm font-medium hidden md:table-cell">{record.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FOUNDER PROFILE - ARCHITECTURAL TABLE */}
            <section className="py-24 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Founder Image Block */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative p-2 border border-gray-100 bg-white">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                    alt="Founder Sh. Shriniwas Sharma"
                                    className="w-full h-auto grayscale-0"
                                />
                                <div className="absolute top-0 right-0 w-[4px] h-full bg-orange-600" />
                            </div>
                            <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#000080]">
                                <p className="text-slate-800 font-bold italic text-sm leading-relaxed">
                                    "Established the association based on the inspiration of Dr. K. R. Narayanan, former President of India, to ensure scouting reaches every citizen."
                                </p>
                            </div>
                        </div>

                        {/* Founder Credentials Table */}
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">The Visionary</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-10 leading-none">
                                Sh. Shriniwas Sharma
                            </h2>

                            <div className="border border-gray-100">
                                {[
                                    { key: "Position", value: "Founder and National Commissioner" },
                                    { key: "Academic credentials", value: "M.A., B.Ed" },
                                    { key: "Birth date", value: "13th February 1937" },
                                    { key: "Professional career", value: "Senior Lecturer, Delhi School Education (Retired 1997)" },
                                    { key: "Scouting experience", value: "Active leadership and organization since 1959" }
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-100 last:border-0">
                                        <div className="bg-slate-50 p-5 text-[11px] font-bold uppercase text-slate-400 tracking-widest flex items-center">
                                            {row.key}
                                        </div>
                                        <div className="md:col-span-2 p-5 text-slate-800 font-bold text-sm">
                                            {row.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL RECOGNITION STRIP */}
            <section className="py-12 bg-slate-900">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-bold text-xl tracking-tight">Verified global affiliations</h3>
                        <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold mt-1">International and national council</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="flex flex-col">
                            <span className="text-orange-500 font-black text-xs uppercase tracking-widest">Affiliated to</span>
                            <span className="text-white font-bold text-sm">WFIS Germany (UNO Recognized)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-orange-500 font-black text-xs uppercase tracking-widest">Recognized by</span>
                            <span className="text-white font-bold text-sm">Ministry of Youth Affairs & Sports, India</span>
                        </div>
                    </div>
                </div>
            </section>

            <SimilarOrganisations />
        </div>
    );
};

export default AboutPage;