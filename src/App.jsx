import React, { useState } from 'react';
import Home from './sections/Home';
import Partofolio from './sections/Portofolio';
import Contact from './sections/Contact'; // Import halaman contact baru

export default function App() {
  // State melacak 3 halaman aktif: 'home', 'portfolio', atau 'contact'
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="bg-[#11051f] min-h-screen text-white overflow-hidden relative selection:bg-pink-500 selection:text-white">
      
      {/* --- TOMBOL NAVIGASI MELAYANG (FIXED) --- */}
      <div className="fixed top-6 right-6 z-50 bg-[#21093a]/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex gap-1 md:gap-2 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
        <button 
          onClick={() => setActivePage('home')}
          className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 ${
            activePage === 'home' 
              ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-[0_0_15px_rgba(236,72,153,0.6)] scale-105' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          PROFILE
        </button>
        <button 
          onClick={() => setActivePage('portfolio')}
          className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 ${
            activePage === 'portfolio' 
              ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-[0_0_15px_rgba(236,72,153,0.6)] scale-105' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          PORTFOLIO
        </button>
        <button 
          onClick={() => setActivePage('contact')}
          className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 ${
            activePage === 'contact' 
              ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-[0_0_15px_rgba(236,72,153,0.6)] scale-105' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          CONTACT
        </button>
      </div>

      {/* --- CONTAINER UTAMA STRUKTUR SLIDE (300vw) --- */}
      <div 
        className="flex w-[300vw] h-screen transition-transform duration-700 ease-in-out will-change-transform"
        style={{
          // Logika pergeseran koordinat horizontal untuk 3 halaman berdampingan
          transform: activePage === 'home' 
            ? 'translateX(0%)' 
            : activePage === 'portfolio' 
              ? 'translateX(-33.3333%)' 
              : 'translateX(-66.6666%)'
        }}
      >
        
        {/* HALAMAN 1: PROFILE */}
        <div className="w-[100vw] h-screen overflow-y-auto shrink-0 custom-scrollbar">
          <Home />
        </div>

        {/* HALAMAN 2: PORTFOLIO */}
        <div className="w-[100vw] h-screen overflow-y-auto shrink-0 custom-scrollbar">
          <Partofolio />
        </div>

        {/* HALAMAN 3: CONTACT */}
        <div className="w-[100vw] h-screen overflow-y-auto shrink-0 custom-scrollbar">
          <Contact />
        </div>

      </div>

      {/* INDIKATOR NAVIGASI INDIKATIF BAWAH (3 TITIK SEJAJAR) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        <div className={`w-8 h-1 rounded-full transition-all duration-300 ${activePage === 'home' ? 'bg-pink-500 shadow-[0_0_8px_#ec4899]' : 'bg-white/20'}`}></div>
        <div className={`w-8 h-1 rounded-full transition-all duration-300 ${activePage === 'portfolio' ? 'bg-pink-500 shadow-[0_0_8px_#ec4899]' : 'bg-white/20'}`}></div>
        <div className={`w-8 h-1 rounded-full transition-all duration-300 ${activePage === 'contact' ? 'bg-pink-500 shadow-[0_0_8px_#ec4899]' : 'bg-white/20'}`}></div>
      </div>

    </div>
  );
}