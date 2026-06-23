import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Tentang', 'Keahlian', 'Proyek', 'Kontak'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-base-900/80 backdrop-blur-xl border-b border-base-800' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-base-50">
            FAWWAZ.
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <a 
                key={i} 
                href={`#${link.toLowerCase()}`}
                className="text-xs uppercase tracking-widest font-medium text-base-100/60 hover:text-base-50 transition-colors"
              >
                {link}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-base-50 text-base-900 text-xs font-bold uppercase tracking-widest hover:bg-base-100 transition-transform hover:scale-105 active:scale-95"
            >
              Get in touch
            </a>
          </div>

          <button 
            className="md:hidden flex flex-col gap-1.5 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-base-50 block transition-transform origin-center"></motion.span>
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-px bg-base-50 block transition-opacity"></motion.span>
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-base-50 block transition-transform origin-center"></motion.span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-base-900 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-5xl font-bold text-base-50 hover:text-outline transition-all"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
