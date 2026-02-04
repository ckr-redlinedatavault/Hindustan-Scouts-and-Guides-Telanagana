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
    Tent,
    HeartHandshake,
    Globe,
    Mail,
    Info,
    ShieldCheck,
    Award,
    GraduationCap,
    Camera,
    FileText
} from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Organization",
            href: "#",
            dropdown: [
                {
                    name: "Mission & Vision",
                    href: "/about/mission-vision",
                    icon: <Info className="w-5 h-5" />,
                    desc: "Our mission, vision and history."
                },
                {
                    name: "News & Portal",
                    href: "/news",
                    icon: <Layers className="w-5 h-5" />,
                    desc: "State headquarters announcements."
                },
                {
                    name: "Careers",
                    href: "/careers",
                    icon: <ShieldCheck className="w-5 h-5" />,
                    desc: "Join our leadership council."
                },
                {
                    name: "State Team",
                    href: "/state-team",
                    icon: <Users className="w-5 h-5" />,
                    desc: "Telangana state leadership council."
                },
                {
                    name: "National Team",
                    href: "/national-team",
                    icon: <Globe className="w-5 h-5" />,
                    desc: "National headquarters leadership."
                }
            ]
        },
        {
            name: "Activities",
            href: "#",
            dropdown: [
                {
                    name: "Prashiksham Yojana",
                    href: "/prashiksham",
                    icon: <BookOpen className="w-5 h-5" />,
                    desc: "Official training methodology."
                },
                {
                    name: "Resources & Docs",
                    href: "/resources",
                    icon: <FileText className="w-5 h-5" />,
                    desc: "Official forms and circulars."
                },
                {
                    name: "Gallery",
                    href: "/gallery",
                    icon: <Camera className="w-5 h-5" />,
                    desc: "Media and event archives."
                }
            ]
        },
        { name: "Contact", href: "/contact" },
        { name: "Login", href: "/get-started" },
    ];

    return (
        <nav
            className={`w-full z-50 transition-all duration-300 bg-white py-3 border-b-2 border-[#000080] relative`}
        >
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3 min-w-fit">
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                        alt="HSGA Logo"
                        className="h-28 w-auto object-contain -my-4 drop-shadow-md"
                    />
                    <div className="hidden sm:flex flex-col">
                        <span className="text-2xl font-black leading-tight text-gray-900 tracking-tighter uppercase">
                            HSGA <span className="text-orange-600">TELANGANA</span>
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-gray-700 font-extrabold leading-none mt-0.5">
                            Hindustan Scouts and Guides Association
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-0.5">
                            State Headquarters
                        </span>
                    </div>
                </Link>

                {/* 2. Center: Navigation Links */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown(link.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 px-4 py-6 text-[13px] font-bold text-gray-700 hover:text-[#000080] transition-colors uppercase tracking-tight"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-3 h-3 opacity-50 transition-transform group-hover:rotate-180" />}
                            </Link>

                            {link.dropdown && (
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white border border-gray-100 shadow-2xl transition-all duration-300 transform origin-top ${openDropdown === link.name ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                                    }`}>
                                    <div className="p-6 grid grid-cols-2 gap-4 border-t-4 border-[#000080]">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                                            >
                                                <div className="p-2.5 bg-gray-50 rounded-lg text-gray-400 group-hover/item:text-[#000080] group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="text-[13px] font-bold text-gray-800 group-hover/item:text-[#000080]">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="bg-gray-50 p-4 border-t border-gray-100">
                                        <Link href="/resources" className="text-[11px] font-bold text-[#000080] hover:underline flex items-center gap-2">
                                            View all resources and documentation →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. Right: Secondary Logo & Affiliation Text */}
                <div className="hidden xl:flex items-center gap-4 border-l pl-6 border-gray-200">
                    {/* Secondary Logo */}
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199490/Screenshot_2026-02-04_at_15.31.47_srjmx2.png"
                        alt="Scout Logo"
                        className="h-16 w-auto object-contain opacity-90"
                    />

                    <div className="text-[10px] leading-tight font-black text-gray-800 uppercase max-w-[220px]">
                        <p className="text-[#000080]">Recognized by Govt. of India</p>
                        <p className="text-gray-900">(Ministry of Youth Affairs and Sports)</p>
                        <p className="mt-1 text-[8px] normal-case font-black text-gray-600 leading-[1.1]">
                            Affiliated to World Federation of Independent Scout - Germany
                        </p>
                    </div>

                    <Link
                        href="/register"
                        className="ml-2 px-5 py-2 border-2 border-[#000080] bg-transparent text-[#000080] text-xs font-black uppercase tracking-widest hover:bg-[#000080] hover:text-white transition-all duration-300"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-[#000080]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${isMobileMenuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
                }`}>
                <div className="px-6 py-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" className="h-8 w-auto" alt="" />
                        <div className="text-[10px] font-bold text-gray-600 uppercase">
                            Recognized by Govt. of India (MYAS)
                        </div>
                    </div>
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <div className="text-xs font-black text-[#000080] mb-2 uppercase tracking-wider">{link.name}</div>
                            {link.dropdown ? (
                                <div className="grid grid-cols-1 gap-2 pl-2">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-sm font-bold text-gray-600 hover:text-[#000080]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-sm font-bold text-gray-600 hover:text-[#000080]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/register"
                        className="mt-2 w-full py-3 border-2 border-[#000080] text-[#000080] text-center font-bold uppercase text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Join HSGA
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;