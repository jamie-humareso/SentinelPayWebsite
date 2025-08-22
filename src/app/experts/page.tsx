import React from 'react';
import Footer from '@/components/layout/Footer';

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Expert Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines decades of experience in pay equity, statistics, and HR analytics to deliver actionable insights that drive real change.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Brian Breslin */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-green-600">BB</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Brian Breslin</h3>
            <p className="text-sentinel-green-600 font-medium mb-3">Compensation Strategist</p>
            <p className="text-gray-600 mb-4">
              Brian is a compensation strategist with a sharp focus on pay equity. He comes from a background in compensation analysis and has built his expertise helping organizations uncover disparities, spot outliers, and create actionable strategies for fair pay.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Pay Equity</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Compensation Analysis</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Strategy</span>
            </div>
          </div>

          {/* Daniel Reeder */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-aqua-100 to-sentinel-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-aqua-600">DR</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Daniel Reeder</h3>
            <p className="text-sentinel-aqua-600 font-medium mb-3">Equity Analyst</p>
            <p className="text-gray-600 mb-4">
              Daniel is an equity analyst who specializes in making complex data clear. He comes from a blend of HR and analytics work, giving him a unique perspective on how to turn payroll numbers into real solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Data Analysis</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">HR Analytics</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Equity</span>
            </div>
          </div>

          {/* John Baldino */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-green-600">JB</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">John Baldino</h3>
            <p className="text-sentinel-green-600 font-medium mb-3">HR Leader</p>
            <p className="text-gray-600 mb-4">
              John is a nationally recognized HR leader with more than 30 years of experience in people strategy. He serves as President of Humareso and holds senior HR certifications (SPHR and SHRM-SCP).
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">HR Strategy</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Leadership</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Consulting</span>
            </div>
          </div>

          {/* Jamie Aquila */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-aqua-100 to-sentinel-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-aqua-600">JA</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Jamie Aquila</h3>
            <p className="text-sentinel-aqua-600 font-medium mb-3">Technology Advisor</p>
            <p className="text-gray-600 mb-4">
              Jamie is a technologist and four-time startup CTO who has built award-winning HR platforms. His work has earned recognition on LinkedIn's Top 50 Startups list (2018) and in the Startup of the Year Top 100 (2020). He leads technology and product design, ensuring the Pay Equity Regression Tool is powerful and intuitive.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Technology</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Product Design</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Platform Development</span>
            </div>
          </div>

          {/* Derek Shunk */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-green-600">DS</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Derek Shunk</h3>
            <p className="text-sentinel-green-600 font-medium mb-3">Consultant</p>
            <p className="text-gray-600 mb-4">
              Derek is a consultant with a background in communications and leadership. He comes from Villanova University and focuses on turning complex ideas into clear, actionable plans.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Communications</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Leadership</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Strategy</span>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Our Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pay Equity Analysis</h3>
              <p className="text-sm text-gray-600">Advanced regression modeling and statistical testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compensation Strategy</h3>
              <p className="text-sm text-gray-600">Comprehensive pay equity and remediation strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HR Leadership</h3>
              <p className="text-sm text-gray-600">Strategic HR consulting and organizational development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technology Platform</h3>
              <p className="text-sm text-gray-600">Powerful, intuitive pay equity regression tools</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
