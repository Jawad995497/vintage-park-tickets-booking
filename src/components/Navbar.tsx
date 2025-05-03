
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Ticket } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-vintage-peach sticky top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Ticket className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold text-vintage-dark">Amusement Park</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-vintage-dark hover:bg-vintage-peach hover:text-vintage-dark transition-colors duration-200">
                Home
              </Link>
              <Link to="/packages" className="px-3 py-2 rounded-md text-sm font-medium text-vintage-dark hover:bg-vintage-peach hover:text-vintage-dark transition-colors duration-200">
                Packages
              </Link>
              <Link to="/attractions" className="px-3 py-2 rounded-md text-sm font-medium text-vintage-dark hover:bg-vintage-peach hover:text-vintage-dark transition-colors duration-200">
                Attractions
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-vintage-dark hover:bg-vintage-peach hover:text-vintage-dark transition-colors duration-200">
                Contact Us
              </Link>
              <Link to="/login">
                <Button variant="outline" className="ml-4 border-primary hover:bg-primary hover:text-white transition-colors duration-200">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="ml-2 bg-primary text-white hover:bg-primary/80 transition-colors duration-200">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vintage-dark hover:text-primary hover:bg-vintage-peach focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-vintage-dark hover:bg-vintage-peach"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/packages" 
              className="block px-3 py-2 rounded-md text-base font-medium text-vintage-dark hover:bg-vintage-peach"
              onClick={() => setIsMenuOpen(false)}
            >
              Packages
            </Link>
            <Link 
              to="/attractions" 
              className="block px-3 py-2 rounded-md text-base font-medium text-vintage-dark hover:bg-vintage-peach"
              onClick={() => setIsMenuOpen(false)}
            >
              Attractions
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-vintage-dark hover:bg-vintage-peach"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link 
                to="/login" 
                className="block w-full" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full border-primary">Login</Button>
              </Link>
              <Link 
                to="/signup" 
                className="block w-full" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-primary text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
