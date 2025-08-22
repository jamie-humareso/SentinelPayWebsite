'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Lightbulb, Calculator, ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sentinel-green-100 text-sentinel-green-800 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Interactive Platform Demo
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6 leading-tight">
            Experience the Clarity of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Sentinel Platform
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore a live, hands-on preview of our platform with anonymized data. See for yourself how our intuitive dashboards can demystify the complexity of pay equity analysis and prepare you for a productive conversation with our expert team.
          </p>
        </motion.div>

        {/* Interactive Demo Module */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-brand text-gray-900 mb-4">
              A Preview of Your Future Pay Audit
            </h2>
            <p className="text-lg text-gray-600">
              Experience the power of our platform with this interactive demo
            </p>
          </div>

          {/* Demo Placeholder */}
          <div className="bg-gradient-to-br from-sentinel-green-50 to-sentinel-aqua-50 rounded-xl p-12 border-2 border-dashed border-sentinel-green-200 text-center">
            <BarChart3 className="w-24 h-24 text-sentinel-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Interactive Demo Coming Soon
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our interactive platform demo will be available here, allowing you to explore real pay equity analysis features with anonymized data.
            </p>
            <Button size="lg">
              Schedule a Live Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Demo Features Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Left Column - Filtering */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Filter className="w-6 h-6 inline mr-2 text-sentinel-green-600" />
                Filter with Precision
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Drill down by Job Family</h4>
                  <p className="text-sm text-gray-600">Isolate your Engineering team to compare with Sales.</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Analyze by Demographics</h4>
                  <p className="text-sm text-gray-600">Compare pay by gender, race/ethnicity, and their intersections.</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Segment by Location</h4>
                  <p className="text-sm text-gray-600">Analyze potential pay disparities between office locations.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Analysis */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <TrendingUp className="w-6 h-6 inline mr-2 text-sentinel-aqua-600" />
                Hover for Instant Insight
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Identify Flagged Gaps</h4>
                  <p className="text-sm text-gray-600">Hover over any flagged data point to see factors contributing to pay gaps.</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Preview Recommended Fixes</h4>
                  <p className="text-sm text-gray-600">See data-driven pay adjustments to resolve gaps and bring employees in line with peers.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-brand text-gray-900 mb-4">
              Our Expert-Guided Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've combined our powerful analytics platform with dedicated human expertise to create a clear, guided, and defensible process. Here's how we partner with you to deliver results you can trust.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-sentinel-green-50 to-sentinel-aqua-50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sentinel-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-sentinel-green-600">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-3">
                    Platform-Powered Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    It starts with our secure platform. Securely upload your data and let our tool run a comprehensive, multi-factor regression analysis to identify and flag statistically significant pay gaps.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Secure data upload with encryption</li>
                    <li>• Automated data validation and cleaning</li>
                    <li>• Multi-factor regression analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-sentinel-aqua-50 to-sentinel-green-50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sentinel-aqua-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-sentinel-aqua-600">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-3">
                    Expert-Guided Interpretation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This is where our experts come in. We schedule a consultation to review the platform's findings with you, helping you interpret the results, understand the root causes of gaps, and prioritize areas of highest risk.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Expert consultation and review</li>
                    <li>• Gap cause analysis and interpretation</li>
                    <li>• Risk assessment and prioritization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-sentinel-green-50 to-sentinel-aqua-50 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sentinel-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-sentinel-green-600">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-3">
                    Collaborative Action Plan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We work with you to model budget-conscious remediation scenarios and build a clear, proactive communication plan for your leadership and stakeholders. You're never left to figure it out alone.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Remediation planning and modeling</li>
                    <li>• Budget optimization strategies</li>
                    <li>• Stakeholder communication plans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Note */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              A Methodology You Can Stand Behind
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our analysis is built on proven, industry-standard regression methods that are validated, bias-tested, and designed to be explained and defended in a compliance audit or legal setting. This isn't a black box; it's statistical clarity you can rely on.
            </p>
          </div>
        </motion.div>

        {/* Key Features You Just Experienced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-sentinel-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Filter className="w-8 h-8 text-sentinel-green-600" />
            </div>
            <h3 className="text-xl font-bold font-brand text-gray-900 mb-4">
              Intuitive Filtering
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You saw how simple it is to drill down into your data, get answers to your questions, and analyze pay equity by the factors that matter most.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-sentinel-aqua-600" />
            </div>
            <h3 className="text-xl font-bold font-brand text-gray-900 mb-4">
              Root Cause Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You experienced how our tool doesn't just show you a gap exists, it shows you why—providing the instant insight needed for confident action.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-sentinel-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Calculator className="w-8 h-8 text-sentinel-green-600" />
            </div>
            <h3 className="text-xl font-bold font-brand text-gray-900 mb-4">
              Budget-Aware Remediation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You previewed how Sentinel provides clear, data-driven remediation suggestions, allowing you to model the financial impact of adjustments.
            </p>
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
              Ready for the Full Picture?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The platform is only half the story. Schedule a consultation with our experts to discuss these findings, ask your tough questions, and learn how our guided process can help you achieve your pay equity goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Schedule Your Consultation
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
