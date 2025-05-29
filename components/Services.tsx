'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Code, Megaphone, Palette } from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Camera className="w-8 h-8 mb-4" />,
      title: 'Photography',
      description: 'Professional photography services for your brand',
    },
    {
      icon: <Code className="w-8 h-8 mb-4" />,
      title: 'Web Development',
      description: 'Custom websites and web applications',
    },
    {
      icon: <Megaphone className="w-8 h-8 mb-4" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions for growth',
    },
    {
      icon: <Palette className="w-8 h-8 mb-4" />,
      title: 'Brand Design',
      description: 'Comprehensive brand identity design',
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of creative services to help your brand succeed
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-card rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}