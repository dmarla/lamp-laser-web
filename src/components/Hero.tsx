
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-lamp-blue text-white">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="mb-2">
            <span className="px-3 py-1 text-sm text-white bg-lamp-red inline-block rounded-sm">
              IIT Bombay Research
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            LASER ADVANCED <br />
            <span className="text-lamp-red">MATERIALS PROCESSING</span> LAB
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Pioneering research in laser-material interactions, advanced manufacturing processes, and innovative material technologies at the Indian Institute of Technology Bombay.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-lamp-red hover:bg-lamp-red/90 text-white">
              <Link to="/research">
                Explore Our Research <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/students">
                For Prospective Students
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-lamp-red to-lamp-blue h-1" />
    </div>
  );
};

export default Hero;
