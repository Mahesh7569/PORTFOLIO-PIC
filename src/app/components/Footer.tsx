import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#151515] py-10 border-t border-gray-300 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="text-xl font-medium tracking-widest text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          MMR<span className="text-[#c9a96e]">.</span>
        </a>
        
        <p className="text-gray-600 dark:text-gray-500 font-light text-sm text-center md:text-left">
          &copy; 2026 Malikireddy Maheshwar Reddy. All rights reserved.
        </p>

        <p className="text-gray-600 dark:text-gray-500 font-light text-sm">
          Built with <span className="text-[#c9a96e]">passion</span>.
        </p>
      </div>
    </footer>
  );
}
