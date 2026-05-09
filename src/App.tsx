import TopRail from "./components/TopRail";
import HeroPhones from "./components/HeroPhones";
import LiveCity from "./components/LiveCity";
import ActionCarousel from "./components/ActionCarousel";
import StoryStrip from "./components/StoryStrip";
import EarnPanel from "./components/EarnPanel";
import PlanCards from "./components/PlanCards";
import DownloadHero from "./components/DownloadHero";
import StripFooter from "./components/StripFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <TopRail />
      <main>
        <HeroPhones />
        <LiveCity />
        <ActionCarousel />
        <StoryStrip />
        <EarnPanel />
        <PlanCards />
        <DownloadHero />
      </main>
      <StripFooter />
    </div>
  );
}
