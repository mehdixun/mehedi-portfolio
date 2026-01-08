import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/mehdixun', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mehedi-robi-76b38739b/', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://x.com/mehedirobi01', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 py-12 px-4 text-center text-gray-400 border-t border-gray-700">
      <div className="container mx-auto max-w-6xl">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transform transition-all duration-300"
              whileHover={{ scale: 1.25, color: '#60A5FA' }}
              aria-label={link.label}
              title={link.label}
            >
              <i className={`${link.icon} text-2xl`}></i>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full"></div>

        {/* Copyright & Links */}
        <div className="space-y-4">
          <p className="text-sm md:text-base">
            Built with React, JavaScript & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Mehedi Hasan. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm pt-4">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <span className="text-gray-600">•</span>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <span className="text-gray-600">•</span>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
