"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    ChevronDown,
    Menu,
    X,
    Users,
    Layers,
    BookOpen,
    Info,
    ShieldCheck,
    Globe,
    Camera,
    FileText,
    Target
} from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        {
            name: "Organization",
            href: "/about",
            dropdown: [
                { name: "About Us", href: "/about", icon: <Info className="w-5 h-5" />, desc: "Historical legacy & overview." },
                { name: "Mission & Vision", href: "/about/mission-vision", icon: <Target className="w-5 h-5" />, desc: "Our future goals & mission." },
                { name: "State Team", href: "/state-team", icon: <Users className="w-5 h-5" />, desc: "Telangana leadership council." },
            ]
        },
        {
            name: "Activities",
            href: "/prashiksham",
            dropdown: [
                { name: "Prashiksham Yojana", href: "/prashiksham", icon: <BookOpen className="w-5 h-5" />, desc: "Training methodology." },
                { name: "Resources & Docs", href: "/resources", icon: <FileText className="w-5 h-5" />, desc: "Forms and circulars." },
                { name: "Gallery", href: "/gallery", icon: <Camera className="w-5 h-5" />, desc: "Event archives." }
            ]
        },
        { name: "News", href: "/news" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="w-full z-50 sticky top-0 shadow-lg">
            {/* TIER 1: BRANDING & ACTIONS - More compact height */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24 lg:h-28">

                    {/* --- LEFT: BRANDING (Logos) --- */}
                    <Link href="/" className="flex items-center gap-3 md:gap-5 shrink-0 group h-full">
                        <div className="relative flex items-center">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                alt="HSGA Logo"
                                className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-26 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[11px] xs:text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-[1000] leading-[1.1] text-gray-900 tracking-tighter uppercase whitespace-normal sm:whitespace-nowrap max-w-[200px] sm:max-w-none">
                                Hindustan Scouts and Guides Association
                            </h1>
                            <h2 className="text-[9px] xs:text-[10px] md:text-[12px] lg:text-[13px] font-[1000] text-orange-600 tracking-[0.2em] xs:tracking-[0.4em] md:tracking-[0.6em] uppercase leading-none mt-1">
                                Telangana State
                            </h2>
                        </div>
                    </Link>

                    {/* --- RIGHT: ACTIONS & AFFILIATION --- */}
                    <div className="flex items-center gap-4 lg:gap-8 h-full">

                        {/* Affiliation info (Desktop Only) */}
                        <div className="hidden lg:flex items-center gap-5 border-l-2 pl-6 border-slate-100 h-16 self-center">
                            <div className="text-right">
                                <p className="text-[11px] font-[1000] text-[#000080] leading-none uppercase tracking-tighter">Recognized by Govt. of India</p>
                                <p className="text-[10px] font-[1000] text-gray-500 leading-none uppercase mt-1.5 tracking-tighter">Ministry of Youth Affairs & Sports</p>
                                <p className="text-[9px] font-[1000] text-orange-600 leading-none uppercase mt-1 tracking-tighter">Member: WFIS (World Federation of Independent Scouts)</p>
                            </div>
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199490/Screenshot_2026-02-04_at_15.31.47_srjmx2.png"
                                alt="Secondary Logo"
                                className="h-12 lg:h-20 w-auto object-contain brightness-105"
                            />
                        </div>


                        {/* Action Buttons (Desktop Only) */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="/get-started"
                                className="px-5 py-2.5 border-2 border-[#000080] text-[#000080] text-[11px] font-[1000] uppercase tracking-[0.15em] hover:bg-[#000080] hover:text-white transition-all rounded shadow-sm flex items-center justify-center min-w-[110px]"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="https://hushsga-final.vercel.app/volunteer"
                                className="px-7 py-3 bg-[#000080] text-white text-[12px] font-[1000] uppercase tracking-widest hover:bg-orange-600 transition-all rounded shadow-md active:scale-95 flex items-center justify-center min-w-[120px]"
                            >
                                Join
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            className="lg:hidden p-2 text-[#000080]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* TIER 2: NAVIGATION (Deep green background) */}
            <div className="hidden lg:block bg-[#1a4d2e] shadow-md border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6 h-11 flex items-center justify-center">
                    <div className="flex items-center gap-1 h-full">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative h-full flex items-center group"
                                onMouseEnter={() => setOpenDropdown(link.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`px-6 h-full flex items-center gap-1.5 text-[11px] font-[1000] uppercase tracking-widest transition-all ${openDropdown === link.name ? "text-orange-400 bg-black/10" : "text-white/90 hover:text-white hover:bg-black/5"}`}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${openDropdown === link.name ? "rotate-180" : ""}`} />}
                                </Link>

                                {/* MEGA DROPDOWN */}
                                {link.dropdown && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[550px] pt-0 transition-all duration-300 z-50 ${openDropdown === link.name ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
                                        <div className="bg-white rounded-b-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 overflow-hidden">
                                            <div className="h-1.5 w-full bg-orange-600" />
                                            <div className="p-6 grid grid-cols-2 gap-4">
                                                {link.dropdown.map((item) => (
                                                    <Link key={item.name} href={item.href} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 group/item transition-all border border-transparent hover:border-slate-100" onClick={() => setOpenDropdown(null)}>
                                                        <div className="shrink-0 p-3 bg-slate-100 rounded-lg text-slate-500 group-hover/item:bg-[#1a4d2e] group-hover/item:text-white transition-all duration-300">
                                                            {item.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-[14px] font-[1000] text-gray-900 group-hover/item:text-[#1a4d2e] transition-colors uppercase tracking-tight">{item.name}</div>
                                                            <div className="text-[11px] text-gray-500 font-bold leading-relaxed mt-1">{item.desc}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className="px-6 py-10 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-2xl font-[1000] text-[#000080] uppercase tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-4">
                        <Link href="/get-started" className="py-4 border-2 border-[#000080] text-[#000080] text-center font-[1000] uppercase rounded text-sm tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                            Get Started
                        </Link>
                        <Link href="https://hushsga-final.vercel.app/volunteer" className="py-5 bg-[#000080] text-white text-center font-[1000] uppercase rounded text-base tracking-[0.2em]" onClick={() => setIsMobileMenuOpen(false)}>
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;