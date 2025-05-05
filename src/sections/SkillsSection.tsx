import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaTools, FaDatabase } from 'react-icons/fa';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <FaCode />,
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'Next.js',
        'Node.js',
      ],
    },
    {
      title: 'Styling & UI',
      icon: <FaDesktop />,
      skills: [
        'Tailwind CSS',
        'Bootstrap',
        'Vite',
        'Responsive Design',
        'CSS Animations',
        'Figma',
        'Adobe XD',
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: <FaTools />,
      skills: [
        'Git',
        'GitHub',
        'Vercel',
        'Netlify',
        'JIRA',
        'Agile',
        'Jest',
        'React Testing Library',
      ],
    },
    {
      title: 'State & Data',
      icon: <FaDatabase />,
      skills: [
        'Redux',
        'Context API',
        'REST APIs',
        'GraphQL',
        'Performance Optimization',
        'Server-Side Rendering',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="my-16 bg-white dark:bg-gray-950">
      <div className="section-container">
        <SectionTitle
          title="Technical Skills"
          subtitle="My expertise in various technologies, tools, and methodologies."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="my-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem-Solving',
              'Attention to Detail',
              'Communication',
              'Collaboration',
              'Adaptability',
              'Time Management',
              'Creativity',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary text-white transition-colors rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
