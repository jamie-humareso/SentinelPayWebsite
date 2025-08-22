'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Shield,
    title: 'Uncover Gaps with Precision',
    description: 'Our platform does the heavy lifting, running a rigorous analysis to identify the specific, statistically significant pay gaps that pose the greatest risk to your organization.',
    color: 'sentinel-green',
    benefits: ['Multi-factor regression analysis', 'Statistical significance testing', 'Risk assessment scoring', 'Legal-grade documentation']
  },
  {
    icon: Users,
    title: 'Interpret and Remediate with Experts',
    description: 'Work with our team to understand the why behind the numbers. We help you model the most effective, budget-sensitive remediation plans and prioritize your next steps.',
    color: 'sentinel-aqua',
    benefits: ['Expert consultation', 'Remediation modeling', 'Budget optimization', 'Priority planning']
  },
  {
    icon: TrendingUp,
    title: 'Communicate with Confidence',
    description: 'We help you build the narrative for your leadership, your board, and your employees. Move forward with a clear, defensible story backed by both data and expert insight.',
    color: 'sentinel-green',
    benefits: ['Leadership narratives', 'Board presentations', 'Employee communications', 'Defensible storytelling']
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sentinel-green-50">
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
            A Guided Process for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600">
              Confident Decision-Making
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our three-pillar approach combines cutting-edge analytics with human expertise to deliver actionable insights that drive real change.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Feature Card */}
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-glow-lg transition-all duration-300 border border-gray-100 group-hover:border-sentinel-green-200 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-brand text-gray-900 mb-4 group-hover:text-sentinel-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (benefitIndex * 0.1) }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-sentinel-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sentinel-green-600 hover:text-sentinel-green-700 font-medium text-sm group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sentinel-green-50 to-sentinel-aqua-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sentinel-green-600 to-sentinel-aqua-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold font-brand mb-4">
              Ready to Transform Your Pay Equity Strategy?
            </h3>
            <p className="text-sentinel-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust Sentinel to deliver defensible, actionable insights that drive real change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="aqua" 
                size="lg"
                className="bg-white text-sentinel-green-600 hover:bg-gray-50"
              >
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-sentinel-green-600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
