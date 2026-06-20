import React from 'react';
import CyberText from '../components/CyberText'; 

export default function Portofolio() {
  // Array data proyek milik Kahfi
  const projectList = [
    {
      title: 'Perpustakaan Kita',
      category: 'Backend & Web App',
      tech: 'Laravel 10 • PHP • Blade',
      desc: 'Sistem katalog perpustakaan digital interaktif untuk manajemen daftar buku, unggah cover image, pelacakan lokasi rak, dan sistem sirkulasi peminjaman.',
      link: 'https://github.com/Lyneey-Ly', // Tambahkan link github/hosting kamu di sini nanti
    },
    {
      title: 'Tingtastu Desktop Game',
      category: 'Game Development',
      tech: 'C# • .NET • Windows Forms',
      desc: 'Game kasual berbasis desktop dengan pengerjaan logika penentuan skor realtime, animasi berbasis objek timer, dan tracking hasil pertandingan.',
      link: 'https://github.com/Lyneey-Ly', // Tambahkan link github/hosting kamu di sini nanti
    },
    {
      title: 'Sistem Integrasi Frontend API',
      category: 'Frontend Development',
      tech: 'ReactJS • Axios • Tailwind CSS',
      desc: 'Aplikasi antarmuka dashboard modern yang mengonsumsi data REST API backend secara asinkronus menggunakan Axios dengan manajemen state terstruktur.',
      link: 'https://github.com/Lyneey-Ly', // Tambahkan link github/hosting kamu di sini nanti
    },
    {
      title: 'Playlist Viral',
      category: 'Web Development',
      tech: 'ReactJS • Tailwind css',
      desc: 'Yang Viral Viral',
      link: 'https://my-playlist-umber.vercel.app/',
    },
    {
      title: 'Responsive Portfolio Template',
      category: 'Frontend Development',
      tech: 'ReactJS • Tailwind CSS',
      desc: 'Desain web portfolio interaktif dengan gaya Retro-Futuristik / Synthwave yang sepenuhnya responsif di semua resolusi perangkat.',
      link: 'https://github.com/Lyneey-Ly', // Tambahkan link github/hosting kamu di sini nanti
    },
    {
      title: 'Peashooter Website Game',
      category: 'Game Development',
      tech: 'JavaScript • Css',
      desc: 'Projek pengenmabangan game 2D yang berfokus pada implementasi OOP menggunakan javascript,Game ini membawa mekanik character Peashooter.',
      link: 'https://lyneey-ly.github.io/temmbak/tembak/' // Link game menembak aktif milikmu!
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="relative min-h-screen bg-[#11051f] text-white flex justify-center items-center font-sans p-4 md:p-8 overflow-hidden select-none py-20"
    >
      {/* --- BACKGROUND GRADIENT & GRID --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0b44] via-[#11051f] to-[#3a0b33] opacity-80 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* --- MAIN CONTAINER --- */}
      <div className="relative w-full max-w-5xl z-10 flex flex-col gap-6">
        
        {/* HEADER HALAMAN PORTFOLIO */}
        <header className="flex justify-between items-end border-b border-dashed border-white/40 pb-4">
          <div>
            <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-2">
              Showcase
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
              <CyberText text="My Projek Guwa" />
            </h1>
          </div>
          <div className="text-right text-xs font-mono text-gray-400 tracking-wider hidden sm:block">
            <p>PROJECTS // COLLECTION.2026</p>
            <p>TOTAL ITEMS: {projectList.length}</p>
          </div>
        </header>

        {/* GALLERY GRID BLOCK */}
        <div className="border border-dashed border-white/40 rounded-2xl p-4 md:p-6 bg-[#21093a]/40 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectList.map((project, idx) => (
              
              /* 1. SEKARANG MENGGUNAKAN TAG <a> SUPAYA BISA DIKLIK */
              <a 
                key={idx} 
                href={project.link || "https://github.com/Lyneey-Ly"} // Jika link kosong, otomatis ke github utama kamu
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#10041d]/90 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left block"
              >
                <div>
                  {/* Atas: Kategori & Nomor Urut */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-pink-400 bg-pink-950/50 px-2 py-0.5 rounded border border-pink-900/50">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-white/20 group-hover:text-pink-500 transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Judul */}
                  <h3 className="text-base font-bold tracking-wide text-white group-hover:text-pink-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-4 group-hover:text-gray-300 transition-colors">
                    {project.desc}
                  </p>
                </div>

                {/* Bawah: Teknologi & Link */}
                <div className="border-t border-white/5 pt-3 mt-2 flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-indigo-300 tracking-wide">
                    {project.tech}
                  </span>
                  
                  {/* Bagian Tombol Peluncur */}
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 group-hover:text-pink-400 transition-colors mt-1">
                    <span>
                      {project.link && project.link.includes('github.io') ? 'PLAY GAME ⚡' : 'LAUNCH PROJECT'}
                    </span>
                    <span className="text-xs transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </div>
                </div>
              </a>

            ))}
          </div>
        </div>

        {/* FOOTER NAV / ACCENT */}
        <footer className="text-center text-[10px] font-mono text-gray-500 tracking-widest uppercase pt-2">
          ✦ Designed by Kahfi • Built with React & Tailwind ✦
        </footer>

      </div>
    </section>
  );
}