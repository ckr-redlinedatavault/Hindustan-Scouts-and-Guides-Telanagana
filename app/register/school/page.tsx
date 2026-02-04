"use client";

import React from "react";
import Link from "next/link";
import {
    School, Building2, User, Mail, Phone,
    ArrowRight, MapPin, ShieldCheck, ArrowLeft
} from "lucide-react";

export default function SchoolRegistrationPage() {
    return (
        <div className="h-screen w-screen bg-white flex font-outfit text-slate-900 overflow-hidden">

            {/* LEFT SIDE: Image Section */}
            <div className="hidden lg:block lg:w-1/2 h-full relative">
                <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000"
                    alt="Educational Excellence"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#000066]/10 mix-blend-multiply" />

                {/* Floating Brand Mark */}
                <div className="absolute top-12 left-12 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/20">
                        <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png" alt="HSGA" className="w-full h-full object-contain brightness-0 invert" />
                    </div>
                    <div className="text-white">
                        <p className="text-sm font-bold tracking-tighter leading-none">HSGA</p>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70">Telangana State</p>
                    </div>
                </div>

                <div className="absolute bottom-12 left-12 z-20 max-w-sm">
                    <h2 className="text-3xl font-bold leading-tight text-white">Enroll Your <br /><span className="text-orange-500">Institution</span></h2>
                    <p className="text-white/60 text-sm mt-4 font-medium leading-relaxed tracking-wide">
                        Join the network of premier educational institutions fostering discipline, leadership, and service through scouting.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE: Form Section */}
            <div className="w-full lg:w-1/2 h-full flex flex-col relative bg-[#fcfcfc] overflow-y-auto custom-scrollbar">

                {/* Top Navigation */}
                <header className="p-8 flex justify-between items-center sticky top-0 bg-[#fcfcfc]/80 backdrop-blur-md z-30">
                    <Link href="/login/school" className="group flex items-center gap-2 text-slate-400 hover:text-[#000066] transition-all">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Login</span>
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#000066]" />
                        <span className="text-[9px] font-bold text-[#000066] uppercase tracking-widest">Formal Enrollment</span>
                    </div>
                </header>

                <main className="flex-grow p-8 md:p-16 pt-8">
                    <div className="w-full max-w-[500px] mx-auto">

                        <div className="mb-10">
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Institutional Registration</h1>
                            <p className="text-slate-500 text-sm font-medium">Initialize your school's official partnership.</p>
                        </div>

                        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

                            {/* Section 1: Identity */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Building2 className="w-4 h-4 text-orange-500" />
                                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Identity</h2>
                                    <div className="flex-grow h-px bg-slate-100" />
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">School Name</label>
                                        <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                            <input
                                                type="text"
                                                placeholder="Official Name of Institution"
                                                className="w-full bg-transparent text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">UDISE Code</label>
                                            <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                                <input
                                                    type="text"
                                                    placeholder="11-digit code"
                                                    className="w-full bg-transparent text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Principal Name</label>
                                            <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                                <input
                                                    type="text"
                                                    placeholder="Head of Institution"
                                                    className="w-full bg-transparent text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Communication */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-orange-500" />
                                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Communication</h2>
                                    <div className="flex-grow h-px bg-slate-100" />
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Official Email</label>
                                        <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                            <Mail className="w-4 h-4 text-slate-300 group-focus-within:text-[#000066] transition-colors" />
                                            <input
                                                type="email"
                                                placeholder="principal@school.edu.in"
                                                className="w-full bg-transparent pl-4 text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Mobile Number</label>
                                            <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                                <Phone className="w-4 h-4 text-slate-300 group-focus-within:text-[#000066] transition-colors" />
                                                <input
                                                    type="tel"
                                                    placeholder="+91"
                                                    className="w-full bg-transparent pl-4 text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">District</label>
                                            <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                                <MapPin className="w-4 h-4 text-slate-300 group-focus-within:text-[#000066] transition-colors" />
                                                <select className="w-full bg-transparent pl-4 text-sm focus:outline-none font-medium appearance-none cursor-pointer">
                                                    <option>Select District</option>
                                                    <option>Hyderabad</option>
                                                    <option>Rangareddy</option>
                                                    <option>Medchal</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="group w-full relative bg-[#000066] text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-slate-900 active:scale-[0.98] shadow-xl shadow-blue-900/10">
                                <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Submit Registration</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-widest">
                                By submitting, you agree to the formal code of conduct <br />
                                of the Hindustan Scouts and Guides Telangana.
                            </p>
                        </div>
                    </div>
                </main>

                <footer className="p-8 text-center lg:text-left mt-auto">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.4em]">
                        © 2026 HSGA Telangana • District Council
                    </p>
                </footer>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </div>
    );
}