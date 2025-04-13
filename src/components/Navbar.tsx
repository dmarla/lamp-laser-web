
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lamp-blue text-xl font-bold">LAMP</span>
            <span className="hidden md:block text-gray-600 text-sm">LASER ADVANCED MATERIALS PROCESSING LAB</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/research" className={navigationMenuTriggerStyle()}>Research</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/team" className={navigationMenuTriggerStyle()}>Team</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/equipment" className={navigationMenuTriggerStyle()}>Equipment</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/capabilities" className={navigationMenuTriggerStyle()}>Capabilities</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/publications" className={navigationMenuTriggerStyle()}>Publications</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/students" className={navigationMenuTriggerStyle()}>For Students</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 space-y-3">
            <Link to="/" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>Home</Link>
            <Link to="/research" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>Research</Link>
            <Link to="/team" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>Team</Link>
            <Link to="/equipment" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>Equipment</Link>
            <Link to="/capabilities" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>Capabilities</Link>
            <Link to="/publications" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>Publications</Link>
            <Link to="/students" className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>For Students</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
