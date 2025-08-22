'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sentinel's platform gave us the confidence to address pay equity proactively. The expert guidance made all the difference in building our case to leadership.",
    author: "Sarah Chen",
    role: "VP of People",
    company: "TechFlow Inc.",
    rating: 5
  },
  {
    quote: "We were struggling with manual pay audits until we found Sentinel. The platform is intuitive, and their experts helped us identify and fix gaps we didn't even know existed.",
    author: "Marcus Rodriguez",
    role: "Chief Diversity Officer",
    company: "Global Solutions",
    rating: 5
  },
  {
    quote: "The combination of powerful analytics and human expertise is exactly what we needed. Sentinel helped us build a defensible pay equity strategy that our board could trust.",
    author: "Jennifer Walsh",
    role: "General Counsel",
    company: "InnovateCorp",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-brand text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading organizations are transforming their pay equity practices with Sentinel.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-sentinel-green-50 to-sentinel-aqua-50 rounded-2xl p-8 h-full border border-sentinel-green-100">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-sentinel-green-100 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-sentinel-green-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-sentinel-green-200 pt-4">
                  <div className="font-semibold text-sentinel-green-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-sentinel-green-700">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Join 500+ Companies Trusting Sentinel
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-sentinel-green-500 rounded-full mr-2"></div>
                SOC 2 Type II Certified
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-sentinel-aqua-500 rounded-full mr-2"></div>
                GDPR Compliant
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-sentinel-green-500 rounded-full mr-2"></div>
                AWS Hosted
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-sentinel-aqua-500 rounded-full mr-2"></div>
                99.9% Uptime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
