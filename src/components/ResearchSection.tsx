
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchSection = () => {
  const researchAreas = [
    {
      id: "laser-materials",
      title: "Laser-Material Interaction",
      description: "Fundamental understanding of how different laser types interact with various materials across multiple scales.",
      topics: [
        "Ultrafast laser interaction phenomena",
        "Thermal and non-thermal processing mechanisms",
        "Material transformation under intense laser fields",
        "Computational modeling of laser-matter interactions"
      ]
    },
    {
      id: "additive-manufacturing",
      title: "Additive Manufacturing",
      description: "Research on advanced laser-based additive manufacturing for metals, polymers, and composite materials.",
      topics: [
        "Laser powder bed fusion optimization",
        "Direct energy deposition processes",
        "Novel materials for additive manufacturing",
        "Process monitoring and quality control"
      ]
    },
    {
      id: "surface-engineering",
      title: "Surface Engineering",
      description: "Developing novel surface modification techniques using laser processing to enhance material properties.",
      topics: [
        "Laser texturing for enhanced tribological properties",
        "Functionalized surfaces for biomedical applications",
        "Superhydrophobic and superhydrophilic surfaces",
        "Corrosion-resistant coatings"
      ]
    },
    {
      id: "advanced-materials",
      title: "Advanced Materials",
      description: "Creating and characterizing next-generation materials with enhanced properties through laser processing.",
      topics: [
        "Metal-matrix nanocomposites",
        "Gradient functional materials",
        "High-entropy alloys",
        "Smart responsive materials"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Research Areas</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            Our laboratory focuses on fundamental and applied research in laser-material interactions, 
            creating innovative manufacturing processes and advanced materials with unique properties.
          </p>
        </div>
        
        <Tabs defaultValue="laser-materials" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {researchAreas.map(area => (
              <TabsTrigger key={area.id} value={area.id} className="text-sm">
                {area.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {researchAreas.map(area => (
            <TabsContent key={area.id} value={area.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-lamp-red mt-2 mr-2"></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-10 text-center">
          <Link 
            to="/research" 
            className="inline-flex items-center text-lamp-blue hover:text-lamp-red transition-colors font-medium"
          >
            View all research projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
