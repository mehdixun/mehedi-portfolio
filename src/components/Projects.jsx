import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';

const ProjectCard = ({ project, onSelect, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    onClick={() => onSelect(project)}
  >
    <Card className="flex flex-col h-full overflow-hidden cursor-pointer group border-0 hover:shadow-2xl transition-all duration-300">
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <Badge key={idx} variant="blue" size="sm">{tech}</Badge>
          ))}
          {project.tech.length > 3 && <Badge variant="outline" size="sm">+{project.tech.length - 3}</Badge>}
        </div>

        <Button variant="primary" size="sm" className="w-full justify-center">
          <i className="fas fa-arrow-right"></i>
          View Details
        </Button>
      </div>
    </Card>
  </motion.div>
);

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-4">
          My Latest <span className="text-blue-400">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-blue-400 mx-auto mb-16"></div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={setSelected} />
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-96 overflow-y-auto shadow-2xl border border-gray-700"
          >
            <div className="p-8">
              <button
                onClick={() => setSelected(null)}
                className="float-right text-2xl text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <i className="fas fa-times"></i>
              </button>

              <h3 className="text-4xl font-bold text-blue-400 mb-4 pr-8">{selected.name}</h3>
              <p className="text-xl text-gray-300 mb-6 font-semibold">Tech Stack: {selected.techStack}</p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">{selected.fullDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="success" size="md" asChild>
                  <a href={selected.links.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </Button>
                <Button variant="secondary" size="md" asChild>
                  <a href={selected.links.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub Repo
                  </a>
                </Button>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">Challenges Faced</h4>
                <ul className="space-y-2">
                  {selected.challenges.map((ch, idx) => (
                    <li key={idx} className="text-gray-400 flex gap-3">
                      <i className="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i> {ch}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Future Improvements</h4>
                <ul className="space-y-2">
                  {selected.improvements.map((imp, idx) => (
                    <li key={idx} className="text-gray-400 flex gap-3">
                      <i className="fas fa-lightbulb text-yellow-400 mt-1 flex-shrink-0"></i> {imp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Project Data (same as your original)
const projectData = [
  {
    id: 1,
    name: 'Urban Fix Website',
    description: 'Developed a responsive "Urban Fix" website using HTML, CSS, JavaScript, and React, allowing users to report issues in their city and track their resolution..',
    image: 'https://i.ibb.co.com/Z1Rpx4Jb/Screenshot-2026-01-08-183414.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    techStack: 'React, Node.js, Express, MongoDB, Tailwind CSS',
    fullDescription: 'Developed a robust full-stack e-commerce platform featuring secure user authentication, product listing, shopping cart functionality, and order processing. Implemented a responsive design for optimal viewing on various devices.',
    challenges: [
      'Managing complex state across multiple components with Redux.',
      'Implementing secure authentication and authorization flows.',
      'Optimizing database queries for product filtering and search.'
    ],
    improvements: [
      'Integrate real-time inventory management.',
      'Add payment gateway integration (e.g., Stripe).',
      'Introduce a recommendation engine based on user behavior.'
    ],
    links: {
      live: 'https://urban-fix.netlify.app/',
      github: 'https://github.com/mehdixun/urban-fix-client.git'
    }
  },
  {
    id: 2,
    name: 'Pawmart Website',
    description: 'Developed a responsive "PawMart" website using HTML, CSS, JavaScript, and React, where users can adopt pets and purchase pet-related products such as food, toys, and accessories.',
    image: 'https://i.ibb.co.com/spBB7YbP/Screenshot-2026-01-08-183616.png',
    tech: ['Vue.js', 'Firebase', 'Vuetify', 'CSS3'],
    techStack: 'Vue.js, Firebase, CSS3',
    fullDescription: 'Created an intuitive task management application with features like task creation, categorization, due dates, and drag-and-drop reordering. Utilized Firebase for real-time data synchronization.',
    challenges: [
      'Implementing efficient drag-and-drop functionality.',
      'Ensuring real-time updates across multiple user sessions.',
      'Designing a clean and user-friendly interface for task organization.'
    ],
    improvements: [
      'Add user collaboration features.',
      'Implement recurring tasks and notifications.',
      'Offer calendar view for tasks.'
    ],
    links: {
      live: 'https://assignment-10-pawmart.netlify.app/',
      github: 'https://github.com/mehdixun/pawmart.git'
    }
  },
  {
    id: 3,
    name: 'Hero APP Website',
    description: 'Developed a "Hero APP" website using HTML, CSS, JavaScript, and React that showcases a collection of superheroes with detailed profiles, including their abilities, origin stories, and images.',
    image: 'https://i.ibb.co.com/3mxVn19W/Screenshot-2026-01-08-184922.png',
    tech: ['Next.js', 'GraphQL', 'MDX', 'Vercel'],
    techStack: 'Next.js, Markdown, GraphQL',
    fullDescription: 'Built a modern personal blog platform allowing easy content creation using Markdown. Features include dynamic routing for posts, comments section, and SEO optimization. Styled with a custom theme.',
    challenges: [
      'Parsing and rendering Markdown content securely.',
      'Optimizing image loading for blog posts.',
      'Implementing a robust comment system with moderation capabilities.'
    ],
    improvements: [
      'Add search functionality for blog posts.',
      'Implement a tag/category system for better content organization.',
      'Allow social media sharing directly from posts.'
    ],
    links: {
      live: 'https://assignment-8-heriio.netlify.app/',
      github: 'https://github.com/mehdixun/Hero-app.git'
    }
  }
];
