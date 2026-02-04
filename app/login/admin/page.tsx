"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight, Lock, Key, Eye, EyeOff, ArrowLeft, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen w-screen bg-[#000022] flex font-outfit text-white overflow-hidden">

            {/* LEFT SIDE: Image Section */}
            <div className="hidden lg:block lg:w-1/2 h-full relative">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="Corporate Headquarters"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#000033]/60 mix-blend-multiply" />

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
                    <h2 className="text-3xl font-bold leading-tight">State Headquarters <br /><span className="text-orange-500">Secure Enclave</span></h2>
                    <p className="text-white/40 text-sm mt-4 font-medium leading-relaxed tracking-wide">
                        Authorized personnel only. All access attempts are monitored and recorded by the State Monitoring Cell.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE: Form Section */}
            <div className="w-full lg:w-1/2 h-full flex flex-col relative bg-[#000011]">

                {/* Top Navigation */}
                <header className="p-8 flex justify-between items-center absolute top-0 w-full">
                    <Link href="/get-started" className="group flex items-center gap-2 text-white/30 hover:text-white transition-all">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Exit Secure Area</span>
                    </Link>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">HQ Internal Protocol</span>
                    </div>
                </header>

                <main className="flex-grow flex items-center justify-center p-8 md:p-16">
                    <div className="w-full max-w-[360px]">

                        <div className="mb-10">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 font-bold shadow-inner">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">HQ Administration</h1>
                            <p className="text-white/40 text-sm font-medium">Verify credentials for root access.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] ml-1">
                                    System Administrator ID
                                </label>
                                <div className="group relative flex items-center bg-white/5 border border-white/30 rounded-2xl px-5 py-4 transition-all focus-within:border-white/50 focus-within:bg-white/[0.07]">
                                    <Key className="w-4 h-4 text-white/20 group-focus-within:text-orange-500 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="ADM-ROOT-TS"
                                        className="w-full bg-transparent pl-4 text-sm focus:outline-none font-medium placeholder:text-white/10 text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] ml-1">
                                    Security Phase Key
                                </label>
                                <div className="group relative flex items-center bg-white/5 border border-white/30 rounded-2xl px-5 py-4 transition-all focus-within:border-white/50 focus-within:bg-white/[0.07]">
                                    <Lock className="w-4 h-4 text-white/20 group-focus-within:text-orange-500 transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-transparent pl-4 pr-10 text-sm focus:outline-none font-medium placeholder:text-white/10 text-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 text-white/20 hover:text-white transition-colors p-1"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <button className="group w-full relative bg-white text-[#000033] py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-orange-600 hover:text-white active:scale-[0.98] shadow-2xl shadow-blue-950/40">
                                <span className="relative z-10">Verify & Access</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </main>

                <footer className="p-8 text-center lg:text-left">
                    <p className="text-[9px] text-white/10 font-bold uppercase tracking-[0.5em]">
                        SECURE ENCLAVE 2026 • HSGA-TS-HQ
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
