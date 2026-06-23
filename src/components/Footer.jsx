import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-base-900 border-t border-base-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-2xl font-bold tracking-tight text-base-50">
          K.
        </div>
        
        <div className="text-xs uppercase tracking-widest font-bold text-base-100/40 text-center md:text-left">
          &copy; {new Date().getFullYear()} NAMA. ALL RIGHTS RESERVED.
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-widest font-bold text-base-100/40">
          <a href="#" className="hover:text-base-50 transition-colors">TWITTER</a>
          <a href="#" className="hover:text-base-50 transition-colors">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
