import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Ketua Divisi Keuangan",
      org: "Himpunan Mahasiswa Akuntansi IPB",
      year: "2023",
      desc: "Mengelola anggaran organisasi senilai lebih dari Rp 50.000.000 selama satu periode, serta menyusun realisasi budget bulanan dengan akurasi 100%."
    },
    {
      role: "Koordinator Sponsorship",
      org: "IPB Accounting Competition",
      year: "2022",
      desc: "Memimpin tim 8 orang untuk mencari pendanaan acara tingkat nasional dan mengamankan dana sponsorship melebihi target sebesar 120%."
    }
  ];

  return (
    <section id="pengalaman" className="py-32 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-base-50 tracking-tighter uppercase">
              REKAM <br/> <span className="text-outline">JEJAK.</span>
            </h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 pb-2 md:text-right"
          >
             <p className="text-base-100/60 font-light text-lg md:text-xl leading-relaxed max-w-xl md:ml-auto">
              Bukti nyata dari komitmen, kepemimpinan, dan eksekusi yang presisi dalam setiap tanggung jawab.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-base-700">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-12 border-b border-base-700 grid grid-cols-1 md:grid-cols-12 gap-8 group hover:bg-base-800/50 transition-colors"
            >
              <div className="md:col-span-3 flex items-start md:items-center">
                <span className="font-display text-5xl text-base-100/20 font-bold group-hover:text-base-50 transition-colors duration-500">{exp.year}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl font-bold text-base-50 mb-3">{exp.role}</h3>
                <p className="text-xs tracking-widest uppercase font-bold text-base-100/50">{exp.org}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-base-100/60 font-light text-lg leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
