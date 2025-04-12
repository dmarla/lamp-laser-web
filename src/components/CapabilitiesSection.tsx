
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, 
  Settings, 
  Microscope, 
  Factory, 
  Rocket, 
  Shield 
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Materials Processing",
      description: "Advanced laser-based technologies for cutting, welding, drilling, and surface modification of metals, polymers, ceramics, and composites.",
      icon: Settings
    },
    {
      title: "Material Analysis",
      description: "Comprehensive material characterization services including microstructure analysis, phase identification, and mechanical property testing.",
      icon: Microscope
    },
    {
      title: "Manufacturing Solutions",
      description: "Custom manufacturing process development and optimization for industrial partners seeking improved efficiency and quality.",
      icon: Factory
    },
    {
      title: "Innovation Consulting",
      description: "Expert consultation on implementing laser-based technologies and advanced materials in manufacturing workflows.",
      icon: Lightbulb
    },
    {
      title: "Rapid Prototyping",
      description: "Fast iteration capabilities for functional prototypes using additive manufacturing and laser processing techniques.",
      icon: Rocket
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and validation of materials and components according to international standards.",
      icon: Shield
    }
  ];

  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Capabilities for Industry</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            LAMP offers extensive research partnerships and technical services to industry partners, leveraging our expertise in laser technology and materials science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border-t-4 border-lamp-blue hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="p-2 bg-lamp-blue/10 rounded-md">
                  <capability.icon className="h-6 w-6 text-lamp-blue" />
                </div>
                <div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-lamp-blue mb-4">Partner With Us</h3>
          <p className="text-gray-600 mb-6">
            We collaborate with companies of all sizes to solve complex manufacturing challenges, improve processes, 
            and develop next-generation products through applied research and technology transfer.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="text-gray-700">
              Contact us to discuss how we can help your business innovate and grow.
            </div>
            <a 
              href="mailto:lamp@iitb.ac.in" 
              className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-6 py-2 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
