import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Transparent
            </span>{' '}
            Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your organization's needs. All plans include our core analytics platform and expert guidance.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-sentinel-green-200 transition-colors">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">Perfect for small teams</p>
              <div className="text-4xl font-bold text-sentinel-green-600 mb-2">$2,500</div>
              <p className="text-sm text-gray-500">per analysis</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Up to 100 employees
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Basic regression analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Executive summary report
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Email support
              </li>
            </ul>
            <button className="w-full bg-sentinel-green-600 text-white py-3 rounded-lg font-semibold hover:bg-sentinel-green-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gradient-to-br from-sentinel-green-50 to-sentinel-aqua-50 rounded-2xl shadow-xl p-8 border-2 border-sentinel-green-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-sentinel-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">For growing organizations</p>
              <div className="text-4xl font-bold text-sentinel-green-600 mb-2">$5,000</div>
              <p className="text-sm text-gray-500">per analysis</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Up to 500 employees
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Advanced regression analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Expert consultation (2 hours)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Detailed remediation plan
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-green-500 rounded-full mr-3"></div>
                Priority support
              </li>
            </ul>
            <button className="w-full bg-sentinel-green-600 text-white py-3 rounded-lg font-semibold hover:bg-sentinel-green-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-sentinel-aqua-200 transition-colors">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large organizations</p>
              <div className="text-4xl font-bold text-sentinel-aqua-600 mb-2">Custom</div>
              <p className="text-sm text-gray-500">contact us</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-aqua-500 rounded-full mr-3"></div>
                Unlimited employees
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-aqua-500 rounded-full mr-3"></div>
                Custom analysis models
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-aqua-500 rounded-full mr-3"></div>
                Dedicated expert team
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-aqua-500 rounded-full mr-3"></div>
                Full remediation support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sentinel-aqua-500 rounded-full mr-3"></div>
                24/7 priority support
              </li>
            </ul>
            <button className="w-full bg-sentinel-aqua-600 text-white py-3 rounded-lg font-semibold hover:bg-sentinel-aqua-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's included in each analysis?</h3>
              <p className="text-gray-600">Each analysis includes comprehensive pay equity review, statistical analysis, and detailed reporting with actionable insights.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How long does an analysis take?</h3>
              <p className="text-gray-600">Most analyses are completed within 2-3 weeks, depending on data complexity and organization size.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer various support packages and can help with implementation and follow-up analyses.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600">Absolutely. We use enterprise-grade encryption and are SOC 2 Type II certified with strict data handling protocols.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
