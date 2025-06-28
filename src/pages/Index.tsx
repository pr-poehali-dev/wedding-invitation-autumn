import { useState } from "react";
import WeddingNavigation from "@/components/WeddingNavigation";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <HeroSection />;
      case "info":
        return <InfoSection />;
      case "gallery":
        return <GallerySection />;
      case "rsvp":
        return <RSVPSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <WeddingNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>{renderSection()}</main>
    </div>
  );
};

export default Index;
