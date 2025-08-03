import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Code, 
  Calendar,
  FileText,
  Github,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Send,
  AlertCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; 2024 Owl AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

const VirtualInternshipApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    educationLevel: '',
    preferredDomain: '',
    priorExperience: '',
    weeklyAvailability: '',
    portfolioGithub: '',
    motivation: '',
    careerGoals: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const educationLevels = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'Other'
  ];
  const experienceLevels = [
    'Complete Beginner',
    'Some Knowledge',
    'Intermediate',
    'Advanced'
  ];
  const domains = [
    'Data Analytics',
    'Java Development',
    'Full Stack',
    'Frontend Development',
    'DSA',
    'Power BI',
    'UI UX Design',
    'HR and Marketing',
    'Python Development',
    'Artificial Intelligence'
  ];
  const availabilityOptions = [
    '5-10 hours/week',
    '10-15 hours/week',
    '15-20 hours/week',
    '20+ hours/week'
  ];

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      // Initialize EmailJS with your public key
      if (window.emailjs) {
        window.emailjs.init('H-wF1uUuxLUt0H9VH');
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Education level is required';
    }
    if (!formData.preferredDomain) {
      newErrors.preferredDomain = 'Preferred domain is required';
    }
    if (!formData.priorExperience) {
      newErrors.priorExperience = 'Prior experience level is required';
    }
    if (!formData.weeklyAvailability) {
      newErrors.weeklyAvailability = 'Weekly availability is required';
    }
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please tell us about your motivation';
    } else if (formData.motivation.trim().length < 50) {
      newErrors.motivation = 'Please provide at least 50 characters';
    }
    if (!formData.careerGoals.trim()) {
      newErrors.careerGoals = 'Please share your career goals';
    } else if (formData.careerGoals.trim().length < 30) {
      newErrors.careerGoals = 'Please provide at least 30 characters';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email using EmailJS
  const sendEmail = async (templateParams) => {
    try {
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded');
      }

      const result = await window.emailjs.send(
        'service_fmzsf4i', // Your EmailJS service ID
        'template_47infsd', // Your EmailJS template ID
        templateParams
      );

      return result;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: 'contact@owlai.com',
        from_name: formData.fullName,
        from_email: formData.email,
        subject: `New Virtual Internship Application - ${formData.fullName}`,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        education_level: formData.educationLevel,
        preferred_domain: formData.preferredDomain,
        prior_experience: formData.priorExperience,
        weekly_availability: formData.weeklyAvailability,
        portfolio_github: formData.portfolioGithub || 'Not provided',
        motivation: formData.motivation,
        career_goals: formData.careerGoals,
        submission_date: new Date().toLocaleString(),
        // Formatted message for email body
        message: `New Virtual Internship Application Received

Personal Information:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Education: ${formData.educationLevel}

Program Details:
• Preferred Domain: ${formData.preferredDomain}
• Experience Level: ${formData.priorExperience}
• Weekly Availability: ${formData.weeklyAvailability}
• Portfolio/GitHub: ${formData.portfolioGithub || 'Not provided'}

About the Applicant:
• Motivation: ${formData.motivation}
• Career Goals: ${formData.careerGoals}

Application submitted on: ${new Date().toLocaleString()}`
      };

      // Send email
      await sendEmail(templateParams);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError('There was an error submitting your application. Please try again or contact us directly at contact@owlai.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  useEffect(() => {
    // Initialize AOS-like animation observer
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
          <div>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying to our Virtual Internship program. We've received your application and sent it to our team. You should receive a confirmation email shortly. We'll review your application and get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 fade-element">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply for Virtual Internship
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take the first step towards gaining practical experience in tech. Join our 
              comprehensive internship programs designed for students and freshers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Process Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 fade-element">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Application Process</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Step 1: Submit Application</h3>
                      <p className="text-sm text-gray-600">Complete the application form with your details and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Step 2: Initial Review</h3>
                      <p className="text-sm text-gray-600">Our team reviews your application within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Step 3: Interview Call</h3>
                      <p className="text-sm text-gray-600">Brief 15 minute call to discuss your goals and program fit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Step 4: Program Enrollment</h3>
                      <p className="text-sm text-gray-600">Get enrolled and start your learning journey immediately</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Facts</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-600">Application takes 5-10 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600">Response within 24-48 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-600">95% acceptance rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 fade-element">
                {/* Error Alert */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-red-800 font-medium">Submission Failed</p>
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="h-5 w-5 mr-2 text-blue-600" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter Your Full Name"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter Your Email"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter Your Number"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Education Level *
                        </label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.educationLevel ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select Your Level</option>
                          {educationLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                        {errors.educationLevel && (
                          <p className="text-red-500 text-sm mt-1">{errors.educationLevel}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Program Preferences */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Code className="h-5 w-5 mr-2 text-blue-600" />
                      Program Preferences
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Domain *
                        </label>
                        <select
                          name="preferredDomain"
                          value={formData.preferredDomain}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.preferredDomain ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a Domain</option>
                          {domains.map((domain) => (
                            <option key={domain} value={domain}>{domain}</option>
                          ))}
                        </select>
                        {errors.preferredDomain && (
                          <p className="text-red-500 text-sm mt-1">{errors.preferredDomain}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prior Experience *
                        </label>
                        <select
                          name="priorExperience"
                          value={formData.priorExperience}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.priorExperience ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a Level</option>
                          {experienceLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                        {errors.priorExperience && (
                          <p className="text-red-500 text-sm mt-1">{errors.priorExperience}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Weekly Availability *
                        </label>
                        <select
                          name="weeklyAvailability"
                          value={formData.weeklyAvailability}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.weeklyAvailability ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select Your availability</option>
                          {availabilityOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.weeklyAvailability && (
                          <p className="text-red-500 text-sm mt-1">{errors.weeklyAvailability}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio/Github (Optional)
                        </label>
                        <input
                          type="url"
                          name="portfolioGithub"
                          value={formData.portfolioGithub}
                          onChange={handleInputChange}
                          placeholder="Portfolio link"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tell Us About Yourself */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      Tell Us About Yourself
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Why do you want to join Owl AI? *
                        </label>
                        <textarea
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your motivation! What do you hope to achieve and why you are interested in this field"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                            errors.motivation ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        <div className="flex justify-between items-center mt-1">
                          {errors.motivation && (
                            <p className="text-red-500 text-sm">{errors.motivation}</p>
                          )}
                          <p className="text-gray-500 text-sm ml-auto">
                            {formData.motivation.length} characters
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What are your career goals? *
                        </label>
                        <textarea
                          name="careerGoals"
                          value={formData.careerGoals}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Share your long-term and short-term goals"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                            errors.careerGoals ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        <div className="flex justify-between items-center mt-1">
                          {errors.careerGoals && (
                            <p className="text-red-500 text-sm">{errors.careerGoals}</p>
                          )}
                          <p className="text-gray-500 text-sm ml-auto">
                            {formData.careerGoals.length} characters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="text-sm">
                        <p className="text-gray-700">
                          By submitting this application, you agree to our{' '}
                          <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                          {' '}and{' '}
                          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                          We'll use your information to process your application and communicate about the program.
                        </p>
                      </div>
                    </div>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm mt-2 ml-7">{errors.agreeToTerms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
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
      <Footer />
    </div>
  );
};

export default VirtualInternshipApplication;