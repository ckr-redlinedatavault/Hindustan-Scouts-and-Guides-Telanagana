"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import TopBanner from "@/components/TopBanner";
import { Mail, Phone, MapPin, Send, Clock, Globe, ShieldCheck } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
            <TopBanner />
            <Navbar />
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

                    {/* Right Column: Formal Inquiry Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] h-full flex flex-col">
                            <div className="mb-8">
                                <h2 className="text-xl font-black text-slate-900 mb-1">Send Formal Inquiry</h2>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Expected Response: 24-48 Working Hours</p>
                            </div>

                            <form className="space-y-5 flex-grow flex flex-col">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Legal Full Name</label>
                                        <input type="text" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:border-[#000080] focus:ring-1 focus:ring-[#000080] outline-none transition-all" placeholder="Enter name" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:border-[#000080] focus:ring-1 focus:ring-[#000080] outline-none transition-all" placeholder="Enter email" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject of Correspondence</label>
                                    <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:border-[#000080] outline-none appearance-none cursor-pointer">
                                        <option>General Support</option>
                                        <option>New Unit Registration</option>
                                        <option>Trainer Certification</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5 flex-grow flex flex-col">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Detailed Message</label>
                                    <textarea className="w-full flex-grow px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:border-[#000080] outline-none transition-all resize-none" placeholder="Describe your requirement..."></textarea>
                                </div>

                                <button className="w-full py-4 bg-[#000080] text-white rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#000066] transition-all flex items-center justify-center gap-3 mt-2 shadow-lg shadow-blue-900/10 active:scale-[0.98]">
                                    Dispatch Message
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            {/* Absolute Bottom Signature */}
            <BottomBanner />

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