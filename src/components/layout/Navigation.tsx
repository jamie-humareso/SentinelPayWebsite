'use client';

import React from 'react';

const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
                 {/* Logo and Brand */}
         <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-sentinel-green-600 rounded"></div>
           <span className="font-semibold text-lg text-sentinel-green-600">
             Sentinel
           </span>
         </div>

                 {/* Desktop Navigation Links */}
         <div className="hidden lg:flex items-center gap-6">
           <a href="/platform" className="text-gray-700 hover:text-sentinel-green-600 font-medium transition-colors">Platform</a>
           <a href="/how-it-works" className="text-gray-700 hover:text-sentinel-green-600 font-medium transition-colors">How It Works</a>
           <a href="/experts" className="text-gray-700 hover:text-sentinel-green-600 font-medium transition-colors">Our Experts</a>
           <a href="/pricing" className="text-gray-700 hover:text-sentinel-green-600 font-medium transition-colors">Pricing</a>
           <a href="/resources" className="text-gray-700 hover:text-sentinel-green-600 font-medium transition-colors">Resources</a>
           <a href="/contact" className="text-gray-700 hover:text-sentinel-green-600 font-medium transition-colors">Contact</a>
         </div>

                 {/* CTA Button */}
         <div className="hidden lg:block">
           <button className="bg-sentinel-green-600 hover:bg-sentinel-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
             Schedule Demo
           </button>
         </div>

                 {/* Mobile Menu Button */}
         <button className="lg:hidden p-2 text-gray-700 hover:text-sentinel-green-600">
           <span>Menu</span>
         </button>
      </div>
    </div>
  );
};

export default Navigation;
