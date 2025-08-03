/* eslint-disable no-unused-vars */
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  Check,
  Lightbulb,
  Target,
  Calendar,
  Share2,
  FileCheck,
  GraduationCap,
  Building,
  Briefcase,
  UserCheck,
  MessageSquare,
  Network,
  Scale,
  Timer,
  Sunset,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const LearningExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const FeatureCard = ({ icon: Icon, title, features, bgColor, iconColor, delay = 0 }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={`${bgColor} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center gap-4 mb-6 ">
        <div className={`${iconColor} rounded-full p-3`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay / 100 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="bg-green-500 rounded-full p-1 mt-0.5 flex-shrink-0">
              {feature.icon ? (
                <feature.icon className="w-3 h-3 text-white" />
              ) : (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const features = [
    {
      icon: BookOpen,
      title: "Self-Paced Learning",
      bgColor: "bg-gray-50",
      iconColor: "bg-blue-600",
      features: [
        { text: "Flexible scheduling that fits your lifestyle", icon: Calendar },
        { text: "24/7 access to all learning materials", icon: Clock },
        { text: "Progress tracking and milestone achievements", icon: Target },
        { text: "Personalized learning paths based on your goals", icon: Lightbulb }
      ]
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      bgColor: "bg-gray-50",
      iconColor: "bg-green-500",
      features: [
        { text: "Code reviews and project feedback", icon: FileCheck },
        { text: "Networking opportunities with professionals", icon: Network },
        { text: "Career guidance and interview preparation", icon: Briefcase },
        { text: "Weekly group discussions and Q&A sessions", icon: MessageSquare }
      ]
    },
    {
      icon: Award,
      title: "Industry Certificates",
      bgColor: "bg-gray-50",
      iconColor: "bg-purple-600",
      features: [
        { text: "LinkedIn integration for easy sharing", icon: Share2 },
        { text: "Detailed skill verification reports", icon: UserCheck },
        { text: "Continuing education credits available", icon: GraduationCap },
        { text: "Certificates recognized by 50+ companies", icon: Building }
      ]
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      bgColor: "bg-gray-50",
      iconColor: "bg-red-400",
      features: [
        { text: "Work-life balance friendly approach", icon: Scale },
        { text: "Part-time and full-time options available", icon: Timer },
        { text: "Weekend and evening session options", icon: Sunset },
        { text: "Custom deadline extensions when needed", icon: AlertCircle }
      ]
    }
  ];

const ComparisonSection = () => {
  const features = [
    { name: 'Self-paced learning', owlAI: true, traditional: false },
    { name: 'Industry mentorship', owlAI: true, traditional: false },
    { name: 'Real-world projects', owlAI: true, traditional: true },
    { name: 'Flexible scheduling', owlAI: true, traditional: false },
    { name: 'Career support', owlAI: true, traditional: false },
    { name: 'Affordable pricing', owlAI: true, traditional: false },
    { name: 'Global accessibility', owlAI: true, traditional: false },
    { name: 'Industry certificates', owlAI: true, traditional: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Owl AI vs Traditional Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we compare to traditional educational approaches
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="grid grid-cols-3 gap-8 py-6 px-8">
              <div className="text-lg font-semibold">Feature</div>
              <div className="text-lg font-semibold text-center">Owl AI</div>
              <div className="text-lg font-semibold text-center">Traditional Learning</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-8 py-6 px-8 hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Feature Name */}
                <div className="text-gray-700 font-medium flex items-center">
                  {feature.name}
                </div>

                {/* Owl AI Column */}
                <div className="flex justify-center items-center">
                  {feature.owlAI ? (
                    <div className="bg-green-100 rounded-full p-2">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="bg-red-100 rounded-full p-2">
                      <X className="w-6 h-6 text-red-500" />
                    </div>
                  )}
                </div>

                {/* Traditional Learning Column */}
                <div className="flex justify-center items-center">
                  {feature.traditional ? (
                    <div className="bg-green-100 rounded-full p-2">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="bg-red-100 rounded-full p-2">
                      <X className="w-6 h-6 text-red-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
  );
};

// CTA Section Component with Blue to Purple Gradient
const CTASection = () => {
  const navigate = useNavigate();

  const handleStartInternship = () => {
    navigate('/apply');
  };

  const handleExplorePrograms = () => {
    navigate('/internships');
  };
  return (
    <section className="py-20 bg-gradient-to-l from-blue-600 via-blue-700 to-purple-700">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of students and freshers who are already building their careers with Owl AI's innovative approach</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              onClick={handleStartInternship}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button 
              onClick={handleExplorePrograms}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 px-4"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold text-sm mb-8"
        >
          <Lightbulb className="w-4 h-4" />
          Comprehensive Learning Experience
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              features={feature.features}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
              delay={index * 100}
            />
          ))}
        </div>
      </motion.div>
          <ComparisonSection />
      {/* Bottom CTA Section */}
      <motion.div>
        <CTASection />
      </motion.div>
      <Footer />
    </div>
  );
};

export default LearningExperiencePage;