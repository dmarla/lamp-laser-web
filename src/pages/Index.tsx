
import Hero from "@/components/Hero";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import EquipmentSection from "@/components/EquipmentSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import PublicationsSection from "@/components/PublicationsSection";
import StudentsSection from "@/components/StudentsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchSection />
        <TeamSection limit={4} />
        <EquipmentSection limit={4} />
        <CapabilitiesSection />
        <PublicationsSection limit={3} />
        <StudentsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
