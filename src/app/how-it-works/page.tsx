import React from 'react';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-brand text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guided process for confident decision-making in pay equity.
          </p>
        </div>
        
        <div className="mt-16 space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sentinel-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-sentinel-green-600">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-3">
                  Data Upload & Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload your HR data securely. Our platform runs comprehensive multi-factor regression analysis to identify statistically significant pay gaps.
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
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sentinel-aqua-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-sentinel-aqua-600">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-3">
                  Expert Review & Interpretation
                </h3>
                <p className="text-gray-600 mb-4">
                  Our pay equity experts review your analysis, interpret the results, and help you understand the underlying causes of any gaps.
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
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sentinel-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-sentinel-green-600">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-brand text-gray-900 mb-3">
                  Action Plan & Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Work with our experts to develop a comprehensive remediation plan, model costs, and build a communication strategy for stakeholders.
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
      </div>
    </main>
  );
}
