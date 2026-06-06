import { globalCSS } from './constants/globalCss'
import { C } from './constants/designToken';
import { Navbar } from './pages/NavBar/navBar'
import { HeroSection } from './pages/HeroSection/heroSection'
import { FeaturedProjectSection } from './pages/FeaturedProject/featuredProject'
import { useActiveSection } from './hooks/activeSection'
import { ExperienceSection } from './pages/Experience/experienceSection'
import { ProjectsSection } from './pages/Projects/projectsSection'
import { ArchitectureSection } from './pages/Architecture/architectureSection'
import { SkillsSection } from './pages/SkillsSection/skillsSection'
import { RoadmapSection } from './pages/RoadmapSection/roadMapSection'
import { ContactSection } from './pages/ContactSection/contactSection'
import { Footer } from './pages/FooterSection/footerSection'

export default function App() {
  const navIds = ["home", "experience", "projects", "architecture", "skills", "roadmap", "contact"];
  const active = useActiveSection(navIds);

  return (
    <>
      <style>{globalCSS}</style>
      <div style={{ background: C.bg, minHeight: "100vh" }}>
        <Navbar active={active} />
        <HeroSection />
        <FeaturedProjectSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <SkillsSection />
        <RoadmapSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}