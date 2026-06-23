import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-base-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography / Content (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-base-100/50"></div>
              <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-base-100/60">
                Mahasiswa Akuntansi IPB
              </h2>
            </div>
            
            <h1 className="font-display text-6xl sm:text-7xl lg:text-[7.5rem] leading-[1.1] font-bold text-base-50 tracking-tight mb-8">
              FAWWAZ <br />
              <span className="text-base-100/40">ALWAN.</span>
            </h1>
            
            <p className="text-base-100/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
              Memadukan ketajaman analisis data dengan integritas audit untuk menerjemahkan kompleksitas keuangan menjadi keputusan strategis.
            </p>

            <div className="flex items-center gap-6">
              <a 
                href="#proyek" 
                className="px-8 py-4 bg-base-50 text-base-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-base-100 transition-colors"
              >
                Lihat Portofolio
              </a>
            </div>
          </motion.div>

          {/* Photo (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden group">
              <div className="absolute inset-0 bg-base-900/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Fawwaz Alwan" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-base-100/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>
    </section>
  );
};

export default Hero;
