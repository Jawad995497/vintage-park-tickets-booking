import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Ticket, Users, User, Calendar, Star, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col vintage-container">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-vintage-peach to-vintage-yellow flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=1470&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center md:text-left md:max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vintage-dark mb-4">
              Experience <span className="text-primary">Joy</span> & <span className="text-primary">Wonder</span>
            </h1>
            <p className="text-lg text-vintage-dark/80 mb-8">
              Step into a world where nostalgia meets excitement at our vintage-themed amusement park.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/packages">
                <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-md text-lg">
                  Book Tickets
                </Button>
              </Link>
              <Link to="/attractions">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-md text-lg">
                  Explore Attractions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-12 text-vintage-dark">
            Why Choose Our Park
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="vintage-card text-center p-6 animate-float">
              <div className="bg-vintage-peach/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vintage-dark">Affordable Packages</h3>
              <p className="text-sm text-vintage-dark/80">
                Enjoy our park with budget-friendly packages for everyone.
              </p>
            </div>
            
            <div className="vintage-card text-center p-6 animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="bg-vintage-yellow/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vintage-dark">Family Friendly</h3>
              <p className="text-sm text-vintage-dark/80">
                Special packages and attractions for the whole family.
              </p>
            </div>
            
            <div className="vintage-card text-center p-6 animate-float" style={{ animationDelay: "0.4s" }}>
              <div className="bg-vintage-purple/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vintage-dark">Top Attractions</h3>
              <p className="text-sm text-vintage-dark/80">
                Experience our thrilling and memorable attractions.
              </p>
            </div>
            
            <div className="vintage-card text-center p-6 animate-float" style={{ animationDelay: "0.6s" }}>
              <div className="bg-vintage-gray/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-vintage-dark">Easy Booking</h3>
              <p className="text-sm text-vintage-dark/80">
                Simple and quick online ticket booking system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Packages Preview */}
      <section className="py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-4 text-vintage-dark">
            Popular Packages
          </h2>
          <p className="text-center text-vintage-dark/70 max-w-2xl mx-auto mb-12">
            Choose from our range of packages designed for individuals and families to make the most of your visit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="vintage-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden rounded-t-md">
                <img 
                  src="https://images.unsplash.com/photo-1551655510-555dc3be8633?q=80&w=1470&fit=crop" 
                  alt="Individual packages" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Individual Packages</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-vintage-dark/80">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    Gate Entry Package - PKR 250
                  </li>
                  <li className="flex items-center text-sm text-vintage-dark/80">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    Full Access Ride Package - PKR 1,500
                  </li>
                </ul>
                <Link to="/packages" className="flex items-center text-primary hover:text-primary/80">
                  <span className="mr-1">View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="vintage-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden rounded-t-md">
                <img 
                  src="https://images.unsplash.com/photo-1582120030789-1b2408cc46ff?q=80&w=1470&fit=crop" 
                  alt="Family packages" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Family Packages</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-vintage-dark/80">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    Gate Entry (10-12 people) - PKR 2,000
                  </li>
                  <li className="flex items-center text-sm text-vintage-dark/80">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    Full Access Ride Package - PKR 8,000
                  </li>
                </ul>
                <Link to="/packages" className="flex items-center text-primary hover:text-primary/80">
                  <span className="mr-1">View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-12 text-vintage-dark">
            What Visitors Say
          </h2>
          
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="vintage-card p-6 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary" fill="#FCA5A5" />
                    ))}
                  </div>
                  <p className="text-vintage-dark/80 mb-4 italic">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-vintage-purple/30 flex items-center justify-center">
                      <span className="text-primary font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-vintage-dark">{testimonial.name}</p>
                      <p className="text-xs text-vintage-dark/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vintage-peach to-vintage-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-vintage-dark mb-4">Ready for an Adventure?</h2>
          <p className="text-lg text-vintage-dark/80 mb-8 max-w-2xl mx-auto">
            Book your tickets now and experience the magic of our vintage amusement park.
          </p>
          <Link to="/signup">
            <Button className="bg-white text-primary hover:bg-vintage-gray border border-primary px-8 py-6 text-lg">
              Sign Up & Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Sample testimonial data
const testimonials = [
  {
    text: "We had an amazing day at the amusement park! The rides were thrilling and the atmosphere was perfect for our family outing.",
    name: "Ahmed Khan",
    role: "Family Visitor"
  },
  {
    text: "The full access package was worth every penny. I enjoyed all the rides and had the best day ever!",
    name: "Sara Ali",
    role: "Individual Visitor"
  },
  {
    text: "Our children loved the park. The attractions are suitable for all ages and the staff was very friendly.",
    name: "Fahad Hussain",
    role: "Parent"
  },
  {
    text: "The vintage theme gives the park a unique charm. I'll definitely be coming back with more friends!",
    name: "Ayesha Malik",
    role: "Group Visitor"
  }
];

export default Index;
