
import React from 'react';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <div className="pt-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to OWL AI - your intelligent learning companion.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}