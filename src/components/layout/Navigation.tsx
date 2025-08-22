'use client';

import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className="
        relative px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300
        bg-white/90 border-white/30 shadow-xl shadow-black/10
      ">
        <div className="hidden lg:flex items-center space-x-8">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2" tabIndex={0}>
            <div className="w-8 h-8">
              <img 
                src="/images/sentinel-logo.svg" 
                alt="Sentinel Logo" 
                className="w-full h-full"
                data-testid="sentinel-logo"
              />
            </div>
            <span className="font-brand font-semibold text-lg transition-colors duration-300 text-sentinel-green-500">
              Sentinel
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link href="/why-now" className="
              px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
              hover:bg-sentinel-green-50 hover:text-sentinel-green-600
              text-sentinel-green-700
            ">
              Why Now
            </Link>

            <Link href="/platform" className="
              px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
              hover:bg-sentinel-green-50 hover:text-sentinel-green-600
              text-sentinel-green-700
            ">
              Platform
            </Link>



            <Link href="/use-cases" className="
              px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
              hover:bg-sentinel-green-50 hover:text-sentinel-green-600
              text-sentinel-green-700
            ">
              Use Cases
            </Link>

            <Link href="/experts" className="
              px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
              hover:bg-sentinel-green-50 hover:text-sentinel-green-600
              text-sentinel-green-700
            ">
              Our Experts
            </Link>

            <Link href="/pricing" className="
              px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
              hover:bg-sentinel-green-50 hover:text-sentinel-green-600
              text-sentinel-green-700
            ">
              Pricing
            </Link>

            <Link href="/resources" className="
              px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
              hover:bg-sentinel-green-50 hover:text-sentinel-green-600
              text-sentinel-green-700
            ">
              Resources
            </Link>


          </div>

          {/* CTA Button */}
          <button className="
            inline-flex items-center justify-center rounded-md text-sm transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            disabled:opacity-50 disabled:pointer-events-none
            focus:ring-sentinel-green-500 shadow-sm h-10 px-4 py-2
            bg-sentinel-green-500 hover:bg-sentinel-green-400 text-white font-medium
          ">
            Schedule Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="
          lg:hidden p-2 rounded-lg transition-colors duration-200
          text-sentinel-green-700 hover:bg-sentinel-green-50
        " aria-label="Toggle mobile menu" tabIndex={0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-5 h-5">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
