import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Ketua Divisi Keuangan",
      org: "Himpunan Mahasiswa Akuntansi IPB",
      year: "2023",
      desc: "Mengelola arus kas dan anggaran organisasi senilai lebih dari Rp 50.000.000 selama satu periode kepengurusan. Bertanggung jawab atas transparansi dan penyusunan realisasi budget bulanan dengan tingkat akurasi 100%.",
      programsTitle: "Key Initiatives & Impact",
      programs: [
        "Penyusunan SOP Tata Kelola Keuangan",
        "Digitalisasi Pelaporan Kas Organisasi",
        "Pelaksanaan Audit Internal Tahunan",
        "Efisiensi Anggaran (Cost Reduction 15%)",
        "Workshop Literasi Finansial Pengurus",
        "Optimalisasi Alokasi Dana Darurat"
      ]
    },
    {
      role: "Koordinator Sponsorship",
      org: "IPB Accounting Competition",
      year: "2022",
      desc: "Memimpin tim divisi sponsorship beranggotakan 8 orang untuk mencari pendanaan acara kompetisi akuntansi tingkat nasional. Berhasil mengamankan dana segar dan in-kind sponsorship secara efisien.",
      programsTitle: "Milestones & Achievements",
      programs: [
        "Negosiasi B2B dengan 20+ Perusahaan",
        "Pencapaian Target Pendanaan 120%",
        "Pembuatan Proposal Partnership Premium",
        "Akuisisi 30+ Media Partner Nasional",
        "Manajemen Kontraprestasi Sponsor",
        "Penyusunan LPJ Keuangan Sponsorship"
      ]
    },
    {
      role: "Ketua OSIS",
      org: "SMA Kosgoro",
      year: "2019 — 2020",
      desc: "Memimpin seluruh jajaran kepengurusan OSIS dan menjadi representasi aspirasi siswa. Berhasil mengeksekusi berbagai program kerja strategis yang melibatkan partisipasi ribuan siswa dan guru.",
      programsTitle: "8 Program Strategis Terealisasi",
      programs: [
        "Pensi Tahunan 'Kosgoro Festival'",
        "Latihan Dasar Kepemimpinan Siswa (LDKS)",
        "Bakti Sosial & Donor Darah Massal",
        "Pekan Olahraga & Class Meeting",
        "Seminar Kewirausahaan Pemuda",
        "Gerakan Literasi & Bedah Buku",
        "Perayaan Hari Besar Nasional (PHBN)",
        "Demokrasi Pemilihan Ketua OSIS Baru"
      ]
    }
  ];

  return (
    <section id="pengalaman" className="py-32 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-base-100/50"></div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-base-100/40">Histori Perjalanan</h2>
            </div>
            <h3 className="font-display text-5xl md:text-[6rem] leading-[0.9] font-bold text-base-50 tracking-tighter">
              REKAM <br/> <span className="text-base-100/40">JEJAK.</span>
            </h3>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 pb-2 md:text-right"
          >
             <p className="text-base-100/60 font-light text-xl leading-relaxed max-w-xl md:ml-auto">
              Bukti nyata dari komitmen, kepemimpinan, dan eksekusi yang presisi dalam setiap tanggung jawab yang diberikan.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-base-800">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group hover:bg-base-800/20 transition-colors ${i !== experiences.length - 1 ? 'border-b border-base-800' : ''}`}
            >
              {/* Year Column */}
              <div className="lg:col-span-3 flex items-start">
                <span className="font-display text-4xl text-base-100/30 font-bold group-hover:text-base-50 transition-colors duration-500 tracking-tighter">
                  {exp.year}
                </span>
              </div>
              
              {/* Role & Desc Column */}
              <div className="lg:col-span-4">
                <h4 className="font-display text-3xl md:text-4xl font-bold text-base-50 mb-4 tracking-tight group-hover:text-outline transition-all duration-500">{exp.role}</h4>
                <p className="text-xs tracking-widest uppercase font-bold text-base-100/50 mb-6">{exp.org}</p>
                <p className="text-base-100/70 font-light text-lg leading-relaxed">{exp.desc}</p>
              </div>
              
              {/* Programs/Achievements Column */}
              <div className="lg:col-span-5">
                {exp.programs && (
                  <div className="bg-base-800/30 rounded-2xl p-6 md:p-8 border border-base-800 h-full">
                    <h5 className="text-xs font-bold tracking-widest uppercase text-base-100/40 mb-6 border-b border-base-800 pb-4">
                      {exp.programsTitle}
                    </h5>
                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                      {exp.programs.map((prog, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-base-50 mt-1">✦</span>
                          <span className="text-base-100/70 font-light text-sm">{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
