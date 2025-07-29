import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const roles = ['Frontend Web Developer', 'React.js Specialist', 'UI/UX Designer'];

const socialLinks = {
  github: 'https://github.com/',
  instagram: 'https://www.instagram.com/sadiqaliashiq?igsh=enlweDd6a2p2eWl6',
  linkedin: 'https://www.linkedin.com/in/sadiq-hussain-9a85a2334/',
  twitter: 'https://twitter.com/',
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDelete = 1000;

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView]);

  useEffect(() => {
    const currentText = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-[8%] pt-20 pb-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
       
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Welcome to my Portfolio
          </h2>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            Hi I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sadiq Hussain
            </span>
          </h1>

         
          <div className="h-[2.5rem] mb-4">
            <h3 className="text-2xl font-bold text-cyan-400 inline-block">
              {text}
              <span className="text-cyan-400 animate-blink">|</span>
            </h3>
          </div>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Crafting responsive, modern web experiences with a focus on usability and performance.
            Specialized in <span className="text-cyan-400 font-medium">React.js</span> and{' '}
            <span className="text-blue-400 font-medium">Tailwind CSS</span>.
          </p>

         
          <motion.div
            className="flex items-center gap-5 mb-6 justify-center md:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {Object.entries(socialLinks).map(([icon, link], i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] rounded-full shadow-md shadow-cyan-500/20"
              >
                <div className="bg-gray-800 p-3 rounded-full w-12 h-12 flex items-center justify-center text-white hover:text-cyan-300 transition-colors">
                  <i className={`fab fa-${icon} text-xl`}></i>
                </div>
              </motion.a>
            ))}
          </motion.div>

         
          <motion.div
            className="flex justify-center md:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]">
              HIRE ME
            </button>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="relative p-[6px] bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/30"
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="p-2 bg-gray-800 rounded-full"
          >
            <img
              src="src\assetss\Sadiq.png"
              className="w-72 h-72 md:w-80 md:h-80  object-cover rounded-full shadow-xl"
              alt="Portrait of Sadiq Hussain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
