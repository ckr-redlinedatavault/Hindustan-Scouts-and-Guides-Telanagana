"use client";

import React from "react";
import { ShieldCheck, Lock, Eye, FileText, Globe } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <section className="relative pt-16 pb-20 bg-[#000080] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-[1px] bg-orange-600"></span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Data Protection
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-8">
                            Privacy & <span className="text-orange-600">Cookie Policy.</span>
                        </h1>
                        <p className="text-blue-100/60 text-lg md:text-xl font-medium tracking-tight max-w-2xl">
                            Learn how we manage your data and ensure the absolute security
                            of your information on our portal.
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
                                Introduction
                            </h2>
                        </div>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-[16px] font-medium">
                            <p>
                                At Hindustan Scouts and Guides Association (HSGA) Telangana, we are committed to
                                protecting your personal data and your privacy. This policy explains how we
                                collect, use, and safeguard the information you provide when using our website.
                            </p>
                            <p>
                                By continuing to use this portal, you consent to the data practices described
                                in this policy. We ensure that all data processing is carried out in compliance
                                with relevant government regulations.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16 p-10 bg-slate-50 border-l-4 border-orange-600">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Eye className="w-5 h-5 text-orange-600" />
                            How We Use Cookies
                        </h3>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-[15px] font-medium">
                            <p>
                                Cookies are small text files placed on your device to help the site provide a
                                better user experience. We use cookies to retain user preferences and provide
                                anonymous tracking data.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-6 border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-3">Essential Cookies</h4>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                        Required for technical operation, such as session management and
                                        security protocols.
                                    </p>
                                </div>
                                <div className="bg-white p-6 border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-3">Performance Cookies</h4>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                        Help us understand how visitors interact with the site, helping
                                        us improve navigation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1.5px] bg-orange-600"></span>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                                Data Security
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] font-medium">
                            <p>
                                We implement a variety of security measures to maintain the safety of your
                                personal information. Your data is stored on secure servers and access is
                                strictly limited to authorized personnel.
                            </p>
                            <p>
                                HSGA Telangana does not sell, trade, or otherwise transfer your personally
                                identifiable information to outside parties without your explicit consent.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-start gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Questions regarding privacy?</h3>
                            <p className="text-slate-500 text-sm font-medium">
                                Contact us at: <span className="text-[#000080] font-bold">privacy@hsgatelangana.com</span>
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
