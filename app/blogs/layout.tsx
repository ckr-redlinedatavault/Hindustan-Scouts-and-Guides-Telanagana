import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs & Portal",
    description: "Stay updated with the latest administrative announcements, official bulletins, and event media coverage from HSGA Telangana.",
};

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
