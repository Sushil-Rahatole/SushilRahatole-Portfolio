import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ContactSection } from "@/components/portfolio/contact-section";

const sections = ["home", "about", "projects", "education", "experience", "contact"];

export default function Portfolio() {
  const activeSection = useScrollSpy(sections);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation sections={sections} />
      
      {/* Scroll Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section
                  ? "bg-primary border-primary scale-125"
                  : "bg-transparent border-muted-foreground/30 hover:border-primary/50"
              }`}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          ))}
        </div>
      </div>

      <main>
        <HeroSection onScrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              <strong className="gradient-text">Designed & Built by Sushil Rahatole</strong> — with passion and precision.
            </p>
            <p className="text-sm text-muted-foreground/60">
              © 2024 All rights reserved. Made with ❤️ and lots of coffee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
