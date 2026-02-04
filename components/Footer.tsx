"use client";

import React from "react";
import {
    Facebook, Instagram, Twitter, Youtube,
    Mail, Phone, MapPin, ArrowUpRight,
    Globe, ShieldCheck
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Organization",
            links: [
                { name: "Mission & Vision", href: "/about/mission-vision" },
                { name: "News & Portal", href: "/news" },
                { name: "Success Stories", href: "/#success-stories" },
                { name: "Careers", href: "/careers" }
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
        {
            title: "Portals",
            links: [
                { name: "School Login", href: "#" },
                { name: "Trainer Login", href: "#" },
                { name: "Admin Dashboard", href: "#" },
            ]
        }
    ];

    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8 font-outfit">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand & Mission - 4 Columns */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-xl p-2 shadow-sm">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                    alt="HSGA Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#000066] tracking-tight">HSGA <span className="text-orange-500">TS</span></h2>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Telangana State Headquarters</p>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Empowering the youth of Telangana through discipline, leadership, and service. The leading scouting movement dedicated to character building.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-[#000066] hover:text-white transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - 4 Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {footerLinks.map((section, idx) => (
                            <div key={idx} className={idx === 2 ? "col-span-2 md:col-span-1" : ""}>
                                <h4 className="text-slate-900 font-bold text-sm mb-5">{section.title}</h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.href} className="text-sm text-slate-500 hover:text-orange-600 hover:translate-x-1 transition-all inline-flex items-center gap-1 group">
                                                {link.name}
                                                {section.title === "Portals" && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Location & Map - 4 Columns */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="text-slate-900 font-bold text-sm mb-5">Visit Our Headquarters</h4>
                        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-32 w-full grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Embedded Google Map for Vidhya Nagar, Hyderabad */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.545862215444!2d78.50379967597144!3d17.385563902187645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990df62886f3%3A0x7d6c5d911b666d9!2sVidya%20Nagar%2C%20Adadikmet%2C%20Hyderabad%2C%20Telangana%20500044!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}

                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-orange-600 mt-1" />
                                <p className="text-xs text-slate-600 leading-snug font-medium">
                                    Vidhya Nagar, Adadikmet, Hyderabad,<br /> Telangana 500044
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-orange-600" />
                                <p className="text-xs font-bold text-slate-700">040-31607502</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-orange-600" />
                                <a href="mailto:hsgatelangana@gmail.com" className="text-xs font-bold text-slate-700 hover:text-[#000066]">hsgatelangana@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                        <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                            © {currentYear} <span className="text-slate-900 font-bold">HSGA Telangana</span>. All rights reserved.
                        </p>
                        <div className="hidden md:flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                            Verified Organization
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-[11px] text-slate-400 hover:text-slate-900 font-medium">Privacy Policy</a>
                        <a href="#" className="text-[11px] text-slate-400 hover:text-slate-900 font-medium">Terms of Service</a>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-200">
                            <Globe className="w-3 h-3 text-slate-400" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">English (IN)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;