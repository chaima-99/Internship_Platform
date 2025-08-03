/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Footer from './Footer';
import { Globe, Lightbulb, Users ,Linkedin } from 'lucide-react';
import aboutimg from '../assets/aboutimg.png';
import sarah from '../assets/sarah jonson.png';
import michel from '../assets/michel.png';
import priya from '../assets/priya.png';
import david from '../assets/david.png';

const OurStorySection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const values = [
    {
      icon: Heart,
      title: 'Student-First Approach',
      description: 'Every decision we make prioritizes student success and learning outcomes',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making quality tech education accessible to everyone, everywhere',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Practical Learning',
      description: 'Focus on real-world skills that employers actually value',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive global community of learners and professionals',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Our Story Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900"
                variants={fadeInUp}
              >
                Our Story
              </motion.h2>
              
              <motion.div 
                className="space-y-4 text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                <p>
                  Owl AI was born from a simple observation: traditional education 
                  wasn't preparing students for the real-world challenges of the tech 
                  industry. Too many talented individuals were graduating with theoretical 
                  knowledge but lacking practical experience.
                </p>
                
                <p>
                  Founded in 2021 by a team of industry veterans and education experts, 
                  we set out to bridge this gap. Our founders, having worked at companies 
                  like Google, Netflix, and Uber, understood exactly what skills employers 
                  were looking for.
                </p>
                
                <p>
                  Today, we've helped over 2,500 students and freshers gain real-world 
                  experience through our virtual internship programs. Our graduates work 
                  at top companies worldwide, and we maintain a 95% job placement rate.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Illustration Area */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <img src={aboutimg} alt="About Owl AI" className="w-full h-auto rounded-lg shadow-lg" />

                {/* Background decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-teal-200 rounded-full opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Values Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`w-8 h-8 ${value.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      description: 'Former AI researcher at Google with 10+ years in EdTech. PhD in Computer Science from MIT.',
      image: sarah,
      bgColor: 'bg-[#DBEAFE]'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Ex-Netflix engineer specializing in scalable learning platforms. MS in Software Engineering.',
      image: michel,
      bgColor: 'bg-[#DBEAFE]'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Curriculum',
      description: 'Former Data Science lead at Uber. Expert in designing practical, industry-relevant curricula.',
      image: priya,
      bgColor: 'bg-[#DBEAFE]'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Student Success',
      description: 'Career counselor with 8+ years helping students transition into tech careers.',
      image: david,
      bgColor: 'bg-[#DBEAFE]'
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The passionate individuals behind Owl AI
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              variants={fadeInUp}
            >
              <div className="bg-[#DBEAFE] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center h-full flex flex-col">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient avatar if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback avatar (hidden by default) */}
                    <div 
                      className={`w-full h-full ${member.bgColor} rounded-full flex items-center justify-center text-white text-xl font-bold absolute top-0 left-0`}
                      style={{ display: 'none' }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {member.description}
                </p>

                {/* LinkedIn Button */}
                <motion.button
                  className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Want to Join Our Mission?
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators and industry experts to help shape the future of tech education.
            </p>
            <motion.button 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutOwlAI = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <motion.div 
        className="py-20 lg:py-32"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8"
            variants={fadeInUp}
          >
            <Heart className="w-4 h-4" />
            Our Story
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            variants={fadeInUp}
          >
            About Owl AI
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We're on a mission to redefine how students and freshers gain practical 
            experience in tech fields through innovative virtual internships and curated 
            learning experiences.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-l from-blue-600 via-blue-700 to-purple-700 ">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-10">
             To make quality education and practical exposure accessible and affordable 
            for every learner. Whether you're a student exploring your career path, 
            a fresher looking to strengthen your resume, or someone eager to gain hands
            -on tech experience — Owl AI is built for you.
            </p>
            
           
          </motion.div>
        </div>
      </section>
        {/* Our Story Section */}
        <OurStorySection />
        {/* Meet Our Team Section */}
        <MeetOurTeam />
        {/* Footer */}
        <Footer />
    </div>
        
  );
};
export default AboutOwlAI;