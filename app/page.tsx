import Hero from "@/components/Hero";
import StatsRibbon from "@/components/StatsRibbon";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Donation from "@/components/Donation";
import SuccessStories from "@/components/SuccessStories";
import MainCTA from "@/components/MainCTA";
import SimilarOrganisations from "@/components/SimilarOrganisations";

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
