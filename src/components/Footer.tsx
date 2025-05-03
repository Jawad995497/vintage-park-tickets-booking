
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vintage-gray/30 border-t border-vintage-peach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-vintage-dark">Amusement Park</h3>
            <p className="text-sm text-vintage-dark/80">
              Experience the thrill and joy at our vintage-themed amusement park. 
              Perfect for families, friends, and individuals looking for fun-filled adventures.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-vintage-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-vintage-dark/80 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-vintage-dark/80 hover:text-primary transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/attractions" className="text-sm text-vintage-dark/80 hover:text-primary transition-colors">Attractions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-vintage-dark/80 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-vintage-dark">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-vintage-dark/80">+92 304 5678901</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-vintage-dark/80">info@amusementpark.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-vintage-dark/80">Open daily: 10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span className="text-sm text-vintage-dark/80">123 Park Avenue, Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-vintage-peach/50 mt-8 pt-8 text-center">
          <p className="text-xs text-vintage-dark/70">
            &copy; {new Date().getFullYear()} Amusement Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
