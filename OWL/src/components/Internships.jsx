import React from 'react';
import Footer from './Footer';

export default function Internships() {
  return (
    <div>
      <div className="pt-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Internships</h1>
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-6">
              Discover exciting internship opportunities and kickstart your career with OWL AI.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}