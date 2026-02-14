"use client";

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { Send } from "lucide-react";

const ContactFormPage = () => {
    return (
        <div className="bg-[#F8FAFC] w-full h-full flex flex-col">
            <Breadcrumbs />

            <main className="flex-grow flex items-center justify-center p-6 relative">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

                <div className="max-w-3xl w-full relative z-10">
                    <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-black text-slate-900 mb-1">Send Formal Inquiry</h2>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Expected Response: 24-48 Working Hours</p>
                        </div>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Detailed Message</label>
                                <textarea className="w-full h-40 px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:border-[#000080] outline-none transition-all resize-none" placeholder="Describe your requirement..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-[#000080] text-white rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#000066] transition-all flex items-center justify-center gap-3 mt-2 shadow-lg shadow-blue-900/10 active:scale-[0.98]">
                                Dispatch Message
                                <Send className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default ContactFormPage;
