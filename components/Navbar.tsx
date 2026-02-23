"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, ArrowRight } from "lucide-react";
import SubNavbar, { navLinks } from "./SubNavbar";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full z-[100] sticky top-0 shadow-sm">
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-20 md:h-24 lg:h-32">

                    <Link href="/" className="flex items-center gap-3 md:gap-5 lg:gap-7 shrink-0 group min-w-0">
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                            alt="HSGA Logo"
                            className="h-12 md:h-24 lg:h-[110px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="flex flex-col justify-center min-w-0 overflow-hidden">
                            <h1 className="text-[10px] sm:text-lg md:text-xl lg:text-[24px] xl:text-[28px] font-black text-slate-900 leading-[1.1] tracking-tight sm:tracking-tighter uppercase sm:whitespace-nowrap whitespace-normal max-w-[180px] sm:max-w-none">
                                Hindustan Scouts and Guides Association
                            </h1>
                            <div className="flex items-center gap-2 mt-1 sm:mt-2">
                                <span className="w-4 h-[1px] bg-orange-600 hidden md:block"></span>
                                <span className="text-orange-600 font-normal text-sm tracking-tight">
                                    Telangana State
                                </span>
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-6 xl:gap-10">

                        <div className="hidden lg:flex items-center gap-6 border-r border-gray-100 pr-8 xl:pr-10 h-20">
                            <div className="text-right flex flex-col justify-center">
                                <div className="mb-2">
                                    <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#000080] leading-none">Recognized by Govt. of India</p>
                                    <p className="text-[10px] font-bold text-gray-400 mt-1 leading-none">
                                        (Ministry of Youth Affairs and Sports)
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-600 leading-none">Affiliated to</p>
                                    <p className="text-[11px] font-black text-slate-900 leading-tight mt-1">
                                        World Federation of <br />
                                        Independent Scout — Germany
                                    </p>
                                </div>
                            </div>

                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199490/Screenshot_2026-02-04_at_15.31.47_srjmx2.png"
                                alt="WFIS Germany Logo"
                                className="h-18 lg:h-22 w-auto object-contain brightness-105"
                            />
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="/get-started"
                                className="px-6 py-3.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg"
                            >
                                Get Started
                            </Link>

                            <Link
                                href="https://hushsga-final.vercel.app/register"
                                className="px-7 py-3.5 bg-[#000080] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-blue-900/10"
                            >
                                Join now
                            </Link>
                        </div>

                        <button
                            className="lg:hidden p-2 -mr-2 text-slate-900 hover:bg-slate-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} className="md:w-7 md:h-7" /> : <Menu size={24} className="md:w-7 md:h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            <SubNavbar />

            <div className={`lg:hidden fixed inset-0 top-20 md:top-24 z-[90] bg-white transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 sm:p-8 flex flex-col h-full overflow-y-auto">
                    <div className="space-y-4 sm:space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center justify-between text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                                <ArrowRight className="text-orange-600 w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pb-12 space-y-4">
                        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-4 px-1">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                            Official Telangana State Council Portal
                        </div>
                        <Link href="/get-started" className="block w-full py-5 bg-slate-900 text-white text-center font-bold uppercase tracking-widest text-sm">
                            Get Started
                        </Link>
                        <Link href="https://hushsga-final.vercel.app/register" className="block w-full py-5 bg-[#000080] text-white text-center font-bold uppercase tracking-widest text-sm">
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
