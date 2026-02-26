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
            name: "National Cadet Corps",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_National_Cadet_Corps_%28India%29.png/960px-Emblem_of_National_Cadet_Corps_%28India%29.png",
            href: "https://indiancc.nic.in/",
            alt: "NCC Official Website"
        },
        {
            name: "Indian Red Cross Society",
            logo: "https://ircsfa.org/Images/logo.png",
            href: "https://www.indianredcross.org/",
            alt: "Indian Red Cross Official Website"
        },
        {
            name: "WFIS Germany",
            logo: "https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770925657/Screenshot_2026-02-13_at_01.17.12-removebg-preview_q9a7cz.png",
            href: "https://wfis.world/",
            alt: "WFIS World Official Website"
        }
    ];

    return (
        <section className="py-8 lg:py-10 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12 lg:gap-16">

                    <div className="shrink-0 text-center md:text-left border-b-2 md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-10 lg:pr-14">
                        <h3 className="text-[#000080] font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] leading-relaxed">
                            Affiliated & <br className="hidden md:block" />
                            Similar <br className="hidden md:block" />
                            Bodies
                        </h3>
                    </div>

                    <div className="flex-1 flex flex-row flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-8 md:gap-x-12 lg:gap-x-16">
                        {organisations.map((org, index) => (
                            <a
                                key={index}
                                href={org.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={org.name}
                                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
                            >
                                <img
                                    src={org.logo}
                                    alt={org.alt}
                                    className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
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