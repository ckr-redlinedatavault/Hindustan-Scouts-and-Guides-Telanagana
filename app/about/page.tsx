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

            <section className="relative pt-16 pb-16 bg-[#000080] overflow-hidden">
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
                        <h1 className="text-2xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-8">
                            Developing character. <br />
                            <span className="text-orange-500">Fostering leadership.</span>
                        </h1>
                        <p className="text-blue-100/70 text-base md:text-lg font-medium tracking-tight border-l-2 border-orange-500 pl-8">
                            Hindustan Scouts and Guides Association Telangana State Headquarters is a value-based educational movement
                            dedicated to the holistic development of youth. We empower the next generation with discipline,
                            skills, and a spirit of service to the nation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 border-b border-gray-100">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
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
                                        <h3 className="text-[#000080] font-bold text-base mb-2 tracking-tight">
                                            {item.attribute}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                                            {item.benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
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

            <section className="py-16 bg-[#1b4332] text-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-orange-500"></span>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/60">The Foundation</h2>
                            </div>
                            <h3 className="text-2xl font-bold mb-8">The Scout Promise</h3>
                            <div className="space-y-6 text-white/80 italic font-medium text-base leading-relaxed">
                                <p>"On my honour, I promise that I will do my best—"</p>
                                <ul className="space-y-4 pl-6 border-l border-white/10 text-sm">
                                    <li>To do my duty to GOD and my Country,</li>
                                    <li>To help other people at all times, and</li>
                                    <li>To obey the Scout Law.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-orange-500"></span>
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Guided Ethics</h2>
                            </div>
                            <h3 className="text-2xl font-bold mb-8">The Scout Law</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "A Scout is trustworthy",
                                    "A Scout is loyal",
                                    "A Scout is a friend to all",
                                    "A Scout is courteous",
                                    "A Scout is a friend to animals",
                                    "A Scout is disciplined",
                                    "A Scout is courageous",
                                    "A Scout is thrifty",
                                    "A Scout is pure in thought, word, and deed"
                                ].map((law, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[14px] font-semibold text-white/90 py-2 border-b border-white/5">
                                        <span className="text-orange-500 font-bold text-xs">{i + 1}.</span>
                                        {law}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row bg-slate-50 border border-gray-100 overflow-hidden shadow-sm">

                        {/* LEFT: Profile Image */}
                        <div className="w-full lg:w-[380px] relative h-[450px] lg:h-auto shrink-0 transition-all duration-700 group">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                alt="Founder Sh. Shriniwas Sharma"
                                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-1 opacity-80">The Visionary</p>
                                <h3 className="text-2xl font-bold tracking-tight">Sh. Shriniwas Sharma</h3>
                            </div>
                        </div>

                        {/* RIGHT: Content & Biography */}
                        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-slate-900 font-black text-[11px] uppercase tracking-[0.3em]">Institutional Heritage</span>
                            </div>

                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Chief Scout of <span className="text-[#000080]">Bharat</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                                {[
                                    { key: "Position", value: "Chief Scout of India" },
                                    { key: "Credentials", value: "M.A., B.Ed" },
                                    { key: "Birth date", value: "13th February 1937" },
                                    { key: "Scouting", value: "Active since 1959" }
                                ].map((row, i) => (
                                    <div key={i} className="flex flex-col py-1.5 border-b border-gray-200">
                                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{row.key}</span>
                                        <span className="text-slate-900 font-bold text-[15px]">{row.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-orange-600"></div>
                                <div className="pl-6 italic font-medium text-slate-600 leading-relaxed text-[15px]">
                                    "Established the association based on the inspiration of Dr. K. R. Narayanan, former President of India, to ensure scouting reaches every citizen of Bharat."
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50 border-y border-gray-100">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* NEP 2020 Alignment */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-[#000080]"></span>
                                <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em]">National Integration</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">NEP 2020 Alignment</h2>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">
                                As per the National Education Policy 2020, scouting is recognized as a vital component of
                                "holistic development." HSGA Telangana strictly adheres to NEP guidelines to ensure:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Holistic Development", desc: "No hard separation between curricular and extra-curricular activities." },
                                    { title: "Life Skills", desc: "Focus on critical thinking, resilience, and collaborative problem-solving." },
                                    { title: "Inclusive Education", desc: "Mandatory scouting modules for character building in educational institutions." }
                                ].map((item, i) => (
                                    <div key={i} className="p-5 bg-white border border-gray-200 shadow-sm rounded-none">
                                        <h4 className="text-[#000080] font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SDG 2030 Alignment */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em]">Global Vision</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sustainable Development (SDG)</h2>
                            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">
                                We are committed to the United Nations Sustainable Development Goals. Our activities
                                are designed to mobilize youth towards the 2030 Agenda.
                            </p>

                            <div className="mb-8 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                {/* Placeholder for the Cloudinary link */}
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772201818/Screenshot_2026-02-27_at_19.46.49_qizjpd.png"
                                    alt="UN Sustainable Development Goals"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { goal: "SDG 4", name: "Quality Education", color: "bg-red-600" },
                                    { goal: "SDG 5", name: "Gender Equality", color: "bg-orange-500" },
                                    { goal: "SDG 13", name: "Climate Action", color: "bg-green-700" },
                                    { goal: "SDG 15", name: "Life on Land", color: "bg-green-600" }
                                ].map((sdg, i) => (
                                    <div key={i} className="flex flex-col p-4 bg-white border border-gray-100 hover:border-orange-500/30 transition-all shadow-sm">
                                        <span className={`w-fit px-2 py-0.5 ${sdg.color} text-white font-black text-[10px] mb-2`}>{sdg.goal}</span>
                                        <span className="text-slate-900 font-bold text-sm tracking-tight">{sdg.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-slate-400 text-xs italic font-medium">
                                *HSGA Telangana youth projects contribute directly to 8 out of the 17 UN Sustainable Development Goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
