"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { Mail, Phone, MapPin, Send, Clock, Globe, ShieldCheck } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="bg-[#F8FAFC] w-full h-full flex flex-col">
            <Breadcrumbs />

            {/* Main content fills all available space between Navbar and BottomBanner */}
            <main className="flex-grow flex items-center justify-center p-6 relative">
                {/* Subtle Formal Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

                <div className="max-w-6xl w-full h-full max-h-[620px] grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                    {/* Left Column: Official Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex flex-col justify-between flex-grow">
                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#000080]/5 flex items-center justify-center">
                                            <ShieldCheck className="w-4 h-4 text-[#000080]" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#000080]">Official Gateway</span>
                                    </div>
                                    <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
                                        Contact <span className="text-[#000080]">Council</span>
                                    </h1>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-5">
                                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#000080] shrink-0 shadow-sm">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">State Headquarters</p>
                                            <p className="text-sm font-bold text-slate-700 leading-relaxed">
                                                B-3 F-1, Vigyan Puri Colony, Vidhya Nagar,<br />Hyderabad, Telangana-500044
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-orange-600 shrink-0 shadow-sm">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Phone Enquiries</p>
                                            <p className="text-sm font-bold text-slate-700 tracking-tight">040-31607502 <span className="text-slate-300 mx-2">|</span> +91 7997819797</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email Correspondence</p>
                                            <p className="text-sm font-bold text-slate-700">hsgatelangana@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Clock Footer */}
                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mon-Sat / 10AM-5PM</span>
                                </div>
                                <div className="flex gap-3">
                                    {['FB', 'IG', 'YT'].map((s) => (
                                        <span key={s} className="text-[9px] font-black text-slate-300 hover:text-[#000080] cursor-pointer transition-colors uppercase tracking-widest">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map and Action */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex-grow min-h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.852433068595!2d78.50650907516568!3d17.41887398347363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9987c0a9117f%3A0xc3f8e58980b18884!2sThe%20Hindustan%20Scouts%20and%20Guides%20Telangana!5e0!3m2!1sen!2sin!4v1707900000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="bg-[#000080] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-900/20">
                            <div className="text-center sm:text-left">
                                <h3 className="text-white font-black text-lg mb-1">Have a query?</h3>
                                <p className="text-white/70 text-xs font-medium">Send us a direct message for quick resolution.</p>
                            </div>
                            <a
                                href="https://hushsga-final.vercel.app/contact"
                                className="px-6 py-3 bg-white text-[#000080] rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-100 transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                                Send Message
                                <Send className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>



            <style jsx global>{`
                /* Ensure the page is truly non-scrollable on large screens */
                @media (min-height: 700px) {
                    body { overflow: hidden; }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;