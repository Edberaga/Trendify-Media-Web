'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Users, Globe, Instagram, Mail, Video, Calendar, Store, Funnel } from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Funnel className="w-8 h-8 mb-4" />,
      title: 'Sales Funnels',
      description: 'Build eye-catching and sales converting funnels with a few simple clicks!',
    },
    {
      icon: <Users className="w-8 h-8 mb-4" />,
      title: 'Communities',
      description: 'Build and grow a powerful community right inside the software. (No more need for Facebook Groups!)',
    },
    {
      icon: <Globe className="w-8 h-8 mb-4" />,
      title: 'Websites',
      description: 'Need a website? We have you covered! Our system makes it easy to launch a beautiful website and we cover the hosting too!',
    },
    {
      icon: <Store className="w-8 h-8 mb-4" />,
      title: 'Digital Products',
      description: 'Sell courses, templates, ebooks and anything else your mind can conceive!',
    },
    {
      icon: <Mail className="w-8 h-8 mb-4" />,
      title: 'Emails / CRM',
      description: 'Need a simple tool to organize all of your leads and customers? Trendify has your back!',
    },
    {
      icon: <Instagram className="w-8 h-8 mb-4" />,
      title: 'Social Media Posting',
      description: 'Schedule and manage your social media content across multiple platforms effortlessly.',
    },
    {
      icon: <ShoppingCart className="w-8 h-8 mb-4" />,
      title: 'Ecommerce',
      description: 'Sell courses, templates, ebooks and anything else your mind can conceive!',
    },
    {
      icon: <Video className="w-8 h-8 mb-4" />,
      title: 'Webinars',
      description: 'Need a simple tool to organize all of your leads and customers? Trendify has your back!',
    },
    {
      icon: <Calendar className="w-8 h-8 mb-4" />,
      title: 'Calendars',
      description: 'Your leads and customers can book meetings on your Trendify calendar at any time you want!',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get started for free
          </motion.button>
        </div>
      </div>
    </section>
  );
}