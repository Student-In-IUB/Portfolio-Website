


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="sticky top-0 z-50">
      
      <div className="relative">
       
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 shadow-2xl shadow-blue-900/30 blur-[2px] -z-10" />
        
       
        <div className="backdrop-blur-lg bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-b border-gray-700/30 shadow-lg shadow-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
             
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NavLink
                  to="/"
                  className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                >
                  Sadiq.
                </NavLink>
              </motion.div>

             
              <motion.nav
                className="hidden md:flex items-center space-x-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative px-1 py-2 text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]' 
                            : 'text-gray-300 hover:text-cyan-300 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.2)]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.name}
                          <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isActive ? 1 : 0 }}
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>

            
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg shadow-xl shadow-black/30 border-t border-gray-700/30"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 shadow-[inset_0_0_8px_rgba(34,211,238,0.2)]' 
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;