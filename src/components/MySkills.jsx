



import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Skill Data
const skills = [
  { name: "HTML", value: 99 },
  { name: "CSS", value: 99 },
  { name: "Bootstrap", value: 100 },
  { name: "Tailwind CSS", value: 100 },
  { name: "JavaScript", value: 99 },
  { name: "React.js + Redux Toolkit", value: 98 },
  { name: "GitHub / Git", value: 85 },
];

const profSkills = [
  { name: "Creativity", value: 90 },
  { name: "Problem Solving", value: 90 },
  { name: "Communication", value: 90 },
  { name: "Teamwork", value: 97 },
];

// Animated Linear Skill Bar
const SkillBar = ({ name, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="mb-5"
  >
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-cyan-400">{value}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        style={{ width: `${value}%` }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

// Circular Skill Progress
const CircularSkill = ({ name, value, delay = 0 }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative w-20 h-20 mb-2">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#374151"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="url(#grad1)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {value}%
        </div>
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition">
        {name}
      </span>
    </motion.div>
  );
};

// Main Component
export default function MySkills() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-gray-800 rounded-2xl shadow-xl p-8 md:p-14 border border-gray-700"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 relative w-fit mx-auto">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Skillset
          </span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-widest">
              Technical Skills
            </h3>
            {skills.map((skill, i) => (
              <SkillBar
                key={i}
                name={skill.name}
                value={skill.value}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Professional Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 place-items-center">
            <h3 className="text-sm font-semibold text-gray-400 col-span-2 uppercase tracking-widest mb-4">
              Professional Skills
            </h3>
            {profSkills.map((skill, i) => (
              <CircularSkill
                key={i}
                name={skill.name}
                value={skill.value}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}