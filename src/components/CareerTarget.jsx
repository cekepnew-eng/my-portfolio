import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBriefcase, FiTarget } from 'react-icons/fi';

const CareerTarget = () => {
  const steps = [
    {
      phase: "Tahun 1-2",
      title: "Pengembangan Skill & Fondasi",
      desc: "Fokus pada penguatan pemahaman standar akuntansi (PSAK/IFRS), sertifikasi software akuntansi (SAP/Oracle), dan advanced data analytics.",
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      phase: "Tahun 3-4",
      title: "Magang & Implementasi",
      desc: "Mencari pengalaman praktis melalui program magang di Big 4 Public Accounting Firm atau divisi finance perusahaan multinasional.",
      icon: <FiBriefcase className="w-5 h-5" />,
      color: "from-amber-500 to-amber-600"
    },
    {
      phase: "Pasca Kelulusan",
      title: "Karier Profesional",
      desc: "Memulai karier sebagai Junior Auditor, Financial Analyst, atau Tax Consultant, sembari mempersiapkan ujian sertifikasi CPA (Certified Public Accountant).",
      icon: <FiTarget className="w-5 h-5" />,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="career" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Target <span className="text-amber-500">Karier</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Roadmap masa depan yang terarah untuk mencapai tujuan sebagai profesional akuntansi dan keuangan yang kompeten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 glass p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${step.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">{step.phase}</div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTarget;
