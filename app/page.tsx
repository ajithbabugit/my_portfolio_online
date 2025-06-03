'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image"; // Add this line if you use Image component from 'next/image'

export default function Portfolio() {
  const seoKeywords = [
    'Digital Marketing Expert',
    'SEO Specialist UAE',
    'Content Strategy Consultant',
    'Social Media Marketing Professional',
    'Digital Marketing Consultant Ajman',
    'UAE Marketing Specialist',
    'SEO Expert Dubai',
    'Content Marketing Strategist'
  ];

  const skills = [
    { name: 'Search Engine Optimization (SEO)', level: 90, description: 'Expert in technical SEO, keyword research, and ranking optimization' },
    { name: 'Content Strategy & Marketing', level: 85, description: 'Strategic content planning, creation, and distribution for maximum impact' },
    { name: 'Digital Marketing', level: 88, description: 'Comprehensive digital marketing campaigns and strategy development' },
    { name: 'Social Media Management', level: 85, description: 'Platform-specific strategy and community engagement' },
    { name: 'Analytics & Data Analysis', level: 82, description: 'Data-driven decision making and performance tracking' },
    { name: 'Marketing Automation', level: 80, description: 'Workflow optimization and automated marketing solutions' }
  ];

  const experiences = [
    {
      title: 'Senior Digital Marketing Specialist',
      company: 'Al Ghanem',
      period: 'April 2025 - Present',
      achievements: [
        'Increased organic traffic by 150% through strategic SEO implementation',
        'Developed comprehensive content marketing strategy resulting in 200% engagement growth',
        'Led successful digital campaigns with 45% conversion rate improvement'
      ]
    },
    {
      title: 'Project Head & Operations Manager',
      company: 'Kreatz',
      period: 'March 2024 - March 2025',
      achievements: [
        'Managed 20+ client portfolios with 95% satisfaction rate',
        'Implemented automated marketing workflows reducing task time by 40%',
        'Trained and mentored team of 8 marketing professionals'
      ]
    },
    {
      title: 'Digital Marketing Executive',
      company: 'Dishasoft Info Solutions',
      period: 'Feb 2023 - Feb 2024',
      achievements: [
        'Achieved 80% increase in client social media engagement',
        'Optimized SEO strategies resulting in 60% ranking improvements',
        'Developed content strategy frameworks for diverse industry verticals'
      ]
    }
  ];

  const services = [
    {
      title: 'Enterprise SEO Solutions',
      description: 'Comprehensive search engine optimization services including technical SEO, content optimization, and ranking strategies for maximum visibility and organic traffic growth.',
      features: ['Technical SEO Audit', 'Keyword Strategy', 'Content Optimization', 'Link Building']
    },
    {
      title: 'Content Strategy & Development',
      description: 'Strategic content planning and creation services focused on engaging your target audience and driving conversions through valuable, optimized content.',
      features: ['Content Audit', 'Editorial Calendar', 'SEO Content Creation', 'Performance Analysis']
    },
    {
      title: 'Digital Marketing Consultation',
      description: 'Expert guidance on comprehensive digital marketing strategies, including social media, email marketing, and paid advertising campaigns.',
      features: ['Strategy Development', 'Campaign Planning', 'ROI Optimization', 'Market Analysis']
    },
    {
      title: 'Social Media Marketing',
      description: 'Full-service social media management including strategy development, content creation, community management, and paid social campaigns.',
      features: ['Platform Strategy', 'Content Calendar', 'Community Management', 'Analytics']
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ajith-babu-dm-profile/', icon: '🔗' },
    { name: 'Instagram', url: 'https://www.instagram.com/abx0o/', icon: '📸' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Modern Minimal Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Ajith Babu
            </h1>
            <p className="text-2xl font-light mb-8 text-gray-300">
              Digital Marketing Strategist & SEO Expert
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {seoKeywords.map((keyword, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            With over 3 years of experience in digital marketing and SEO, I specialize in creating data-driven strategies that deliver measurable results. My expertise spans across technical SEO, content strategy, and digital marketing automation, helping businesses achieve sustainable growth in the digital landscape.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Expertise & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="relative h-2 bg-gray-700 rounded-full mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-400">
                      <span className="mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Experience Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20 -translate-x-1/2"></div>
            
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`relative mb-12 w-full md:w-1/2 ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
              >
                {/* Experience Card */}
                <div className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                  {/* Timeline Dot */}
                  <div className={`absolute top-8 w-4 h-4 rounded-full ${i % 2 === 0 ? '-right-2 md:-right-1' : '-left-2 md:-left-1'} bg-gradient-to-r from-blue-500 to-purple-500`}></div>
                  
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-lg font-medium text-purple-300">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, j) => (
                        <motion.li 
                          key={j}
                          whileHover={{ x: 5 }}
                          className="flex items-start text-gray-300"
                        >
                          <span className="mr-2 text-purple-400">▹</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-purple-900/30 to-pink-900/30" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Let's Connect
            </h2>
            
            {/* Contact Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.a
                href="mailto:ajithbabu.dm@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-full backdrop-blur-sm hover:from-blue-600/20 hover:to-blue-800/20 transition-all duration-300 border border-blue-500/30"
              >
                <span className="text-2xl">📧</span>
                <span className="font-medium">Email Me</span>
              </motion.a>
              
              <motion.a
                href="tel:+97152274628"
                whileHover={{ scale: 1.05 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/10 to-purple-800/10 rounded-full backdrop-blur-sm hover:from-purple-600/20 hover:to-purple-800/20 transition-all duration-300 border border-purple-500/30"
              >
                <span className="text-2xl">📱</span>
                <span className="font-medium">Call Me</span>
              </motion.a>
            </div>
            
            {/* Location */}
            <p className="text-xl mb-12 text-gray-300">📍 Ajman, UAE</p>
            
            {/* Social Media Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 bg-white/5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}