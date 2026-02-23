"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    if (pathname === "/") return null;

    return (
        <nav className="bg-slate-50 border-b border-slate-100 py-3">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <li className="flex items-center gap-1.5 hover:text-[#000080] transition-colors">
                        <Home className="w-3.5 h-3.5" />
                        <Link href="/">Home</Link>
                    </li>

                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathSegments.length - 1;

                        // Capitalize and format segment
                        const name = segment
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase());

                        return (
                            <React.Fragment key={href}>
                                <ChevronRight className="w-3 h-3 text-slate-300" />
                                <li className={`${isLast ? "text-[#000080]" : "hover:text-[#000080] transition-colors"}`}>
                                    {isLast ? (
                                        <span>{name}</span>
                                    ) : (
                                        <Link href={href}>{name}</Link>
                                    )}
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
