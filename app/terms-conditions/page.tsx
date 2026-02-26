"use client";

import React from "react";
import { FileText, Shield, Gavel, Globe, Info } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsConditions() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Breadcrumbs />

            <section className="relative pt-16 pb-20 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Legal Framework
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-8">
                            Terms & <span className="text-orange-600">Conditions.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight max-w-2xl">
                            The following rules and regulations govern the use of the
                            Hindustan Scouts and Guides Association Telangana portal.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1.5px] bg-orange-600"></span>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                General Usage
                            </h2>
                        </div>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-[16px] font-medium">
                            <p>
                                By accessing this website, you agree to follow and be bound by these Terms and
                                Conditions. If you do not agree with any part of these terms, you must not use
                                this website.
                            </p>
                            <p>
                                The content provided on this portal is for general information and organizational
                                use only. It is subject to change without prior notice.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16 p-10 bg-slate-50 border-l-4 border-orange-600 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Gavel className="w-5 h-5 text-orange-600" />
                            User Conduct & Liability
                        </h3>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium">
                            <p>
                                Users are strictly prohibited from using this website in any way that is or may be
                                damaging to this website or in any way that impacts user access to this website.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-6 border border-slate-100">
                                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-3">Integrity</h4>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                        Any unauthorized use of this website may give rise to a claim for
                                        damages and/or be a criminal offense under IT law.
                                    </p>
                                </div>
                                <div className="bg-white p-6 border border-slate-100">
                                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-3">Content Ownership</h4>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                        All trademarks, logos, and materials on this site are the property
                                        of HSGA or its licensed contributors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1.5px] bg-orange-600"></span>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                Intellectual Property
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] font-medium">
                            <p>
                                Unless otherwise stated, HSGA Telangana owns the intellectual property rights
                                for all material on this portal. All intellectual property rights are reserved.
                            </p>
                            <p>
                                You may access this from HSGA Telangana for your own personal use subjected
                                to restrictions set in these terms and conditions.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1.5px] bg-orange-600"></span>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                Disclaimer
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] font-medium">
                            <p>
                                This website is provided "as is," with all faults, and HSGA Telangana makes no
                                express or implied representations or warranties of any kind related to this
                                website or the materials contained on this website.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-start gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Legal inquiries?</h3>
                            <p className="text-slate-500 text-sm font-medium">
                                Reach our legal team at: <span className="text-[#000080] font-bold">legal@hsgatelangana.com</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Last Updated</p>
                                <p className="font-bold text-slate-900">February 2026</p>
                            </div>
                            <Globe className="w-8 h-8 text-slate-200" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
