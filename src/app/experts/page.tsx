import React from 'react';

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Dr. Sarah Chen */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-green-600">SC</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Dr. Sarah Chen</h3>
            <p className="text-sentinel-green-600 font-medium mb-3">Chief Analytics Officer</p>
            <p className="text-gray-600 mb-4">
              PhD in Statistics from Stanford, 15+ years in HR analytics. Former Head of People Analytics at Google.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Statistics</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">HR Analytics</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Machine Learning</span>
            </div>
          </div>

          {/* Marcus Rodriguez */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-aqua-100 to-sentinel-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-aqua-600">MR</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Marcus Rodriguez</h3>
            <p className="text-sentinel-aqua-600 font-medium mb-3">VP of Consulting</p>
            <p className="text-gray-600 mb-4">
              Former Chief Diversity Officer at Microsoft. Expert in DEI strategy and pay equity remediation.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">DEI Strategy</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Remediation</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Leadership</span>
            </div>
          </div>

          {/* Jennifer Walsh */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-green-600">JW</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Jennifer Walsh</h3>
            <p className="text-sentinel-green-600 font-medium mb-3">General Counsel</p>
            <p className="text-gray-600 mb-4">
              Employment law specialist with 20+ years experience. Former partner at top-tier law firm.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Employment Law</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Compliance</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Risk Management</span>
            </div>
          </div>

          {/* Dr. Alex Kim */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-aqua-100 to-sentinel-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-aqua-600">AK</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Dr. Alex Kim</h3>
            <p className="text-sentinel-aqua-600 font-medium mb-3">Lead Data Scientist</p>
            <p className="text-gray-600 mb-4">
              PhD in Computer Science from MIT. Expert in large-scale data analysis and statistical modeling.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Data Science</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Big Data</span>
            </div>
          </div>

          {/* Lisa Thompson */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-green-100 to-sentinel-aqua-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-green-600">LT</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Lisa Thompson</h3>
            <p className="text-sentinel-green-600 font-medium mb-3">Senior HR Consultant</p>
            <p className="text-gray-600 mb-4">
              Former VP of HR at Salesforce. Expert in compensation strategy and organizational development.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Compensation</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">HR Strategy</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Change Management</span>
            </div>
          </div>

          {/* David Park */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
            <div className="w-24 h-24 bg-gradient-to-br from-sentinel-aqua-100 to-sentinel-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-sentinel-aqua-600">DP</span>
            </div>
            <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">David Park</h3>
            <p className="text-sentinel-aqua-600 font-medium mb-3">Implementation Manager</p>
            <p className="text-gray-600 mb-4">
              Former Senior Manager at Deloitte. Expert in project management and change implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Project Management</span>
              <span className="px-3 py-1 bg-sentinel-green-100 text-sentinel-green-700 rounded-full text-sm">Implementation</span>
              <span className="px-3 py-1 bg-sentinel-aqua-100 text-sentinel-aqua-700 rounded-full text-sm">Change Management</span>
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
              <h3 className="font-semibold text-gray-900 mb-2">Statistical Analysis</h3>
              <p className="text-sm text-gray-600">Advanced regression modeling and significance testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-sm text-gray-600">Employment law expertise and risk assessment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strategy Development</h3>
              <p className="text-sm text-gray-600">Comprehensive pay equity and DEI strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">End-to-end project management and execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
