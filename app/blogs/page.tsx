"use client";

import React, { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
    Calendar, Newspaper, ArrowRight, Tag, Bell,
    Search, Info, BookOpen, Globe, Activity, Trophy, Users, Target,
    Clock, Share2, Bookmark, MessageCircle, MoreHorizontal,
    ThumbsUp, MessageSquare, Twitter, Linkedin, Facebook, Link as LinkIcon,
    ChevronLeft, Check
} from "lucide-react";

const BlogsPage = () => {
    const [selectedNews, setSelectedNews] = React.useState<any>(null);
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [likes, setLikes] = useState<Record<number, number>>({});
    const [isBookmarked, setIsBookmarked] = useState<Record<number, boolean>>({});

    const categories = ["All", "Official", "Events", "Training", "Mission 2030", "Framework"];

    const newsItems = [
        {
            id: 1,
            title: "Formation of HSGA Telangana State Executive Committee",
            date: `Feb 02, ${new Date().getFullYear()}`,
            category: "Official",
            author: "State Headquarters",
            authorRole: "Administrative Body",
            readTime: "5 min read",
            image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771839944/WhatsApp_Image_2026-02-22_at_12.39.50_1_vywsen.jpg",
            contentImages: [
                "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095857/WhatsApp_Image_2026-02-15_at_12.30.02_AM_ywgemn.jpg",
                "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.03_AM_1_cz2zi1.jpg"
            ],
            excerpt: "The state committee has been formally established with new leadership appointments to drive scouting initiatives across all districts of Telangana.",
            content: `The formal establishment of the HSGA Telangana State Executive Committee represents a watershed moment for scouting in the region. After months of meticulous planning and democratic consultation, a diverse panel of 24 members has been sworn in, bringing together decades of experience in youth mentoring, disaster relief, and educational reform.

This committee is not just a governing body; it is a catalyst for grassroots transformation. During the inaugural session at the State Headquarters, the newly appointed Commissioner outlined a 5-year vision focused on "Digital Sovereignty and Rural Resilience." The strategy involves deploying a specialized mobile app for member tracking, ensuring that every scout from Adilabad to Jogulamba Gadwal has a verifiable digital identity and access to state-certified proficiency manuals.

Key immediate priorities include the revitalization of local district lodges, the standardization of the Praveshika training methodology, and a statewide infrastructure audit for all camping grounds. We are also establishing a dedicated "Scout Relief Fund" to support members representing Telangana at national and international jamborees. The collective expertise of this committee guarantees that HSGA Telangana will remain the leading youth movement in the state, fostering a generation of disciplined, empathetic, and technologically adept citizens.`,
        },
        {
            id: 3,
            title: "National Science Day Celebration & Innovation Fair",
            date: "Feb 19, 2025",
            category: "Events",
            author: "Media Cell",
            authorRole: "Editorial Team",
            readTime: "4 min read",
            image: "https://cdn.cdnparenting.com/articles/2021/02/23135728/1913572111.webp",
            contentImages: [
                "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095860/WhatsApp_Image_2026-02-15_at_12.30.06_AM_3_ue5pux.jpg",
                "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.04_AM_sruudm.jpg"
            ],
            excerpt: "Telangana scouts participated in a grand exhibition showcasing innovative projects in renewable energy and sustainable scouting.",
            content: `National Science Day transformed the scouting landscape into a vibrant hub of curiosity and problem-solving. Over 5,000 scouts from 200 schools across Telangana converged for the much-anticipated Innovation Fair, demonstrating that the scout's motto, "Be Prepared," applies just as much to scientific inquiry as it does to outdoor survival.

The fair featured a breathtaking array of projects. One of the standout exhibits was a "Gravity-Fed Irrigation System" designed by a group of Rovers from Warangal, aimed at helping small-scale farmers optimize water usage without electricity. Another highlight was the "Sustainable Scout Kit," which used recycled ocean plastics to create durable, waterproof tent pegs and utensils. 

The Chief Guest, a renowned scientist from the Indian Institute of Chemical Technology, remarked, "Scouting provides the perfect non-formal laboratory for scientific temper. These young minds aren't just memorizing formulas; they are building solutions for their communities." 

This event served as a pilot for the "STEM Scout Badge," a new proficiency award being introduced next semester. By merging traditional woodcraft with modern innovation, we are ensuring that Telangana scouts are ready to tackle the environmental and technological challenges of the 21st century. The fair concluded with a massive science-themed pledge, reinforcing the ethical responsibility of technology in service of humanity.`,
        },
        {
            id: 4,
            title: "Praveshika Program: Enabling Digital Citizenship",
            date: "Dec 15, 2025",
            category: "Training",
            author: "Training Dept",
            authorRole: "Curriculum Division",
            readTime: "6 min read",
            image: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770199908/1769454781522_pgepvr.png",
            contentImages: [
                "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095859/WhatsApp_Image_2026-02-15_at_12.30.05_AM_1_kbyi1d.jpg",
                "https://res.cloudinary.com/dq2suftps/image/upload/v1722516930/t_x9z3hj.jpg"
            ],
            excerpt: "A new module focusing on digital literacy and online safety for junior scouts was launched during the winter camp session.",
            content: `In an era where the boundary between the physical and digital worlds is increasingly blurred, HSGA Telangana has pioneered the "Digital Citizenship" module under the Praveshika training framework. This initiative is the first of its kind in India to integrate core scouting values like integrity and loyalty into online interactions.

The program was launched during a high-energy winter camp session, where scouts participated in "Cyber-Safety Drills." These interactive workshops taught members how to identify phishing attempts, secure their personal information, and, most importantly, stand up against cyber-bullying. "A scout is a friend to all and a brother to every other scout," the training manual states, "and that brotherhood extends to our online communities."

Beyond safety, the module focuses on "Digital Creation." Scouts are trained to use social media as a tool for social good—documenting their community service projects and raising awareness for environmental causes. The department has partnered with leading tech educators to provide basic coding and data privacy workshops. By the end of the year, HSGA Telangana hopes to graduate a cohort of 10,000 "Verified Digital Scouts," setting a new standard for holistic youth development in the digital age. This isn't just about using tools; it's about building an ethical character that remains consistent, whether in a campsite or a chatroom.`,
        },
        {
            id: 101,
            title: "Sustainable Development Goals: Mission 2030",
            date: "Mar 04, 2026",
            category: "Mission 2030",
            author: "Global Desk",
            authorRole: "International Relations",
            readTime: "8 min read",
            image: "https://imgs.search.brave.com/4i7qxKhIb7cM_thZjrmH-aRpE0HksD8x7EmKMnBHYo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YyLzRi/LzBiL2YyNGIwYmMx/OWVhMmEzMjQ2ODVm/MWVkNTk3NGM3YTky/LmpwZw",
            contentImages: [
                "https://res.cloudinary.com/dq2suftps/image/upload/v1722516924/k_zf6kqi.jpg",
                "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/b_og8pcm.jpg"
            ],
            excerpt: "How HSGA Telangana is mobilizing scouts to solve global challenges through direct local community action and environmental stewardship.",
            content: `Mission 2030 is our roadmap to a better world, and HSGA Telangana is leading the way with a decentralized, district-led strategy for the UN Sustainable Development Goals. While the SDGs are global targets, our approach is "Hyper-Local Impact." We believe that global change begins with a single scout lodge cleaning a local pond or planting a community garden.

Our primary focus for 2024-25 revolves around SDG 3 (Good Health and Well-being) and SDG 13 (Climate Action). Across the state, we have launched the "Green Scout Protocol," where every new member is required to plant and nurture three indigenous trees to earn their first degree. Simultaneously, our health initiative is standardizing mental health awareness workshops, helping scouts build emotional resilience in a fast-paced world.

We are also monitoring impact through the "Global Dashboard" for scouts, where every hour of community service is logged and verified. Last quarter alone, Telangana scouts contributed over 50,000 hours of volunteer service. "Scouting is no longer just about camping in the woods; it’s about mobilizing a massive youth army to solve the most pressing challenges of our time," said the State Secretary. Mission 2030 isn't just a vision—it's a daily practice for every scout and guide in our organization, turning the SDG framework into a series of achievable, local victories.`,
        },
        {
            id: 102,
            title: "NEP 2020: Shaping Holistic Learners",
            date: "Mar 04, 2026",
            category: "Framework",
            author: "Edu Council",
            authorRole: "Policy Implementation",
            readTime: "7 min read",
            image: "https://borivalieast.ssrvm.org/_next/image?url=https%3A%2F%2Fborivalieast.ssrvm.org%2F_s%2Fuploads%2Fborivalieastdb%2F7_features_of_NEP_69612ab951.png&w=750&q=75",
            contentImages: [
                "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/h_aadvu8.jpg",
                "https://res.cloudinary.com/dzq8jeszu/image/upload/v1771095861/WhatsApp_Image_2026-02-15_at_12.30.05_AM_2_k0qep8.jpg"
            ],
            excerpt: "Integrating scouting into the National Education Policy framework to build intellectual, physical, and social skills through experiential education.",
            content: `The National Education Policy (NEP) 2020 has opened a historic gateway for scouting to move from an "extra-curricular" activity to a central pillar of "holistic education." HSGA Telangana is actively collaborating with state curriculum designers to create a seamless bridge between school-based learning and the non-formal scouting methodology.

This integration focuses on "Competency-Based Learning." Instead of traditional rote memorization, scouts earn credits through "Proficiency Badges" in fields like first aid, environmental stewardship, and vocational skills such as tailoring, carpentry, and basic electronics. These badges are being mapped directly to the NEP's focus on vocational exposure from middle school onwards.

"We want our students to leave school not just with a grade sheet, but with a portfolio of life skills," says a member of the Edu Council. The policy also emphasizes "Social-Emotional Learning," which is inherently built into the scouting patrol system where children learn teamwork, conflict resolution, and leadership by doing. This alignment is transforming the educational experience for thousands of students across Telangana, creating a more balanced approach to development that values character as much as academic performance. Through NEP 2020, scouting is becoming a recognized laboratory for building the "Complete Human" as envisioned by India's visionary educators.`,
        }
    ];

    const filteredNews = activeCategory === "All"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    const handleShare = (title: string) => {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: window.location.href,
            }).catch(() => alert("Shared successfully!"));
        } else {
            alert("Sharable link copied to clipboard!");
        }
    };

    const toggleBookmark = (id: number) => {
        setIsBookmarked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleLike = (id: number) => {
        setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const closeArticle = () => {
        setSelectedNews(null);
        setScrollProgress(0);
    };

    return (
        <div className="bg-white flex flex-col font-sans text-slate-900 w-full relative">
            <Breadcrumbs />

            <header className="max-w-[1200px] mx-auto w-full px-6 py-12 md:py-16 border-b border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-none mb-6">
                            The HSGA <span className="text-[#000080]">Bulletin.</span>
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                            Thoughts, bulletins, and scouting stories from the heart of Telangana's youth movement.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6 mt-12 overflow-x-auto pb-4 no-scrollbar border-b border-transparent">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap pb-2 text-sm font-semibold transition-all border-b-2 ${activeCategory === cat
                                ? "text-slate-900 border-slate-900"
                                : "text-slate-400 border-transparent hover:text-slate-600"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto w-full px-6 py-12">
                {/* Featured Post */}
                {activeCategory === "All" && (
                    <section className="mb-20">
                        <div
                            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                            onClick={() => setSelectedNews(newsItems[0])}
                        >
                            <div className="aspect-[16/10] overflow-hidden rounded-sm bg-slate-100">
                                <img
                                    src={newsItems[0].image}
                                    alt={newsItems[0].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-[2px] bg-orange-600"></span>
                                    <span className="text-orange-600 text-[11px] font-semibold tracking-widest">{newsItems[0].category}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight tracking-tight group-hover:text-[#000080] transition-colors">
                                    {newsItems[0].title}
                                </h2>
                                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8">
                                    {newsItems[0].excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-slate-400 text-sm font-semibold">
                                    <span>{newsItems[0].author}</span>
                                    <span>•</span>
                                    <span>{newsItems[0].date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {newsItems[0].readTime}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Post List */}
                <section className="grid grid-cols-1 md:grid-cols-1 gap-16 max-w-4xl">
                    {(activeCategory === "All" ? filteredNews.slice(1) : filteredNews).map((news) => (
                        <div
                            key={news.id}
                            className="group cursor-pointer flex flex-col md:flex-row gap-8 items-start justify-between border-b border-slate-50 pb-16"
                            onClick={() => setSelectedNews(news)}
                        >
                            <div className="flex-1 order-2 md:order-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-5 h-5 bg-[#000080] rounded-sm flex items-center justify-center text-[10px] text-white font-semibold">
                                        H
                                    </div>
                                    <span className="text-slate-900 text-sm font-semibold">{news.author}</span>
                                    <span className="text-slate-400 text-sm font-medium">in</span>
                                    <span className="text-slate-900 text-sm font-semibold">{news.category}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 tracking-tight leading-snug group-hover:text-[#000080] transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
                                    {news.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-slate-400 text-[12px] font-semibold">
                                        <span>{news.date}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {news.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleBookmark(news.id); }}
                                            className={`${isBookmarked[news.id] ? "text-orange-600" : "hover:text-slate-900"} transition-colors`}
                                        >
                                            <Bookmark className={`w-5 h-5 ${isBookmarked[news.id] ? "fill-current" : ""}`} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleShare(news.title); }}
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-32 lg:w-48 aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-sm order-1 md:order-2 bg-slate-100">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {/* Reading Modal (Article View) */}
            {selectedNews && (
                <div
                    className="fixed inset-0 z-[500] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500 scroll-smooth"
                    onScroll={(e: any) => {
                        const winScroll = e.target.scrollTop;
                        const height = e.target.scrollHeight - e.target.clientHeight;
                        const scrolled = (winScroll / height) * 100;
                        setScrollProgress(scrolled);
                    }}
                >
                    {/* Top Progress Bar */}
                    <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-100 z-[600]">
                        <div
                            className="h-full bg-green-600 transition-all duration-300"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>

                    <nav className="sticky top-0 bg-white/90 backdrop-blur-xl border-b border-slate-100 z-50">
                        <div className="max-w-[1000px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={closeArticle}
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-[12px] font-semibold rounded-sm hover:bg-orange-600 transition-all shadow-md active:scale-95 group"
                                >
                                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                                    Back
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#000080] text-white flex items-center justify-center font-semibold text-sm rounded-sm">H</div>
                                    <div className="hidden sm:block">
                                        <p className="text-[12px] font-semibold text-slate-900 leading-none mb-1">{selectedNews.author}</p>
                                        <p className="text-[10px] text-slate-400 font-medium leading-none">Published • {selectedNews.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 md:gap-6">
                                <button
                                    onClick={() => toggleBookmark(selectedNews.id)}
                                    className={`${isBookmarked[selectedNews.id] ? "text-orange-600" : "text-slate-400 hover:text-slate-900"} transition-colors p-2`}
                                >
                                    <Bookmark className={`w-5 h-5 ${isBookmarked[selectedNews.id] ? "fill-current" : ""}`} />
                                </button>
                                <button
                                    onClick={() => handleShare(selectedNews.title)}
                                    className="text-slate-400 hover:text-slate-900 transition-colors p-2"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setIsFollowing(!isFollowing)}
                                    className={`${isFollowing ? "bg-green-600" : "bg-slate-900"} text-white px-5 py-2 text-[12px] font-semibold rounded-full hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-2`}
                                >
                                    {isFollowing ? <><Check className="w-3 h-3" /> Following</> : "Follow"}
                                </button>
                            </div>
                        </div>
                    </nav>

                    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 px-6 py-12 md:py-16">
                        {/* Main Content Side */}
                        <article className="flex-1 max-w-[740px]">
                            <header className="mb-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="px-3 py-1 bg-slate-100 text-[#000080] text-[11px] font-semibold tracking-wider rounded-full">{selectedNews.category}</span>
                                    <span className="text-slate-400 text-sm">•</span>
                                    <span className="text-slate-400 text-sm font-medium">{selectedNews.readTime}</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                    {selectedNews.title}
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12 border-l-4 border-slate-100 pl-8">
                                    {selectedNews.excerpt}
                                </p>

                                <div className="w-full aspect-[16/9] mb-12 overflow-hidden rounded-sm bg-slate-50 group border border-slate-100">
                                    <img
                                        src={selectedNews.image}
                                        alt={selectedNews.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                    />
                                </div>
                            </header>

                            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-slate-700 prose-p:leading-[1.8] prose-blockquote:border-slate-900">
                                <p className="text-xl leading-relaxed text-slate-800 drop-cap">
                                    {selectedNews.content}
                                </p>

                                <p>
                                    The HSGA Telangana team has been working tirelessly to ensure that our youth-led movement
                                    remains at the forefront of social change and character development. This latest update
                                    reflects our commitment to modernization and alignment with global standards of excellence.
                                </p>

                                <div className="my-16 flex flex-col items-center">
                                    <div className="w-full flex flex-wrap gap-4 items-start justify-center">
                                        {selectedNews.contentImages?.map((img: string, idx: number) => (
                                            <div key={idx} className="flex-1 min-w-[300px] h-auto bg-slate-50 rounded-sm overflow-hidden border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                                                <img 
                                                    src={img} 
                                                    className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700" 
                                                    alt="Scouting activity" 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[12px] text-slate-400 font-medium mt-6 text-center italic">Authentic field documentation of HSGA Telangana scouting activities and community impact.</p>
                                </div>

                                <h3 className="text-3xl mt-12 mb-6">Strategic Development Pillars</h3>
                                <p>
                                    As we move forward into the new academic year, several key pillars have been identified to
                                    strengthen our impact. These include digital integration, rural outreach programs, and
                                    enhanced vocational training via our proficiency badge system.
                                </p>

                                <blockquote className="my-16 border-l-4 pl-8 py-2">
                                    <p className="text-2xl text-slate-800 italic font-medium">"Our mission is to create citizens who are not just skilled, but empathetic and ready to lead with integrity."</p>
                                    <footer className="text-sm text-slate-400 font-semibold mt-4">— State Commissioner's Memo, 2024</footer>
                                </blockquote>

                                <p>
                                    Every scout member is encouraged to contribute to this evolving narrative. By sharing
                                    our experiences and successes, we build a stronger community and inspire more young
                                    people to join our mission of self-discovery and service.
                                </p>
                            </div>

                            <footer className="mt-24 pt-12 border-t border-slate-100">
                                <div className="flex flex-wrap gap-2 mb-12">
                                    {["Scouting", "Telangana", "Youth", "Education", "Service", "Leadership"].map(t => (
                                        <span key={t} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[12px] font-semibold border border-slate-100 rounded-full hover:bg-slate-100 transition-colors cursor-default">{t}</span>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-y border-slate-50">
                                    <div className="flex items-center gap-6">
                                        <button
                                            onClick={() => handleLike(selectedNews.id)}
                                            className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors group"
                                        >
                                            <ThumbsUp className={`w-6 h-6 transition-transform group-active:scale-125 ${(likes[selectedNews.id] || 0) > 0 ? "fill-green-600 text-green-600" : ""}`} />
                                            <span className="text-sm font-semibold">{1200 + (likes[selectedNews.id] || 0)}</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
                                            <MessageSquare className="w-6 h-6" /> <span className="text-sm font-semibold">48</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <span className="text-xs font-semibold mr-2">Share this story</span>
                                        <Twitter onClick={() => handleShare(selectedNews.title)} className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
                                        <Linkedin onClick={() => handleShare(selectedNews.title)} className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
                                        <Facebook onClick={() => handleShare(selectedNews.title)} className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
                                        <LinkIcon onClick={() => handleShare(selectedNews.title)} className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
                                    </div>
                                </div>
                            </footer>
                        </article>

                        {/* Sidebar Info */}
                        <aside className="w-full lg:w-[320px] shrink-0">
                            <div className="sticky top-32 space-y-12">
                                <div>
                                    <h4 className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Published By</h4>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-semibold text-2xl">H</div>
                                        <div>
                                            <h5 className="font-semibold text-slate-900 text-lg mb-1">{selectedNews.author}</h5>
                                            <p className="text-slate-500 text-sm leading-snug">{selectedNews.authorRole}</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        The official administrative and editorial division of Hindustan Scouts and Guides Association, Telangana.
                                    </p>
                                    <button className="w-full py-2.5 bg-slate-100 text-slate-900 text-[13px] font-semibold rounded-full hover:bg-slate-200 transition-all">View Profile</button>
                                </div>

                                <div>
                                    <h4 className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">More from HSGA</h4>
                                    <div className="space-y-8">
                                        {newsItems.filter(n => n.id !== selectedNews.id).slice(0, 3).map(post => (
                                            <div
                                                key={post.id}
                                                className="group cursor-pointer"
                                                onClick={() => { setSelectedNews(post); setScrollProgress(0); }}
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-semibold">H</div>
                                                    <span className="text-[11px] font-semibold text-slate-900">{post.author}</span>
                                                </div>
                                                <h5 className="text-[15px] font-semibold text-slate-800 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <section className="bg-slate-50 py-24 border-t border-slate-100">
                        <div className="max-w-[700px] mx-auto px-6 text-center">
                            <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-10 border border-slate-200">
                                <Trophy className="text-orange-600 w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">Support Youth Scouting</h3>
                            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">Join the movement and help us shape the next generation of leaders in Telangana. Your contribution makes a difference.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://hus.hsgatelangana.com/membership"
                                    className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 font-semibold text-sm rounded-full hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-200 active:scale-95 text-center"
                                >
                                    Join the Movement
                                </a>
                                <button
                                    onClick={closeArticle}
                                    className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-4 font-semibold text-sm rounded-full hover:bg-slate-50 transition-all active:scale-95"
                                >
                                    Back to Stories
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            <style jsx global>{`
                .drop-cap::first-letter {
                    font-size: 5rem;
                    font-weight: 600;
                    line-height: 1;
                    float: left;
                    margin-right: 0.75rem;
                    color: #0f172a;
                    margin-top: 0.25rem;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default BlogsPage;