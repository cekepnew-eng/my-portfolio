import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="tentang" className="py-32 bg-base-900 border-t border-base-800 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-base-100/40 mb-12 text-center"
          >
            Sebuah Perjalanan
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg md:prose-2xl max-w-none text-base-100/80 font-light leading-relaxed text-center"
          >
            <p className="mb-8">
              Halo, saya <strong className="text-base-50 font-bold">Fawwaz Alwan</strong>. Ketertarikan saya pada dinamika organisasi dan kepemimpinan bermula ketika saya dipercaya mengemban amanah sebagai <strong className="text-base-50 font-bold">Ketua OSIS di SMA Kosgoro</strong>. Masa-masa itu membentuk karakter saya dalam memimpin tim, mengambil keputusan di bawah tekanan, dan memahami pentingnya tata kelola yang baik.
            </p>
            <p className="mb-8">
              Perjalanan tersebut membawa saya melangkah lebih jauh ke <strong className="text-base-50 font-bold">IPB University</strong>, menempuh studi S1 di bidang Akuntansi. Di sini, saya menyadari bahwa seni memimpin sebuah entitas sangat erat kaitannya dengan bagaimana kita memahami bahasa finansialnya.
            </p>
            <p>
              Bagi saya, akuntansi bukan sekadar pembukuan pasif. Ini adalah instrumen strategis untuk <span className="italic text-base-100/60">menjaga transparansi, memitigasi risiko, dan mendikte arah bisnis</span> ke depan. Dengan IPK 3.85, saya tidak hanya mengejar nilai akademis, tetapi benar-benar mendalami bagaimana angka-angka tersebut dapat bercerita dan memberikan solusi strategis di dunia nyata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-px h-24 bg-gradient-to-b from-base-700 to-transparent"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
