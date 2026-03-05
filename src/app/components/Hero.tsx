import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0f0f0f] pt-20 pb-12">
      {/* Background soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a96e] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gray-900 dark:bg-white rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Editor, Web Developer, Digital Creator
          </motion.div>
          
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MALIKIREDDY<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 dark:from-white to-[#c9a96e]">MAHESHWAR REDDY</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed font-light">
            Creative web developer and digital creator passionate about building clean, modern websites
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#c9a96e] text-white dark:text-[#0f0f0f] rounded-full font-medium hover:bg-[#d4b896] dark:hover:bg-white transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="https://raw.githubusercontent.com/Mahesh7569/PORTFOLIO-PIC/main/Mahesh's%20Resume.pdf"
              download="Mahesh's Resume.pdf"
              className="px-8 py-4 border border-gray-400 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-white/5 hover:border-[#c9a96e] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Download Resume
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Profile Image Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full p-2 border border-gray-300 dark:border-white/10 overflow-hidden group">
            <div className="absolute inset-0 border-2 border-[#c9a96e]/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-gray-200 dark:bg-[#151515]">
              <img
                src="https://raw.githubusercontent.com/Mahesh7569/PORTFOLIO-PIC/main/PROFILE.jpeg"
                alt="Malikireddy Maheshwar Reddy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 dark:from-[#0f0f0f]/80 to-transparent rounded-full z-20 mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
