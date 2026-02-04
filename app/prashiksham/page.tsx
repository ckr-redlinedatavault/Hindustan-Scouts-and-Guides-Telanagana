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
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-outfit text-slate-800">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#000066] py-16 text-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex items-center gap-2 text-orange-400 mb-4">
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">Educational Methodology</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Pragatisheel <span className="text-orange-500">Prashikshan</span>
                        </h1>
                        <p className="text-blue-100/80 text-lg max-w-3xl font-medium leading-relaxed">
                            A comprehensive, approved training framework designed to build character, resilience, and leadership through structured progression.
                        </p>
                    </div>
                </div>

                {/* Preface Section */}
                <section className="py-12 max-w-7xl mx-auto px-6">
                    <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-[#000066]">
                            <BookOpen className="w-6 h-6" />
                            <h2 className="text-2xl font-bold">Preface & National Guidelines</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Hindustan Scouts and Guides presents the **Boy and Girl Programme**, duly approved by the National Training team and National council. We request all units to adhere to these standards strictly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                <p className="text-sm font-medium text-slate-700">Every scout/guide must maintain a test card according to their age group.</p>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                                <p className="text-sm font-medium text-slate-700">Members should progress to the next stage within one year of enrollment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advancement Overview Grid */}
                <section className="py-12 bg-slate-50 border-y border-slate-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900">Advancement Stages</h2>
                            <p className="text-slate-500 mt-2">Age-wise progression and time requirements</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Cub / Bulbul */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="text-orange-600 font-bold mb-2">Age 6-10+ Yrs</div>
                                <h3 className="text-xl font-bold mb-4 text-[#000066]">Cub / Bulbul</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex justify-between border-b pb-1"><span>1. Praveshika</span> <span className="font-bold">3 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>2. Rajat Kiran</span> <span className="font-bold">6 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>3. Swarn Kiran</span> <span className="font-bold">6 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>4. Heerak Kiran</span> <span className="font-bold">9 Months</span></li>
                                    <li className="flex justify-between font-bold text-orange-600"><span>5. Rajya Puraskar</span> <span>7 Months</span></li>
                                </ul>
                            </div>

                            {/* Scout / Guide */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm ring-2 ring-orange-500/20">
                                <div className="text-orange-600 font-bold mb-2">Age 11-17+ Yrs</div>
                                <h3 className="text-xl font-bold mb-4 text-[#000066]">Scout / Guide</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex justify-between border-b pb-1"><span>1. Praveshika</span> <span className="font-bold">3 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>2. Rajat Pad</span> <span className="font-bold">6 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>3. Swarn Pad</span> <span className="font-bold">9 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>4. Heerak Pad</span> <span className="font-bold">9 Months</span></li>
                                    <li className="flex justify-between border-b pb-1 font-bold text-blue-700"><span>5. Rajya Puraskar</span> <span>12 Months</span></li>
                                    <li className="flex justify-between font-bold text-orange-600"><span>6. President Award</span> <span>6 Months</span></li>
                                </ul>
                            </div>

                            {/* Rover / Ranger */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="text-orange-600 font-bold mb-2">Age 17-35 Yrs</div>
                                <h3 className="text-xl font-bold mb-4 text-[#000066]">Rover / Ranger</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex justify-between border-b pb-1"><span>1. Praveshika</span> <span className="font-bold">3 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>2. Rajat Sitara</span> <span className="font-bold">6 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>3. Swarn Sitara</span> <span className="font-bold">9 Months</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>4. Heerak Sitara</span> <span className="font-bold">12 Months</span></li>
                                    <li className="flex justify-between font-bold text-orange-600"><span>President Award</span> <span>12 Months</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Curriculum Chapters */}
                <section className="py-16 max-w-7xl mx-auto px-6">
                    <div className="space-y-16">
                        {/* Chapter 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-4">
                                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Chapter II</span>
                                <h2 className="text-3xl font-bold text-[#000066] mt-2">Cubs & Bulbuls</h2>
                                <p className="text-slate-500 mt-4 leading-relaxed">Early childhood training focused on observation, hand-eye coordination, and basic social discipline.</p>
                            </div>
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-5 border border-slate-200 rounded-xl bg-white">
                                    <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">Swarn Kiran</h4>
                                    <ul className="text-sm text-slate-600 space-y-2">
                                        <li>• Handicraft out of waste</li>
                                        <li>• Yoga & Meditation</li>
                                        <li>• Reef Knot & Clove hitch</li>
                                        <li>• Compass (8 points)</li>
                                    </ul>
                                </div>
                                <div className="p-5 border border-slate-200 rounded-xl bg-white">
                                    <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">Heerak Kiran</h4>
                                    <ul className="text-sm text-slate-600 space-y-2">
                                        <li>• Open Savings Account</li>
                                        <li>• Earn 4 Proficiency badges</li>
                                        <li>• Good-turn at public place</li>
                                        <li>• Knowledge of State/Town</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Chapter 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-slate-100">
                            <div className="lg:col-span-4">
                                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Chapter III</span>
                                <h2 className="text-3xl font-bold text-[#000066] mt-2">Scouts & Guides</h2>
                                <p className="text-slate-500 mt-4 leading-relaxed">Technical proficiency in pioneering, first-aid, and community service projects.</p>
                            </div>
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-5 border border-slate-200 rounded-xl bg-white">
                                    <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">Rajat & Swarn Pad</h4>
                                    <ul className="text-sm text-slate-600 space-y-2">
                                        <li>• 16 Directions Compass</li>
                                        <li>• Pioneering & Lashing</li>
                                        <li>• 10km Nature Study</li>
                                        <li>• First-Aid box setup</li>
                                    </ul>
                                </div>
                                <div className="p-5 border border-slate-200 rounded-xl bg-blue-50/30 border-blue-100">
                                    <h4 className="font-bold text-blue-900 border-b border-blue-100 pb-2 mb-3">Rajya Puraskar</h4>
                                    <ul className="text-sm text-slate-700 space-y-2 font-medium">
                                        <li>• 3 Day Pradeshik Test Camp</li>
                                        <li>• 12 Hours service in Slums/Hospitals</li>
                                        <li>• Sarva Shiksha Abhiyan Project</li>
                                        <li>• Literacy & Population Education</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Chapter 4 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-slate-100">
                            <div className="lg:col-span-4">
                                <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Chapter IV</span>
                                <h2 className="text-3xl font-bold text-[#000066] mt-2">Rovers & Rangers</h2>
                                <p className="text-slate-500 mt-4 leading-relaxed">Advanced citizenship, vocational hobbies, and specialized social service roles.</p>
                            </div>
                            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8">
                                <h4 className="font-bold text-orange-600 mb-4">President's Award Criteria</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
                                    <ul className="space-y-2">
                                        <li>• Overnight Adventure Hike</li>
                                        <li>• Community Development (Health/Env)</li>
                                        <li>• Lead contingent to neighboring states</li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li>• 3-month Traffic Control campaign</li>
                                        <li>• Blood Donation / AIDS Awareness</li>
                                        <li>• Partner with Rotary/Red Cross</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proficiency Badges */}
                <section className="py-16 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <Medal className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                            <h2 className="text-3xl font-bold">Proficiency Badges</h2>
                            <p className="text-slate-400">Specialized skills for overall development</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Blood Donor", "Civil Defense", "Self Defense", "Community Worker",
                                "Climber", "Folk Life", "Education for All", "Soil Conservation",
                                "World Friendship", "Yoga", "Salesman", "Ecologist", "Family Life"
                            ].map((badge, i) => (
                                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold uppercase tracking-wider border border-white/5 hover:bg-orange-500 transition-colors cursor-default">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Adult Leadership CTA */}
                <section className="py-16 max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-orange-50 rounded-3xl p-10 border border-orange-100">
                        <Users className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Join Adult Leadership</h2>
                        <p className="text-slate-600 mb-8 font-medium">
                            On completion of 21 (Rover) or 25 (Ranger) years of age, members are encouraged to take up adult leadership and community service roles outside the movement.
                        </p>
                        <button className="bg-[#000066] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-slate-900 transition-all">
                            Apply for Leadership <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </div>
    );
};

export default PrashikshamPage;