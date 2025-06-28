import { Button } from "@/components/ui/button";

interface WeddingNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const WeddingNavigation = ({
  activeSection,
  setActiveSection,
}: WeddingNavigationProps) => {
  const sections = [
    { id: "hero", label: "Главная", icon: "💍" },
    { id: "info", label: "Информация", icon: "📍" },
    { id: "gallery", label: "Фотографии", icon: "📸" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-card/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
      <div className="flex items-center space-x-4">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveSection(section.id)}
            className="rounded-full font-montserrat"
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default WeddingNavigation;
