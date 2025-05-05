import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 dark:bg-primary/30 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <img
                src="/images/og-image2.png"
                alt="Vigyansh Chugh"
                className="w-44 h-20 rounded-br-2xl rounded-tl-2xl py-1 object-cover"
              />
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              © {currentYear} Vigyansh Chugh. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/vigyansh-chugh-934aa29b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-gray-300 hover:text-primary/90 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/vigyansh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-gray-300 hover:text-primary/90 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:cvigyansh@gmail.com"
              className="text-primary dark:text-gray-300 hover:text-primary/90 dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-primary/20 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
