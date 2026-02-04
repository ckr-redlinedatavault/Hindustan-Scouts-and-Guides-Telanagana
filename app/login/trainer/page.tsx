"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, ArrowRight, Lock, User, Eye, EyeOff, ArrowLeft, ShieldCheck } from "lucide-react";

export default function TrainerLoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen w-screen bg-white flex font-outfit text-slate-900 overflow-hidden">

            {/* LEFT SIDE: Image Section */}
            <div className="hidden lg:block lg:w-1/2 h-full relative">
                <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000"
                    alt="Trainer Leadership"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />

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
            </div>

            {/* RIGHT SIDE: Form Section */}
            <div className="w-full lg:w-1/2 h-full flex flex-col relative bg-[#fcfcfc]">

                {/* Top Navigation */}
                <header className="p-8 flex justify-between items-center absolute top-0 w-full">
                    <Link href="/get-started" className="group flex items-center gap-2 text-slate-400 hover:text-orange-600 transition-all">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Exit Portal</span>
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                        <span className="text-[9px] font-bold text-orange-700 uppercase tracking-widest">Secure Access</span>
                    </div>
                </header>

                <main className="flex-grow flex items-center justify-center p-8 md:p-16">
                    <div className="w-full max-w-[400px]">

                        <div className="mb-10">
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Trainer Access</h1>
                            <p className="text-slate-500 text-sm font-medium">Manage certifications & unit leadership.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">
                                    Trainer ID / Email
                                </label>
                                <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-orange-600 focus-within:shadow-lg focus-within:shadow-orange-900/5">
                                    <User className="w-4 h-4 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="TS/TR/2026/000"
                                        className="w-full bg-transparent pl-4 text-sm focus:outline-none font-medium placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                        Security PIN
                                    </label>
                                    <a href="#" className="text-[10px] font-bold text-blue-800 hover:text-blue-900 transition-colors uppercase">
                                        Forgot?
                                    </a>
                                </div>
                                <div className="group relative flex items-center bg-white border border-slate-400 rounded-2xl px-5 py-4 transition-all focus-within:border-orange-600 focus-within:shadow-lg focus-within:shadow-orange-900/5">
                                    <Lock className="w-4 h-4 text-slate-300 group-focus-within:text-orange-600 transition-colors" />
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

                            <button className="group w-full relative bg-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-orange-700 active:scale-[0.98] shadow-xl shadow-orange-900/10">
                                <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Open Trainer Portal</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                            <p className="text-xs text-slate-400 font-medium">
                                Joining as a new trainer?{" "}
                                <Link href="/register/trainer" className="text-orange-600 font-bold hover:text-blue-900 transition-colors ml-1">
                                    Submit Application
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>

                <footer className="p-8 text-center lg:text-left">
                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.4em]">
                        © 2026 HSGA Telangana • Trainer Network
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
