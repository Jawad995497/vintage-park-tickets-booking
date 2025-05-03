
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

const Attractions = () => {
  return (
    <div className="min-h-screen flex flex-col vintage-container">
      {/* Hero Section */}
      <section className="relative py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-vintage-dark mb-4">Park Attractions</h1>
            <p className="text-lg text-vintage-dark/80 max-w-2xl mx-auto">
              Discover our exciting range of rides and attractions for all ages. 
              From thrilling roller coasters to gentle children's rides, we have something for everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Attractions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-12 text-vintage-dark">
            Featured Attractions
          </h2>
          
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="featured-swiper mb-12"
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            {featuredAttractions.map((attraction, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{attraction.name}</h3>
                    <p className="text-white/90 mb-4 max-w-xl">{attraction.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                        {attraction.type}
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {attraction.ageGroup}
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {attraction.intensity}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Attractions By Category */}
      <section className="py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-4 text-vintage-dark">
            Attractions By Category
          </h2>
          <p className="text-center text-vintage-dark/70 max-w-2xl mx-auto mb-12">
            Explore our diverse range of attractions suited for different age groups and thrill levels
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="vintage-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden rounded-t-md">
                <img 
                  src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1496&fit=crop" 
                  alt="Thrill Rides" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Thrill Rides</h3>
              </div>
              <div className="p-4">
                <p className="text-vintage-dark/80 mb-4">
                  Experience heart-pounding adventures on our collection of high-speed coasters and drop towers.
                </p>
                <ul className="space-y-1 mb-4 text-sm text-vintage-dark/80">
                  <li>• The Cyclone Coaster</li>
                  <li>• Free Fall Tower</li>
                  <li>• Tornado Spin</li>
                </ul>
                <p className="text-xs text-vintage-dark/60">
                  Recommended for ages 12+ and minimum height requirements apply
                </p>
              </div>
            </div>
            
            <div className="vintage-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden rounded-t-md">
                <img 
                  src="https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=1530&fit=crop" 
                  alt="Family Rides" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Family Rides</h3>
              </div>
              <div className="p-4">
                <p className="text-vintage-dark/80 mb-4">
                  Attractions the whole family can enjoy together, combining fun and moderate thrills.
                </p>
                <ul className="space-y-1 mb-4 text-sm text-vintage-dark/80">
                  <li>• Vintage Carousel</li>
                  <li>• River Adventure</li>
                  <li>• Ferris Wheel</li>
                </ul>
                <p className="text-xs text-vintage-dark/60">
                  Suitable for all ages, some height restrictions may apply
                </p>
              </div>
            </div>
            
            <div className="vintage-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden rounded-t-md">
                <img 
                  src="https://images.unsplash.com/photo-1520095972714-909e91b038e5?q=80&w=1470&fit=crop" 
                  alt="Children's Area" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">Children's Area</h3>
              </div>
              <div className="p-4">
                <p className="text-vintage-dark/80 mb-4">
                  A magical area designed especially for younger visitors with gentle rides and play areas.
                </p>
                <ul className="space-y-1 mb-4 text-sm text-vintage-dark/80">
                  <li>• Mini Train Adventure</li>
                  <li>• Flying Elephants</li>
                  <li>• Interactive Water Play</li>
                </ul>
                <p className="text-xs text-vintage-dark/60">
                  Perfect for children under 10, supervised by parents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vintage-peach to-vintage-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-vintage-dark mb-4">Ready to Experience the Fun?</h2>
          <p className="text-lg text-vintage-dark/80 mb-8 max-w-2xl mx-auto">
            Get your tickets now and enjoy all the attractions our park has to offer.
          </p>
          <Link to="/packages">
            <Button className="bg-white text-primary hover:bg-vintage-gray border border-primary px-8 py-6 text-lg">
              View Ticket Packages
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Sample data for featured attractions
const featuredAttractions = [
  {
    name: "The Thunderbolt Roller Coaster",
    description: "Our signature roller coaster featuring three loops and a 90-degree drop. Experience speeds of up to 100km/h on this thrilling ride that will leave you breathless.",
    image: "https://images.unsplash.com/photo-1620030669578-f84ef851354f?q=80&w=1470&fit=crop",
    type: "Roller Coaster",
    ageGroup: "Teens & Adults",
    intensity: "High Intensity"
  },
  {
    name: "Vintage Carousel",
    description: "Step back in time on our beautifully restored carousel featuring hand-painted horses and chariots. This nostalgic ride is a centerpiece of our park and perfect for all ages.",
    image: "https://images.unsplash.com/photo-1572507511565-c7cfad241ad6?q=80&w=1470&fit=crop",
    type: "Classic Ride",
    ageGroup: "All Ages",
    intensity: "Gentle"
  },
  {
    name: "Water Rapids Adventure",
    description: "Navigate through rushing waters, unexpected drops, and splashing waves on this exciting river rapids ride. Be prepared to get wet as you twist and turn through the rapids!",
    image: "https://images.unsplash.com/photo-1602164945942-a6cb0afb5cf5?q=80&w=1470&fit=crop",
    type: "Water Ride",
    ageGroup: "Families",
    intensity: "Moderate"
  }
];

export default Attractions;
