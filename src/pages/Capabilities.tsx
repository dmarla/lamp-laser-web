
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BriefcaseMedical, Layers, FileCog, Users, Building, Mail } from "lucide-react";

const Capabilities = () => {
  const industries = [
    {
      name: "Aerospace & Defense",
      icon: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Advanced laser manufacturing solutions for aerospace components, lightweight structures, and high-performance alloys.",
      services: [
        "Laser processing of titanium and nickel superalloys",
        "Additive manufacturing of complex aerospace components",
        "Surface engineering for improved wear and corrosion resistance",
        "Material qualification and certification support"
      ]
    },
    {
      name: "Automotive",
      icon: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Innovative manufacturing technologies for automotive lightweighting, performance enhancement, and cost reduction.",
      services: [
        "Laser welding of dissimilar materials",
        "Surface texturing for tribological applications",
        "Additive manufacturing for rapid prototyping",
        "Process optimization for high-volume manufacturing"
      ]
    },
    {
      name: "Biomedical",
      icon: "https://images.unsplash.com/photo-1576086135878-31532902b544?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Specialized laser processing techniques for medical implants, devices, and tools with enhanced functionality.",
      services: [
        "Surface functionalization for improved biocompatibility",
        "Patient-specific implant manufacturing",
        "Micro/nano structuring for controlled cell adhesion",
        "Clean room processing capabilities for medical devices"
      ]
    },
    {
      name: "Energy",
      icon: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Material solutions for renewable energy generation, storage, and improved efficiency in conventional energy systems.",
      services: [
        "Laser processing of advanced battery materials",
        "Surface engineering for solar energy applications",
        "Additive manufacturing of heat exchangers and thermal management",
        "Testing and optimization of material performance"
      ]
    },
    {
      name: "Electronics",
      icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Precision laser techniques for microelectronics manufacturing, packaging, and thermal management solutions.",
      services: [
        "Laser micromachining for electronics packaging",
        "Precision cutting and drilling of electronic materials",
        "Selective metallization and structuring",
        "Advanced thermal interface materials development"
      ]
    },
    {
      name: "Heavy Industry",
      icon: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Robust laser-based solutions for heavy manufacturing, including repair, hardening, and material processing.",
      services: [
        "Laser cladding for component repair and life extension",
        "Surface hardening for improved wear resistance",
        "Process development for specialized materials",
        "On-site processing capability development"
      ]
    }
  ];

  const services = [
    {
      title: "Contract Research",
      description: "Tailored research programs to address specific industry challenges or explore new technologies relevant to your organization.",
      details: "Our contract research services provide companies with access to our expertise, equipment, and facilities to solve specific technical challenges or develop new manufacturing capabilities. Programs can range from short exploratory studies to multi-year research initiatives.",
      options: [
        "Problem-specific research programs",
        "Technology feasibility assessment",
        "Material development and optimization",
        "Process development and validation"
      ]
    },
    {
      title: "Analytical Services",
      description: "Comprehensive material characterization and analysis using our advanced equipment and expert interpretation.",
      details: "We offer a wide range of analytical services using our state-of-the-art equipment to characterize materials, investigate failures, and provide insights for process improvement. Our team provides not just data, but expert interpretation and recommendations.",
      options: [
        "Microstructural characterization",
        "Surface analysis and profiling",
        "Mechanical property testing",
        "Chemical and phase composition analysis"
      ]
    },
    {
      title: "Process Optimization",
      description: "Science-based optimization of existing manufacturing processes to improve quality, efficiency, and cost-effectiveness.",
      details: "Leveraging our deep understanding of laser-material interactions and manufacturing science, we can help optimize your existing processes to improve quality, throughput, and cost-effectiveness. This service combines experimental work with modeling and data analytics.",
      options: [
        "Parameter optimization studies",
        "Process window determination",
        "Quality improvement strategies",
        "Energy efficiency enhancements"
      ]
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on implementing laser-based technologies and advanced materials in your manufacturing workflow.",
      details: "Our technical consulting services provide expert guidance on integrating laser-based manufacturing technologies and advanced materials into your operations. We assess feasibility, develop implementation strategies, and provide training to ensure successful adoption.",
      options: [
        "Technology assessment and selection",
        "Implementation planning",
        "Technical risk management",
        "Staff training and capability building"
      ]
    }
  ];

  const successStories = [
    {
      company: "Aerospace Components Manufacturer",
      project: "Laser Surface Texturing for Improved Turbine Efficiency",
      outcome: "Developed laser texturing process that increased efficiency by 2.3% and reduced maintenance frequency by 30%.",
      impact: "Annual cost savings of approximately ₹2.5 crores through reduced fuel consumption and maintenance."
    },
    {
      company: "Medical Device Startup",
      project: "Custom Implant Manufacturing Process Development",
      outcome: "Created a manufacturing protocol for patient-specific orthopedic implants with enhanced osseointegration properties.",
      impact: "Enabled the company to launch new product line and secure ₹15 crore in venture funding."
    },
    {
      company: "Automotive Tier-1 Supplier",
      project: "Laser Welding of Dissimilar Materials for Lightweight Components",
      outcome: "Developed process for joining aluminum-steel hybrids with superior joint strength and corrosion resistance.",
      impact: "Reduced component weight by 18% while maintaining safety standards, contributing to improved fuel efficiency."
    }
  ];

  const partnershipsInfo = [
    {
      title: "Research Partnerships",
      description: "Long-term collaborative research programs addressing fundamental challenges in manufacturing and materials science.",
      icon: Users
    },
    {
      title: "Consortium Projects",
      description: "Pre-competitive research initiatives with multiple industry partners to advance technologies of mutual interest.",
      icon: Building
    },
    {
      title: "Technology Transfer",
      description: "Licensing of LAMP-developed technologies and know-how for commercial implementation.",
      icon: FileCog
    },
    {
      title: "Student Engagement",
      description: "Sponsored student projects and internships focused on real-world industry challenges.",
      icon: BriefcaseMedical
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">Industry Capabilities</h1>
            <p className="text-xl text-gray-600">
              LAMP collaborates with industry partners to solve manufacturing challenges, develop innovative processes, 
              and create advanced materials solutions through research partnerships and technical services.
            </p>
          </div>
        </div>
        
        <CapabilitiesSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Industry Sectors</h2>
            
            <Tabs defaultValue={industries[0].name.toLowerCase().replace(/\s+/g, '-')} className="max-w-5xl mx-auto">
              <TabsList className="flex flex-wrap justify-center mb-8">
                {industries.map((industry, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={industry.name.toLowerCase().replace(/\s+/g, '-')}
                    className="px-4 py-2"
                  >
                    {industry.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {industries.map((industry, index) => (
                <TabsContent 
                  key={index} 
                  value={industry.name.toLowerCase().replace(/\s+/g, '-')}
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-16 h-16 rounded-md bg-cover bg-center"
                          style={{ backgroundImage: `url(${industry.icon})` }}
                        />
                        <div>
                          <CardTitle>{industry.name}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Services for {industry.name}:</h4>
                        <ul className="space-y-2">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-lamp-blue mt-0.5 mr-2 shrink-0" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href={`mailto:lamp@iitb.ac.in?subject=Inquiry about ${industry.name} Services`}
                        className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Inquire About {industry.name} Services
                      </a>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Services Offered</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-medium">{service.description}</p>
                    <p className="text-gray-600">{service.details}</p>
                    <div>
                      <h4 className="font-medium mb-2">Offerings:</h4>
                      <ul className="space-y-1">
                        {service.options.map((option, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-lamp-red mt-2 mr-2"></span>
                            <span className="text-gray-700">{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {successStories.map((story, index) => (
                <Card key={index} className="border-t-4 border-lamp-blue hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <Badge className="mb-2">Case Study</Badge>
                    <CardTitle className="text-lg">{story.company}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium text-gray-800">{story.project}</p>
                    <p className="text-gray-600">{story.outcome}</p>
                    <div className="pt-2 border-t">
                      <p className="text-sm font-medium text-lamp-blue">{story.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-gray-600 italic">
                "Working with LAMP has given us access to expertise and equipment that would have been impossible to develop in-house. 
                The collaboration has significantly accelerated our product development timeline."
              </p>
              <p className="mt-2 font-medium">— R&D Director, Leading Manufacturing Company</p>
            </div>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Partnership Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {partnershipsInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                  <div className="p-2 bg-lamp-blue/10 rounded-md h-fit">
                    <item.icon className="h-6 w-6 text-lamp-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-lamp-blue mb-4">Start a Conversation</h3>
              <p className="text-gray-600 mb-6">
                Interested in exploring how LAMP can support your company's innovation journey? 
                Contact us to discuss your specific challenges and how our capabilities might address them.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <a 
                  href="mailto:lamp@iitb.ac.in" 
                  className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact for Collaboration
                </a>
                <span className="text-gray-600">or call +91 (22) 2576 7890</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Capabilities;
