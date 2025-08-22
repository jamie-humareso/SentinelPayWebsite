import React from 'react';

export default function PlatformPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-brand text-gray-900 mb-6">
            The Sentinel Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A powerful, defensible analytics platform designed for rigorous pay equity analysis.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Platform Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold font-brand text-gray-900 mb-4">
              Powerful Analytics Engine
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Multi-factor regression analysis
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Statistical significance testing
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Risk assessment scoring
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Legal-grade documentation
              </li>
            </ul>
          </div>

          {/* Interactive Demo */}
          <div className="bg-gradient-to-br from-sentinel-green-50 to-sentinel-aqua-50 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold font-brand text-gray-900 mb-4">
              Interactive Demo
            </h2>
            <p className="text-gray-600 mb-6">
              Experience the power of Sentinel's platform with our interactive demo.
            </p>
            <button className="bg-sentinel-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sentinel-green-700 transition-colors">
              Launch Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
