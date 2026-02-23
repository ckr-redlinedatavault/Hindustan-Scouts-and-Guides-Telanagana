import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap",
    description: "A comprehensive map of all pages and resources available on the Hindustan Scouts and Guides Association Telangana portal.",
};

export default function SitemapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
