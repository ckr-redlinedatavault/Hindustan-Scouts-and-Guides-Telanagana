import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers & Leadership",
    description: "Join the leadership team of HSGA Telangana. Explore career and volunteer opportunities for scout masters, trainers, and administrative roles.",
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
