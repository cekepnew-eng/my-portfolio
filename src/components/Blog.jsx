import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    {
      title: "Dampak Implementasi PSAK 73 terhadap Laporan Keuangan Industri Retail",
      category: "Akuntansi",
      date: "12 Okt 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Strategi Manajemen Risiko dalam Menghadapi Fluktuasi Nilai Tukar",
      category: "Keuangan",
      date: "28 Sep 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pentingnya Environmental, Social, and Governance (ESG) dalam Penilaian Perusahaan",
      category: "Bisnis",
      date: "15 Sep 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Artikel & <span className="text-amber-500">Pemikiran</span></h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="text-blue-500 hover:text-amber-400 font-medium transition-colors flex items-center gap-2"
          >
            Lihat Semua Artikel &rarr;
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
