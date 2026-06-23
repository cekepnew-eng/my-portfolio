import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiFileText } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      title: "Juara 1 National Business Case Competition",
      category: "Kompetisi",
      year: "2023",
      desc: "Memenangkan kompetisi analisis kasus bisnis tingkat nasional yang diselenggarakan oleh Universitas Indonesia.",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      title: "Mahasiswa Berprestasi Tingkat Fakultas",
      category: "Akademik",
      year: "2023",
      desc: "Penghargaan atas capaian akademik dan non-akademik terbaik di Fakultas Ekonomi dan Manajemen IPB.",
      icon: <FiStar className="w-6 h-6" />
    },
    {
      title: "Sertifikasi Brevet Pajak A & B",
      category: "Sertifikat",
      year: "2024",
      desc: "Lulus sertifikasi profesi bidang perpajakan dengan predikat sangat memuaskan dari Ikatan Akuntan Indonesia (IAI).",
      icon: <FiFileText className="w-6 h-6" />
    },
    {
      title: "Financial Modeling Valuation Analyst (FMVA)",
      category: "Sertifikat",
      year: "2024",
      desc: "Sertifikasi internasional dari Corporate Finance Institute (CFI) untuk pemodelan keuangan.",
      icon: <FiFileText className="w-6 h-6" />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prestasi & <span className="text-amber-500">Sertifikasi</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start group hover:border-amber-500/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <span className="text-sm font-medium text-slate-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
