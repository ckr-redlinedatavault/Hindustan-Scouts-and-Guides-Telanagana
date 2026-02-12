"use client";

import React from "react";

const SimilarOrganisations = () => {
    const organisations = [
        {
            name: "Ministry of Youth Affairs and Sports",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Ministry_of_Youth_Affairs_and_Sports.svg",
            href: "https://yas.nic.in/",
            alt: "MYAS Official Website"
        },
        {
            name: "National Service Scheme",
            logo: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770925652/NSS-symbol-removebg-preview_djf9ec.png",
            href: "https://nss.gov.in/",
            alt: "NSS Official Website"
        },
        {
            name: "WFIS Germany",
            logo: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770925657/Screenshot_2026-02-13_at_01.17.12-removebg-preview_q9a7cz.png",
            href: "https://wfis.world/",
            alt: "WFIS World Official Website"
        }
    ];

    return (
        <section className="py-6 lg:py-8 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12">

                    {/* Compact Side Heading */}
                    <div className="shrink-0 text-center md:text-left border-b-2 md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-10">
                        <h3 className="text-[#000080] font-[1000] text-[10px] uppercase tracking-[0.4em] leading-tight">
                            Affiliated & <br className="hidden md:block" /> Similar <br className="hidden md:block" /> Bodies
                        </h3>
                    </div>

                    {/* Logos Container - Spacing removed, items grouped closely */}
                    <div className="flex flex-row items-center justify-center md:justify-start gap-6 md:gap-10 lg:gap-14">
                        {organisations.map((org, index) => (
                            <a
                                key={index}
                                href={org.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={org.name}
                                className="flex items-center justify-center h-20 md:h-24 lg:h-32 w-auto transition-all duration-300 group"
                            >
                                <img
                                    src={org.logo}
                                    alt={org.alt}
                                    className="h-full w-auto object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                                />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SimilarOrganisations;