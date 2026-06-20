import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nama */}
        <h1 className="text-xl font-bold text-emerald-400 tracking-wider font-mono">
          KAHFI.DEV
        </h1>
        
        {/* Menu Navigasi */}
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}