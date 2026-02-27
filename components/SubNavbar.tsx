"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ChevronDown,
    ArrowRight,
    LogIn,
    Info,
    Layout
} from "lucide-react";

export const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Organization",
        href: "/about",
        description: "Learn about our heritage, mission, and the leadership driving our vision forward.",
        dropdown: [
            { name: "About Us", href: "/about", desc: "Historical legacy and overview of our foundation." },
            { name: "Mission & Vision", href: "/about/mission-vision", desc: "Our future goals and strategic mission." },
            { name: "State Team", href: "/state-team", desc: "Meet the Telangana leadership council." },
        ]
    },
    {
        name: "Activities",
        href: "/prashiksham",
        description: "Explore our training methodologies, digital resources, and event archives.",
        dropdown: [
            { name: "Prashiksham Yojana", href: "/prashiksham", desc: "Our standardized training methodology." },
            { name: "Resources & Docs", href: "/resources", desc: "Access official forms and circulars." },
            { name: "Image Gallery", href: "/gallery", desc: "Archives of past events and milestones." },
            { name: "Public Notices", href: "https://hindustan-unified-systems.vercel.app/documents", desc: "Recent updates and announcements." }
        ]
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Shop", href: "https://shop.hsgatelangana.com" },
    { name: "Contact", href: "/contact" },
];

const SubNavbar = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <div className="hidden lg:block bg-[#1b4332] border-b border-white/10 shadow-lg relative">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">

                {/* Navigation Links */}
                <div className="flex items-center h-full">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="h-full flex items-center"
                            onMouseEnter={() => setOpenDropdown(link.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={`px-5 h-full flex items-center gap-1.5 text-[13px] font-semibold tracking-wider transition-all duration-300 ${openDropdown === link.name
                                    ? "text-orange-400 bg-black/20"
                                    : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${openDropdown === link.name ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </Link>

                            {/* MEGA MENU DROPDOWN */}
                            {link.dropdown && (
                                <div
                                    className={`absolute top-[56px] left-0 w-full flex justify-center transition-all duration-300 z-[120] ${openDropdown === link.name
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 -translate-y-2 invisible"
                                        }`}
                                >
                                    <div className="w-[1000px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] grid grid-cols-12 overflow-hidden rounded-b-md border border-gray-200">

                                        {/* Left Side: Context Panel */}
                                        <div className="col-span-4 bg-slate-50 p-8 border-r border-gray-100">
                                            <div className="w-10 h-10 bg-[#1b4332] rounded-lg flex items-center justify-center mb-4">
                                                <Info className="text-white" size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                                {link.name}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                                {link.description}
                                            </p>
                                            <Link
                                                href={link.href}
                                                className="text-[#1b4332] text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest"
                                            >
                                                Explore Section <ArrowRight size={14} />
                                            </Link>
                                        </div>

                                        {/* Right Side: Links Grid */}
                                        <div className="col-span-8 p-6 grid grid-cols-2 gap-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group flex flex-col p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-transform" />
                                                        <span className="text-[14px] font-bold text-slate-900 group-hover:text-[#1b4332]">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <p className="text-[12px] text-slate-500 leading-snug pl-3">
                                                        {item.desc}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Bottom Accent Bar */}
                                        <div className="col-span-12 h-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    {/* Get Started Button */}
                    <Link
                        href="/get-started"
                        className="flex items-center gap-2 px-6 py-2 text-[12px] font-extrabold tracking-widest bg-white text-[#1b4332] hover:bg-slate-100 transition-all duration-300 rounded-none shadow-md group"
                    >
                        Get started
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    {/* DOC Login Button */}
                    <a
                        href="https://hus.hsgatelangana.com/doc/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 text-[12px] font-extrabold tracking-widest bg-yellow-400 text-[#1b4332] hover:bg-yellow-500 transition-all duration-300 rounded-none shadow-md group"
                    >
                        <LogIn size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        DOC login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
