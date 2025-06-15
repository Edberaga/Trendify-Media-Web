'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import { Reveal } from './animation/Reveal';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <Reveal>
            <h6 className="primary uppercase font-bold mb-4">
              UNLEASH YOUR CREATIVITY AND MAXIMIZE YOUR MARKETING POTENTIAL WITH TRENDIFY - THE ULTIMATE ALL-IN-ONE SOFTWARE FOR MODERN CREATORS.
            </h6>
            </Reveal>
            <Reveal width='100%'><h2 className="text-4xl font-bold mb-8">Why Should Creators Use Trendify?</h2></Reveal>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="p-6 bg-purple-50 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full btn-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800">Trendify helps you build your audience.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="p-6 bg-purple-50 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full btn-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800">Trendify helps you sell your products.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="p-6 bg-purple-50 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full btn-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800">Trendify helps you grow online communities.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="p-6 bg-purple-50 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full btn-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800">Trendify runs your entire business in one place.</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="px-6 py-3 btn-primary rounded-lg hover:bg-black transition-colors mb-20"
            >
              Get started for free
            </motion.button>

            <Reveal width='100%'><h6 className="primary uppercase font-bold mb-4">WHY YOU NEED THIS</h6></Reveal>
            <Reveal width='100%'><h2 className="text-4xl font-bold mb-12">Before vs After TRENDIFY</h2></Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="space-y-4"
              >
                {[
                  'No Customers',
                  'No Systems',
                  'No Sales',
                  'No Help',
                  'No Fun'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                {[
                  'A Steady Stream Of Customers',
                  'Simple, Trackable, Easy Systems',
                  'Powerful Sales Funnels',
                  'A Like-minded Community',
                  'Tons of Fun!'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="px-6 py-3 btn-primary text-white rounded-lg hover:bg-black transition-colors mt-12"
            >
              Get started for free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}