import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileExcel, FaChartBar, FaChartPie, FaCubes, FaCalculator, FaPython } from 'react-icons/fa';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { 
      title: "Financial Accounting", 
      details: "Penyusunan laporan keuangan standar IFRS & PSAK, analisis likuiditas, dan manajemen aset perusahaan." 
    },
    { 
      title: "Audit & Assurance", 
      details: "Evaluasi pengendalian internal, mitigasi risiko (COSO Framework), dan memastikan kepatuhan regulasi." 
    },
    { 
      title: "Corporate Taxation", 
      details: "Perencanaan pajak strategis, rekonsiliasi fiskal, dan pelaporan PPh/PPN yang efisien." 
    },
    { 
      title: "Data Analytics", 
      details: "Pemodelan keuangan, ekstraksi wawasan dari big data, dan visualisasi interaktif menggunakan Power BI." 
    }
  ];

  const tools = [
    { name: "Microsoft Excel", icon: <FaFileExcel className="text-[#107C41]" /> },
    { name: "Power BI", icon: <FaChartBar className="text-[#F2C811]" /> },
    { name: "Tableau", icon: <FaChartPie className="text-[#E97627]" /> },
    { name: "SAP ERP", icon: <FaCubes className="text-[#0FAAFF]" /> },
    { name: "Zahir Accounting", icon: <FaCalculator className="text-base-100/60" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> }
  ];

  return (
    <section id="keahlian" className="py-32 bg-base-900 border-t border-base-800 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest uppercase text-base-100/40 mb-2">Area Keahlian</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-base-50">Kompetensi Inti.</h3>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col border-t border-base-800">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="border-b border-base-800 group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Hover Background Fill */}
              <div className="absolute inset-0 bg-base-50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 py-10 md:py-16 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between cursor-default">
                <h4 className="font-display text-4xl md:text-6xl font-bold text-base-50 group-hover:text-base-900 transition-colors duration-500 tracking-tight">
                  {skill.title}
                </h4>
                
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="hidden md:block max-w-sm text-right"
                    >
                      <p className="text-base-900 font-medium text-lg font-sans">
                        {skill.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Mobile desc */}
                <p className="md:hidden text-base-100/60 group-hover:text-base-900/80 mt-4 text-sm leading-relaxed transition-colors duration-500 font-sans">
                  {skill.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee for Tools */}
      <div className="mt-32 relative flex overflow-x-hidden group bg-base-800 py-6 border-y border-base-700">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-16 group-hover:pause">
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-4 mx-8">
              <div className="text-3xl md:text-5xl">
                {tool.icon}
              </div>
              <span className="text-2xl md:text-4xl font-display font-bold text-base-50 uppercase tracking-wider">
                {tool.name}
              </span>
              <span className="text-base-700 ml-8">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
