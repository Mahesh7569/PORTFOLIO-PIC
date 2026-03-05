import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Wins Fashion',
    category: 'E-commerce Website',
    description: 'E-commerce website project with product display, cart system, and checkout interface. Built for seamless shopping experiences.',
    image: 'https://raw.githubusercontent.com/Mahesh7569/PORTFOLIO-PIC/main/Screenshot%202026-03-05%20131350.png',
    link: 'https://winsfashiondesign.vercel.app'
  },
  {
    title: 'FilmFrames.Media',
    category: 'Digital Content',
    description: 'Instagram creative page for cinematic edits and visual storytelling. Focusing on aesthetic grading and narrative flow.',
    image: 'https://images.unsplash.com/photo-1670411952195-fffeca152dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMGVkaXRpbmd8ZW58MXx8fHwxNzcyNjkzMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'https://instagram.com/filmframes.media'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0f0f0f] relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-sm mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured Projects
          </h3>
          <div className="w-20 h-px bg-[#c9a96e]/50 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => project.link && window.open(project.link, '_blank')}
              className={`group relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#151515] border border-gray-300 dark:border-white/5 hover:border-[#c9a96e]/30 transition-all duration-500 ${project.link ? 'cursor-pointer' : ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay link icon */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-[#0f0f0f] text-white transition-colors cursor-pointer">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 relative z-20 bg-gradient-to-t from-gray-100 dark:from-[#151515] via-gray-100 dark:via-[#151515] to-transparent">
                <span className="text-[#c9a96e] text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                <h4 className="text-2xl text-gray-900 dark:text-white font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
