import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Portal",
    description: "Stay updated with the latest administrative announcements, official bulletins, and event media coverage from HSGA Telangana.",
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
