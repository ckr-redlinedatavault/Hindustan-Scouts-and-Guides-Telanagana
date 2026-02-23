import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery",
    description: "Visual documentation of training camps, service projects, and scouting excellence in Telangana. Exploring the journey of HSGA Telangana.",
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
