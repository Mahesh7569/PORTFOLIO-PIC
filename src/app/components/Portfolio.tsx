import React from 'react';

const projects = [
  {
    title: 'Minimalist Web Design',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc3MjY1NzI1NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Fintech Mobile App',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzI2MzMxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Global Marketing Campaign',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1643139863038-7355941e9e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcyNjkyOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Featured Work
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
              View all projects <span aria-hidden="true" className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-300 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
