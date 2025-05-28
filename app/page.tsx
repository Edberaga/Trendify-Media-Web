'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Users, Briefcase, Phone, Home } from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}