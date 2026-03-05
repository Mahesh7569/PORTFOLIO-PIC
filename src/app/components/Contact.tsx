import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a96e] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#c9a96e] font-medium tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's Collaborate
          </h3>
          <div className="w-20 h-px bg-[#c9a96e]/50 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-10"
        >
          <h4 className="text-3xl text-gray-900 dark:text-white font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reach Out Directly
          </h4>
          <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-10">
            I'm always open to discussing web development projects, creative content collaborations, or potential opportunities. Send me an email or connect via social networks.
          </p>

          <div className="space-y-6">
            <a href="mailto:malikireddymahesh@gmail.com" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:bg-[#c9a96e] group-hover:border-[#c9a96e] transition-all duration-300">
                <Mail className="w-6 h-6 text-[#c9a96e] group-hover:text-white dark:group-hover:text-[#0f0f0f]" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Email</span>
                <span className="text-gray-900 dark:text-white group-hover:text-[#c9a96e] transition-colors">malikireddymahesh@gmail.com</span>
              </div>
            </a>

            <a href="tel:7569737616" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:bg-[#c9a96e] group-hover:border-[#c9a96e] transition-all duration-300">
                <Phone className="w-6 h-6 text-[#c9a96e] group-hover:text-white dark:group-hover:text-[#0f0f0f]" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Phone</span>
                <span className="text-gray-900 dark:text-white group-hover:text-[#c9a96e] transition-colors">+91 7569737616</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/malikireddy-maheshwar-reddy-7a5b6c9d" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center group-hover:bg-[#c9a96e] group-hover:border-[#c9a96e] transition-all duration-300">
                <Linkedin className="w-6 h-6 text-[#c9a96e] group-hover:text-white dark:group-hover:text-[#0f0f0f]" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">LinkedIn</span>
                <span className="text-gray-900 dark:text-white group-hover:text-[#c9a96e] transition-colors">Malikireddy Maheshwar Reddy</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
