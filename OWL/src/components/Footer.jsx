import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import owl from '../assets/owl.png'; 

const Footer = () => {
  // Social media links 
  const socialLinks = {
    facebook: "https://facebook.com/owlai", 
    twitter: "https://twitter.com/owlai", 
    linkedin: "https://www.linkedin.com/company/overload-ware-labs-ai/", 
    instagram: "https://instagram.com/owlai" 
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Owl Image */}
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={owl}
                  alt="Owl AI Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">OWL AI</span>
            </div>
            <p className="text-gray-300 mb-6">
               Redefining how students and freshers gain practical experience through virtual internships in tech fields.
            </p>
            <div className="flex space-x-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110 transform duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110 transform duration-200"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-5 w-5 text-blue-600 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110 transform duration-200"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110 transform duration-200"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5 text-blue-600 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/Apply" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <a 
                  href="mailto:contact@owlai.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  contact@owlai.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <a 
                  href="tel:+917391XXXXXX" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +91 7391 XX XXXX
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                <span className="text-gray-300">Hyderabad, Inde</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">© 2024 OWL AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;