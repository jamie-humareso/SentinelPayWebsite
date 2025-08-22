import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Bot, Users, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';

export default function WhyNowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Urgent Business Risk
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6 leading-tight">
            In an AI World,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Human Expertise
            </span>{' '}
            is Your Best Defense
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With new pay transparency laws and heightened legal scrutiny, using a generic, black-box tool for pay equity is a significant business risk. Sentinel's expert-guided platform helps you navigate this new landscape with confidence.
          </p>
        </motion.div>

        {/* The New Risks Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {/* Legal Landscape */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <Gavel className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4">
              A New Era of Compliance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A complex web of new state and federal laws mandates pay transparency and reporting. Penalties for non-compliance are growing, and "we didn't know" is no longer a defense. We help you build and maintain a defensible pay practice.
            </p>
          </div>

          {/* Unreliable Tools */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4">
              "Good Enough" is No Longer Good Enough
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Generic AI and basic HRIS modules lack the rigor and defensibility required for a true pay equity audit. Our platform provides a transparent, validated methodology you can actually stand behind.
            </p>
          </div>

          {/* War for Talent */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4">
              Fairness Is Your New Retention Tool
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Today's top talent demands transparency and fairness. Pay equity is no longer just a DEI initiative; it's a core component of your talent strategy. Demonstrate your commitment and become an employer of choice.
            </p>
          </div>
        </motion.div>

        {/* From Risk to Reward Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600 rounded-2xl p-12 text-white mb-20"
        >
          <h2 className="text-3xl font-bold font-brand text-center mb-12">
            From Risk to Reward
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">8%</div>
              <div className="text-xl font-semibold mb-2">Higher ROI</div>
              <p className="text-sentinel-green-100">
                Companies that conduct a defensible pay equity analysis report a nearly 8% higher mean five-year Return-on-Equity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">26%</div>
              <div className="text-xl font-semibold mb-2">Higher Performance</div>
              <p className="text-sentinel-green-100">
                Employees who work in a high-fairness environment have 26% higher performance and are 27% less likely to quit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lead Generation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <h2 className="text-3xl font-bold font-brand text-gray-900 mb-6">
              Don't Face Your Compliance Risk Alone
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Proactively identify your risks and build a defensible pay equity strategy with the guidance of our experts. See how Sentinel provides the clarity you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Methodology
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
