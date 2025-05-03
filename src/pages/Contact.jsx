
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formState);
    
    // Show success message
    toast({
      title: "Feedback Received",
      description: "Thank you for your feedback! We'll get back to you soon.",
    });
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col vintage-container">
      {/* Hero Section */}
      <section className="relative py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-vintage-dark mb-4">Contact Us</h1>
            <p className="text-lg text-vintage-dark/80 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you! 
              Reach out to our team using the information below.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-vintage-dark mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-vintage-peach/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vintage-dark">Phone</h3>
                    <p className="text-vintage-dark/80">+92 304 5678901</p>
                    <p className="text-sm text-vintage-dark/60">Available 9:00 AM - 6:00 PM, Monday to Saturday</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vintage-yellow/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vintage-dark">Email</h3>
                    <p className="text-vintage-dark/80">info@amusementpark.com</p>
                    <p className="text-sm text-vintage-dark/60">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vintage-purple/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vintage-dark">Park Hours</h3>
                    <p className="text-vintage-dark/80">Every day: 10:00 AM - 8:00 PM</p>
                    <p className="text-sm text-vintage-dark/60">Special hours may apply during holidays</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vintage-gray/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vintage-dark">Location</h3>
                    <p className="text-vintage-dark/80">123 Park Avenue, Lahore, Pakistan</p>
                    <p className="text-sm text-vintage-dark/60">Near City Center Mall</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-vintage-dark mb-6">Feedback</h2>
              <p className="text-vintage-dark/80 mb-6">
                We value your thoughts and suggestions! Please share your experience or ask any questions.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-vintage-dark mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="bg-vintage-gray/10 border-vintage-peach/30 focus-visible:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-vintage-dark mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="bg-vintage-gray/10 border-vintage-peach/30 focus-visible:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-vintage-dark mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-vintage-gray/10 border-vintage-peach/30 focus-visible:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-vintage-dark mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-vintage-gray/10 border-vintage-peach/30 focus-visible:ring-primary"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-primary text-white hover:bg-primary/80 w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-vintage-dark text-center mb-8">Find Us</h2>
          
          <div className="vintage-card overflow-hidden p-0">
            <div className="relative aspect-[16/9] w-full bg-vintage-gray/50 flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <span className="block text-vintage-dark mb-2">Interactive Map</span>
                <span className="text-xs text-vintage-dark/70">
                  (A Google Maps embed would be displayed here in the full implementation)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
