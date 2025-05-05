import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-primary/10 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl text-primary dark:text-primary">
            <a href="#home" className="flex items-center gap-2">
              <img
                src="/public/images/og-image2.png"
                alt="Vigyansh Chugh"
                className="w-32 h-16 py-1 object-cover rounded-br-2xl rounded-tl-2xl"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              
              {navLinks.map((link) => (
                
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 border-2 border-primary dark:text-gray-300 hover:bg-primary hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full bg-secondary/30 dark:bg-secondary/10 text-primary dark:text-primary hover:bg-secondary/50 dark:hover:bg-secondary/30 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <MdLightMode size={20} />
                ) : (
                  <MdDarkMode size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-secondary/30 dark:bg-secondary/10 text-primary dark:text-primary hover:bg-secondary/50 dark:hover:bg-secondary/30 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <MdLightMode size={20} />
              ) : (
                <MdDarkMode size={20} />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-secondary/30 dark:hover:bg-secondary/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-secondary/30 dark:hover:bg-secondary/10 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
