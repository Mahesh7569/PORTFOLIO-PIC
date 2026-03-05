import React from 'react';
import { Monitor, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'We create responsive, beautiful, and accessible websites that look great on any device.',
    icon: Monitor,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications designed for optimal user experience.',
    icon: Smartphone,
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase your online presence and reach your target audience.',
    icon: TrendingUp,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-slate-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            A comprehensive suite of digital services designed to elevate your brand and engage your audience.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
