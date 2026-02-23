"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ChevronDown,
    ArrowUpRight
} from "lucide-react";

export const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Organization",
        href: "/about",
        dropdown: [
            { name: "About us", href: "/about", desc: "Historical legacy and overview." },
            { name: "Mission and vision", href: "/about/mission-vision", desc: "Our future goals and mission." },
            { name: "State team", href: "/state-team", desc: "Telangana leadership council." },
        ]
    },
    {
        name: "Activities",
        href: "/prashiksham",
        dropdown: [
            { name: "Prashiksham yojana", href: "/prashiksham", desc: "Training methodology." },
            { name: "Resources and docs", href: "/resources", desc: "Forms and circulars." },
            { name: "Image gallery", href: "/gallery", desc: "Event archives." }
        ]
    },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

const SubNavbar = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <div className="hidden lg:block bg-[#1b4332] border-b border-green-900/50 shadow-sm">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 h-12 flex items-center justify-between">

                <div className="flex items-center gap-1 h-full">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setOpenDropdown(link.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={`px-4 h-full flex items-center gap-2 text-[12px] font-bold tracking-tight transition-all duration-300 ${openDropdown === link.name
                                    ? "text-orange-400 bg-black/10"
                                    : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 opacity-60 ${openDropdown === link.name ? "rotate-180 text-orange-400 opacity-100" : ""
                                            }`}
                                    />
                                )}
                            </Link>

                            {link.dropdown && (
                                <div
                                    className={`absolute top-full left-0 w-[480px] pt-0 transition-all duration-300 z-[120] ${openDropdown === link.name
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-2 invisible"
                                        }`}
                                >
                                    <div className="bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden">
                                        <div className="h-1 w-full bg-orange-600" />

                                        <div className="p-4 grid grid-cols-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-between p-4 hover:bg-slate-50 group/item transition-colors border-b border-gray-50 last:border-0"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="text-[14px] font-bold text-slate-900 group-hover/item:text-[#000080] transition-colors">
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                            <div className="text-[11px] text-gray-400 font-medium tracking-tight mt-0.5">
                                                                {item.desc}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <ArrowUpRight
                                                        className="w-4 h-4 text-orange-600 opacity-0 -translate-y-1 translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:translate-x-0 transition-all duration-300"
                                                    />
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
    );
};

export default SubNavbar;
