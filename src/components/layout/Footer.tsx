'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sentinel-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10">
                <img 
                  src="/images/sentinel-logo.svg" 
                  alt="Sentinel Logo" 
                  className="w-full h-full"
                />
              </div>
              <span className="font-brand font-semibold text-2xl">
                Sentinel
              </span>
            </div>
            <p className="text-sentinel-green-200 mb-6 max-w-md">
              Expert-guided pay equity analytics platform. Combine powerful analytics with human expertise to build defensible, actionable pay equity strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sentinel-green-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-sentinel-green-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-sentinel-green-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/platform" className="text-sentinel-green-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="text-sentinel-green-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="text-sentinel-green-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/resources" className="text-sentinel-green-300 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sentinel-green-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/experts" className="text-sentinel-green-300 hover:text-white transition-colors">Our Experts</a></li>
              <li><a href="/trust-privacy" className="text-sentinel-green-300 hover:text-white transition-colors">Trust & Privacy</a></li>
              <li><a href="/contact" className="text-sentinel-green-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-sentinel-green-800 mt-12 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center">
                  <Mail className="w-5 h-5 text-sentinel-aqua-400 mr-3" />
                  <span className="text-sentinel-green-200">sales@sentinelpayanalytics.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-sentinel-aqua-400 mr-3" />
                  <span className="text-sentinel-green-200">(800) 578-5300</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-sentinel-aqua-400 mr-3" />
                  <span className="text-sentinel-green-200">Medford, NJ, United States</span>
                </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-sentinel-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-sentinel-green-300 text-sm">
            © {currentYear} Sentinel Pay Analytics. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sentinel-green-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sentinel-green-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-sentinel-green-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
