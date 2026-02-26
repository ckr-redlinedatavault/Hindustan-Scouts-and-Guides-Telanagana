"use client";

import React from "react";
import Link from "next/link";
import {
    MapPin,
    ChevronRight,
    Globe,
    ShieldCheck,
    Users,
    FileText,
    Image as ImageIcon,
    Phone,
    Info,
    ExternalLink
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SitemapPage() {
    const siteLinks = [
        {
            category: "Principal Portal",
            links: [
                { name: "Home Page", href: "/", icon: Globe, desc: "Main landing page and official overview." },
                { name: "Get Started", href: "/get-started", icon: ShieldCheck, desc: "Access official digital portals and registration systems." },
            ]
        },
        {
            category: "Organization Details",
            links: [
                { name: "About Us", href: "/about", icon: Info, desc: "Historical legacy and scouting philosophy." },
                { name: "Mission & Vision", href: "/about/mission-vision", icon: ShieldCheck, desc: "Our core values and future objectives." },
                { name: "State Team", href: "/state-team", icon: Users, desc: "Members of the Telangana State council." },
            ]
        },
        {
            category: "Activities & Resources",
            links: [
                { name: "Prashiksham Yojana", href: "/prashiksham", icon: FileText, desc: "Educational training methodology." },
                { name: "Resources Hub", href: "/resources", icon: FileText, desc: "Downloadable forms, circulars, and manuals." },
                { name: "Photo Gallery", href: "/gallery", icon: ImageIcon, desc: "Visual archive of state-level events." },
                { name: "Blogs & Updates", href: "/blogs", icon: Globe, desc: "Latest announcements and official blogs." },
            ]
        },
        {
            category: "Legal & Career",
            links: [
                { name: "Careers", href: "/careers", icon: Users, desc: "Opportunities to join the association." },
                { name: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck, desc: "Our commitment to data protection." },
                { name: "Terms & Conditions", href: "/terms-conditions", icon: ShieldCheck, desc: "Rules and regulations governing the portal." },
            ]
        },
        {
            category: "Contact & Support",
            links: [
                { name: "Contact Us", href: "/contact", icon: Phone, desc: "Get in touch with State Headquarters." },
                { name: "Contact Form", href: "/contact/form", icon: FileText, desc: "Submit inquiries directly via our form." },
            ]
        },
        {
            category: "External Systems",
            links: [
                { name: "Registration Portal", href: "https://hushsga-final.vercel.app/register", icon: ExternalLink, desc: "Official student enrollment system (External)." },
                { name: "Donation Portal", href: "https://hushsga-final.vercel.app/donate", icon: ExternalLink, desc: "Support scouting through the leadership fund (External)." },
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <Breadcrumbs />

            <section className="relative pt-12 pb-16 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Site Navigation
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-8">
                            Website <span className="text-orange-600">Sitemap.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight border-l border-white/20 pl-8 max-w-2xl hidden md:block">
                            A comprehensive map of all pages and resources available on the
                            Hindustan Scouts and Guides Association Telangana portal.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {siteLinks.map((section, idx) => (
                            <div key={idx} className="flex flex-col">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="w-8 h-[1.5px] bg-orange-600"></span>
                                    <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase">
                                        {section.category}
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    {section.links.map((link, lidx) => (
                                        <Link
                                            key={lidx}
                                            href={link.href}
                                            className="group flex items-start gap-4 p-4 -ml-4 rounded-sm hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                        >
                                            <div className="mt-1 w-8 h-8 rounded-sm bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-[#000080] group-hover:text-white transition-all">
                                                <link.icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                                        {link.name}
                                                    </h3>
                                                    <ChevronRight className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
                                                </div>
                                                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px]">
                                                    {link.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                    <ShieldCheck className="w-12 h-12 text-slate-200 mb-6" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Need assistance?</h3>
                    <p className="text-slate-500 text-sm font-medium mb-8 max-w-md">
                        If you are unable to find the specific resource you are looking for,
                        our state coordination team is here to help.
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-[#000080] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all">
                        Contact State HQ
                    </Link>
                </div>
            </section>
        </div>
    );
}
