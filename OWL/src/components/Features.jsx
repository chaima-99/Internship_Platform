import React from 'react';
import Footer from './Footer';

export default function Features() {
  return (
    <div>
      <div className="pt-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Learning</h3>
              <p className="text-gray-600">Advanced AI algorithms to personalize your learning experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
              <p className="text-gray-600">Track your progress with detailed analytics and insights.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Interactive Content</h3>
              <p className="text-gray-600">Engage with interactive lessons and real-time feedback.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}