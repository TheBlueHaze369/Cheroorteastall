import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Cookie,
  Utensils
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const menuItems = [
    { name: 'Classic Tea', price: '₹15', icon: Coffee, category: 'Hot Beverages', image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Masala Chai', price: '₹20', icon: Coffee, category: 'Hot Beverages', image: 'https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Coffee', price: '₹25', icon: Coffee, category: 'Hot Beverages', image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Kulhad Chai', price: '₹30', icon: Coffee, category: 'Special', image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Ginger Tea', price: '₹18', icon: Coffee, category: 'Hot Beverages', image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Cardamom Tea', price: '₹22', icon: Coffee, category: 'Hot Beverages', image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Samosa', price: '₹12', icon: Utensils, category: 'Snacks', image: 'https://images.pexels.com/photos/14477797/pexels-photo-14477797.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Pakora', price: '₹15', icon: Utensils, category: 'Snacks', image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Biscuits', price: '₹8', icon: Cookie, category: 'Snacks', image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Toast', price: '₹20', icon: Utensils, category: 'Snacks', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Parle-G', price: '₹5', icon: Cookie, category: 'Snacks', image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Maggi', price: '₹35', icon: Utensils, category: 'Snacks', image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Best chai in the locality! The masala chai here is absolutely perfect. Great atmosphere and friendly service.',
      rating: 5
    },
    {
      name: 'Priya Singh',
      text: 'Love coming here every morning. The kulhad chai is amazing and the snacks are always fresh. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Sharma',
      text: 'Cheroort Tea Stall is my go-to place for evening tea. Great prices, tasty food, and wonderful conversations.',
      rating: 5
    },
    {
      name: 'Sunita Devi',
      text: 'Such a cozy place with delicious tea and snacks. The owners are very welcoming. Best chai stall in the area!',
      rating: 5
    }
  ];

  const openingHours = [
    { day: 'Monday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '6:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '6:00 AM - 11:00 PM' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">
            Cheroort Tea Stall
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'menu', 'hours', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-green-400 transition-colors capitalize"
              >
                {section === 'hours' ? 'Opening Hours' : section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 mt-4 py-4 px-4 rounded-lg">
            {['home', 'about', 'menu', 'hours', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 capitalize"
              >
                {section === 'hours' ? 'Opening Hours' : section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.1),_transparent_50%)]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Welcome to Cheroort Tea Stall
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your favorite local spot for tea, snacks, and great conversations.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Visit us today
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            Our Story
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-gray-700/50">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              For over a decade, Cheroort Tea Stall has been the heart of our community, serving the perfect cup of chai and delicious snacks to locals and visitors alike. Our journey began with a simple dream: to create a warm, welcoming space where people could enjoy authentic flavors and genuine hospitality.
            </p>
            <br />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              From our signature masala chai brewed with the finest spices to our crispy samosas and fresh snacks, every item is prepared with love and care. We believe in building relationships one cup at a time, making Cheroort Tea Stall not just a place to eat and drink, but a place to belong.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            Our Menu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-green-500/50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 text-xs bg-green-500/90 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-green-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-green-400">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section id="hours" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400 flex items-center justify-center gap-4">
            <Clock className="w-10 h-10" />
            When We're Open
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-gray-700/50">
            {openingHours.map((schedule, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-6 ${
                  index !== openingHours.length - 1 ? 'border-b border-gray-700/50' : ''
                } hover:bg-gray-700/30 transition-colors`}
              >
                <span className="text-lg font-semibold text-white">{schedule.day}</span>
                <span className="text-lg text-green-400 font-mono">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            What Our Customers Say
          </h2>
          
          <div className="relative">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-gray-700/50 min-h-[250px] flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-green-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-center text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <p className="text-center text-green-400 font-semibold text-lg">
                - {testimonials[currentTestimonial].name}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-green-500/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-green-500/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-green-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-700/50">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-700/50">
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">WhatsApp</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            {/* Email */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-700/50">
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">hello@cheroort.com</p>
            </div>

            {/* Location */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-700/50">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Visit Us</h3>
              <p className="text-gray-300">View on Maps</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-gray-800/50 hover:bg-green-500/80 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700/50">
                <Instagram className="w-8 h-8 text-white" />
              </a>
              <a href="#" className="bg-gray-800/50 hover:bg-green-500/80 p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700/50">
                <Facebook className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-400 text-lg">
            © 2025 Cheroort Tea Stall | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;