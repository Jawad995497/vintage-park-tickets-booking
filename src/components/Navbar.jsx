
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Ticket } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Attractions", path: "/attractions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Ticket className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-semibold text-vintage-dark">Amusement Park</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      isActive(link.path)
                        ? "text-primary bg-vintage-peach/10"
                        : "text-vintage-dark/70 hover:text-primary hover:bg-vintage-peach/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center ml-6 space-x-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-vintage-dark hover:text-primary">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary text-white hover:bg-primary/80">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          )}

          {/* Mobile Navigation Toggle */}
          {isMobile && (
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-vintage-dark hover:text-primary focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-2 text-base font-medium ${
                  isActive(link.path)
                    ? "text-primary bg-vintage-peach/10"
                    : "text-vintage-dark/70 hover:text-primary hover:bg-vintage-peach/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col px-4 pt-4 space-y-2">
              <Link to="/login" onClick={closeMenu}>
                <Button
                  variant="ghost"
                  className="w-full justify-center text-vintage-dark hover:text-primary"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={closeMenu}>
                <Button className="w-full justify-center bg-primary text-white hover:bg-primary/80">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
