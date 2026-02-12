"use client";

import React from "react";
import {
    Facebook, Instagram, Twitter, Youtube,
    Mail, Phone, MapPin, ArrowUpRight,
    Globe, ShieldCheck
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Organization",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Mission & Vision", href: "/about/mission-vision" },
                { name: "News & Portal", href: "/news" },
                { name: "Success Stories", href: "/#success-stories" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Prashiksham Yojana", href: "/prashiksham" },
                { name: "Gallery", href: "/gallery" },
                { name: "Documents Hub", href: "/resources" },
                { name: "Contact Support", href: "/contact" }
            ]
        },
    ];


    return (
        <footer className="bg-white border-t-4 border-[#EA580C] pt-16 pb-8">
            <div className="max-w-[1600px] mx-auto px-8">

                {/* Main Content Grid with wide spacing */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">

                    {/* Brand Section - Horizontal Layout */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-8">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                alt="HSGA Logo"
                                className="h-24 md:h-32 w-auto object-contain drop-shadow-sm"
                            />
                            <div className="space-y-3">
                                <h2 className="text-xl md:text-2xl font-[1000] text-[#000080] tracking-tighter leading-tight uppercase max-w-[240px]">
                                    Hindustan Scouts and Guides Association
                                </h2>
                                <div className="inline-flex items-center border-l-4 border-[#EA580C] pl-4 py-1">
                                    <p className="text-[12px] font-[1000] text-gray-500 uppercase tracking-[0.2em]">
                                        Telangana State Headquarters
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 text-[15px] leading-relaxed font-medium max-w-md">
                            Building character and fostering leadership among the youth of Telangana through traditional scouting values and dedicated public service.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#000080] border border-gray-100 hover:bg-[#000080] hover:text-white transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-x-8 gap-y-10">
                        {footerSections.slice(0, 2).map((section, idx) => (
                            <div key={idx}>
                                <h4 className="text-[#000080] font-[1000] text-[15px] mb-6 border-b border-gray-100 pb-3 uppercase tracking-wider">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-[12px] font-bold text-gray-500 hover:text-[#EA580C] transition-colors flex items-center gap-2 group uppercase tracking-tight">
                                                <span className="w-1 h-1 bg-[#EA580C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-[#000080] font-[1000] text-[15px] mb-6 border-b border-gray-100 pb-3 uppercase tracking-wider">
                            Contact HQ
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                    <MapPin className="w-4 h-4 text-[#EA580C]" />
                                </div>
                                <p className="text-[13px] text-gray-600 font-bold leading-relaxed">
                                    Vidhya Nagar, Adadikmet, <br /> Hyderabad, Telangana 500044
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                    <Phone className="w-4 h-4 text-[#EA580C]" />
                                </div>
                                <p className="text-[14px] font-[1000] text-gray-900 tracking-tight">040-31607502</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                    <Mail className="w-4 h-4 text-[#EA580C]" />
                                </div>
                                <a href="mailto:hsgatelangana@gmail.com" className="text-[14px] font-[1000] text-gray-900 hover:text-[#EA580C] transition-colors">
                                    hsgatelangana@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Copyright Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px]">
                    <div className="flex items-center gap-8">
                        <p className="text-gray-400 font-black">
                            © {currentYear} HSGA Telangana State HQ
                        </p>
                        <div className="hidden sm:flex items-center gap-2 text-gray-500 font-black px-3 py-1.5 bg-gray-50 border border-gray-100">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            Verified Identity
                        </div>
                    </div>
                    <div className="flex items-center gap-8 font-[1000]">
                        <Link href="/privacy" className="text-gray-400 hover:text-[#000080] transition-colors">Privacy policy</Link>
                        <Link href="/terms" className="text-gray-400 hover:text-[#000080] transition-colors">Terms of service</Link>
                        <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-1.5 border border-gray-100">
                            <Globe className="w-4 h-4" />
                            <span>Telangana, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;