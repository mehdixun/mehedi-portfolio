import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

// Skill Category Card with equal height
const SkillCategory = ({ icon, title, color, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <Card className={`border-t-4 ${color} hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}>
      <div className="flex items-center gap-3 mb-6">
        <i className={`fas ${icon} text-2xl text-blue-400`}></i>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3 mt-auto">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </Card>
  </motion.div>
);

export default function Skills() {
  const skillsData = [
    {
      icon: 'fa-desktop',
      title: 'Frontend',
      color: 'border-blue-400',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'React.js', 'Next.js'],
    },
    {
      icon: 'fa-server',
      title: 'Backend',
      color: 'border-purple-400',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    },
    {
      icon: 'fa-tools',
      title: 'Tools & Workflow',
      color: 'border-green-400',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'NPM'],
    },
  ];

  const proficiency = [
    { skill: 'React & JavaScript', level: 95 },
    { skill: 'Tailwind CSS & UI Design', level: 90 },
    { skill: 'Node.js & Backend', level: 80 },
    { skill: 'Web Performance & Optimization', level: 85 },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-4">
          My <span className="text-green-400">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-green-400 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        {/* Expertise Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gray-700 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="space-y-6">
            {proficiency.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-semibold">{item.skill}</span>
                  <span className="text-blue-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
