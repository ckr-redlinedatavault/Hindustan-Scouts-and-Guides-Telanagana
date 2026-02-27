"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SubNavbar, { navLinks } from "./SubNavbar";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className="w-full z-[100] sticky top-0 shadow-md bg-white">
            <div className="border-b-2 border-slate-100">
                <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 md:h-24 lg:h-28">

                    {/* LEFT: Branding Section */}
                    <Link href="/" className="flex items-center gap-4 lg:gap-6 shrink-0 group h-full">
                        {/* Main Logo - Increased size to max height */}
                        <img
                            src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                            alt="HSGA Logo"
                            className="h-[65px] md:h-[80px] lg:h-[95px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />

                        <div className="flex flex-col justify-center">
                            {/* Single Line Brand Name - Bold Black Look */}
                            <h1 className="text-[11px] sm:text-base md:text-xl lg:text-[24px] font-black text-slate-950 tracking-tighter uppercase whitespace-nowrap leading-none">
                                Hindustan Scouts and Guides Association
                            </h1>
                            <div className="flex items-center gap-3 mt-1.5">
                                <span className="text-orange-600 font-black text-[10px] md:text-sm tracking-[0.25em] uppercase">
                                    Telangana State Portal
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* RIGHT: Recognition & Actions - Bold Black Look */}
                    <div className="flex items-center gap-6 xl:gap-10 h-full">

                        {/* Recognition Block (Hidden on Tablet/Mobile) */}
                        <div className="hidden xl:flex items-center gap-8 border-l-2 border-slate-100 pl-10 h-20">
                            <div className="text-right flex flex-col justify-center">
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                    Recognized By
                                </p>
                                <p className="text-[13px] font-black text-slate-950 uppercase leading-none">
                                    Govt. of India
                                </p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">
                                    Ministry of Youth Affairs & Sports
                                </p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199490/Screenshot_2026-02-04_at_15.31.47_srjmx2.png"
                                    alt="WFIS Germany"
                                    className="h-16 lg:h-20 w-auto object-contain"
                                />
                                <div className="flex flex-col justify-center">
                                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                        Affiliated To
                                    </span>
                                    <p className="text-[13px] font-black text-slate-950 uppercase leading-tight">
                                        WFIS Germany <br />
                                        <span className="text-[10px] text-slate-500">(Worldwide Federation)</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="https://hus.hsgatelangana.com/forms/student-admission"
                                className="px-8 py-4 bg-slate-950 text-white text-[12px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all rounded-none shadow-xl shadow-slate-950/10"
                            >
                                Join now
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden p-2 text-slate-950"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={30} strokeWidth={3} /> : <Menu size={30} strokeWidth={3} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* SubNavbar (Maintained Desktop View) */}
            <div className="hidden lg:block">
                <SubNavbar />
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 top-20 md:top-24 z-[90] bg-white transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
            >
                <div className="p-8 flex flex-col h-full bg-slate-50">
                    <div className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-6 text-2xl font-black text-slate-950 border-b border-slate-200 uppercase tracking-tighter"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pb-12">
                        <Link
                            href="https://hushsga-final.vercel.app/register"
                            className="block w-full py-5 bg-slate-950 text-white text-center font-black uppercase tracking-widest text-sm rounded-none"
                        >
                            Membership Registration
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
