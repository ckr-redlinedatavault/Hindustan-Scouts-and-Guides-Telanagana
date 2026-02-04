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

    // The 22 images provided by the user
    const galleryImages = [
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
        : galleryImages.filter(img => img.category === filter);

    return (
        <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-outfit text-slate-800">
            <TopBanner />
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200">
                <Navbar />
            </div>
            <Breadcrumbs />

            <main className="flex-grow">
                {/* Minimal Header */}
                <div className="bg-[#000066] py-12 md:py-16 text-white text-center md:text-left">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-orange-400 mb-3">
                            <ImageIcon className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Official Media Archive</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Our <span className="text-orange-500">Gallery</span>
                        </h1>
                        <p className="text-blue-100/80 text-lg max-w-xl font-medium">
                            Visual documentation of training, service projects, and scouting excellence across Telangana.
                        </p>
                    </div>
                </div>

                {/* Filter Bar - Clean & Minimal */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="flex items-center gap-2 mr-4 text-slate-400">
                            <Filter className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Filter:</span>
                        </div>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${filter === cat.id
                                    ? "bg-[#000066] text-white shadow-lg shadow-blue-900/20"
                                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Image Grid */}
                <div className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-slate-200 border border-slate-100"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex items-center justify-between text-white">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1">{image.category}</p>
                                            <h3 className="text-sm font-bold leading-tight">{image.title}</h3>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                                            <Maximize2 className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox / Full View */}
                {selectedImage && (
                    <div className="fixed inset-0 z-[200] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
                        <button className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors p-2">
                            <X className="w-8 h-8" />
                        </button>
                        <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="mt-6 text-center text-white">
                                <h4 className="text-xl font-bold">{selectedImage.title}</h4>
                                <p className="text-slate-400 text-sm mt-1 uppercase tracking-widest">{selectedImage.category}</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <BottomBanner />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>
        </div>
    );
};

export default GalleryPage;