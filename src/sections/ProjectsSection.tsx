import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'BrainTree Coaching Website',
      description:
        'A full-featured website for an online coaching platform with user authentication, course management, and payment integration.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      imageUrl:
        'https://placehold.co/800x600/3B82F6/FFFFFF/png?text=BrainTree+Coaching',
      liveUrl: 'https://www.braintreecoaching.com.au/',
      achievement:
        'Designed and developed the website from scratch, boosting performance by 30% through server-side rendering (SSR) and lazy loading for improved speed and SEO.',
    },
    {
      title: 'QR Code-Based Attendance System',
      description:
        'An automated attendance tracking system using QR codes, with location validation to prevent fraudulent check-ins.',
      technologies: [
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'MySQL',
        'Google Maps API',
      ],
      imageUrl:
        'https://placehold.co/800x600/3B82F6/FFFFFF/png?text=QR+Attendance+System',
      githubUrl: 'https://github.com/vigyansh/qr-attendance',
      achievement:
        'Reduced fraudulent check-ins by 35% and improved data accuracy by 45%',
    },
    {
      title: 'Eats Nearby - Food Ordering App',
      description:
        'A full-stack food ordering system with real-time order tracking, restaurant management, and user reviews.',
      technologies: ['Django', 'JavaScript', 'HTML', 'CSS', 'SQL'],
      imageUrl:
        'https://placehold.co/800x600/3B82F6/FFFFFF/png?text=Eats+Nearby',
      githubUrl: 'https://github.com/vigyansh/eats-nearby',
      achievement:
        'Improved order processing efficiency by 40% through UI/UX enhancements',
    },
    {
      title: 'Frontend Developer Portfolio',
      description:
        'A fast, responsive portfolio website built with React and Tailwind CSS. Designed to showcase my skills and projects in a minimal, performance-optimized layout.',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'Framer Motion',
      ],
      imageUrl:
        'https://placehold.co/800x600/3B82F6/FFFFFF/png?text=Portfolio+Website',
      githubUrl: 'https://github.com/vigyansh/portfolio-website',
      liveUrl: 'https://vigyansh-portfolio.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="my-16 bg-white dark:bg-gray-950">
      <div className="section-container">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work and personal projects."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                achievement={project.achievement}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/vigyansh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.645.35-1.086.635-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.026 1.592 1.026 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
