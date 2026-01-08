import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 bg-gray-900 text-white flex justify-center"
    >
      <motion.div
        className="max-w-3xl w-full space-y-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-8 rounded"></div>
          <p className="text-gray-300 text-lg md:text-xl">
            A passionate web developer turning ideas into beautiful, functional digital experiences.
          </p>
        </div>

        {/* Content Card */}
        <Card hover={true} className="space-y-6 p-8 md:p-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I specialize in frontend development with React, JavaScript, and modern CSS frameworks. I build responsive, accessible, and high-performance web applications.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I'm a continuous learner, staying up-to-date with modern web technologies and best practices, focused on clean code and meaningful design.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              My goal is to deliver real value to users and craft smooth, enjoyable digital experiences.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">30+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">2+</p>
              <p className="text-gray-400 text-sm">Years Exp.</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">100%</p>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}
