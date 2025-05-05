import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'VSS Technologies Pvt. Ltd.',
      location: 'Sydney, Australia',
      period: 'Feb 2025 – Present',
      description: [
        'Developed the BrainTree Coaching Website from scratch using React, Next.js and Tailwind CSS.',
        'Built reusable UI components, implemented SSR and lazy loading, resulting in a 30% improvement in performance.',
        'Collaborated with designers and stakeholders to ensure 100% mobile responsiveness and SEO compliance.',
        'Created interactive dashboards, increasing user engagement by 25%.',
        'Conducted unit testing, improving code reliability and reducing post-deployment bugs by 20%.',
      ],
    },
    {
      title: 'Business Analyst',
      company: 'Sworn Tech Pvt. Ltd.',
      location: 'Jaipur, India',
      period: 'Nov 2020 – Nov 2022',
      description: [
        'Collaborated with stakeholders to translate business requirements into functional UI/UX wireframes and front-end features using HTML, CSS, and JavaScript.',
        'Partnered with developers to optimize dashboard performance and responsiveness, resulting in a 35% improvement in load times and increased mobile engagement.',
        'Coordinated with QA teams to document user scenarios and improve front-end testing workflows, reducing bugs by 20%.',
      ],
    },
    {
      title: 'Business Analyst',
      company: 'Innerpeace Health Support Solutions',
      location: 'Jaipur, India',
      period: 'Sep 2017 – Oct 2020',
      description: [
        'Implemented UI prototypes and data visualizations for internal tools, improving operational decision-making speed by 30%.',
        'Worked with software teams to streamline workflows, increasing tool adoption rate by 40%.',
        'Designed frontend interfaces for data migration and validation processes, reducing errors by 35%.',
      ],
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
    <section id="experience" className="my-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <SectionTitle
          title="Professional Experience"
          subtitle="My journey as a developer across different roles and companies."
        />

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              variants={itemVariants}
            >
              <ExperienceCard
                title={experience.title}
                company={experience.company}
                location={experience.location}
                period={experience.period}
                description={experience.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/VigyanshChugh_FrontEnd_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Get My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
