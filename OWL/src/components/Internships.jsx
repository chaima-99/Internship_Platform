/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Footer from './Footer';
import { Zap, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

import { 
  Brain, 
  Code, 
  Users, 
  Palette, 
  BarChart3, 
  Database, 
  Globe, 
  Layers, 
  Coffee, 
  TrendingUp 
} from 'lucide-react';

const ExploreDomains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px" // Trigger animation when element is 100px before entering viewport
  });

  const domains = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Master AI and machine learning with hands-on projects using cutting-edge technologies',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Code,
      title: 'Python Development',
      description: 'Become a proficient Python developer with full-stack development and automation skills',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Users,
      title: 'HR and Marketing',
      description: 'Drive impact with real-world HR strategies and marketing tools.',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: Palette,
      title: 'UI UX Design',
      description: 'Design sleek, user-friendly interfaces with real-world UI/UX projects.',
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      borderColor: 'border-red-200'
    },
    {
      icon: BarChart3,
      title: 'Power BI',
      description: 'Master Power BI and turn data into powerful visual insights',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Database,
      title: 'DSA',
      description: 'Crack coding interviews by mastering DSA with hands-on practice.',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Build modern, responsive websites with real frontend tools.',
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      borderColor: 'border-cyan-200'
    },
    {
      icon: Layers,
      title: 'Full Stack',
      description: 'Create full-stack web apps using the latest tech stack.',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200'
    },
    {
      icon: Coffee,
      title: 'Java Development',
      description: 'Build robust applications by mastering Java through real coding projects.',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-200'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Analyze data and uncover insights using top analytics tools',
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Much faster stagger
        delayChildren: 0
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25, // Much faster duration
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Domains
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from various tech domains and start your learning journey with industry-relevant skills
          </p>
        </motion.div>

        {/* Domains Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <motion.div
                key={index}
                className={`${domain.color} ${domain.borderColor} border-2 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-150 cursor-pointer group relative`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Icon */}
                <motion.div 
                  className={`${domain.iconColor} mb-4 group-hover:scale-110 transition-transform duration-150`}
                  whileHover={{ rotate: 3 }}
                >
                  <IconComponent size={40} className="sm:w-12 sm:h-12" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {domain.description}
                </p>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const VirtualInternshipPrograms = () => {
  const stats = [
    {
      value: '95%',
      label: 'Job Placement Rate',
      subtitle: 'within 6 months of completion'
    },
    {
      value: '40%',
      label: 'Average Salary Increase',
      subtitle: 'for program graduates'
    },
    {
      value: '2,500+',
      label: 'Students Placed',
      subtitle: 'in top tech companies'
    },
    {
      value: '4.8/5',
      label: 'Average Rating',
      subtitle: 'from student feedback'
    }
  ];
const navigate = useNavigate();

  const handleStartInternship = () => {
    navigate('/apply');
  };

  const handleContact = () => {
    navigate('/contact');
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Industry-Leading Programs
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Virtual Internship Programs
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive internship programs designed to give you 
              real-world experience and industry-relevant skills that employers value
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Statistic Value */}
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                
                {/* Main Label */}
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                
                {/* Subtitle */}
                <div className="text-sm text-gray-500">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ExploreDomains />
      </div>
      
      <section className="py-20 bg-gradient-to-l from-blue-600 via-blue-700 to-purple-700 ">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Decide Which Program to Choose?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
             Our career counselors can help you choose the right internship program
   based on your goals, experience level, and career aspirations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={handleStartInternship}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button 
                onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Schedule a Consultation</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VirtualInternshipPrograms;