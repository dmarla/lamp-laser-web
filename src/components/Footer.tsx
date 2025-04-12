
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Twitter, 
  Linkedin, 
  Youtube, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lamp-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">LAMP</h3>
            <p className="text-white/80 mb-4">
              LASER ADVANCED MATERIALS PROCESSING LAB at IIT Bombay advances research in laser-material interactions and manufacturing technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lamp-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-lamp-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-lamp-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/research" className="text-white/80 hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/equipment" className="text-white/80 hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/publications" className="text-white/80 hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/capabilities" className="text-white/80 hover:text-white transition-colors">Industry</Link></li>
              <li><Link to="/students" className="text-white/80 hover:text-white transition-colors">For Students</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-lamp-red" />
                <span className="text-white/80">
                  Department of Mechanical Engineering,<br />
                  IIT Bombay, Powai,<br />
                  Mumbai - 400076, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-lamp-red" />
                <a href="mailto:lamp@iitb.ac.in" className="text-white/80 hover:text-white transition-colors">
                  lamp@iitb.ac.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-lamp-red" />
                <a href="tel:+912225767890" className="text-white/80 hover:text-white transition-colors">
                  +91 (22) 2576 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-3">
              Subscribe to our newsletter for updates on research breakthroughs and upcoming events.
            </p>
            <form className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-black rounded-l-md w-full focus:outline-none" 
              />
              <button 
                type="submit" 
                className="bg-lamp-red hover:bg-lamp-red/90 text-white p-2 rounded-r-md"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LAMP, IIT Bombay. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-white/60 text-sm">
            <Globe className="h-4 w-4" />
            <a href="https://www.iitb.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              IIT Bombay
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
