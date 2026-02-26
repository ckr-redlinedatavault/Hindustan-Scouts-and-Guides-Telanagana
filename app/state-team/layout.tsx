import { Metadata } from "next";

export const metadata: Metadata = {
    title: "State Leadership Team",
    description: "Meet the executive council and state leadership of HSGA Telangana. Dedicated officials driving scouting traditions and youth empowerment in the state.",
};

export default function StateTeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
