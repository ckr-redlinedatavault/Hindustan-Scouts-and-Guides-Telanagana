"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("hsga_cookie_consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("hsga_cookie_consent", "accepted");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full z-[200] px-4 pb-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="max-w-[1500px] mx-auto bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">

                <div className="h-1.5 w-full bg-orange-600" />

                <div className="flex flex-col lg:flex-row items-stretch">

                    <div className="bg-slate-50 p-6 lg:p-10 flex items-center lg:flex-col lg:justify-center border-b lg:border-b-0 lg:border-r border-gray-100 gap-4 shrink-0">
                        <div className="w-14 h-14 flex items-center justify-center bg-white border border-gray-200">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png"
                                alt="HSGA"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <div className="lg:text-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#000080]">Security</p>
                            <p className="text-[11px] font-bold text-gray-400 lowercase leading-tight">verified</p>
                        </div>
                    </div>

                    <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1.5px] bg-orange-600"></span>
                            <h3 className="text-slate-900 text-base md:text-lg font-black tracking-tighter">
                                Cookie privacy and data standards
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <p className="text-gray-500 text-[14px] leading-relaxed max-w-2xl font-medium">
                                We use essential cookies to ensure the best experience on the
                                <span className="text-[#000080] font-extrabold"> HSGA Telangana</span> portal.
                                By accepting, you agree to our data security protocols.
                            </p>
                            <p className="text-gray-400 text-[13px] font-bold lowercase tracking-tight">
                                पोर्टल सुरक्षा और बेहतर अनुभव के लिए हम कुकीज़ का उपयोग करते हैं।
                            </p>
                        </div>
                    </div>

                    <div className="p-6 lg:p-10 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-100 shrink-0">

                        <button
                            onClick={handleAccept}
                            className="w-full sm:w-48 px-8 py-4 bg-[#000080] text-white transition-all hover:bg-orange-600 flex flex-col items-center justify-center group shadow-lg shadow-blue-900/10"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-widest">Accept all</span>
                            <span className="text-[9px] font-medium opacity-60 lowercase mt-0.5">स्वीकार करें</span>
                        </button>

                        <Link
                            href="/privacy-policy"
                            className="w-full sm:w-48 px-8 py-4 bg-slate-100 text-slate-700 transition-all hover:bg-slate-200 flex flex-col items-center justify-center"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-widest">Settings</span>
                            <span className="text-[9px] font-medium opacity-60 lowercase mt-0.5">व्यवस्था</span>
                        </Link>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-gray-300 hover:text-slate-900 transition-colors hidden lg:block"
                        >
                            <X size={22} />
                        </button>
                    </div>

                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-6 right-6 text-gray-300 lg:hidden"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
