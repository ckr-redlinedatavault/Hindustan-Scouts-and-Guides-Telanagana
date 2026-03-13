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

            <section className="relative pt-12 pb-12 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col items-start max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold tracking-[0.3em]">
                                Educational Methodology
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight mb-6">
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
                        <div className="lg:col-span-6 py-10 px-6 lg:px-16">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400">
                                    Approved Curriculum
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight tracking-tight mb-6">
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


            <section className="py-12 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center mb-8">
                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-3">
                            Complete Training Pathway
                        </h2>
                        <span className="text-orange-600 font-bold text-sm tracking-[0.2em]">
                            At a Glance — 29 Years of Youth Development
                        </span>
                    </div>

                    <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-white text-[10px] font-black tracking-widest">
                                    <th className="px-6 py-3 border-r border-white/10">Part</th>
                                    <th className="px-6 py-3 border-r border-white/10">Section</th>
                                    <th className="px-6 py-3 border-r border-white/10">Stage</th>
                                    <th className="px-6 py-3 border-r border-white/10">Age Group</th>
                                    <th className="px-6 py-3 border-r border-white/10">Duration</th>
                                    <th className="px-6 py-3">Primary Focus</th>
                                </tr>
                            </thead>
                            <tbody className="text-[12px] font-medium text-slate-700">
                                {[
                                    { part: "A", section: "Cubs/Bulbuls", stage: "Praveshika", age: "6–7 yrs", duration: "3 Months", focus: "Values, stories, uniform, Diksha Sanskar" },
                                    { part: "A", section: "Cubs/Bulbuls", stage: "Rajat Kiran", age: "7–8 yrs", duration: "6 Months", focus: "History, citizenship, yoga, basic knots" },
                                    { part: "A", section: "Cubs/Bulbuls", stage: "Swarn Kiran", age: "8–9 yrs", duration: "9 Months", focus: "Flags, first aid, nature study, environment" },
                                    { part: "A", section: "Cubs/Bulbuls", stage: "Heerak Kiran", age: "9–10 yrs", duration: "9 Months", focus: "Advanced skills, leadership, pioneering" },
                                    { part: "A", section: "Cubs/Bulbuls", stage: "Rajya Puraskar", age: "10 yrs", duration: "12 Months", focus: "Comprehensive mastery, service, final award" },
                                    { part: "B", section: "Scouts/Guides", stage: "Praveshika", age: "10–17 yrs", duration: "3 Months", focus: "Scout/Guide basics, investiture" },
                                    { part: "B", section: "Scouts/Guides", stage: "Komal Pad", age: "10–17 yrs", duration: "6 Months", focus: "Patrol system, first aid, yoga" },
                                    { part: "B", section: "Scouts/Guides", stage: "Dhruv Pad", age: "10–17 yrs", duration: "9 Months", focus: "Pioneering, projects, signaling" },
                                    { part: "B", section: "Scouts/Guides", stage: "Guru Pad", age: "10–17 yrs", duration: "12 Months", focus: "Camp, mapping, advanced skills" },
                                    { part: "B", section: "Scouts/Guides", stage: "Rajya Puraskar", age: "10–17 yrs", duration: "6 Months", focus: "Social service, state award" },
                                    { part: "C", section: "Rangers/Rovers", stage: "Praveshika", age: "17–35 yrs", duration: "3 Months", focus: "Rover/Ranger basics, investiture" },
                                    { part: "C", section: "Rangers/Rovers", stage: "Rajat Sitara", age: "17–35 yrs", duration: "6 Months", focus: "Kushal & Daksh Badges, community" },
                                    { part: "C", section: "Rangers/Rovers", stage: "Swarn Sitara", age: "17–35 yrs", duration: "9 Months", focus: "Advanced skills, yoga, projects" },
                                    { part: "C", section: "Rangers/Rovers", stage: "Heerak Sitara", age: "17–35 yrs", duration: "12 Months", focus: "Pioneering, camp, mapping" },
                                    { part: "C", section: "Rangers/Rovers", stage: "President Award", age: "19–25 yrs", duration: "12 Months", focus: "Leadership, national service" },
                                    { part: "C", section: "Rangers/Rovers", stage: "In-Service", age: "25–35 yrs", duration: "10 Years", focus: "Adult leadership, sustained service" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-black text-[#000080] border-r border-slate-100">{row.part}</td>
                                        <td className="px-6 py-4 font-bold border-r border-slate-100">{row.section}</td>
                                        <td className="px-6 py-4 border-r border-slate-100 italic">{row.stage}</td>
                                        <td className="px-6 py-4 border-r border-slate-100">{row.age}</td>
                                        <td className="px-6 py-4 border-r border-slate-100 font-bold text-orange-600">{row.duration}</td>
                                        <td className="px-6 py-4">{row.focus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl lg:text-3xl font-black text-slate-950 tracking-tighter mb-3">
                            Detailed Training <span className="text-[#000080]">Framework</span>
                        </h2>
                        <p className="text-slate-500 font-bold max-w-2xl mx-auto tracking-widest text-[11px]">
                            Fully Aligned with NEP 2020 and UN Sustainable Development Goals
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Part A: Cubs & Bulbuls */}
                        <div id="part-a" className="scroll-mt-24">
                            <div className="flex flex-col lg:flex-row gap-12 mb-10 items-start">
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-12 h-[2px] bg-orange-600"></span>
                                        <span className="text-[#000080] font-black text-[12px] tracking-[0.3em]">Part A</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-950 mb-4 leading-none">
                                        Cubs & Bulbuls
                                    </h3>
                                    <div className="p-6 bg-slate-50 border-l-4 border-orange-600 mb-6">
                                        <p className="text-slate-900 font-bold text-[11px] tracking-widest mb-3 text-orange-600">Abhivriddhi Kosh Programme</p>
                                        <p className="text-slate-900 font-bold text-sm mb-2">Age Group: 6 to 10 Years</p>
                                        <p className="text-slate-500 font-medium text-[13px] leading-relaxed mb-4">
                                            The foundational pillar rooted in play-based (Jungle Book/Nature) and activity-based learning. Shapes young citizens through the Law of the Pack and creative exploration.
                                        </p>
                                        <div className="border-t border-slate-200 pt-4 space-y-3">
                                            <div>
                                                <p className="text-[#000080] font-black text-[10px] tracking-widest mb-1">The Promise</p>
                                                <p className="text-slate-600 text-[11px] italic font-medium">"I promise to do my best, to do my duty to God and my country, to help other people, and to obey the Law of the Wolf Cub Pack / Bulbul Flock."</p>
                                            </div>
                                            <div>
                                                <p className="text-[#000080] font-black text-[10px] tracking-widest mb-1">The Law</p>
                                                <p className="text-slate-600 text-[11px] italic font-medium">"The Cub/Bulbul gives in to the Old Wolf. The Cub/Bulbul does not give in to himself/herself."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-orange-600 tracking-widest bg-orange-50 px-3 py-2 border border-orange-100 lg:w-fit">
                                            <GraduationCap size={14} /> NEP 2020: Foundational Stage
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-[#000080] tracking-widest bg-blue-50 px-3 py-2 border border-blue-100 lg:w-fit">
                                            <Star size={14} /> UN SDGs: 4.2, 3, 16, 10
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "Praveshika",
                                            subtitle: "Orientation Stage",
                                            time: "3 Months",
                                            req: [
                                                "History of Cub Movement - Lord Baden Powell (1916)",
                                                "Purpose & Objectives of Cub/Bulbul Training",
                                                "Red Flower & Chirping Activities (Storytelling)",
                                                "Story of Mowgli (Jungle Book) & Story of Tara",
                                                "Role of Akela, Baloo, Bagheera & Value Education",
                                                "Cub/Bulbul Promise, Law & Motto ('Do Your Best')",
                                                "Salute Procedure, Left Hand Shake Tradition",
                                                "Respect to National Flag & National Anthem",
                                                "Cub/Bulbul Songs & Sher Khan Game Song",
                                                "Bhojan Mantra (Prayer Before Meal)",
                                                "Grand Howl Procedure & Pack Circle Formation",
                                                "Unity Day Procedure & Discipline Commands",
                                                "Uniform Standards: Pista Green Shirt, Army Green Trousers",
                                                "Cap, Belt, Scarf, Woggle & Whistle Signals",
                                                "Personal Health & Hygiene Practices",
                                                "Diksha Sanskar (Investiture Ceremony)"
                                            ]
                                        },
                                        {
                                            title: "Rajat Kiran",
                                            subtitle: "Foundation Stage",
                                            time: "6 Months",
                                            req: [
                                                "Scouting/Guiding Origin & Global Reach",
                                                "Prayer Before Meal (Bhojan Mantra) Significance",
                                                "Flag Song & National Anthem with Proper Respect",
                                                "General Information: India, States, Capitals & Leaders",
                                                "Civic Awareness: Rights & Responsibilities",
                                                "Yoga: Tadasana, Vrikshasana, Uttanasana, Bhujangasana",
                                                "Physical Fitness: Daily Exercises & Stretching",
                                                "Sports & Participation in Pack Games",
                                                "Basic Knots: Reef Knot, Clove Hitch, Bowline, Half Hitch"
                                            ]
                                        },
                                        {
                                            title: "Swarn Kiran",
                                            subtitle: "Intermediate Stage",
                                            time: "9 Months",
                                            req: [
                                                "National, State & Scout Flag Knowledge",
                                                "Flag Symbols & Historical Significance",
                                                "State Geography, Climate & Wildlife Knowledge",
                                                "Age-Appropriate Current Affairs & General Knowledge",
                                                "First Aid: Cuts, Bruises, Burns & Bandaging",
                                                "CPR Awareness & Life-Saving Knowledge",
                                                "Advanced Knots: Double Clove Hitch, Bends & Lashing",
                                                "Yoga: Surya Namaskar & Breathing Exercises (Pranayama)",
                                                "2-5 KM Hike & Nature Study Journaling",
                                                "Plant & Animal Identification",
                                                "Earn Proficiency Medal in Personal Interest Area"
                                            ]
                                        },
                                        {
                                            title: "Heerak Kiran",
                                            subtitle: "Advanced Stage",
                                            time: "9 Months",
                                            req: [
                                                "Advanced First Aid: Sprains, Shock, Poisoning",
                                                "Emergency Response & Recognizing Situations",
                                                "Medical Awareness: Disease Prevention",
                                                "Leadership: Responsibility & Decision Making",
                                                "Advanced Yoga Poses & Meditation Practices",
                                                "Endurance Training & Physical Fitness Challenges",
                                                "Expert Knots & Advanced Rope Techniques",
                                                "Camping: Site Setup & Basic Pioneering Projects",
                                                "Highest Cub/Bulbul Level Proficiency Medal"
                                            ]
                                        },
                                        {
                                            title: "Rajya Puraskar",
                                            subtitle: "State Award - Highest Distinction",
                                            time: "12 Months",
                                            highlight: true,
                                            req: [
                                                "Comprehensive Test Card Assessment (Stages 1-4)",
                                                "Deep Practice of Scout Promise & Law",
                                                "Perfect Execution of all Stage Knots & Ropework",
                                                "Advanced First Aid & Emergency Response Mastery",
                                                "Building Pioneering Structures & Full Camp Setup",
                                                "Physical Fitness Test (Running, Jumping, Flexibility)",
                                                "Yoga Instruction for Younger Members",
                                                "Performing Inspirational & Cultural Songs",
                                                "Community Service & Environmental Projects",
                                                "Peers Leadership & Meeting Management",
                                                "Final Presentation before State Examining Panel"
                                            ]
                                        }
                                    ].map((stage, sidx) => (
                                        <div key={sidx} className={`p-8 border ${stage.highlight ? 'bg-[#000080] border-[#000080] text-white' : 'bg-white border-gray-100 text-slate-900 group'}`}>
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <h4 className="text-sm font-black tracking-widest text-orange-600 mb-1">{stage.subtitle}</h4>
                                                    <h3 className="text-lg font-black tracking-tight">{stage.title}</h3>
                                                </div>
                                                <span className={`text-[10px] font-black px-2 py-1 tracking-widest border ${stage.highlight ? 'border-white/20 text-white' : 'border-slate-100 text-slate-400 group-hover:text-orange-600 group-hover:border-orange-100'}`}>
                                                    {stage.time}
                                                </span>
                                            </div>
                                            <ul className="space-y-3">
                                                {stage.req.map((r, ridx) => (
                                                    <li key={ridx} className="flex gap-2 items-start text-[11px] font-bold">
                                                        <CheckCircle2 size={12} className={stage.highlight ? "text-orange-500 mt-0.5 shrink-0" : "text-orange-600 mt-0.5 shrink-0"} />
                                                        <span className={stage.highlight ? "text-white/80" : "text-slate-600"}>{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Part B: Scouts & Guides */}
                        <div id="part-b" className="scroll-mt-24">
                            <div className="flex flex-col lg:flex-row gap-12 mb-10 items-start">
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-12 h-[2px] bg-orange-600"></span>
                                        <span className="text-[#000080] font-black text-[12px] tracking-[0.3em]">Part B</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-950 mb-4 leading-none">
                                        Scouts & Guides
                                    </h3>
                                    <div className="p-6 bg-slate-50 border-l-4 border-[#000080] mb-6">
                                        <p className="text-[#000080] font-bold text-[11px] tracking-widest mb-3">Yogyatha Pathr Syllabus</p>
                                        <p className="text-slate-900 font-bold text-sm mb-2">Age Group: 10 to 17 Years</p>
                                        <p className="text-slate-500 font-medium text-[13px] leading-relaxed mb-4">
                                            A progressive training programme developing competency, character, and civic responsibility through technical proficiency in pioneering, survival, and service.
                                        </p>
                                        <div className="border-t border-slate-200 pt-4 space-y-3">
                                            <div>
                                                <p className="text-orange-600 font-black text-[10px] tracking-widest mb-1">The Promise</p>
                                                <p className="text-slate-600 text-[11px] italic font-medium">"On my honour, I promise that I will do my best to do my duty to God and my country, to help other people and to obey the Scout/Guide Law."</p>
                                            </div>
                                            <div>
                                                <p className="text-orange-600 font-black text-[10px] tracking-widest mb-1">The Motto</p>
                                                <p className="text-slate-600 text-[11px] italic font-black">"BE PREPARED"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-orange-600 tracking-widest bg-orange-50 px-3 py-2 border border-orange-100 lg:w-fit">
                                            <ShieldCheck size={14} /> NEP 2020: 10 Pillars Alignment
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-[#000080] tracking-widest bg-blue-50 px-3 py-2 border border-blue-100 lg:w-fit">
                                            <Star size={14} /> UN SDGs: 3-6, 11, 13, 15-17
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "Praveshika",
                                            subtitle: "Introductory Stage",
                                            time: "3 Months",
                                            req: [
                                                "HSGA Scouting/Guiding History & Vision",
                                                "Hindustan Scouts & Guides Prayer & Flag Song",
                                                "Scout/Guide Law & Promise Mastery",
                                                "Motto, Sign, Salute & Left Hand Shake Tradition",
                                                "National Anthem, Vande Mataram & Patriotic Songs",
                                                "Significance of HSGA & National Flag",
                                                "Daily Good Turn for 30 Days (Log Keeping)",
                                                "Yoga: Vaulting, Padmasan, Tadasan, Shavasan",
                                                "Laughing, Smiling & Weekly Silence (1 Hour)",
                                                "Life Histories of 2 National Icons of India"
                                            ]
                                        },
                                        {
                                            title: "Komal Pad",
                                            subtitle: "Foundation Stage",
                                            time: "6 Months",
                                            req: [
                                                "Patrol System: Organization, Yell, Song & Meetings",
                                                "Patrol Corner, Flag, Voice & Library Management",
                                                "Compass Mastery: 16 Directions Knowledge",
                                                "Woodcraft Signs & Tracking Procedures",
                                                "Rules of Health & First Aid Box Setup",
                                                "Triangular Bandages & Wound Care",
                                                "Staff Usage & Simple Drill with Staff",
                                                "4 KM Patrol Hike & Route Logging",
                                                "Handicraft or Useful Gadget Creation",
                                                "Cleanliness Campaign in Locality (5 Days)",
                                                "Participation in All Faith Prayers",
                                                "Yoga: Dhanurasan, Gorakshan, Surya Namaskar"
                                            ]
                                        },
                                        {
                                            title: "Dhruv Pad",
                                            subtitle: "Intermediate Stage",
                                            time: "9 Months",
                                            req: [
                                                "Pioneering: Timber Hitch, Sheer & Square Lashing",
                                                "First Aid: Improvised Stretcher & Life Line (14m)",
                                                "Fire Safety: Lighting Wood-fire & Gas Precautions",
                                                "Patrol Cooking: Tea, Breakfast, Lunch & Dinner",
                                                "Estimation: Width, Distance & Height with Scarf",
                                                "Signaling: Semaphore & Morse Flags",
                                                "10 KM Nature Study Hike & Note-book record",
                                                "Social Service Project (Mela, Hospital, Bus-stand)",
                                                "Pollution Solution Project or Heritage Study",
                                                "Yoga: Pawan Muktasan, Bhujangasan, Anulom-Vilom",
                                                "Earn 3 Proficiency Badges (Gardener, Athlete, etc.)"
                                            ]
                                        },
                                        {
                                            title: "Guru Pad",
                                            subtitle: "Advanced Stage",
                                            time: "12 Months",
                                            req: [
                                                "Advanced First Aid: Artificial Respiration, Fractures",
                                                "Pioneering Bridges: Monkey, Ladder or Suspension",
                                                "Tent Pitching/Striking & Improvised Shelters",
                                                "Mapping: Route Map, Conventional Signs & Survey Maps",
                                                "30 KM Cycle Hike or 10 KM Foot Hike",
                                                "Participation in 3-Night Camping",
                                                "Practical Repair Skills: Taps, Pumps & Gas Stoves",
                                                "Advanced Yoga: Sarvangasan, Sheetali Pranayam",
                                                "Inter-State Cultural Research (2 States)",
                                                "Earn 3 Additional Advanced Badges"
                                            ]
                                        },
                                        {
                                            title: "Rajya Puraskar",
                                            subtitle: "State Award Stage",
                                            time: "6 Months",
                                            highlight: true,
                                            req: [
                                                "Pradeshik Puraskar Test Camp (3 Days State level)",
                                                "Social Service Hours (12 Hrs in Villages/Slums)",
                                                "National Priority Projects (Sanitation/Education)",
                                                "Environment Protection Initiatives",
                                                "Proficiency in 4 Advanced Badges (Village Worker, etc.)",
                                                "Produce Log-books & Certificates in Test Camp",
                                                "Final Evaluation by State Headquarters Panel"
                                            ]
                                        }
                                    ].map((stage, sidx) => (
                                        <div key={sidx} className={`p-8 border ${stage.highlight ? 'bg-orange-600 border-orange-600 text-white shadow-xl' : 'bg-white border-gray-100 text-slate-900 group'}`}>
                                            <div className="flex justify-between items-start mb-6 text-white font-bold">
                                                <div className={stage.highlight ? "text-white" : ""}>
                                                    <h4 className={`text-sm font-black tracking-widest mb-1 ${stage.highlight ? 'text-white/60' : 'text-orange-600'}`}>{stage.subtitle}</h4>
                                                    <h3 className="text-lg font-black tracking-tight">{stage.title}</h3>
                                                </div>
                                                <span className={`text-[10px] font-black px-2 py-1 tracking-widest border ${stage.highlight ? 'border-white/20 text-white' : 'border-slate-100 text-slate-400 group-hover:text-orange-600 group-hover:border-orange-100'}`}>
                                                    {stage.time}
                                                </span>
                                            </div>
                                            <ul className="space-y-3 font-bold">
                                                {stage.req.map((r, ridx) => (
                                                    <li key={ridx} className="flex gap-2 items-start text-[11px]">
                                                        <CheckCircle2 size={12} className={stage.highlight ? "text-orange-100 mt-0.5 shrink-0" : "text-[#000080] mt-0.5 shrink-0"} />
                                                        <span className={stage.highlight ? "text-white/90" : "text-slate-600"}>{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Part C: Rangers & Rovers */}
                        <div id="part-c" className="scroll-mt-24">
                            <div className="flex flex-col lg:flex-row gap-12 mb-10 items-start">
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-12 h-[2px] bg-orange-600"></span>
                                        <span className="text-[#000080] font-black text-[12px] tracking-[0.3em]">Part C</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-950 mb-4 leading-none">
                                        Rovers & Rangers
                                    </h3>
                                    <div className="p-6 bg-slate-50 border-l-4 border-orange-600 mb-6">
                                        <p className="text-orange-600 font-bold text-[11px] tracking-widest mb-3">Service & Leadership Programme</p>
                                        <p className="text-slate-900 font-bold text-sm mb-2">Age Group: 17 to 35 Years</p>
                                        <p className="text-slate-500 font-medium text-[13px] leading-relaxed mb-4">
                                            Built on the principle of service — harvests the seeds of character through a life of purposeful contribution to the community, nation, and fellow humans.
                                        </p>
                                        <div className="border-t border-slate-200 pt-4 space-y-3">
                                            <div>
                                                <p className="text-[#000080] font-black text-[10px] tracking-widest mb-1">Focus Principle</p>
                                                <p className="text-slate-600 text-[11px] italic font-black">"SERVICE"</p>
                                            </div>
                                            <div>
                                                <p className="text-[#000080] font-black text-[10px] tracking-widest mb-1">Adult Leadership</p>
                                                <p className="text-slate-600 text-[11px] font-medium leading-relaxed">Transition into mentorship and training roles upon reaching the age of 21 (Rovers) or 25 (Rangers).</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-orange-600 tracking-widest bg-orange-50 px-3 py-2 border border-orange-100 lg:w-fit">
                                            <Users size={14} /> NEP 2020: Lifelong Learning
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-[#000080] tracking-widest bg-blue-50 px-3 py-2 border border-blue-100 lg:w-fit">
                                            <Star size={14} /> UN SDGs: Citizenship & Partnerships
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "Praveshika",
                                            subtitle: "Aspirant Level",
                                            time: "3 Months",
                                            req: [
                                                "Commitment to HSGA Service Law",
                                                "Uniform & Identity Standards",
                                                "Advanced Fitness & Yoga Test",
                                                "Good Turn Log Maintenance",
                                                "Investiture Ceremony Formalities"
                                            ]
                                        },
                                        {
                                            title: "Rajat Sitara",
                                            subtitle: "Silver Star - In Training",
                                            time: "6 Months",
                                            req: [
                                                "Kushal Badge: Family Harmony & Vocational Hobbies",
                                                "Daksh Badge: Rights & Duties of a Citizen",
                                                "Religious Tolerance Projects & Awareness",
                                                "Public Property Protection Campaigns",
                                                "Literacy Centre Setup or Financial Awareness Hubs",
                                                "Humanitarian Campaigns (Eye/Blood Donation)",
                                                "Mentoring as Assistant in Pack/Troop Camps",
                                                "Knowledge of Scouting Skills up to Tritiya Pad"
                                            ]
                                        },
                                        {
                                            title: "Swarn Sitara",
                                            subtitle: "Gold Star - In Training",
                                            time: "9 Months",
                                            req: [
                                                "Advanced Pioneering & Shelters",
                                                "Emergency First Aid Mastery",
                                                "Group Cooking (Patrol level)",
                                                "Advanced Map Reading & Stars",
                                                "Signaling: Semaphore & Morse",
                                                "10 KM Nature Observation Hike",
                                                "Earn 3 Vocational Badges"
                                            ]
                                        },
                                        {
                                            title: "Heerak Sitara",
                                            subtitle: "Diamond Star - In Training",
                                            time: "12 Months",
                                            req: [
                                                "Advanced CP Resuscitation",
                                                "Complex Bridge/Signal Tower Projects",
                                                "Survey of India Map Proficiency",
                                                "3 Night Camping Record",
                                                "Practical Repair Workshop",
                                                "Inter-State Cultural Knowledge"
                                            ]
                                        },
                                        {
                                            title: "President Award",
                                            subtitle: "Highest Global Distinction",
                                            time: "12 Months",
                                            highlight: true,
                                            req: [
                                                "Over-Night Adventure Hike & Cross Country",
                                                "Community Development Project (Nutrition/Sanitation)",
                                                "Event Leadership: Small Contingent in Neighboring State",
                                                "Joint Projects with Lions/Rotary/Red Cross",
                                                "National Event Service (1 Week Minimum)",
                                                "Traffic Control or Conservation Campaigns (3 Months)",
                                                "High-Impact Badges: Civil Defense, World Conservation",
                                                "Submission of National Report to Commissioner"
                                            ]
                                        },
                                        {
                                            title: "In-Service Member",
                                            subtitle: "Sustained Adult Service",
                                            time: "10 Years",
                                            req: [
                                                "Transition to Adult Leadership (Age 21-25)",
                                                "Definite Community Service Projects",
                                                "Mentoring Next Generation",
                                                "National Service Record Maintenance",
                                                "Advanced Trekking & Hike Records"
                                            ]
                                        }
                                    ].map((stage, sidx) => (
                                        <div key={sidx} className={`p-8 border ${stage.highlight ? 'bg-[#000033] border-[#000033] text-white shadow-2xl relative overflow-hidden' : 'bg-white border-gray-100 text-slate-900 group'}`}>
                                            {stage.highlight && <div className="absolute top-0 right-0 w-20 h-20 bg-orange-600 rotate-45 translate-x-10 -translate-y-10" />}
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <h4 className={`text-sm font-black tracking-widest mb-1 ${stage.highlight ? 'text-orange-500' : 'text-orange-600'}`}>{stage.subtitle}</h4>
                                                    <h3 className="text-lg font-black tracking-tight">{stage.title}</h3>
                                                </div>
                                                <span className={`text-[10px] font-black px-2 py-1 tracking-widest border ${stage.highlight ? 'border-white/20 text-white' : 'border-slate-100 text-slate-400 group-hover:text-orange-600 group-hover:border-orange-100'}`}>
                                                    {stage.time}
                                                </span>
                                            </div>
                                            <ul className="space-y-3 font-bold">
                                                {stage.req.map((r, ridx) => (
                                                    <li key={ridx} className="flex gap-2 items-start text-[11px]">
                                                        <CheckCircle2 size={12} className={stage.highlight ? "text-orange-500 mt-0.5 shrink-0" : "text-[#000080] mt-0.5 shrink-0"} />
                                                        <span className={stage.highlight ? "text-white/70" : "text-slate-600"}>{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                <span className="text-slate-900 font-black text-[10px] tracking-[0.3em]">Training Philosophy</span>
                            </div>
                            <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
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
                                    <h3 className="text-lg font-bold mb-3 tracking-tight">Safe from Harm</h3>
                                    <p className="text-white/60 text-xs font-medium leading-relaxed">
                                        We maintain a strictly safe environment. All adult leaders undergo mandatory
                                        child protection training and background verification to ensure the highest
                                        safeguarding standards.
                                    </p>
                                </div>
                                <div className="p-8 bg-white border border-gray-200">
                                    <Medal className="w-10 h-10 text-[#000080] mb-6" />
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">Merit Recognition</h3>
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                                        Every achievement is recognized through a structured badge system, motivating
                                        scouts to explore diverse fields from environment to digital literacy.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 p-10 bg-orange-600 text-white flex flex-col md:flex-row items-center gap-10">
                                <Zap className="w-16 h-16 shrink-0 opacity-20" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Youth Empowerment</h3>
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
                    <div className="text-center mb-10">
                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">Proficiency Badges</h2>
                        <p className="text-orange-400 font-bold text-[10px] tracking-widest">Specialized skills for overall human development</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {[
                            "Blood Donor", "Civil Defense", "Self Defense", "Community Worker",
                            "Climber", "Folk Life", "Education for All", "Soil Conservation",
                            "World Friendship", "Yoga", "Salesman", "Ecologist", "Family Life"
                        ].map((badge, i) => (
                            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all cursor-default">
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
                        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tight mb-3 font-black">Join Adult Leadership</h2>
                        <p className="text-slate-500 text-sm font-bold max-w-2xl leading-relaxed">
                            On completion of 21 (Rover) or 25 (Ranger) years of age, members are encouraged to transition into adult leadership, serving as trainers and mentors to the next generation of scouts in Telangana.
                        </p>
                    </div>
                    <button className="whitespace-nowrap bg-slate-950 text-white px-8 py-4 font-bold text-[10px] tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all rounded-none shadow-xl">
                        Leadership Commission <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PrashikshamPage;