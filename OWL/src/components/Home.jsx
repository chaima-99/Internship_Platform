import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Star, 
  ArrowRight,
  Globe,
  BookOpen,
  Zap
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import heroimg from '../assets/heroimg.png'; 



// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hero Section Component
import { useState, useEffect } from 'react';
import {  Play,  Brain, Medal } from 'lucide-react';

const HeroSection = () => {
 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <Zap className="w-4 h-4" />
              Transform Your Career Today
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                Learn. Intern.{' '}
                <span className="text-blue-600 relative">
                  Grow.
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded"></div>
                </span>
              </h1>
              
              <p 
                className={`text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                Gain real-world experience through self-paced virtual internships in AI, Python, Data Science, 
                and more. Build skills that matter with Owl AI and accelerate your tech career.
              </p>
            </div>

            {/* Action Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Image and Icons */}
          <div className="relative">
            <div 
              className={`relative transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="bg-blue-50 w-[400px] rounded-3xl p-8 transform rotate-5 hover:rotate-0 transition-transform duration-500 hover:shadow-2xl cursor-pointer">
                  <img src={heroimg} alt="" className="  transform -rotate-5  "/>
                
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-6 -left-6">
              <div 
                className={`bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-1000 transform hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100 animate-bounce' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: '0.6s',
                  animationDelay: '0.6s',
                  animationDuration: '2s'
                }}
              >
                <Brain className="w-6 h-6" />
              </div>
            </div>

            <div className="absolute -bottom-6 right-1/4">
              <div 
                className={`bg-emerald-500 text-white p-4 rounded-full shadow-lg transition-all duration-1000 transform hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100 animate-bounce' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: '0.7s',
                  animationDelay: '1.2s',
                  animationDuration: '2s'
                }}
              >
                <Medal className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </section>
  );
}

// Stats Section Component
import {  MapPin, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    domains: 0,
    successRate: 0,
    countries: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(2500, 'students');
      animateCounter(7, 'domains', 1500);
      animateCounter(95, 'successRate', 1800);
      animateCounter(50, 'countries', 1600);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: `${counters.students.toLocaleString()}+`,
      label: 'Students Trained',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Medal,
      value: `${String(counters.domains).padStart(2, '0')}+`,
      label: 'Tech Domains',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: TrendingUp,
      value: `${counters.successRate}%`,
      label: 'Success Rate',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Globe,
      value: `${counters.countries}+`,
      label: 'Countries',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor} mb-4 transition-transform duration-300 hover:scale-110`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                {/* Value */}
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 transition-all duration-300 hover:scale-105`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Learn on your own schedule with 24/7 access to materials"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals and career experts"
    },
    {
      icon: Award,
      title: "Industry Certificates",
      description: "Earn recognized certificates to boost your professional profile"
    },
    {
      icon: BookOpen,
      title: "Real Projects",
      description: "Work on hands-on projects that mirror real-world challenges"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose OWL AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're redefining how students and freshers gain practical experience in tech fields
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Success Stories Component

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stories = [
    {
      name: "Sarah Johnson",
      role: "Data Science Intern at Tech Corp",
      image: "SJ",
      rating: 4,
      story: "Owl AI transformed my career! The hands-on projects and mentorship helped me land my dream job in data science."
    },
    {
      name: "Michael Chen",
      role: "Python Developer at StartupXYZ",
      image: "MC",
      rating: 5,
      story: "The virtual internship was incredibly well-structured. I gained real-world experience that employers actually value."
    },
    {
      name: "Priya Patel",
      role: "AI Engineer at Innovation Labs",
      image: "PP",
      rating: 3,
      story: "Best decision I made for my career. The AI internship gave me practical skills and confidence to excel in the field."
    },
    {
      name: "Alex Rodriguez",
      role: "Data Analyst at DataFlow Inc",
      image: "AR",
      rating: 5,
      story: "The mentorship and hands-on projects were game-changers. I went from beginner to landing my first tech job!"
    },
    {
      name: "Emily Zhang",
      role: "ML Engineer at TechNova",
      image: "EZ",
      rating: 4,
      story: "Owl AI's program exceeded my expectations. The real-world projects prepared me perfectly for my current role."
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('stories-container');
    container.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('stories-container');
    container.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our successful graduates
          </p>
        </div>

        {/* Stories Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ marginLeft: '-20px' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border-2 border-blue-600 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            style={{ marginRight: '-20px' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Stories */}
          <div
            id="stories-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 bg-gray-50 p-8 rounded-xl transition-all duration-700 transform hover:shadow-lg hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < story.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>

                {/* Story Text */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{story.story}"
                </p>

                {/* Profile */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-4">
                    {story.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {stories.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// CTA Section Component with Blue to Purple Gradient
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of students who have already started their tech journey with OWL AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Your Internship</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Explore Programs</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SuccessStories />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;