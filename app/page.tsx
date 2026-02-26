import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsRibbon from "@/components/StatsRibbon";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Donation from "@/components/Donation";
import SuccessStories from "@/components/SuccessStories";
import MainCTA from "@/components/MainCTA";
import SimilarOrganisations from "@/components/SimilarOrganisations";

export const metadata: Metadata = {
  title: "Home",
  description: "Join the Hindustan Scouts and Guides Association Telangana. Empowering youth through traditional scouting, leadership development, and community service.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsRibbon />
      <About />
      <MissionVision />
      <Donation />
      <SuccessStories />
      <MainCTA />
      <SimilarOrganisations />
    </>
  );
}
