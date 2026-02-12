"use client";

import React, { useState } from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import BottomBanner from "@/components/BottomBanner";
import { Maximize2, X, Image as ImageIcon, Filter } from "lucide-react";

interface GalleryImage {
    url: string;
    title: string;
    category: string;
}

const GalleryPage = () => {
    const [filter, setFilter] = useState("all");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const categories = [
        { id: "all", name: "All Media" },
        { id: "training", name: "Training" },
        { id: "adventure", name: "Adventure" },
        { id: "ceremony", name: "Ceremony" }
    ];

    const galleryImages: GalleryImage[] = [
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg", title: "National Training", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/b_og8pcm.jpg", title: "Service Project", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516918/c_bd5giu.jpg", title: "Mountain Hiking", category: "adventure" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516918/d_vuur8l.jpg", title: "Campfire Night", category: "adventure" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516918/e_bl14v8.jpg", title: "Outdoor Skills", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516921/f_lu58uo.jpg", title: "Morning Assembly", category: "ceremony" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/g_p6d38b.jpg", title: "Drill Practice", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/h_aadvu8.jpg", title: "Leadership Talk", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/i_mdzjev.jpg", title: "Woodcraft", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516923/j_dm0qc0.jpg", title: "Forest Trail", category: "adventure" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516924/k_zf6kqi.jpg", title: "Eco Awareness", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516925/l_fvzm9c.jpg", title: "State Rally", category: "ceremony" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516925/m_qoqk8g.jpg", title: "Nature Study", category: "adventure" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516926/n_wg256c.jpg", title: "High Altitude Camp", category: "adventure" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516926/o_efltwm.jpg", title: "Parade Ground", category: "ceremony" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516927/p_ngiwmz.jpg", title: "Yoga & Wellness", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516928/q_ly7xyj.jpg", title: "Flag Ceremony", category: "ceremony" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516928/r_dxnvqb.jpg", title: "Group Expedition", category: "adventure" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516929/s_wfu3xi.jpg", title: "Compass Work", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516930/t_x9z3hj.jpg", title: "Team Building", category: "training" },
        { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516930/u_vuqxbg.jpg", title: "Field Activities", category: "adventure" },
    ];

    const filteredImages = filter === "all"
        ? galleryImages
        : galleryImages.filter((img: GalleryImage) => img.category === filter);

    return (
        <div className="min-h-screen bg-white flex flex-col font-outfit text-slate-900">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-[#000080] pt-16 pb-14 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }} />
                    </div>
                    <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-6 font-[1000]">
                                <span className="h-[1.5px] w-10 bg-orange-500"></span>
                                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Official Media Archive</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-[1000] mb-6 tracking-tighter leading-[1.1]">
                                Our <span className="text-orange-500">Visual Gallery</span>
                            </h1>
                            <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-orange-600 pl-8">
                                Visual documentation of training, service projects, and scouting excellence across the state of Telangana.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="max-w-[1500px] mx-auto px-6 py-12">
                    <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-100 pb-10">
                        <div className="flex items-center gap-2 mr-6 text-slate-400">
                            <Filter className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Filter Archive</span>
                        </div>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${filter === cat.id
                                    ? "bg-[#000080] text-white border-[#000080]"
                                    : "bg-white text-slate-500 border-slate-100 hover:border-orange-500 hover:text-orange-600"
                                    } rounded-none`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Image Grid */}
                <div className="max-w-[1500px] mx-auto px-6 pb-24">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative group break-inside-avoid overflow-hidden cursor-pointer bg-slate-50 border border-slate-100 rounded-none"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#000080]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="flex items-center justify-between text-white">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2">{image.category}</p>
                                            <h3 className="text-sm font-black uppercase tracking-tight leading-tight">{image.title}</h3>
                                        </div>
                                        <div className="bg-orange-600 p-3 rounded-none">
                                            <Maximize2 className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div className="fixed inset-0 z-[200] bg-[#000080]/95 flex items-center justify-center p-6 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
                        <button className="absolute top-10 right-10 text-white hover:text-orange-500 transition-colors">
                            <X className="w-10 h-10" />
                        </button>
                        <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[75vh] object-contain border-[10px] border-white/10 shadow-2xl rounded-none"
                            />
                            <div className="mt-10 text-center text-white">
                                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-2">{selectedImage.category}</p>
                                <h4 className="text-3xl font-[1000] tracking-tighter uppercase">{selectedImage.title}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                :root { font-family: 'Inter', sans-serif; }
            `}</style>
        </div>
    );
};

export default GalleryPage;