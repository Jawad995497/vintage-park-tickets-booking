
import { Link } from "react-router-dom";
import { Ticket, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vintage-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Ticket className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-semibold text-white">Amusement Park</span>
            </Link>
            <p className="text-vintage-gray text-sm mb-4">
              Experience joy and excitement at our vintage-themed amusement park with attractions for all ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-vintage-gray hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-vintage-gray hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-vintage-gray hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-vintage-gray hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-vintage-gray hover:text-primary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/attractions" className="text-vintage-gray hover:text-primary transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-vintage-gray hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Park Information</h3>
            <ul className="space-y-2">
              <li className="text-vintage-gray">
                Opening Hours: 10:00 AM - 8:00 PM
              </li>
              <li className="text-vintage-gray">
                Open Every Day of the Week
              </li>
              <li>
                <a href="#" className="text-vintage-gray hover:text-primary transition-colors">
                  Park Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-vintage-gray hover:text-primary transition-colors">
                  Safety Guidelines
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-vintage-gray">+92 304 5678901</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:info@amusementpark.com" className="text-vintage-gray hover:text-primary transition-colors">
                  info@amusementpark.com
                </a>
              </li>
              <li className="text-vintage-gray">
                123 Park Avenue, Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-vintage-gray mb-4 md:mb-0">
              © {new Date().getFullYear()} Amusement Park. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-vintage-gray">
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
