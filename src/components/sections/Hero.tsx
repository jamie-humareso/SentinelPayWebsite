'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-sentinel-green-50 to-sentinel-aqua-50 overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sentinel-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sentinel-aqua-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-sentinel-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sentinel-green-100 text-sentinel-green-800 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Expert-Guided Pay Equity Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6 leading-tight">
            Don't Trust Your Pay Equity to a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Black Box
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Sentinel combines a powerful, defensible analytics platform with on-demand access to our team of pay equity experts. Get the clarity of a world-class tool and the confidence of a trusted human advisor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="xl" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              See the Platform
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-sentinel-green-600" />
              <span>Trusted by 500+ Companies</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-sentinel-aqua-600" />
              <span>99% Client Satisfaction</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-sentinel-green-600" />
              <span>Legal-Grade Analytics</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="w-12 h-12 bg-sentinel-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-sentinel-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Defensible Platform</h3>
            <p className="text-gray-600 text-sm">Legal and board-ready analytics</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="w-12 h-12 bg-sentinel-aqua-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="w-6 h-6 text-sentinel-aqua-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">On-demand human expertise</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="w-12 h-12 bg-sentinel-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-sentinel-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600 text-sm">Actionable insights delivered</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
