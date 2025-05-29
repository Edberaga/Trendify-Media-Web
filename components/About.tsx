'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Trendify Media is a creative agency that specializes in building powerful digital experiences.
            We combine strategic thinking with cutting-edge technology to help brands stand out in today&apos;s
            competitive landscape.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-muted-foreground">To revolutionize digital marketing through innovation and creativity</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-muted-foreground">Empowering brands with cutting-edge digital solutions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Values</h3>
              <p className="text-muted-foreground">Innovation, integrity, and excellence in everything we do</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}