import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="tentang" className="py-32 relative bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-px bg-base-100/50"></div>
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-base-100/40 font-sans">Profil & Filosofi</h2>
        </motion.div>

        {/* Massive Quote / Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mb-32"
        >
          <h3 className="font-display text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-base-50 leading-[1.15] tracking-tighter">
            Bukan sekadar mencatat angka. Saya menerjemahkan data keuangan menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-base-100/40 to-base-50">strategi bisnis yang solid.</span>
          </h3>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-t border-base-800 pt-20">
          
          {/* Left Context */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-xl md:text-2xl text-base-100/80 leading-relaxed font-light mb-10 font-sans">
                Sebagai mahasiswa Akuntansi di IPB University, saya menggabungkan ketajaman analitis dengan pemahaman mendalam tentang ekosistem bisnis modern.
              </p>
              <p className="text-base md:text-lg text-base-100/50 leading-relaxed font-light mb-16 font-sans">
                Kepemimpinan saya ditempa secara nyata—mulai dari memimpin organisasi berskala besar (OSIS SMA Kosgoro) hingga mengelola sirkulasi dana himpunan bernilai puluhan juta rupiah dengan akurasi absolut dan transparansi tinggi.
              </p>
            </div>

            {/* Minimalist Stats */}
            <div className="flex flex-wrap gap-12 md:gap-20">
              <div>
                <div className="font-display text-5xl md:text-6xl font-bold text-base-50 mb-3 tracking-tighter">3.8<span className="text-base-100/30">+</span></div>
                <div className="text-xs tracking-[0.2em] uppercase font-bold text-base-100/40 font-sans">IPK Target</div>
              </div>
              <div>
                <div className="font-display text-5xl md:text-6xl font-bold text-base-50 mb-3 tracking-tighter">100<span className="text-base-100/30">%</span></div>
                <div className="text-xs tracking-[0.2em] uppercase font-bold text-base-100/40 font-sans">Akurasi Audit</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image / Graphic element */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="w-full h-full min-h-[500px] bg-base-800/30 rounded-[2rem] border border-base-800 overflow-hidden relative group shadow-2xl">
              <div className="absolute inset-0 bg-base-900/50 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              
              {/* Aesthetic Corporate / Abstract Architecture Image */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Architecture Abstract" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-base-50 border border-base-50/20 bg-base-900/30 px-6 py-3 backdrop-blur-md rounded-full font-sans">
                  Integritas & Eksekusi
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 z-20">
                <svg className="w-12 h-12 text-base-50/50 group-hover:rotate-90 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
