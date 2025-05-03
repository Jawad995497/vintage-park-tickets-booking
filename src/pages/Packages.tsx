import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Users, Check, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col vintage-container">
      {/* Hero Section */}
      <section className="relative py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-vintage-dark mb-4">Ticket Packages</h1>
            <p className="text-lg text-vintage-dark/80 max-w-2xl mx-auto">
              Choose the perfect package for your visit to our amusement park. 
              We offer options for individuals and families with different access levels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Individual Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-4 text-vintage-dark">
            Individual Packages
          </h2>
          <p className="text-center text-vintage-dark/70 max-w-2xl mx-auto mb-12">
            Perfect for solo visitors or friends coming individually to the park
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="vintage-card relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-vintage-yellow text-vintage-dark text-xs font-medium px-3 py-1 rounded-full">
                  Basic
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-vintage-peach/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-dark">Gate Entry Package</h3>
                  <p className="text-sm text-vintage-dark/70">Park access for one person</p>
                </div>
              </div>
              
              <div className="my-6">
                <span className="text-3xl font-bold text-vintage-dark">PKR 250</span>
                <span className="text-sm text-vintage-dark/70 ml-2">/ person</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Park entry for one person
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to food courts and shops
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to free entertainment shows
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80 opacity-50">
                  <span className="h-5 w-5 mr-2 relative">
                    <span className="absolute inset-0 flex items-center justify-center text-red-500">×</span>
                  </span>
                  No access to rides and attractions
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80 opacity-50">
                  <span className="h-5 w-5 mr-2 relative">
                    <span className="absolute inset-0 flex items-center justify-center text-red-500">×</span>
                  </span>
                  No access to water activities
                </li>
              </ul>
              
              <Link to="/signup">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Book Now
                </Button>
              </Link>
            </div>
            
            <div className="vintage-card relative overflow-hidden border-primary">
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-vintage-purple/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-dark">Full Access Ride Package</h3>
                  <p className="text-sm text-vintage-dark/70">Complete access for one person</p>
                </div>
              </div>
              
              <div className="my-6">
                <span className="text-3xl font-bold text-vintage-dark">PKR 1,500</span>
                <span className="text-sm text-vintage-dark/70 ml-2">/ person</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Park entry for one person
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Unlimited access to all rides
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to food courts and shops
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to water activities
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to special events and shows
                </li>
              </ul>
              
              <Link to="/signup">
                <Button className="w-full bg-primary text-white hover:bg-primary/80">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Family Packages */}
      <section className="py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-4 text-vintage-dark">
            Family Packages
          </h2>
          <p className="text-center text-vintage-dark/70 max-w-2xl mx-auto mb-12">
            Great value packages for families and large groups visiting our park
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="vintage-card relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-vintage-yellow text-vintage-dark text-xs font-medium px-3 py-1 rounded-full">
                  Basic
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-vintage-peach/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-dark">Family Gate Entry</h3>
                  <p className="text-sm text-vintage-dark/70">Park access for 10-12 people</p>
                </div>
              </div>
              
              <div className="my-6">
                <span className="text-3xl font-bold text-vintage-dark">PKR 2,000</span>
                <span className="text-sm text-vintage-dark/70 ml-2">/ group</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Park entry for 10-12 people
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to food courts and shops
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to free entertainment shows
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Reserved seating area for families
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80 opacity-50">
                  <span className="h-5 w-5 mr-2 relative">
                    <span className="absolute inset-0 flex items-center justify-center text-red-500">×</span>
                  </span>
                  No access to rides and attractions
                </li>
              </ul>
              
              <Link to="/signup">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Book Now
                </Button>
              </Link>
            </div>
            
            <div className="vintage-card relative overflow-hidden border-primary">
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-vintage-purple/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-vintage-dark">Family Full Access Package</h3>
                  <p className="text-sm text-vintage-dark/70">Complete access for 10-12 people</p>
                </div>
              </div>
              
              <div className="my-6">
                <span className="text-3xl font-bold text-vintage-dark">PKR 8,000</span>
                <span className="text-sm text-vintage-dark/70 ml-2">/ group</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Park entry for 10-12 people
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Unlimited access to all rides
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to food courts and shops
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Access to water activities
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Reserved seating for shows and events
                </li>
                <li className="flex items-center text-sm text-vintage-dark/80">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  20% discount on food and souvenirs
                </li>
              </ul>
              
              <Link to="/signup">
                <Button className="w-full bg-primary text-white hover:bg-primary/80">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-12 text-vintage-dark">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="vintage-card">
                <h3 className="text-lg font-semibold text-vintage-dark mb-2">{faq.question}</h3>
                <p className="text-sm text-vintage-dark/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const faqItems = [
  {
    question: "How do I book tickets for a large group?",
    answer: "For groups larger than 12 people, please contact our customer service at info@amusementpark.com for custom group packages."
  },
  {
    question: "Are there age restrictions for certain rides?",
    answer: "Yes, some rides have height and age restrictions for safety reasons. These are clearly marked at each attraction."
  },
  {
    question: "Can I bring outside food to the park?",
    answer: "Small snacks and water bottles are allowed, but full meals should be purchased from our food courts."
  },
  {
    question: "Do you offer any discounts for students or seniors?",
    answer: "Yes, we offer special discounts for students and seniors with valid ID. Please inquire at the ticket counter."
  },
  {
    question: "What happens if it rains on the day of my visit?",
    answer: "In case of light rain, most attractions remain open. For heavy rain, we offer rain-checks that can be used within 3 months."
  }
];

export default Packages;
