
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResearchSection from "@/components/ResearchSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Research = () => {
  const projects = [
    {
      title: "Laser Surface Texturing for Enhanced Tribological Properties",
      description: "Developing optimized laser texturing patterns to improve friction and wear characteristics of metallic surfaces.",
      category: "Surface Engineering",
      status: "Ongoing",
      investigators: "Prof. Ramesh Kumar, Dr. Priya Singh",
      fundedBy: "Department of Science and Technology"
    },
    {
      title: "Additive Manufacturing of Gradient Functional Materials",
      description: "Creating materials with spatially varying compositions and properties through advanced laser powder bed fusion techniques.",
      category: "Additive Manufacturing",
      status: "Ongoing",
      investigators: "Dr. Anjali Sharma, Vikram Mehta",
      fundedBy: "Ministry of Electronics and Information Technology"
    },
    {
      title: "Ultrafast Laser Micro/Nano Fabrication for Biomedical Applications",
      description: "Using femtosecond lasers to create precisely engineered surfaces for medical implants with enhanced biocompatibility.",
      category: "Laser-Material Interaction",
      status: "Ongoing",
      investigators: "Dr. Rahul Verma, Neha Patel",
      fundedBy: "Department of Biotechnology"
    },
    {
      title: "Computational Modeling of Melt Pool Dynamics",
      description: "Developing advanced numerical models to predict and control melt pool behavior in laser-based additive manufacturing.",
      category: "Additive Manufacturing",
      status: "Ongoing",
      investigators: "Dr. Rahul Verma, Prof. Ramesh Kumar",
      fundedBy: "Science and Engineering Research Board"
    },
    {
      title: "Novel Metal Matrix Nanocomposites via Laser Processing",
      description: "Creating advanced metal matrix composites with nanoscale reinforcements using laser-based manufacturing techniques.",
      category: "Advanced Materials",
      status: "Ongoing",
      investigators: "Prof. Ramesh Kumar, Vikram Mehta",
      fundedBy: "Ministry of Steel"
    },
    {
      title: "Direct Laser Interference Patterning for Functional Surfaces",
      description: "Using interference of multiple laser beams to create periodic micro/nano structures with controlled properties.",
      category: "Surface Engineering",
      status: "Ongoing",
      investigators: "Dr. Priya Singh, Neha Patel",
      fundedBy: "Industrial Collaborator"
    },
    {
      title: "Laser-based Recycling of Metal Powders for Additive Manufacturing",
      description: "Developing methods to recondition and reuse metal powders for sustainable additive manufacturing processes.",
      category: "Additive Manufacturing",
      status: "Completed",
      investigators: "Dr. Anjali Sharma, Prof. Ramesh Kumar",
      fundedBy: "Ministry of Environment, Forest and Climate Change"
    },
    {
      title: "High-Speed Imaging and Diagnostics of Laser Processing",
      description: "Advanced in-situ monitoring techniques to understand real-time dynamics of laser-material interactions.",
      category: "Laser-Material Interaction",
      status: "Completed",
      investigators: "Dr. Rahul Verma, Dr. Priya Singh",
      fundedBy: "Department of Science and Technology"
    }
  ];

  const collaborators = [
    {
      name: "Massachusetts Institute of Technology",
      country: "USA",
      type: "Academic",
      projects: ["Ultrafast laser processing", "Advanced material characterization"]
    },
    {
      name: "University of Cambridge",
      country: "UK",
      type: "Academic",
      projects: ["Computational modeling", "Functional materials design"]
    },
    {
      name: "Technical University of Munich",
      country: "Germany",
      type: "Academic",
      projects: ["Laser additive manufacturing", "Process monitoring techniques"]
    },
    {
      name: "Tata Steel",
      country: "India",
      type: "Industry",
      projects: ["Surface engineering for wear resistance", "Material property enhancement"]
    },
    {
      name: "Airbus",
      country: "Multinational",
      type: "Industry",
      projects: ["Lightweight components manufacturing", "Novel alloy development"]
    },
    {
      name: "Bharat Electronics Limited",
      country: "India",
      type: "Industry",
      projects: ["Precision micro-manufacturing", "Electronic component fabrication"]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">Our Research</h1>
            <p className="text-xl text-gray-600">
              LAMP conducts cutting-edge research across multiple areas of laser-based manufacturing and materials processing. 
              Our interdisciplinary approach combines fundamental science with practical applications to address real-world challenges.
            </p>
          </div>
        </div>
        
        <ResearchSection />
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Current Research Projects</h2>
            
            <Tabs defaultValue="all">
              <TabsList className="flex flex-wrap justify-center mb-8 w-full">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="surface">Surface Engineering</TabsTrigger>
                <TabsTrigger value="additive">Additive Manufacturing</TabsTrigger>
                <TabsTrigger value="laser">Laser-Material Interaction</TabsTrigger>
                <TabsTrigger value="materials">Advanced Materials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="surface">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.filter(p => p.category === "Surface Engineering").map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="additive">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.filter(p => p.category === "Additive Manufacturing").map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="laser">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.filter(p => p.category === "Laser-Material Interaction").map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="materials">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.filter(p => p.category === "Advanced Materials").map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Research Collaborations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborators.map((collaborator, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                    <div className="flex gap-2 mt-1">
                      <Badge>{collaborator.country}</Badge>
                      <Badge variant="outline">{collaborator.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-medium mb-1">Collaborative Projects:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      {collaborator.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg pr-2">{project.title}</CardTitle>
          <Badge 
            variant={project.status === "Ongoing" ? "default" : "outline"}
            className={project.status === "Ongoing" ? "bg-green-600" : ""}
          >
            {project.status}
          </Badge>
        </div>
        <Badge variant="secondary" className="mt-1">{project.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mt-auto space-y-1 text-sm">
          <p><span className="font-medium">Investigators:</span> {project.investigators}</p>
          <p><span className="font-medium">Funded by:</span> {project.fundedBy}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Research;
