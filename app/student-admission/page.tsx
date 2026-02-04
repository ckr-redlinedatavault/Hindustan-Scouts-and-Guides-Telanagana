"use client";

import React, { useState, useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    User,
    School,
    BookOpen,
    Upload,
    X,
    Building2,
    CheckCircle2,
    FileText,
    MapPin,
    BadgeCheck,
    CreditCard,
    ShieldAlert,
    Clock,
    UserCheck,
    Calendar,
    Phone
} from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";

// --- Form Helpers ---
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
    placeholder?: string;
}

const InputField = ({ label, type = "text", value, onChange, error, placeholder }: InputFieldProps) => (
    <div className="space-y-2 w-full group">
        <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest group-focus-within:text-[#000080] transition-colors">{label}</label>
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full px-5 py-3.5 bg-slate-50 border-2 rounded-2xl text-[14px] font-bold transition-all focus:outline-none focus:bg-white shadow-sm placeholder:text-slate-300 ${error ? 'border-red-500 bg-red-50 text-red-900' : 'border-slate-100 text-slate-900 focus:border-[#000080]'}`}
                placeholder={placeholder || `Enter ${label.toLowerCase()}...`}
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
    <div className={`space-y-1 ${className}`}>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-[15px] font-bold text-slate-900 break-words">{value || "---"}</p>
    </div>
);

const StudentAdmissionPage = () => {
    const [step, setStep] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        district: "",
        schoolName: "",
        studentName: "",
        fatherName: "",
        dob: "",
        studentClass: "",
        aadharNo: "",
        address: "",
        phone: "",
        photo: null as string | null,
    });

    const [errors, setErrors] = useState<any>({});

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            const newErrors = { ...errors };
            delete newErrors[field];
            setErrors(newErrors);
        }
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                setErrors({ ...errors, photo: "File size exceeds 1MB limit" });
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                handleInputChange("photo", reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const nextStep = () => {
        const newErrors: any = {};
        if (step === 1) {
            if (!formData.studentName) newErrors.studentName = "Required";
            if (!formData.fatherName) newErrors.fatherName = "Required";
            if (!formData.studentClass) newErrors.studentClass = "Required";
        }
        if (step === 2) {
            if (!formData.schoolName) newErrors.schoolName = "Required";
            if (!formData.district) newErrors.district = "Required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
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

    return (
        <div className="min-h-screen bg-white flex flex-col font-outfit text-slate-900">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow flex items-center justify-center lg:px-4 lg:py-4 bg-slate-50/50 overflow-hidden">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row bg-white border-0 lg:border border-slate-200 lg:rounded-[1.5rem] shadow-none lg:shadow-[0_10px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden h-[calc(100vh-140px)] lg:h-[750px] lg:max-h-[calc(100vh-180px)] min-h-[500px] transition-all duration-300">

                    {/* SIDENAV */}
                    <div className="w-full lg:w-80 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 p-6 lg:p-8 flex flex-col lg:justify-between shrink-0">
                        <div className="flex flex-col gap-6 lg:gap-8">
                            <div>
                                <h1 className="text-xl lg:text-2xl font-black text-[#000080] tracking-tight leading-none mb-1 lg:mb-3">
                                    Student <span className="text-orange-600">Admission</span>
                                </h1>
                                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Formal Intake Record • 2026</p>
                            </div>

                            <div className="flex lg:flex-col gap-2 lg:space-y-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar">
                                {[
                                    { s: 1, label: "Identity", desc: "Student Info", icon: User },
                                    { s: 2, label: "Academic", desc: "Institution", icon: School },
                                    { s: 3, label: "Declaration", desc: "Digital Sign", icon: UserCheck },
                                    { s: 4, label: "Archive", desc: "Record View", icon: FileText },
                                ].map((item) => (
                                    <div
                                        key={item.s}
                                        className={`flex items-center gap-3 p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-500 border-2 shrink-0 lg:shrink ${step === item.s ? "bg-white border-[#000080] shadow-xl shadow-blue-900/5 lg:translate-x-2 lg:scale-102" : step > item.s ? "border-transparent opacity-60" : "border-transparent opacity-40 grayscale"}`}
                                    >
                                        <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center transition-all ${step >= item.s ? "bg-[#000080] text-white" : "bg-slate-200 text-slate-400"}`}>
                                            {step > item.s ? <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5" /> : <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />}
                                        </div>
                                        <div className={`${step === item.s ? "block" : "hidden lg:block"}`}>
                                            <p className={`text-[10px] lg:text-[11px] font-black uppercase tracking-widest ${step >= item.s ? "text-[#000080]" : "text-slate-400"}`}>{item.label}</p>
                                            <p className="hidden lg:block text-[9px] font-bold text-slate-400 uppercase">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block p-6 bg-blue-50/50 rounded-2xl border border-blue-100/30">
                            <p className="text-[10px] font-black text-[#000080] uppercase tracking-widest leading-relaxed">
                                HSGA TS COUNCIL <br />
                                <span className="text-slate-400 font-bold">EDUCATIONAL RECORD #2026</span>
                            </p>
                        </div>
                    </div>

                    {/* CONTENT AREA */}
                    <div className="flex-grow flex flex-col relative overflow-hidden h-full">
                        <div ref={scrollRef} className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-12">
                            <div className="max-w-4xl mx-auto w-full pb-32">

                                {/* STEP 1: IDENTITY */}
                                {step === 1 && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                        <SectionHeader title="Candidate Identity" />
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
                                                <div className={`group relative w-36 h-44 md:w-40 md:h-48 rounded-[1.5rem] border-2 border-dashed flex items-center justify-center overflow-hidden transition-all duration-500 ${formData.photo ? 'border-[#000080] shadow-2xl shadow-blue-900/10' : 'border-slate-200 bg-slate-50'}`}>
                                                    {formData.photo ? (
                                                        <img src={formData.photo} alt="Profile" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="text-center p-6">
                                                            <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Applicant Photo</p>
                                                        </div>
                                                    )}
                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={handlePhotoUpload} />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-2/3 space-y-4">
                                                <InputField label="Name of the Student" value={formData.studentName} error={errors.studentName} onChange={(e) => handleInputChange("studentName", e.target.value)} />
                                                <InputField label="Father's Name" value={formData.fatherName} error={errors.fatherName} onChange={(e) => handleInputChange("fatherName", e.target.value)} />
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <InputField label="Date of Birth" type="date" value={formData.dob} onChange={(e) => handleInputChange("dob", e.target.value)} />
                                                    <InputField label="Class" value={formData.studentClass} error={errors.studentClass} placeholder="e.g. 10th / Intermediate..." onChange={(e) => handleInputChange("studentClass", e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <InputField label="Student Aadhar No." value={formData.aadharNo} placeholder="12-digit number..." onChange={(e) => handleInputChange("aadharNo", e.target.value)} />
                                    </div>
                                )}

                                {/* STEP 2: ACADEMIC & CONTACT */}
                                {step === 2 && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                        <SectionHeader title="Institution & Contact" />
                                        <InputField label="Name of the School/College" value={formData.schoolName} error={errors.schoolName} placeholder="Enter institution name..." onChange={(e) => handleInputChange("schoolName", e.target.value)} />
                                        <InputField label="District" value={formData.district} error={errors.district} onChange={(e) => handleInputChange("district", e.target.value)} />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InputField label="Phone No." type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                                            <div className="w-full" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Residential Address</label>
                                            <textarea
                                                className="w-full h-32 p-5 bg-slate-50 border-2 border-slate-50 rounded-[1.5rem] text-[14px] font-bold text-slate-900 focus:border-[#000080] outline-none transition-all resize-none shadow-sm placeholder:text-slate-300"
                                                value={formData.address}
                                                onChange={(e) => handleInputChange("address", e.target.value)}
                                                placeholder="Enter entry details of permanent residency..."
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3: DECLARATION */}
                                {step === 3 && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                        <div className="p-8 bg-orange-50 border-2 border-orange-100 rounded-[2.5rem] relative overflow-hidden">
                                            <div className="absolute top-[-20px] right-[-20px] opacity-[0.05]">
                                                <BadgeCheck className="w-32 h-32 text-[#000080]" />
                                            </div>
                                            <SectionHeader title="Student Declaration" />
                                            <p className="text-[15px] text-orange-950/80 leading-relaxed font-bold italic mb-8 relative z-10">
                                                "I, Mr./Ms. <span className="text-[#000080] underline">{formData.studentName || '_________'}</span> voluntarily wish to join the <span className="text-[#000080] font-black">Hindustan Scouting/Guiding Program</span> in my School/College. I understand and agree to actively participate in all indoor and outdoor activities conducted as part of the program."
                                            </p>
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border-2 border-orange-200 shadow-xl shadow-orange-900/5 max-w-sm">
                                                <div className="p-3 bg-orange-600 rounded-xl text-white">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <p className="text-[10px] font-black text-orange-950 uppercase tracking-widest leading-none">Accepted & Verified</p>
                                            </div>
                                        </div>

                                        <div className="p-8 bg-blue-50/50 border-2 border-blue-100 rounded-[2.5rem] space-y-6">
                                            <div className="flex items-center gap-4">
                                                <ShieldAlert className="w-8 h-8 text-[#000080]" />
                                                <h4 className="text-[12px] font-black text-[#000080] uppercase tracking-widest">Coordinator / Principal Declaration</h4>
                                            </div>
                                            <p className="text-[13px] text-slate-600 font-bold leading-relaxed">
                                                "We have gone through the contents of this Scouting/Guiding programmed by our authorities and we support to conduct both the indoor and outdoor Scouting /Guiding program by our students, we have no objectionable contents in implementing this program in our school/College."
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 4: REVIEW */}
                                {step === 4 && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
                                        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                                            <div className="w-48 h-60 shrink-0 bg-slate-50 rounded-[2.5rem] overflow-hidden border-8 border-[#000080]/10 shadow-3xl flex items-center justify-center">
                                                {formData.photo ? <img src={formData.photo} alt="Review" className="w-full h-full object-cover" /> : <User className="w-16 h-16 text-slate-200" />}
                                            </div>
                                            <div className="grow space-y-10">
                                                <div className="bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 grid grid-cols-2 gap-8 shadow-sm">
                                                    <ReviewItem label="Student Registration" value={formData.studentName} className="col-span-2" />
                                                    <ReviewItem label="Parent / Guardian" value={formData.fatherName} />
                                                    <ReviewItem label="Class Record" value={formData.studentClass} />
                                                    <ReviewItem label="Aadhar Node" value={formData.aadharNo} />
                                                    <ReviewItem label="Contact Digit" value={formData.phone} />
                                                </div>
                                                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex items-center gap-6 shadow-2xl relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -mr-16 -mt-16" />
                                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                                                        <School className="w-6 h-6 text-orange-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[13px] font-black uppercase tracking-widest text-orange-500">{formData.schoolName || 'Institution Pending'}</p>
                                                        <p className="text-[11px] font-bold text-white/60 mt-1 uppercase">DISTRICT UNIT: {formData.district || 'NOT ASSIGNED'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* NAV FOOTER */}
                        <div className="p-4 md:p-6 lg:p-8 bg-white border-t border-slate-100 flex justify-between items-center relative z-50">
                            <button
                                onClick={prevStep}
                                disabled={step === 1}
                                className={`flex items-center gap-2 lg:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl lg:rounded-[1.5rem] text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "bg-white border-2 border-slate-50 text-slate-400 hover:text-slate-900"}`}
                            >
                                <ChevronLeft className="w-4 h-4" /> Back
                            </button>
                            <button
                                onClick={step === 4 ? () => { } : nextStep}
                                className={`flex items-center gap-3 lg:gap-4 px-6 md:px-10 py-3 md:py-5 text-white rounded-xl lg:rounded-[1.5rem] text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-3xl ${step === 4 ? "bg-orange-600 hover:bg-orange-700" : "bg-[#000080] hover:bg-blue-900"}`}
                            >
                                {step === 4 ? "Submit Admission" : "Continue"} <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <BottomBanner />

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 20px; border: 2px solid #f8fafc; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
            `}</style>
        </div>
    );
};

export default StudentAdmissionPage;
