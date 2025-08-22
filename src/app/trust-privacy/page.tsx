import React from 'react';
import { Shield, Cloud, Lock, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';

export default function TrustPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sentinel-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sentinel-green-100 text-sentinel-green-800 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Enterprise-Grade Security
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-brand text-gray-900 mb-6 leading-tight">
            Security You Can{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Trust
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As a small, expert-led company, we know that trust is everything. We are committed to protecting your sensitive employee data with transparent policies and a security architecture built on industry best practices.
          </p>
        </div>

        {/* Security Foundation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* AWS Infrastructure */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4">
              Built on AWS
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our entire platform is built on Amazon Web Services, leveraging their best-in-class physical security, network security, and operational excellence as our foundation.
            </p>
          </div>

          {/* Encryption */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4">
              End-to-End Encryption
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All data is encrypted with AES-256, both in transit and at rest. We enforce TLS 1.2+ for all communication. Your data is always protected, with no exceptions.
            </p>
          </div>

          {/* Compliance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4">
              Built for Compliance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              While we don't hold formal certifications like SOC 2, our platform is built to help you meet your compliance needs. We provide the tools and data controls to support your internal requirements and help you adhere to regulations like GDPR.
            </p>
          </div>
        </div>

        {/* Data Governance Policy */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Your Data, Your Control: A Plain-Language Policy
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-sentinel-green-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                We're Caretakers, Not Owners, of Your Data
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sentinel-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-sentinel-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Who Has Access?</h4>
                <p className="text-gray-600 text-sm">
                  You and your authorized team members. Sentinel employees cannot access your identifiable employee data without your explicit, temporary, and logged permission for support purposes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sentinel-aqua-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Lock className="w-8 h-8 text-sentinel-aqua-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">How We Use Your Data</h4>
                <p className="text-gray-600 text-sm">
                  Strictly to power your pay equity analysis. We will never sell, share, or use your data for any other purpose. Full stop.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sentinel-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-8 h-8 text-sentinel-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Data Deletion</h4>
                <p className="text-gray-600 text-sm">
                  You are in full control. At your request, we will permanently delete your data from our systems and provide a certificate of deletion for your records.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Checklist */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold font-brand text-gray-900 mb-8 text-center">
            Enterprise Security Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Security</h3>
              <div className="space-y-3">
                {[
                  'AWS Cloud Infrastructure',
                  'Physical Security Controls',
                  'Network Security & Firewalls',
                  'Regular Security Audits',
                  '24/7 Security Monitoring'
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sentinel-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h3>
              <div className="space-y-3">
                {[
                  'AES-256 Encryption',
                  'TLS 1.2+ Communication',
                  'Secure Data Centers',
                  'Regular Backups',
                  'Data Loss Prevention'
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sentinel-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lead Generation CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <h2 className="text-3xl font-bold font-brand text-gray-900 mb-6">
              Questions About Our Security Practices?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We believe in transparency. We are happy to discuss our security architecture and data handling practices and answer any questions your team may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Discuss Our Security Practices
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Speak with Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
