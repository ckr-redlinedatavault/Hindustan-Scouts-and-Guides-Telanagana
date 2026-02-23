"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, ArrowRight } from "lucide-react";
import SubNavbar, { navLinks } from "./SubNavbar";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full z-[100] sticky top-0 shadow-sm bg-white">
            <div className="border-b border-gray-100">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between h-20 md:h-28 lg:h-32">

       
                    <Link href="/" className="flex items-center gap-4 md:gap-6 shrink-0 group">
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                            alt="HSGA Logo"
                            className="h-14 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="flex flex-col justify-center">
                            <h1 className="text-[11px] sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] font-black text-slate-900 leading-tight tracking-tight uppercase max-w-[160px] sm:max-w-none">
                                Hindustan Scouts and Guides <br className="hidden sm:block lg:hidden" /> Association
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-6 h-[2px] bg-orange-600 hidden md:block"></span>
                                <span className="text-orange-600 font-bold text-xs md:text-sm tracking-wide uppercase">
                                    Telangana State
                                </span>
                            </div>
                        </div>
                    </Link>

    
                    <div className="flex items-center gap-6 xl:gap-10">

                        <div className="hidden lg:flex items-center gap-5 border-r border-gray-100 pr-8">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199490/Screenshot_2026-02-04_at_15.31.47_srjmx2.png"
                                alt="WFIS Germany Logo"
                                className="h-16 xl:h-20 w-auto object-contain brightness-105"
                            />

                            <div className="flex flex-col justify-center space-y-2">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-wider text-[#000080] leading-none">
                                        Recognized by Govt. of India
                                    </p>
                                    <p className="text-[9px] font-bold text-gray-400 mt-0.5 uppercase">
                                        (Ministry of Youth Affairs and Sports)
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-orange-600 leading-none">
                                        Affiliated to
                                    </p>
                                    <p className="text-[11px] font-black text-slate-900 leading-tight mt-0.5">
                                        World Federation of <br />
                                        Independent Scout — Germany
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-3 xl:gap-4">
                            <Link
                                href="/get-started"
                                className="px-5 py-3.5 bg-slate-100 text-slate-900 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all"
                            >
                                Get Started
                            </Link>

                            <Link
                                href="https://hindustan-unified-systems.vercel.app/volunteer"
                                className="px-6 py-3.5 bg-[#000080] text-white text-[10px] xl:text-[11px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-md"
                            >
                                Join now
                            </Link>
                        </div>
                        <button
                            className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <SubNavbar />
            </div>
            <div
                className={`lg:hidden fixed inset-0 top-20 md:top-28 z-[90] bg-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >
                <div className="p-8 flex flex-col h-full overflow-y-auto">
                    <div className="space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between text-2xl font-black text-slate-900 tracking-tighter border-b border-gray-50 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                                <ArrowRight className="text-orange-600 w-6 h-6" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pb-10 space-y-4">
                        <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-6 bg-slate-50 p-4 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                            Official Telangana State Council Portal
                        </div>
                        <Link href="/get-started" className="block w-full py-5 bg-slate-900 text-white text-center font-bold uppercase tracking-widest text-sm">
                            Get Started
                        </Link>
                        <Link href="https://hindustan-unified-systems.vercel.app/volunteer" className="block w-full py-5 bg-[#000080] text-white text-center font-bold uppercase tracking-widest text-sm">
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
