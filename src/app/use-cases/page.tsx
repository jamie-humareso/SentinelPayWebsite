'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, Shield, ArrowRight, TrendingUp, BarChart3, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';

const personas = [
  {
    id: 'hr-leader',
    title: 'For the HR Leader',
    icon: Users,
    color: 'sentinel-green',
    headline: 'Go from Overwhelmed to Empowered',
    goal: 'To ensure compliance, reduce turnover, and elevate your role from tactical reporter to strategic partner. You need a solution that simplifies the audit process and provides the expert backup you need to act with confidence.',
    benefits: [
      {
        title: 'Platform for Automation',
        description: 'Our software automates the complex, time-consuming analysis, replacing hundreds of hours of manual spreadsheet work with a fast, repeatable process.'
      },
      {
        title: 'Experts for Strategy',
        description: 'We act as an extension of your team, helping you interpret the results, build a business case for leadership, and develop a compensation strategy that wins the war for talent.'
      }
    ],
    cta: 'See How We Partner with HR'
  },
  {
    id: 'dei-lead',
    title: 'For the DEI Lead',
    icon: Target,
    color: 'sentinel-aqua',
    headline: 'The Data and the Narrative to Drive Change',
    goal: 'To build a truly equitable workplace and prove the impact of your work. You need a tool that can uncover systemic inequities and a partner who can help you tell a powerful story of change.',
    benefits: [
      {
        title: 'Platform for Data-Driven Insight',
        description: 'Our tool empowers you to analyze pay at the intersections of gender, race/ethnicity, and more, providing the hard data needed to identify systemic issues.'
      },
      {
        title: 'Experts for Storytelling & Strategy',
        description: 'We help you translate the data into a compelling narrative for change, measure what matters, and develop long-term strategies that foster a true culture of belonging.'
      }
    ],
    cta: 'See How We Advance DEI'
  },
  {
    id: 'legal-compliance',
    title: 'For the Legal & Compliance Officer',
    icon: Shield,
    color: 'sentinel-green',
    headline: 'Defensible Methodology, Expert Validation',
    goal: 'To protect the organization from litigation and ensure compliance with complex regulations. You need a tool that is secure and auditable, and a process backed by experts who can defend the methodology.',
    benefits: [
      {
        title: 'Platform for Defensible Analysis',
        description: 'Our software provides a secure, privileged environment to run a transparent, multi-factor regression analysis that is built to stand up to scrutiny.'
      },
      {
        title: 'Experts for Validation & Defense',
        description: 'Our team of labor economists and statisticians stands behind our methodology, giving you an unparalleled level of confidence and a partner in your compliance strategy.'
      }
    ],
    cta: 'Learn About Our Defensible Process'
  }
];

export default function UseCasesPage() {
  const [activePersona, setActivePersona] = useState('hr-leader');

  const activePersonaData = personas.find(p => p.id === activePersona);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6 leading-tight">
            A Solution for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Every Leader
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pay equity is a shared responsibility, but each leader has a unique role. Sentinel is the only solution that combines a powerful analytics platform with the expert human guidance that HR, DEI, and Legal teams need to succeed.
          </p>
        </motion.div>

        {/* Tabbed Interface */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-2 mb-8 border-b border-gray-200">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id)}
                className={`flex items-center px-6 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                  activePersona === persona.id
                    ? `bg-${persona.color}-600 text-white`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <persona.icon className="w-5 h-5 mr-2" />
                {persona.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {activePersonaData && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Content */}
                  <div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${activePersonaData.color}-100 text-${activePersonaData.color}-800 text-sm font-medium mb-6`}>
                      <activePersonaData.icon className="w-4 h-4 mr-2" />
                      {activePersonaData.title}
                    </div>
                    
                    <h2 className="text-3xl font-bold font-brand text-gray-900 mb-6">
                      {activePersonaData.headline}
                    </h2>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h3 className="font-semibold text-gray-900 mb-3">Your Goal:</h3>
                      <p className="text-gray-600 leading-relaxed">{activePersonaData.goal}</p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How Our Hybrid Approach Empowers You:
                    </h3>
                    
                    <div className="space-y-6">
                      {activePersonaData.benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-4"
                        >
                          <div className={`w-8 h-8 bg-${activePersonaData.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                            <div className={`w-3 h-3 bg-${activePersonaData.color}-600 rounded-full`}></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Button size="lg" className={`bg-${activePersonaData.color}-600 hover:bg-${activePersonaData.color}-700`}>
                        {activePersonaData.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - Visual */}
                  <div className="flex items-center justify-center">
                    <div className={`w-64 h-64 bg-gradient-to-br from-${activePersonaData.color}-100 to-${activePersonaData.color}-200 rounded-full flex items-center justify-center`}>
                      <activePersonaData.icon className={`w-32 h-32 text-${activePersonaData.color}-600`} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold font-brand mb-6">
              Ready to See How Sentinel Fits Your Role?
            </h2>
            <p className="text-xl text-sentinel-green-100 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to discuss your specific challenges and see how our platform and experts can support your unique goals.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-sentinel-green-600 hover:bg-gray-50"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
