
import Hero from "@/components/Hero";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import EquipmentSection from "@/components/EquipmentSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import PublicationsSection from "@/components/PublicationsSection";
import StudentsSection from "@/components/StudentsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-8">Our Research Areas</h2>
            <div className="mb-8">
              <ResearchSection />
            </div>
            <div className="flex justify-center">
              <Link to="/research">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Research Areas
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-8">Our Team</h2>
            <div className="mb-8">
              <TeamSection limit={4} />
            </div>
            <div className="flex justify-center">
              <Link to="/team">
                <Button variant="outline" className="flex items-center gap-2">
                  Meet Our Complete Team
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-8">Equipment & Facilities</h2>
            <div className="mb-8">
              <EquipmentSection limit={4} />
            </div>
            <div className="flex justify-center">
              <Link to="/equipment">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Equipment
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-8">Industry Capabilities</h2>
            <CapabilitiesSection />
            <div className="flex justify-center mt-8">
              <Link to="/capabilities">
                <Button variant="outline" className="flex items-center gap-2">
                  Explore Our Capabilities
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-8">Recent Publications</h2>
            <div className="mb-8">
              <PublicationsSection limit={3} />
            </div>
            <div className="flex justify-center">
              <Link to="/publications">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Publications
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-8">For Students</h2>
            <StudentsSection />
            <div className="flex justify-center mt-8">
              <Link to="/students">
                <Button variant="outline" className="flex items-center gap-2">
                  More Student Information
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
