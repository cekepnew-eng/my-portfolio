import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Valuasi AgriTech",
      category: "Studi Kelayakan",
      desc: "Menyusun proyeksi keuangan 5 tahun, analisis NPV, IRR, dan Payback Period untuk startup agrikultur.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Audit Internal Manufaktur",
      category: "Proyek Akademik",
      desc: "Mengevaluasi internal control siklus pengeluaran kas dengan framework COSO.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="proyek" className="py-32 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-base-50 tracking-tighter">
            STUDI KASUS.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 h-[400px] rounded-[2rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-base-900/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <div className="text-xs font-bold tracking-widest uppercase text-base-100/40 mb-4">
                    {project.category}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-base-50 mb-6 group-hover:text-outline transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-base-100/60 font-light text-lg mb-8">
                    {project.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-base-50 font-semibold border-b border-base-50 pb-1 w-max hover:opacity-70 transition-opacity">
                    Lihat Laporan Lengkap
                    <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
