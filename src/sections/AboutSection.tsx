import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="my-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background, skills, and what drives me as a developer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/about.webp"
                alt="Vigyansh Chugh"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Vigyansh Chugh</h3>
                  <p className="text-gray-200">Front-End Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hello! I'm <span className="highlight">Vigyansh Chugh</span>, a passionate Front-End Developer with over 5 years
              of professional experience in building responsive, scalable, and user-centric web applications.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              I specialize in modern JavaScript frameworks like <span className="highlight">React.js</span>, <span className="highlight">Next.js</span>,
              and styling solutions like <span className="highlight">Tailwind CSS</span> to create seamless user experiences.
              I'm particularly adept at transforming UI/UX designs into clean and efficient code.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              My approach is centered around performance optimization, accessibility, and SEO best practices.
              I have a strong understanding of front-end testing and enjoy collaborating with cross-functional
              teams in Agile environments to deliver high-quality solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Master of Information Technology</p>
                  <p className="text-gray-600 dark:text-gray-400">University of Wollongong, NSW | December 2024</p>
                </div>
                <div>
                  <p className="font-medium">Bachelor of Technology (Information Technology)</p>
                  <p className="text-gray-600 dark:text-gray-400">Global College of Technology, Jaipur | April 2017</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="mailto:cvigyansh@gmail.com"
                className="inline-block mt-4 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
