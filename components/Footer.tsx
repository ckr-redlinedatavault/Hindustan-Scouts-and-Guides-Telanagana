"use client";

import React from "react";
import {
    Facebook, Instagram, Twitter, Youtube,
    Mail, Phone, MapPin, Globe, ShieldCheck, ArrowRight
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Our organization",
            links: [
                { name: "About us", href: "/about" },
                { name: "Mission and vision", href: "/about/mission-vision" },
                { name: "Blogs and portal", href: "/blogs" },
                { name: "Success stories", href: "/#success-stories" },
                { name: "Donate now", href: "https://hushsga-final.vercel.app/donate" },
            ]
        },
        {
            title: "Quick resources",
            links: [
                { name: "Prashiksham yojana", href: "/prashiksham" },
                { name: "Image gallery", href: "/gallery" },
                { name: "Documents hub", href: "/resources" },
                { name: "Sitemap", href: "/site-map" },
                { name: "Contact support", href: "https://hushsga-final.vercel.app/contact" }
            ]
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-100 pt-12 md:pt-20 pb-6 md:pb-10">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-20">

                    <div className="lg:col-span-5 flex flex-col items-start min-w-0">
                        <Link href="/" className="flex items-center gap-4 sm:gap-5 mb-6 md:mb-8 group">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                alt="HSGA Logo"
                                className="h-14 sm:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-none">
                                    Hindustan Scouts And <br />
                                    <span className="text-[#000080]">Guides Association</span>
                                </h2>
                                <span className="text-orange-600 font-medium text-[11px] sm:text-sm mt-1 lowercase">
                                    telangana state headquarters
                                </span>
                            </div>
                        </Link>

                        <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-md mb-6 md:mb-8">
                            Contributing to the education of young people through a value
                            system based on the Scout Promise and Law, to build a better
                            world where people are self-fulfilled as individuals.
                        </p>

                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-gray-100 text-slate-400 hover:border-orange-600 hover:text-orange-600 transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerSections.map((section, idx) => (
                            <div key={idx} className="flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-4 h-[1.5px] bg-orange-600"></span>
                                    <h4 className="text-slate-900 font-bold text-[14px] tracking-tight">
                                        {section.title}
                                    </h4>
                                </div>
                                <ul className="space-y-4">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#000080] transition-colors flex items-center gap-2 group">
                                                {link.name}
                                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-600" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-3 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-4 h-[1.5px] bg-orange-600"></span>
                            <h4 className="text-slate-900 font-bold text-[14px] tracking-tight">
                                Get in touch
                            </h4>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-orange-600 mt-1 shrink-0" />
                                <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                                    Vidhya nagar, Adadikmet, <br />
                                    Hyderabad, Telangana 500044
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                                <p className="text-[15px] font-bold text-slate-900 tracking-tight">040-31607502 / +91 7997819797</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                                <a href="mailto:hsgatelangana@gmail.com" className="text-[14px] font-bold text-slate-900 hover:text-orange-600 transition-colors">
                                    hsgatelangana@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <p className="text-gray-400 text-xs sm:text-[13px] font-medium">
                            © {currentYear} Hindustan Scouts and Guides Association
                        </p>
                        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-slate-400 px-3 py-1 bg-slate-50 border border-slate-100 rounded-sm">
                            <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-green-600" />
                            Verified Identity
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-row justify-center items-center gap-x-6 gap-y-4 text-[12px] sm:text-[13px] font-bold">
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-slate-900 transition-colors">Privacy policy</Link>
                        <Link href="/terms-conditions" className="text-gray-400 hover:text-slate-900 transition-colors">Terms of service</Link>
                        <div className="flex items-center gap-2 text-slate-900 bg-slate-50 px-3 py-1.5 border border-slate-100">
                            <Globe className="w-4 h-4 text-orange-600" />
                            <span>Telangana, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;