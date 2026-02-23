import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enquiry Form",
    description: "Submit your formal inquiries, unit registration requests, or trainer certification questions directly to HSGA Telangana.",
};

export default function ContactFormLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
