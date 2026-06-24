import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-24 pb-8 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section: 4 Columns Layout matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:pr-8">
            <a href="#" className="font-display text-3xl font-bold tracking-tight text-base-50 mb-6 inline-block hover:text-base-100/70 transition-colors">
              FAWWAZ.
            </a>
            <p className="text-base-100/60 font-light text-sm leading-relaxed font-sans">
              Memadukan ketajaman analisis data dengan integritas audit untuk menerjemahkan kompleksitas keuangan menjadi keputusan strategis yang berkelanjutan.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-base-50 mb-8 font-sans">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-5">
              <li><a href="#tentang" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Profil Singkat</a></li>
              <li><a href="#keahlian" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Keahlian</a></li>
              <li><a href="#proyek" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Portofolio</a></li>
              <li><a href="#pengalaman" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Rekam Jejak</a></li>
              <li><a href="#kontak" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Hubungi Saya</a></li>
            </ul>
          </div>

          {/* Column 3: Specialization (Layanan) */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-base-50 mb-8 font-sans">
              Spesialisasi
            </h4>
            <ul className="flex flex-col gap-5">
              <li><a href="#" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Financial Accounting</a></li>
              <li><a href="#" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Audit & Assurance</a></li>
              <li><a href="#" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Corporate Taxation</a></li>
              <li><a href="#" className="text-base-100/60 hover:text-base-50 transition-colors duration-300 font-medium text-sm font-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-base-50 transition-all duration-300"></span>Data Analytics (BI)</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-base-50 mb-8 font-sans">
              Kontak
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-base-100/60 hover:text-base-50 transition-colors duration-300 group cursor-default">
                <FaMapMarkerAlt className="text-lg mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium text-sm font-sans leading-relaxed">
                  Jl. Raya Pajajaran, Kota Bogor,<br />Jawa Barat, Indonesia
                </span>
              </li>
              <li>
                <a href="mailto:hello@fawwaz.id" className="flex items-center gap-4 text-base-100/60 hover:text-base-50 transition-colors duration-300 group">
                  <FaEnvelope className="text-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium text-sm font-sans">hello@fawwaz.id</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-base-100/60 hover:text-base-50 transition-colors duration-300 group">
                  <FaLinkedin className="text-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium text-sm font-sans">Fawwaz Alwan</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-base-800 pt-8 flex justify-center items-center">
          <div className="text-xs font-bold tracking-[0.1em] text-base-100/40 font-sans">
            &copy; {new Date().getFullYear()} FAWWAZ ALWAN. Hak Cipta Dilindungi.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
