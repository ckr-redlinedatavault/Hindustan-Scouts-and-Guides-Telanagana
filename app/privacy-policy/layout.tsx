import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Our commitment to data protection and user privacy. Learn how HSGA Telangana manages and secures your personal information.",
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
