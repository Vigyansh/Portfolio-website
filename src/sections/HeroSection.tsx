import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="my-16 md:my-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row sm:flex-row items-center">
          <motion.div
            className="md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hey, I'm{' '}
              <span className="text-primary dark:text-primary">
                Vigyansh Chugh
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Front-End Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              I build responsive, user-centric web applications using React.js,
              Next.js, Tailwind CSS and performance-first tools like Vite to
              craft seamless digital experiences. Transforming UI/UX designs
              into clean, efficient, and accessible code is my speciality.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="https://linkedin.com/in/vigyansh-chugh-934aa29b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/vigyansh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              {/* <a
                href="mailto:cvigyansh@gmail.com"
                className="flex items-center px-4 py-2 bg-secondary dark:bg-secondary hover:bg-secondary/80 dark:hover:bg-secondary/80 text-primary dark:text-primary-foreground rounded-md transition-colors"
              >
                <FaEnvelope className="mr-2" /> Contact
              </a> */}
            </div>

            <div className="flex items-center">
              <a
                href="#projects"
                className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
              >
                View My Work
              </a>
              <a
                href="mailto:cvigyansh@gmail.com"
                className="flex items-center px-4 py-2 mx-4 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary dark:border-primary animate-float">
              <img
                src="/public/images/VC.png"
                alt="Vigyansh Chugh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
