"use client";

import React, { useState } from "react";
import Link from "next/link";
import { School, ArrowRight, Lock, Mail, Eye, EyeOff, ArrowLeft, ShieldCheck } from "lucide-react";

export default function SchoolLoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen w-screen bg-white flex font-outfit text-slate-900 overflow-hidden">

            {/* LEFT SIDE: The "Free" Image Section */}
            <div className="hidden lg:block lg:w-1/2 h-full relative">
                <img
                    src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
                    alt="Scouting Leadership"
                    className="w-full h-full object-cover"
                />
                {/* Subtle Navy Gradient Overlay to blend with the brand */}
                <div className="absolute inset-0 bg-[#000066]/20 mix-blend-multiply" />

                {/* Floating Brand Mark over image */}
                <div className="absolute top-12 left-12 z-20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/20">
                        <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png" alt="HSGA" className="w-full h-full object-contain brightness-0 invert" />
                    </div>
                    <div className="text-white">
                        <p className="text-sm font-bold tracking-tighter leading-none">HSGA</p>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70">Telangana State</p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: The Form Section */}
            <div className="w-full lg:w-1/2 h-full flex flex-col relative bg-[#fcfcfc]">

                {/* Top Navigation */}
                <header className="p-8 flex justify-between items-center absolute top-0 w-full">
                    <Link href="/get-started" className="group flex items-center gap-2 text-slate-400 hover:text-[#000066] transition-all">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Exit Portal</span>
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-[9px] font-bold text-green-700 uppercase tracking-widest">SSL Encrypted</span>
                    </div>
                </header>

                {/* Centered Content */}
                <main className="flex-grow flex items-center justify-center p-8 md:p-16">
                    <div className="w-full max-w-[400px]">

                        <div className="mb-10">
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Institutional Login</h1>
                            <p className="text-slate-500 text-sm font-medium">Access your school management dashboard.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                    Official Email / UID
                                </label>
                                <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                    <Mail className="w-4 h-4 text-slate-300 group-focus-within:text-[#000066] transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="principal@school.com"
                                        className="w-full bg-transparent pl-4 text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                        Password
                                    </label>
                                    <a href="#" className="text-[10px] font-bold text-orange-600 hover:text-orange-700 transition-colors uppercase">
                                        Forgot?
                                    </a>
                                </div>
                                <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-[#000066] focus-within:shadow-lg focus-within:shadow-blue-900/5">
                                    <Lock className="w-4 h-4 text-slate-300 group-focus-within:text-[#000066] transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-transparent pl-4 pr-10 text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 text-slate-300 hover:text-slate-600 transition-colors p-1"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Redesigned Button: Modern Geometric Shape */}
                            <button className="group w-full relative bg-[#000066] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-slate-900 active:scale-[0.98] shadow-xl shadow-blue-900/10">
                                <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Authenticate Portal</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                {/* Subtle button inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                            <p className="text-xs text-slate-400 font-medium">
                                Registration not completed?{" "}
                                <Link href="/register/school" className="text-[#000066] font-bold hover:text-orange-600 transition-colors ml-1">
                                    Register Institution
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>

                {/* Footer Branding */}
                <footer className="p-8 text-center lg:text-left">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.4em]">
                        © 2026 HSGA Telangana • Digital Infrastructure
                    </p>
                </footer>
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
                body { overflow: hidden; }
            `}</style>
        </div>
    );
}