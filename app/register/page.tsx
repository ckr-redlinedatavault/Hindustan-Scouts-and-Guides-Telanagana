"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import TopBanner from "@/components/TopBanner";
import { User, Briefcase, Clock, ChevronRight, ChevronLeft, Send, CheckCircle2, Upload, X, Download, FileText, BadgeCheck } from "lucide-react";

// --- Form Helpers (Defined at top to ensure proper typing and avoid hoisting issues) ---
const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 mb-4">
        <h3 className="text-[10px] font-black text-[#000080] uppercase tracking-[0.25em] border-l-4 border-orange-500 pl-3 leading-none">{title}</h3>
        <div className="flex-grow h-[1px] bg-slate-100" />
    </div>
);

interface InputFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputField = ({ label, type = "text", value, onChange, error }: InputFieldProps) => (
    <div className="space-y-2 w-full group">
        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest group-focus-within:text-[#000080] transition-colors">{label}</label>
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full px-5 py-3.5 bg-slate-50 border-2 rounded-2xl text-[14px] font-bold transition-all focus:outline-none focus:bg-white shadow-sm placeholder:text-slate-300 ${error ? 'border-red-500 bg-red-50 text-red-900' : 'border-slate-100 text-slate-900 focus:border-[#000080]'}`}
                placeholder={`Enter your ${label.toLowerCase()}...`}
            />
            {error && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-red-500">
                    <X className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-black uppercase tracking-tighter">{error}</span>
                </div>
            )}
        </div>
    </div>
);

const ReviewItem = ({ label, value, className = "" }: { label: string; value: string; className?: string }) => (
    <div className={`space-y-1 group ${className}`}>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-orange-500 transition-colors">{label}</p>
        <p className="text-[15px] font-black text-slate-900 break-words tracking-tight">{value || "NOT PROVIDED"}</p>
    </div>
);

const RegistrationPage = () => {
    const [step, setStep] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        firstName: "", middleName: "", lastName: "",
        dob: "", gender: "Male",
        address: "", city: "", state: "", pinCode: "",
        email: "", phone: "",
        qualification: "", gradYear: "",
        occupation: "", organization: "",
        skills: "", days: [] as string[], time: [] as string[],
        photo: null as string | null
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const nextStep = () => {
        // Validation for Step 1
        if (step === 1) {
            const newErrors: Record<string, string> = {};
            if (!formData.firstName) newErrors.firstName = "Required";
            if (!formData.lastName) newErrors.lastName = "Required";
            if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid Email";
            if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "10 Digits Required";
            if (!formData.pinCode || !/^\d{6}$/.test(formData.pinCode)) newErrors.pinCode = "6 Digits Required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
        }
        setStep(prev => Math.min(prev + 1, 4));
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[field];
                return updated;
            });
        }
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                setErrors(prev => ({ ...prev, photo: "File size must be less than 1MB" }));
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                handleInputChange("photo", reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFC] print:bg-white overflow-x-hidden">
            <div className="print:hidden">
                <TopBanner />
                <Navbar />
                <Breadcrumbs />
            </div>

            <main className="flex-grow flex items-center justify-center lg:px-4 lg:py-4 bg-slate-50/50 overflow-hidden">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row bg-white border-0 lg:border border-slate-200 lg:rounded-[1.5rem] shadow-none lg:shadow-[0_10px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden h-[calc(100vh-140px)] lg:h-[750px] lg:max-h-[calc(100vh-180px)] min-h-[500px] print:max-h-none print:shadow-none print:border-none print:rounded-none transition-all duration-300">

                    {/* SIDENAV: Top bar on mobile, Sidebar on Desktop */}
                    <div className="w-full lg:w-80 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 p-6 lg:p-8 flex flex-col lg:justify-between print:hidden shrink-0">
                        <div className="flex flex-col gap-6 lg:gap-8">
                            <div className="flex lg:flex-col items-center lg:items-start justify-between">
                                <div>
                                    <h1 className="text-xl lg:text-2xl font-black text-[#000080] tracking-tight leading-none mb-1 lg:mb-3">
                                        Volunteer <span className="text-orange-600">Form</span>
                                    </h1>
                                    <p className="hidden lg:block text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Application Form • 2026</p>
                                </div>
                                <div className="lg:hidden">
                                    <div className="bg-[#000080] text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                        Step {step}/4
                                    </div>
                                </div>
                            </div>

                            <div className="flex lg:flex-col gap-2 lg:space-y-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar">
                                {[
                                    { s: 1, label: "Personal", desc: "Credentials", icon: User },
                                    { s: 2, label: "Experience", desc: "Profile", icon: Briefcase },
                                    { s: 3, label: "Availability", desc: "Metrics", icon: Clock },
                                    { s: 4, label: "Verification", desc: "Export", icon: FileText },
                                ].map((item) => (
                                    <div
                                        key={item.s}
                                        className={`flex items-center gap-3 p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-500 border-2 shrink-0 lg:shrink ${step === item.s ? "bg-white border-[#000080] shadow-lg lg:shadow-xl shadow-blue-900/5 lg:translate-x-2 lg:scale-102" : step > item.s ? "border-transparent opacity-60" : "border-transparent opacity-40 grayscale"}`}
                                    >
                                        <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center transition-all ${step >= item.s ? "bg-[#000080] text-white shadow-lg shadow-blue-900/20" : "bg-slate-200 text-slate-400"}`}>
                                            {step > item.s ? <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" /> : <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />}
                                        </div>
                                        <div className={`${step === item.s ? "block" : "hidden lg:block"}`}>
                                            <p className={`text-[10px] lg:text-[11px] font-black uppercase tracking-widest ${step >= item.s ? "text-[#000080]" : "text-slate-400"}`}>{item.label}</p>
                                            <p className="hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Official Sign Off area for Desktop */}
                        <div className="hidden lg:block pt-10">
                            <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100/30">
                                <p className="text-[10px] font-black text-[#000080] uppercase tracking-widest leading-relaxed">
                                    Official Intake <br />
                                    <span className="text-slate-400 font-bold">HSGA REGISTRAR UNIT</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: SCROLLABLE CONTENT */}
                    <div className="flex-grow flex flex-col relative overflow-hidden h-full">

                        {/* SCROLLABLE AREA */}
                        <div ref={scrollRef} className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-12 print:overflow-visible">

                            {/* STEP CONTENT WRAPPER */}
                            <div className="max-w-4xl mx-auto w-full pb-32">

                                {/* STEP 1: PERSONAL */}
                                {step === 1 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                                            {/* Photo Upload Area */}
                                            <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
                                                <div className={`group relative w-36 h-44 md:w-40 md:h-48 rounded-[1.5rem] border-2 border-dashed flex items-center justify-center overflow-hidden transition-all duration-500 ${formData.photo ? 'border-[#000080] shadow-2xl shadow-blue-900/10' : 'border-slate-200 bg-slate-50'}`}>
                                                    {formData.photo ? (
                                                        <>
                                                            <img src={formData.photo} alt="Profile" className="w-full h-full object-cover" />
                                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <button
                                                                    onClick={() => handleInputChange("photo", null)}
                                                                    className="p-4 bg-red-500 text-white rounded-2xl transform hover:scale-110 transition-all font-black"
                                                                >
                                                                    <X className="w-6 h-6" />
                                                                </button>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="text-center p-6">
                                                            <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                                                                Applicant Photo<br />
                                                                <span className="text-orange-600">(MAX 1MB)</span>
                                                            </p>
                                                        </div>
                                                    )}
                                                    {!formData.photo && (
                                                        <input
                                                            type="file"
                                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                                            accept="image/*"
                                                            onChange={handlePhotoUpload}
                                                        />
                                                    )}
                                                </div>
                                                {errors.photo && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">{errors.photo}</p>}
                                            </div>

                                            <div className="w-full lg:w-2/3 space-y-4">
                                                <SectionHeader title="Candidate Identity" />
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                    <InputField label="First Name" value={formData.firstName} error={errors.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                                                    <InputField label="Middle Name" value={formData.middleName} onChange={(e) => handleInputChange("middleName", e.target.value)} />
                                                    <InputField label="Last Name" value={formData.lastName} error={errors.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                    <InputField label="Date of Birth" type="date" value={formData.dob} onChange={(e) => handleInputChange("dob", e.target.value)} />
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Biological Gender</label>
                                                        <div className="flex gap-2 p-2 bg-slate-50 border-2 border-slate-50 rounded-xl">
                                                            {['Male', 'Female', 'Other'].map(g => (
                                                                <label key={g} className="flex items-center gap-2 cursor-pointer group grow">
                                                                    <input type="radio" checked={formData.gender === g} onChange={() => handleInputChange("gender", g)} className="accent-[#000080] w-3 h-3 cursor-pointer" />
                                                                    <span className="text-[10px] font-black text-slate-600 group-hover:text-[#000080] transition-colors uppercase tracking-tighter">{g}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <SectionHeader title="Digital Nodes & Mobility" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InputField label="Primary Email" type="email" value={formData.email} error={errors.email} onChange={(e) => handleInputChange("email", e.target.value)} />
                                            <InputField label="Contact Number" type="tel" value={formData.phone} error={errors.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                        </div>

                                        <SectionHeader title="Residential Domicile" />
                                        <div className="space-y-4">
                                            <InputField label="Full Permanent Address" value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} />
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <InputField label="City / Zone" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} />
                                                <InputField label="State Unit" value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} />
                                                <InputField label="Postal Index (PIN)" value={formData.pinCode} error={errors.pinCode} onChange={(e) => handleInputChange("pinCode", e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: PROFESSIONAL */}
                                {step === 2 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                        <SectionHeader title="Educational Credentials" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InputField label="Highest Qualification" value={formData.qualification} error={errors.qualification} onChange={(e) => handleInputChange("qualification", e.target.value)} />
                                            <InputField label="Year of Completion" value={formData.gradYear} onChange={(e) => handleInputChange("gradYear", e.target.value)} />
                                        </div>
                                        <SectionHeader title="Employment Status" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InputField label="Current Occupation" value={formData.occupation} onChange={(e) => handleInputChange("occupation", e.target.value)} />
                                            <InputField label="Current Organization" value={formData.organization} onChange={(e) => handleInputChange("organization", e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Skill-Sets & Motivation Statement</label>
                                            <textarea
                                                className="w-full h-32 p-5 bg-slate-50 border-2 border-slate-50 rounded-[1.5rem] text-[14px] font-bold text-slate-900 focus:border-[#000080] focus:bg-white outline-none transition-all resize-none shadow-sm placeholder:text-slate-300"
                                                placeholder="Describe your unique skills (e.g., First Aid, Teaching, IT, Music) and your primary motivation for joining HSGA..."
                                                value={formData.skills}
                                                onChange={(e) => handleInputChange("skills", e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3: AVAILABILITY */}
                                {step === 3 && (
                                    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                                        <div>
                                            <SectionHeader title="Service Deployment Matrix" />
                                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mt-4">
                                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                                    <label
                                                        key={day}
                                                        className={`flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all duration-300 cursor-pointer ${formData.days.includes(day) ? 'bg-[#000080] border-[#000080] text-white shadow-2xl translate-y-[-6px]' : 'bg-white border-slate-50 text-slate-500 hover:border-[#000080]/20 hover:bg-slate-50'}`}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            className="hidden"
                                                            checked={formData.days.includes(day)}
                                                            onChange={(e) => {
                                                                const newVal = e.target.checked
                                                                    ? [...formData.days, day]
                                                                    : formData.days.filter(d => d !== day);
                                                                handleInputChange("days", newVal);
                                                            }}
                                                        />
                                                        <span className="text-[11px] font-black uppercase tracking-tighter mb-3">{day.slice(0, 3)}</span>
                                                        <div className={`w-2.5 h-2.5 rounded-full transition-transform duration-500 ${formData.days.includes(day) ? 'bg-orange-500 scale-125' : 'bg-slate-200 scale-100'}`} />
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <SectionHeader title="Operational Time Parameters" />
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                {['Morning (8AM - 12PM)', 'Afternoon (12PM - 4PM)', 'Evening (4PM - 8PM)'].map(t => (
                                                    <label key={t} className={`flex items-center gap-5 px-8 py-6 rounded-[2rem] border-2 transition-all cursor-pointer group ${formData.time.includes(t) ? 'bg-[#000080]/5 border-[#000080] shadow-lg' : 'bg-white border-slate-50 hover:border-slate-200'}`}>
                                                        <input
                                                            type="checkbox"
                                                            className="w-6 h-6 accent-[#000080] cursor-pointer"
                                                            checked={formData.time.includes(t)}
                                                            onChange={(e) => {
                                                                const newVal = e.target.checked
                                                                    ? [...formData.time, t]
                                                                    : formData.time.filter(item => item !== t);
                                                                handleInputChange("time", newVal);
                                                            }}
                                                        />
                                                        <span className={`text-[12px] font-black tracking-tight uppercase ${formData.time.includes(t) ? 'text-[#000080]' : 'text-slate-600'}`}>{t.split('(')[0]}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-6 bg-orange-50 border-2 border-orange-100 rounded-[2rem] relative overflow-hidden">
                                            <div className="absolute top-[-20px] right-[-20px] opacity-[0.05]">
                                                <BadgeCheck className="w-32 h-32 rotate-12 text-[#000080]" />
                                            </div>
                                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-orange-900/10">
                                                    <BadgeCheck className="w-5 h-5 text-orange-600" />
                                                </div>
                                                <h4 className="text-[11px] font-black text-orange-800 uppercase tracking-[0.2em]">Official Declaration</h4>
                                            </div>
                                            <p className="text-[13px] text-orange-950/80 leading-relaxed font-bold italic mb-6 max-w-2xl relative z-10">
                                                "I solemnly swear that all information submitted is verified and authentic. I pledge to serve with unyielding integrity, upholding the core values of the HSGA Telangana State Council."
                                            </p>
                                            <label className="flex items-center gap-3 cursor-pointer group bg-white p-3 rounded-xl border-2 border-orange-200 shadow-xl shadow-orange-900/5 max-w-[240px] relative z-10 hover:border-orange-500 transition-all active:scale-95">
                                                <div className="relative w-5 h-5 border-2 border-orange-300 rounded-md flex items-center justify-center transition-all group-hover:border-orange-500 overflow-hidden">
                                                    <input type="checkbox" required className="w-full h-full opacity-0 absolute cursor-pointer z-10" />
                                                    <div className="w-full h-full bg-orange-600 scale-0 group-has-[:checked]:scale-100 transition-transform duration-300 flex items-center justify-center">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-black text-orange-950 uppercase tracking-widest">I Consent & Certify</span>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 4: REVIEW & DOWNLOAD */}
                                {step === 4 && (
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-700 space-y-16 print:p-0">

                                        {/* Official Header for PDF/Print */}
                                        <div className="hidden print:flex items-center justify-between border-b-8 border-[#000080] pb-12 mb-16">
                                            <div className="flex items-center gap-10">
                                                <img src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png" className="w-28 h-28" alt="HSGA State Seal" />
                                                <div>
                                                    <h1 className="text-4xl font-black text-[#000080] tracking-tighter mb-2">HSGA TS STATE COUNCIL</h1>
                                                    <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.5em]">Enrollment Record Node #TX-2026</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="inline-block bg-slate-900 text-white px-6 py-3 rounded-2xl mb-3">
                                                    <p className="text-[12px] font-black tracking-[0.2em]">ID: HSGA-0092-TX</p>
                                                </div>
                                                <p className="text-sm font-black text-[#000080] uppercase tracking-widest">Validated Enrollment Session</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col xl:flex-row gap-8 lg:gap-16">
                                            {/* Summary Step Photo */}
                                            <div className="w-full sm:w-56 h-72 sm:h-72 md:w-64 md:h-80 shrink-0 bg-slate-50 rounded-[3rem] overflow-hidden border-8 border-[#000080]/10 shadow-3xl relative flex items-center justify-center mx-auto lg:mx-0">
                                                {formData.photo ? (
                                                    <img src={formData.photo} alt="Validated Identifier" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="text-center p-8">
                                                        <User className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">No Photo Attached</p>
                                                    </div>
                                                )}
                                                <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-xl shadow-lg border-2 border-white/20">
                                                    <BadgeCheck className="w-5 h-5" />
                                                </div>
                                            </div>

                                            <div className="grow space-y-8 lg:space-y-10">
                                                <div className="bg-slate-50/50 p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 shadow-sm relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/5 rounded-full -mr-16 -mt-16" />
                                                    <ReviewItem label="Full Legal Identity" value={`${formData.firstName} ${formData.middleName} ${formData.lastName}`} className="col-span-2 md:col-span-2 lg:col-span-3" />
                                                    <ReviewItem label="Birth Date" value={formData.dob} />
                                                    <ReviewItem label="Biological Gender" value={formData.gender} />
                                                    <ReviewItem label="Validated Contact" value={formData.phone} />
                                                    <ReviewItem label="Digital Node" value={formData.email} className="col-span-2" />
                                                </div>
                                                <div className="bg-slate-50/50 p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-100 space-y-6 lg:space-y-8 shadow-sm">
                                                    <ReviewItem label="Permanent State Domicile" value={formData.address} />
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
                                                        <ReviewItem label="City Council" value={formData.city} />
                                                        <ReviewItem label="State Unit" value={formData.state} />
                                                        <ReviewItem label="Postal Index" value={formData.pinCode} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                            <div className="bg-slate-50/50 p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-100 space-y-6 lg:space-y-8 shadow-sm">
                                                <SectionHeader title="Professional Matrix" />
                                                <div className="space-y-4 lg:space-y-6">
                                                    <ReviewItem label="Credentials" value={formData.qualification} />
                                                    <ReviewItem label="Primary Occupation" value={formData.occupation} />
                                                    <ReviewItem label="Organization Node" value={formData.organization} />
                                                </div>
                                            </div>
                                            <div className="bg-slate-50/50 p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-100 space-y-6 lg:space-y-8 shadow-sm">
                                                <SectionHeader title="Service Parameters" />
                                                <div className="space-y-4 lg:space-y-6">
                                                    <ReviewItem label="Deployment Cycle" value={formData.days.join(", ") || "Awaiting Matrix Selection..."} />
                                                    <ReviewItem label="Time Schedules" value={formData.time.join(", ") || "Awaiting Time Parameters..."} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skills Box */}
                                        <div className="bg-[#000080] p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-3xl shadow-blue-900/40 border-4 border-blue-800">
                                            <div className="absolute top-[-40px] left-[-40px] opacity-[0.05]">
                                                <FileText className="w-64 h-64" />
                                            </div>
                                            <h5 className="text-[11px] lg:text-[12px] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] text-blue-300 mb-6 lg:mb-8 flex items-center gap-4">
                                                <div className="w-6 lg:w-8 h-[2px] lg:h-[3px] bg-orange-500 rounded-full" /> Applicant Statement
                                            </h5>
                                            <p className="text-[15px] lg:text-[17px] font-bold leading-[1.6] lg:leading-[1.8] opacity-95 italic relative z-10 first-letter:text-4xl lg:first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 lg:first-letter:mr-4 first-letter:mt-1 lg:first-letter:mt-2 text-blue-50">
                                                "{formData.skills || "The behavioral node for expertise and motivation has not been populated for this candidate intake cycle."}"
                                            </p>
                                        </div>

                                        {/* Official Sign Off area for Print */}
                                        <div className="hidden print:grid grid-cols-2 gap-32 mt-48 pt-20 border-t-4 border-slate-100">
                                            <div className="text-center">
                                                <div className="h-[2px] bg-slate-900 w-full mb-8 shadow-sm" />
                                                <p className="text-[12px] font-black uppercase text-slate-800 tracking-[0.3em]">Signature of High Contracting Party</p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">Official Candidate Signature</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="h-[2px] bg-slate-900 w-full mb-8 shadow-sm" />
                                                <p className="text-[12px] font-black uppercase text-slate-800 tracking-[0.3em]">State Registrar Validation</p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">HSGA OFFICIAL SEAL REQUIRED</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* NAVIGATION FOOTER (Fixed at bottom of right panel) */}
                        <div className="p-4 md:p-6 lg:p-8 bg-white border-t border-slate-100 flex justify-between items-center print:hidden shadow-[0_-15px_60px_-20px_rgba(0,0,0,0.1)] relative z-50">
                            <button
                                onClick={prevStep}
                                disabled={step === 1}
                                className={`flex items-center gap-2 lg:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl lg:rounded-[1.5rem] text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${step === 1 ? "opacity-0 pointer-events-none" : "bg-white border-2 border-slate-50 text-slate-400 hover:text-slate-900 hover:border-slate-200 hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0"
                                    }`}
                            >
                                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" /> Back
                            </button>

                            <div className="flex gap-2 lg:gap-4">
                                {step === 4 && (
                                    <button
                                        onClick={handlePrint}
                                        className="hidden sm:flex items-center gap-4 px-8 py-4 bg-white border-2 border-[#000080] text-[#000080] rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/10 active:scale-95 group"
                                    >
                                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" /> Export
                                    </button>
                                )}

                                {step < 4 ? (
                                    <button
                                        onClick={nextStep}
                                        className="flex items-center gap-3 lg:gap-4 px-6 md:px-10 py-3 md:py-5 bg-[#000080] text-white rounded-xl lg:rounded-[1.5rem] text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-900 transition-all shadow-3xl shadow-blue-900/30 active:scale-90 group"
                                    >
                                        Continue <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                ) : (
                                    <button className="flex items-center gap-3 lg:gap-4 px-6 md:px-10 py-3 md:py-5 bg-orange-600 text-white rounded-xl lg:rounded-[1.5rem] text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-3xl shadow-orange-900/30 active:scale-90 group">
                                        Submit <Send className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="print:hidden">
                <BottomBanner />
            </div>

            <style jsx global>{`
                @media print {
                    @page { margin: 10mm; }
                    body { background: white !important; font-family: 'Outfit', sans-serif !important; }
                    .print-content { transform: scale(0.98); transform-origin: top; }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f8fafc;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #94a3b8;
                    border-radius: 20px;
                    border: 2px solid #f8fafc;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #64748b;
                }
                @media (min-height: 900px) {
                    body { overflow: hidden; }
                }
            `}</style>
        </div>
    );
};

export default RegistrationPage;