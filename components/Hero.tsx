'use client';
import banner from '../public/banner.png'
import { motion } from 'framer-motion';
import { Monitor, BarChart2, Wallet, FileText } from 'lucide-react';
import Image from 'next/image';
import data from './data/Hero.json'
import Link from 'next/link';

export default function Hero() {
  const services = [
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: 'Tech Development',
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: 'Customer Insight',
    },
    {
      icon: <Wallet className="w-6 h-6 text-white" />,
      title: 'Financial Planning',
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'Legal Documentation',
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-24 h-24 grid grid-cols-3 gap-2 p-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-coral-500 opacity-20" />
        ))}
      </div>
      
      <div className="container mx-auto px-4 pt-36 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className='primary uppercase font-bold text-gray-900 mb-3'>
              {data.SubTitle}
            </h6>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.Title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {data.Desc}
            </p>
            <div className="flex gap-4 mb-12">
              <Link href="#about">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-6 py-3 btn-primary shadow-indigo-500/50 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Get Started
                </motion.button>
              </Link>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-6 py-3 text-gray-700 hover:text-purple-500 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Our Services:</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-sky-100 rounded-lg flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-sky-300 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square mx-auto">
              <div className="absolute inset-0 w-auto"></div>
              <Image
                src={banner}
                alt="Trendify Media"
                fill
                priority
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 top-1/4 z-10 bg-coral-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-sky-300 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <div className="font-bold">35K+</div>
                  <div className="text-xs">Cases Solved</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 z-10 bg-white shadow-lg px-4 py-2 rounded-lg"
              >
                <div className="font-bold text-gray-900">Our Experts</div>
                <div className="flex -space-x-2 mt-2">
                  <Image
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="Expert 1"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg"
                    alt="Expert 2"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="Expert 3"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center border-2 border-white">
                    +4
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}