import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsRibbon from "@/components/StatsRibbon";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import SuccessStories from "@/components/SuccessStories";
import MainCTA from "@/components/MainCTA";
import SimilarOrganisations from "@/components/SimilarOrganisations";
import Footer from "@/components/Footer";
import BottomBanner from "@/components/BottomBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsRibbon />
        <About />
        <MissionVision />
        <SuccessStories />
        <MainCTA />
        <SimilarOrganisations />
      </main>
      <Footer />
      <BottomBanner />
    </div>
  );
}
