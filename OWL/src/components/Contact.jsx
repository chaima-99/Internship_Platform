import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, ChevronDown } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const FAQSection = () => {
  const faqData = [
    {
      question: "How long are the internship programs?",
      answer: "Our programs range from 6-18 weeks depending on the domain. You can complete them at your own pace with flexible deadlines."
    },
    {
      question: "Do I need prior experience to apply?",
      answer: "No prior experience is required for most of our programs. We have tracks for complete beginners as well as advanced learners."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 1-on-1 mentorship, career guidance, resume reviews, interview preparation, and 24/7 technical support."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are recognized by 50+ companies worldwide. Many of our graduates have used them to land jobs at top tech companies."
    },
    {
      question: "Can I switch programs after starting?",
      answer: "Yes, you can switch to a different program within the first week if you feel it's not the right fit for you."
    }
  ];

  useEffect(() => {
    // Simple scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 fade-element">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 font-normal">
            Quick answers to common questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg p-8 fade-element transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {faq.question}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-element {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};




const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const inquiryTypes = [
    'General Information',
    'Program Details', 
    'Application Help',
    'Technical Support',
    'Partnership',
    'Other'
  ];

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Inquiry Type validation
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInquiryTypeSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: type
    }));
    setShowDropdown(false);

    // Clear error
    if (errors.inquiryType) {
      setErrors(prev => ({
        ...prev,
        inquiryType: ''
      }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Create email content
    const emailSubject = `Owl AI Contact Form: ${formData.subject}`;
    const emailBody = `
Hello,

You have received a new message from your Owl AI contact form:

Full Name: ${formData.fullName}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent via the Owl AI contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:contact@owlai.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        inquiryType: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      alert('Thank you for your message! Your email client should open with the pre-filled message.');
    }, 1000);
  };

  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? Need help with your application?
            <br />
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-blue-600 font-medium">contact@owlai.com</p>
                  <p className="text-gray-600 text-sm">Send us an email anytime</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-blue-600 font-medium">+91 79811 94221</p>
                  <p className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-blue-600 font-medium">Hyderabad, India</p>
                  <p className="text-gray-600 text-sm">Schedule an appointment</p>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-blue-600 font-medium">Available 24/7</p>
                  <p className="text-gray-600 text-sm">Schedule an appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Full Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Inquiry Type and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowDropdown(!showDropdown)}
                      className={`w-full px-4 py-3 border rounded-lg text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors flex items-center justify-between ${
                        errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <span className={formData.inquiryType ? 'text-gray-900' : 'text-gray-500'}>
                        {formData.inquiryType || 'Select Inquiry Type'}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {inquiryTypes.map((type, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleInquiryTypeSelect(type)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.inquiryType && (
                    <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief Subject line"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell us how we can help you ...."
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        <FAQSection />
        <Footer />
    </div>
  );
};

export default ContactForm;