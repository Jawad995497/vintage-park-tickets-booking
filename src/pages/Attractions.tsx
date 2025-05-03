
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star, RollerCoaster, FerrisWheel, Users } from "lucide-react";

const Attractions = () => {
  return (
    <div className="min-h-screen flex flex-col vintage-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-vintage-dark mb-4">Park Attractions</h1>
            <p className="text-lg text-vintage-dark/80 max-w-2xl mx-auto">
              Discover our exciting rides and attractions for all ages.
              From thrilling roller coasters to family-friendly activities.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <div key={index} className="vintage-card overflow-hidden group">
                <div className="relative h-64 overflow-hidden rounded-md">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{attraction.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4" 
                          fill={i < attraction.rating ? "#FCA5A5" : "transparent"}
                          stroke={i < attraction.rating ? "#FCA5A5" : "#FFF"}
                        />
                      ))}
                      <span className="ml-2 text-xs text-white">{attraction.ratingCount} reviews</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {attraction.icon}
                    <span className="text-sm text-vintage-dark/70 ml-2">{attraction.type}</span>
                  </div>
                  <p className="text-sm text-vintage-dark/80 mb-3">{attraction.description}</p>
                  <div className="flex items-center justify-between text-xs text-vintage-dark/70">
                    <span>Age: {attraction.ageRequirement}</span>
                    <span>Height: {attraction.heightRequirement}</span>
                    <span>Duration: {attraction.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Family Attractions */}
      <section className="py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-4 text-vintage-dark">
            Family Attractions
          </h2>
          <p className="text-center text-vintage-dark/70 max-w-2xl mx-auto mb-12">
            Fun and exciting attractions for the whole family to enjoy together
          </p>
          
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {familyAttractions.map((attraction, index) => (
              <SwiperSlide key={index}>
                <div className="vintage-card overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-md">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-vintage-dark mb-2">{attraction.name}</h3>
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-primary mr-1" />
                      <span className="text-xs text-vintage-dark/70">Perfect for families</span>
                    </div>
                    <p className="text-sm text-vintage-dark/80">{attraction.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Kids Zone */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="decorative-heading text-3xl font-bold text-center mb-4 text-vintage-dark">
            Kids Zone
          </h2>
          <p className="text-center text-vintage-dark/70 max-w-2xl mx-auto mb-12">
            Special attractions designed for our youngest visitors
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kidsAttractions.map((attraction, index) => (
              <div key={index} className="vintage-card overflow-hidden">
                <div className="relative h-40 overflow-hidden rounded-t-md">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-vintage-dark mb-1">{attraction.name}</h3>
                  <p className="text-xs text-vintage-dark/80">{attraction.description}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-xs bg-vintage-yellow/50 text-vintage-dark/80 px-2 py-0.5 rounded">
                      Age: {attraction.age}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Park Map */}
      <section className="py-16 bg-vintage-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-vintage-dark mb-2">Park Map</h2>
            <p className="text-vintage-dark/70">
              Find your way around our park with this interactive map
            </p>
          </div>
          
          <div className="vintage-card overflow-hidden p-0">
            <div className="relative aspect-[16/9] w-full bg-vintage-gray/50 flex items-center justify-center">
              <div className="text-center p-4">
                <span className="block text-vintage-dark mb-2">Interactive Park Map</span>
                <span className="text-xs text-vintage-dark/70">
                  (Our interactive map would be displayed here in the full implementation)
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-vintage-dark/70">
              Download our mobile app for a detailed interactive map that you can use offline during your visit.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Sample data for attractions
const featuredAttractions = [
  {
    name: "Thunderbolt Coaster",
    image: "https://images.unsplash.com/photo-1464853796256-079378ff0bf6?q=80&w=1472&fit=crop",
    rating: 5,
    ratingCount: 346,
    type: "Thrill Ride",
    icon: <RollerCoaster className="h-4 w-4 text-primary" />,
    description: "Our signature roller coaster with breathtaking drops and loops that will leave you screaming for more!",
    ageRequirement: "12+ years",
    heightRequirement: "140+ cm",
    duration: "3 minutes"
  },
  {
    name: "Vintage Carousel",
    image: "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?q=80&w=1474&fit=crop",
    rating: 4,
    ratingCount: 215,
    type: "Family Ride",
    icon: <FerrisWheel className="h-4 w-4 text-primary" />,
    description: "A beautifully restored carousel featuring hand-carved horses and charming vintage music.",
    ageRequirement: "All ages",
    heightRequirement: "None",
    duration: "5 minutes"
  },
  {
    name: "Sky Wheel",
    image: "https://images.unsplash.com/photo-1563584316055-dee1120ae591?q=80&w=1470&fit=crop",
    rating: 4,
    ratingCount: 189,
    type: "Observation",
    icon: <FerrisWheel className="h-4 w-4 text-primary" />,
    description: "Take a ride on our giant Ferris wheel for spectacular views of the entire park and beyond.",
    ageRequirement: "All ages",
    heightRequirement: "None",
    duration: "15 minutes"
  },
  {
    name: "Rapids Adventure",
    image: "https://images.unsplash.com/photo-1560713781-d4f68dfc8d6c?q=80&w=1335&fit=crop",
    rating: 5,
    ratingCount: 278,
    type: "Water Ride",
    icon: <RollerCoaster className="h-4 w-4 text-primary" />,
    description: "Navigate through rushing waters on this exciting river rapids adventure. Be prepared to get wet!",
    ageRequirement: "8+ years",
    heightRequirement: "120+ cm",
    duration: "7 minutes"
  },
  {
    name: "Haunted Mansion",
    image: "https://images.unsplash.com/photo-1603374399574-71dca0fd5b6e?q=80&w=1470&fit=crop",
    rating: 4,
    ratingCount: 205,
    type: "Dark Ride",
    icon: <RollerCoaster className="h-4 w-4 text-primary" />,
    description: "Journey through our spooky mansion filled with surprising special effects and ghostly encounters.",
    ageRequirement: "10+ years",
    heightRequirement: "None",
    duration: "10 minutes"
  },
  {
    name: "Space Explorer",
    image: "https://images.unsplash.com/photo-1528360349791-e08a583bbcd9?q=80&w=1470&fit=crop",
    rating: 5,
    ratingCount: 312,
    type: "Thrill Ride",
    icon: <RollerCoaster className="h-4 w-4 text-primary" />,
    description: "Blast off into space on this high-speed launch coaster that will leave your heart racing!",
    ageRequirement: "14+ years",
    heightRequirement: "150+ cm",
    duration: "2 minutes"
  }
];

const familyAttractions = [
  {
    name: "Log Flume Adventure",
    image: "https://images.unsplash.com/photo-1461150685731-173cc443fa9e?q=80&w=1470&fit=crop",
    description: "A gentle water ride through enchanted forests with a small splash at the end that's fun for everyone."
  },
  {
    name: "Bumper Cars",
    image: "https://images.unsplash.com/photo-1525307528839-77060f082196?q=80&w=1470&fit=crop",
    description: "Classic bumper cars where the whole family can enjoy friendly collisions and laughter."
  },
  {
    name: "Safari Train",
    image: "https://images.unsplash.com/photo-1605449376890-7661340232dc?q=80&w=1347&fit=crop",
    description: "Take a scenic train ride around the park and spot animated jungle animals along the way."
  },
  {
    name: "4D Cinema",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1471&fit=crop",
    description: "Experience our special effects theater with moving seats, water sprays, and other sensory surprises."
  },
  {
    name: "Mirror Maze",
    image: "https://images.unsplash.com/photo-1596476515735-7c1af2f1cff2?q=80&w=1567&fit=crop",
    description: "Work together to find your way through our challenging but fun house of mirrors."
  }
];

const kidsAttractions = [
  {
    name: "Mini Drop Tower",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1480&fit=crop",
    description: "A gentle version of our big drop tower, perfect for young thrill-seekers.",
    age: "4-12 years"
  },
  {
    name: "Teacup Whirl",
    image: "https://images.unsplash.com/photo-1563135252-be13acb45e11?q=80&w=1470&fit=crop",
    description: "Spin the giant teacup as fast or as slow as you like on this colorful ride.",
    age: "3+ years"
  },
  {
    name: "Balloon Ferris",
    image: "https://images.unsplash.com/photo-1563584316055-dee1120ae591?q=80&w=1470&fit=crop",
    description: "A smaller Ferris wheel with colorful balloon-shaped cars for our youngest visitors.",
    age: "3+ years"
  },
  {
    name: "Playground Paradise",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1374&fit=crop",
    description: "A massive playground with slides, ball pits, climbing frames and more.",
    age: "2-10 years"
  },
  {
    name: "Pony Carousel",
    image: "https://images.unsplash.com/photo-1587022631934-723a9c25bce5?q=80&w=1470&fit=crop",
    description: "A gentle carousel ride featuring beautifully painted ponies and fantasy creatures.",
    age: "2+ years"
  },
  {
    name: "Bumble Bee Ride",
    image: "https://images.unsplash.com/photo-1560713781-d4f68dfc8d6c?q=80&w=1335&fit=crop",
    description: "Children can control their flying bee as it goes up and down around a central hub.",
    age: "3-8 years"
  },
  {
    name: "Mini Train",
    image: "https://images.unsplash.com/photo-1492144534555-ae79c964c9d7?q=80&w=1494&fit=crop",
    description: "A small-scale train ride that takes kids on a journey through a storybook landscape.",
    age: "2+ years"
  },
  {
    name: "Water Play Zone",
    image: "https://images.unsplash.com/photo-1544970170-6d8b7f59b7ad?q=80&w=1469&fit=crop",
    description: "A splash area with fountains, sprinklers and shallow pools for cooling off on hot days.",
    age: "All ages"
  }
];

export default Attractions;
