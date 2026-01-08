import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 pt-20 md:pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-8 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <img
            src="https://i.ibb.co.com/vxQv5nKZ/412412bb-4a3e-4e60-aefb-9060d8c4ff0d.jpg"
            alt="Your Profile Photo"
            className="rounded-full w-32 md:w-40 h-32 md:h-40 object-cover mx-auto border-4 border-blue-500 shadow-2xl hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
          Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Mehedi Hasan</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          A Passionate <span className="font-semibold text-green-400">Frontend Developer</span> crafting beautiful digital experiences
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
          I specialize in building responsive, modern web applications with React, JavaScript, and Tailwind CSS. Let's create something amazing together!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button variant="primary" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
            <i className="fas fa-envelope"></i>
            Get in Touch
          </Button>
          <Button variant="secondary" size="lg">
            <i className="fas fa-download"></i>
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <a
            href="https://github.com/mehdixun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
            aria-label="GitHub"
            title="Visit GitHub"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mehedi-robi-76b38739b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
            aria-label="LinkedIn"
            title="Visit LinkedIn"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a
            href="https://x.com/mehedirobi01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
            aria-label="Twitter"
            title="Visit Twitter"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
          <a
            href="https://www.facebook.com/mehedirobi01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
            aria-label="Facebook"
            title="Visit Facebook"
          >
            <i className="fab fa-facebook text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-gray-400 text-3xl"><i className="fas fa-chevron-down"></i></div>
      </div>
    </section>
  );
}
