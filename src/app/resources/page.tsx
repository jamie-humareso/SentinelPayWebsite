import React from 'react';
import Footer from '@/components/layout/Footer';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6">
            Resources &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest pay equity research, best practices, and industry insights from our expert team.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pay Equity Guide */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-brand text-gray-900 mb-2">
                  Complete Pay Equity Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about conducting a comprehensive pay equity analysis.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 45 pages</span>
                  <button className="bg-sentinel-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-green-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* DEI Strategy Template */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sentinel-aqua-100 to-sentinel-green-100 flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-brand text-gray-900 mb-2">
                  DEI Strategy Template
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive template for building and implementing your DEI strategy.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Template • Excel</span>
                  <button className="bg-sentinel-aqua-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-aqua-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 flex items-center justify-center">
                <span className="text-6xl">✅</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-brand text-gray-900 mb-2">
                  Compliance Checklist
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential checklist for ensuring pay equity compliance across all jurisdictions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Checklist • PDF</span>
                  <button className="bg-sentinel-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-green-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Educational Content
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Webinars */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-6">
                Upcoming Webinars
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-sentinel-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Pay Equity in 2024: What's Changed
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Join us for an overview of the latest pay equity regulations and best practices.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>📅 March 15, 2024 • 2:00 PM PST</span>
                  </div>
                  <button className="mt-3 bg-sentinel-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-green-700 transition-colors">
                    Register Now
                  </button>
                </div>

                <div className="border-l-4 border-sentinel-aqua-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Building a Data-Driven DEI Strategy
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Learn how to use data and analytics to build effective DEI initiatives.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>📅 March 22, 2024 • 1:00 PM PST</span>
                  </div>
                  <button className="mt-3 bg-sentinel-aqua-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-aqua-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-6">
                Latest Articles
              </h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 hover:text-sentinel-green-600 cursor-pointer">
                    The Impact of AI on Pay Equity Analysis
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Exploring how artificial intelligence is revolutionizing pay equity assessments.
                  </p>
                  <span className="text-sm text-gray-500">February 28, 2024 • 5 min read</span>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 hover:text-sentinel-green-600 cursor-pointer">
                    California's New Pay Transparency Laws
                  </h4>
                  <p className="text-gray-600 mb-2">
                    What employers need to know about the latest pay transparency requirements.
                  </p>
                  <span className="text-sm text-gray-500">February 20, 2024 • 7 min read</span>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 hover:text-sentinel-green-600 cursor-pointer">
                    Measuring the ROI of Pay Equity Initiatives
                  </h4>
                  <p className="text-gray-600 mb-2">
                    How to quantify the business impact of your pay equity programs.
                  </p>
                  <span className="text-sm text-gray-500">February 12, 2024 • 6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Reports */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Industry Reports & Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2024 Pay Equity Report</h3>
              <p className="text-sm text-gray-600 mb-3">Industry-wide analysis of pay equity trends</p>
              <button className="bg-sentinel-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-green-700 transition-colors">
                Download
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tech Industry Analysis</h3>
              <p className="text-sm text-gray-600 mb-3">Pay equity insights from 500+ tech companies</p>
              <button className="bg-sentinel-aqua-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-aqua-700 transition-colors">
                Download
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance Guide</h3>
              <p className="text-sm text-gray-600 mb-3">State-by-state compliance requirements</p>
              <button className="bg-sentinel-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-green-700 transition-colors">
                Download
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Academic Research</h3>
              <p className="text-sm text-gray-600 mb-3">Peer-reviewed studies and methodologies</p>
              <button className="bg-sentinel-aqua-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sentinel-aqua-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold font-brand mb-4">
            Stay Updated
          </h2>
          <p className="text-sentinel-green-100 mb-6 max-w-2xl mx-auto">
            Get the latest pay equity insights, regulatory updates, and best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-sentinel-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
