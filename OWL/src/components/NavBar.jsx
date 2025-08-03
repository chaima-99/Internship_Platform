import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import owl from '../assets/owl.png'; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Interships', href: '/internships' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };
  
  const isActiveLink = (href) => {
    return location.pathname === href;
  };
  
  return (
    <nav className="fixed top-0 left-0 z-50 bg-blue-50 shadow-sm border-b border-gray-200" style={{ width: '100vw', margin: 0, padding: 0 }}>
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            <img src={owl} alt="" />
          </div>
          <span className="text-xl font-bold text-gray-900">OWL AI</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md cursor-pointer ${
                  isActiveLink(link.href)
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Apply Button - Desktop */}
        <div className="hidden md:block">
          <Link 
            to="/apply" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-block"
          >
            Apply
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-50 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md cursor-pointer ${
                  isActiveLink(link.href)
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Apply Button - Mobile */}
            <div className="px-3 py-2">
              <Link 
                to="/apply" 
                onClick={handleLinkClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 block text-center"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}