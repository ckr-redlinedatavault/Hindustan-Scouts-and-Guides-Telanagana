import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources & Downloads",
    description: "Download official HSGA Telangana forms, unit registration documents, and the national scouting activity calendar.",
};

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
