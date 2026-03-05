import React from 'react';
import { motion } from 'motion/react';
import { TerminalSquare, MonitorPlay, Code2, Database } from 'lucide-react';

const skills = [
  { name: 'HTML & CSS', level: 80, icon: <Code2 className="w-5 h-5 text-[#c9a96e]" /> },
  { name: 'Python', level: 75, icon: <TerminalSquare className="w-5 h-5 text-[#c9a96e]" /> },
  { name: 'Java', level: 60, icon: <Database className="w-5 h-5 text-[#c9a96e]" /> },
  { name: 'CapCut', level: 99, icon: <MonitorPlay className="w-5 h-5 text-[#c9a96e]" /> },
  { name: 'DaVinci Resolve', level: 75, icon: <MonitorPlay className="w-5 h-5 text-[#c9a96e]" /> },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#151515] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-sm mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            My Journey &<br />
            <span className="text-gray-500 dark:text-gray-500">Expertise</span>
          </h3>
          <div className="w-20 h-px bg-[#c9a96e]/50 mb-8" />
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            I am an undergraduate student currently studying 3rd year 2nd semester at Vignan College, Hyderabad. I am passionate about web development, video editing, and digital content creation. I enjoy building websites, learning programming logic, and creating visual stories through editing and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="space-y-8">
            <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Technical Skills</h4>
            {skills.slice(0, 3).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-200 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 rounded-2xl p-6 hover:bg-gray-300 dark:hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-gray-900 dark:text-white font-medium tracking-wide">{skill.name}</span>
                  </div>
                  <span className="text-[#c9a96e] text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-gray-300 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className="h-full bg-[#c9a96e]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-8">
            <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Creative Tools</h4>
            {skills.slice(3).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-200 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 rounded-2xl p-6 hover:bg-gray-300 dark:hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-gray-900 dark:text-white font-medium tracking-wide">{skill.name}</span>
                  </div>
                  <span className="text-[#c9a96e] text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-gray-300 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className="h-full bg-[#c9a96e]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
