import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="kontak" className="py-32 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Huge Typography & Direct Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-base-100/50"></div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-base-100/40">
                  Kolaborasi
                </h2>
              </div>
              
              <h3 className="font-display text-5xl md:text-[6rem] leading-[0.9] font-bold text-base-50 tracking-tighter mb-8">
                LET'S <br />
                <span className="text-base-100/40">TALK.</span>
              </h3>
              
              <p className="text-base-100/60 font-light text-xl leading-relaxed max-w-md">
                Terbuka untuk diskusi mengenai peluang karir, konsultasi finansial, atau kolaborasi strategis lainnya.
              </p>
            </div>

            <div className="mt-16 flex flex-col gap-6">
              <a href="mailto:hello@fawwaz.id" className="text-2xl md:text-3xl font-display font-bold text-base-50 hover:text-outline transition-all duration-300 w-max">
                hello@fawwaz.id
              </a>
              <div className="flex gap-8">
                <a href="#" className="text-xs uppercase tracking-widest font-bold text-base-100/50 hover:text-base-50 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-xs uppercase tracking-widest font-bold text-base-100/50 hover:text-base-50 transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimalist Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <form className="flex flex-col gap-12 mt-4">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-base-700 py-4 text-xl text-base-50 focus:outline-none focus:border-base-50 peer transition-colors" 
                  placeholder=" " 
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-base-100/40 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-base-50 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:text-base-50 cursor-text"
                >
                  Nama Anda
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-base-700 py-4 text-xl text-base-50 focus:outline-none focus:border-base-50 peer transition-colors" 
                  placeholder=" " 
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-base-100/40 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-base-50 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:text-base-50 cursor-text"
                >
                  Email Anda
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  rows="1"
                  className="w-full bg-transparent border-b border-base-700 py-4 text-xl text-base-50 focus:outline-none focus:border-base-50 peer transition-colors resize-none overflow-hidden min-h-[60px]" 
                  placeholder=" " 
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-4 text-base-100/40 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-focus:text-base-50 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:text-base-50 cursor-text"
                >
                  Pesan
                </label>
              </div>

              <button 
                type="button" 
                className="group w-full md:w-auto self-start mt-4 px-10 py-5 border border-base-700 hover:border-base-50 text-base-50 font-bold uppercase tracking-widest text-xs transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-base-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10 group-hover:text-base-900 transition-colors duration-500 delay-75">Kirim Pesan</span>
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
