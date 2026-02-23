import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "The legal framework and rules governing the use of the HSGA Telangana portal. Please read our terms and conditions carefully.",
};

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
