
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EquipmentSection = ({ limit = 4 }) => {
  const equipmentList = [
    {
      name: "High-Power Fiber Laser System",
      image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "2kW continuous wave fiber laser with integrated chiller and beam delivery system.",
      capabilities: ["Cutting", "Welding", "Surface Treatment"],
      year: "2021",
      academicRate: 2500,
      industryRate: 5000,
    },
    {
      name: "Femtosecond Laser Micromachining Station",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Ultrafast laser with automated 5-axis positioning system for precision micromachining.",
      capabilities: ["Micromachining", "Ablation", "Surface Texturing"],
      year: "2022",
      academicRate: 3000,
      industryRate: 6000,
    },
    {
      name: "Selective Laser Melting System",
      image: "https://images.unsplash.com/photo-1581094338460-ade62ea0a586?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Metal 3D printing system with 400W laser and 250mm x 250mm build plate.",
      capabilities: ["Additive Manufacturing", "Rapid Prototyping"],
      year: "2020",
      academicRate: 3500,
      industryRate: 7000,
    },
    {
      name: "Advanced Materials Characterization Suite",
      image: "https://images.unsplash.com/photo-1576086135878-31532902b544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Complete characterization equipment including SEM, XRD, and micro-hardness testing.",
      capabilities: ["Material Analysis", "Surface Characterization", "Mechanical Testing"],
      year: "2019",
      academicRate: 2000,
      industryRate: 4500,
    },
    {
      name: "Direct Laser Interference Patterning System",
      image: "https://images.unsplash.com/photo-1581093577421-5a1a21a3bb2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Custom-built setup for creating micro and nano surface patterns using laser interference.",
      capabilities: ["Surface Functionalization", "Nano-patterning"],
      year: "2022",
      academicRate: 2800,
      industryRate: 5500,
    },
    {
      name: "High-Temperature Vacuum Processing Chamber",
      image: "https://images.unsplash.com/photo-1581093806467-8742e629bcc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Controlled atmosphere chamber for laser processing under vacuum or inert gas conditions.",
      capabilities: ["Controlled Environment Processing", "High Temperature Treatment"],
      year: "2021",
      academicRate: 2200,
      industryRate: 4800,
    }
  ];

  // Limit the number of equipment items if specified
  const displayedEquipment = limit ? equipmentList.slice(0, limit) : equipmentList;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {limit && (
          <div className="mb-12 text-center">
            <h2 className="section-heading">Research Equipment</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-6">
              Our laboratory is equipped with state-of-the-art laser systems and material characterization tools to support cutting-edge research.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedEquipment.map((equipment, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${equipment.image})` }}
              />
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{equipment.name}</span>
                  <Badge variant="outline" className="bg-lamp-blue/10 text-lamp-blue">
                    {equipment.year}
                  </Badge>
                </CardTitle>
                <CardDescription>{equipment.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {equipment.capabilities.map((capability, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100">
                      {capability}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2 text-sm">
                  <div className="flex justify-between border-b pb-1 mb-1">
                    <span className="font-medium">Service Charges (per hour):</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Academic Rate:</span>
                    <span>₹{equipment.academicRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Industry Rate:</span>
                    <span>₹{equipment.industryRate}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Link 
                  to={`/equipment#${equipment.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lamp-blue hover:text-lamp-red flex items-center gap-1 text-sm"
                >
                  View Details
                  <ChevronRight size={16} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {limit && equipmentList.length > limit && (
          <div className="mt-10 text-center">
            <Link to="/equipment">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
              >
                View All Equipment
                <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default EquipmentSection;
