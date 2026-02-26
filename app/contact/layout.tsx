import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Connect with the Hindustan Scouts and Guides Association Telangana state headquarters. Find our location, phone, and email details.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
