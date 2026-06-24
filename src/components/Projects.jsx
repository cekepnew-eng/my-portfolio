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
      title: "Audit Manufaktur",
      category: "Proyek Akademik",
      desc: "Mengevaluasi internal control siklus pengeluaran kas dengan framework COSO untuk pabrik garmen.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Restrukturisasi Utang",
      category: "Studi Kasus F&B",
      desc: "Menganalisis rasio solvabilitas dan likuiditas untuk merekomendasikan skema restrukturisasi utang restoran waralaba.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Implementasi SAP ERP",
      category: "Simulasi Sistem",
      desc: "Melakukan simulasi mapping proses bisnis siklus pengadaan (Procure-to-Pay) menggunakan modul SAP MM.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Tax Planning Strategis",
      category: "Perpajakan",
      desc: "Merumuskan strategi efisiensi PPh Badan tanpa melanggar regulasi tax evasion bagi perusahaan logistik.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Analisis Portofolio Saham",
      category: "Investasi",
      desc: "Membangun dashboard sentimen pasar dan melakukan valuasi intrinsik menggunakan metode Discounted Cash Flow.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Dashboard Kinerja (BI)",
      category: "Data Analytics",
      desc: "Mengembangkan dashboard interaktif Power BI untuk memonitor KPI keuangan real-time sebuah startup e-commerce.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Forecasting Pendapatan",
      category: "Manajemen Akuntansi",
      desc: "Membuat model prediktif berbasis time-series regression untuk estimasi pendapatan ritel pada kuartal 4.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="proyek" className="py-32 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-px bg-base-100/50"></div>
             <h2 className="text-sm font-bold tracking-widest uppercase text-base-100/40">Portfolio</h2>
          </div>
          <h3 className="font-display text-5xl md:text-7xl font-bold text-base-50 tracking-tighter">
            STUDI KASUS.
          </h3>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full md:w-3/5 h-[400px] rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-base-900/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Decorative Number */}
                  <div className={`absolute top-6 ${i % 2 === 0 ? 'left-8' : 'right-8'} z-20 font-display text-[8rem] font-bold text-base-100/20 leading-none pointer-events-none group-hover:text-base-100/40 transition-colors`}>
                    0{i + 1}
                  </div>
                </div>
                
                <div className={`w-full md:w-2/5 flex flex-col justify-center ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="text-xs font-bold tracking-widest uppercase text-base-100/40 mb-4 border-b border-base-800 pb-2 w-max">
                    {project.category}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-base-50 mb-6 group-hover:text-outline transition-colors duration-500 tracking-tight leading-[1.1]">
                    {project.title}
                  </h3>
                  <p className="text-base-100/60 font-light text-lg mb-10 leading-relaxed">
                    {project.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-4 text-base-50 font-bold uppercase tracking-widest text-xs hover:text-base-100/50 transition-colors group/link w-max">
                    <span className="border-b border-base-50 pb-1 group-hover/link:border-base-100/50">Lihat Laporan Lengkap</span>
                    <svg className="w-4 h-4 transform -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
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
