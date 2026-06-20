import React from 'react';
import meImg from '../assets/me.png'; 
import amImg from '../assets/am.png'; 
import cssImg from '../assets/css.png';
import htmlImg from '../assets/html.png';
import jsImg from '../assets/js.png';
import laravelImg from '../assets/laravel.png';
import phpImg from '../assets/php.png';
import reactImg from '../assets/react.png';
import tailwindImg from '../assets/tailwind.png';
import viscodImg from '../assets/viscod.png';
import imImg from '../assets/im.jpeg';
import githubImg from '../assets/githubb.jpg';     
import linkedinImg from '../assets/linkedin.jpg';   
import igImg from '../assets/ig.jpg'; 
import CyberText from '../components/CyberText'; 
import { MatrixRainMini } from '../components/MatrixRainMini'; 
import mypdf from '../assets/cv.pdf'; 









export default function Home() {
  const techTools = [
    { src: viscodImg, alt: 'VSCode' },
    { src: laravelImg, alt: 'Laravel' },
    { src: reactImg, alt: 'React' },
    { src: tailwindImg, alt: 'Tailwind' },
    { src: phpImg, alt: 'PHP' },
    { src: jsImg, alt: 'JS' },
  ];

  const socialMedia = [
  { 
    name: 'GitHub', 
    src: githubImg, 
    link: 'https://github.com/Lyneey-Ly'
  },
  { 
    name: 'LinkedIn', 
    src: linkedinImg, 
    link: 'https://linkedin.com/in/kahfi-ilhamfirmansyah-a95b19413'
  },
  { 
    name: 'Instagram', 
    src: igImg, 
    link: 'https://instagram.com/khfii_14/' 
  },
];

  
  

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#11051f] text-white flex justify-center items-center font-sans p-4 md:p-8 overflow-y-auto select-none py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0b44] via-[#11051f] to-[#3a0b33] opacity-80 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>


      <div className="absolute top-[80%] left-[1%] w-12 h-12 md:w-14 md:h-14 opacity-25 hover:opacity-70 transition-opacity duration-300 animate-float-slow z-0">
        <img src={laravelImg} alt="Laravel" className="w-full h-full object-contain pointer-events-none" />
      </div>

      <div className="relative w-full max-w-5xl z-10 flex flex-col gap-8">
        
        <header className="flex justify-between items-end border-b border-dashed border-white/40 pb-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
             <CyberText text="KAHFI" />
            </h1>
            <p className="text-sm md:text-base tracking-[0.3em] mt-1 text-gray-200">
            <CyberText text="PORTOFOLIO" />
            </p>
          </div>
          <div className="text-right text-xs md:text-sm font-medium tracking-wide space-y-1">
            <p>Kahfi Ilham Firmansyah</p>
            <p>Kota Sukabumi</p>
            <p>14-12-2008</p>
          </div>
        </header>

        {/* TOP ROW: About/Social + Profile Pic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kolom Kiri: About & Social */}
          <div className="md:col-span-2 border border-dashed border-white/40 rounded-2xl p-4 md:p-6 bg-[#21093a]/40 backdrop-blur-sm flex flex-col justify-between gap-6">
            
            {/* About Me */}
            <div>
              <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-3">
                About Me
              </span>
              <div className="bg-[#10041d]/80 rounded-xl p-4 md:p-5 border border-white/5">
                <p className="text-sm md:text-base leading-relaxed text-gray-200">
                    Seorang pengembang perangkat lunak yang
                    adaptif dan berorientasi pada solusi. Memiliki
                    fondasi teknis yang kuat serta komitmen tinggi
                    untuk terus berkembang mengikuti tren teknologi
                    terbaru. Mampu bekerja secara kolaboratif dalam
                    tim maupun mandiri, saya siap berkontribusi aktif
                    dan menghadapi tantangan dinamis di industri
                    teknologi profesional
                </p>
              </div>
            </div>

<div>
  <CyberText text="Connect" className="inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-3" />
  
  <div className="flex items-center gap-6">
    
    <div className="flex gap-3">
      {socialMedia.map((social, i) => (
        <a 
          key={i} 
          href={social.link}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center border border-white/20 shadow-[0_0_10px_rgba(99,102,241,0.5)] cursor-pointer hover:scale-110 hover:border-pink-400 transition-all duration-300 p-2"
          title={social.name}
        >
          <img 
            src={social.src} 
            alt={social.name} 
            className="w-full h-full object-contain filter brightness-100" 
          />
        </a>
      ))}

   <a
  href={mypdf} 
  target="_blank"
  rel="noopener noreferrer"
  className="ml-3 inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-[0_0_10px_rgba(236,72,153,0.5)] cursor-pointer hover:scale-105 hover:from-pink-600 hover:to-pink-700 hover:border-pink-400 transition-all duration-300"
>
  Lihat CV
</a>
    </div>
    
    <div className="flex-grow flex justify-end">
       <div className="w-20 h-20 bg-white p-0.5 rounded-xl flex items-center justify-center relative overflow-hidden group hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-shadow">
          <div className="absolute inset-0 z-0 opacity-40">
             <MatrixRainMini />
          </div>

         <div className="w-full h-full border-4 border-dashed border-black/80 rounded-lg flex items-center justify-center relative z-10 transition-colors group-hover:border-[#ec4899]">
            <span className="text-black group-hover:text-[#ec4899] font-black text-xl transition-colors">us</span>
         </div>
       </div>
    </div>
  </div>
</div>
          </div>

          {/* Kolom Kanan: Profile Image */}
          <div className="border border-dashed border-white/40 rounded-2xl p-4 flex items-center justify-center bg-[#21093a]/40 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-4 bg-gradient-to-b from-pink-400 to-pink-500 rounded-xl z-0"></div>
            <img 
              src={imImg} 
              alt="Kahfi" 
              className="relative z-10 w-full h-auto object-cover filter contrast-125 saturate-110 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* MIDDLE ROW: Plans & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-dashed border-white/40 rounded-2xl p-4 md:p-6 bg-[#21093a]/40 backdrop-blur-sm">
          {/* Projects & Plans */}
          <div>
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)] mb-4">
              Current Focus & Plans
            </span>
            <ul className="space-y-2.5 text-sm md:text-base text-gray-200">
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> PKL Inovindo</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> Learning React & Tailwind</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> Desktop & Game Automation Logic</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> API Integration & UI Optimization</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)] mb-4">
              Core Skills
            </span>
            <ul className="space-y-2.5 text-sm md:text-base text-gray-200">
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> Laravel & PHP Backend</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> ReactJS, Axios & Tailwind CSS</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> C# (Game Logic & Desktop Development)</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400 text-lg">✦</span> Html, Css, Javascript</li>
            </ul>
          </div>
        </div>

       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hobbies */}
          <div className="border border-dashed border-white/40 rounded-2xl p-4 md:p-6 bg-[#21093a]/40 backdrop-blur-sm flex flex-col justify-center">
            <span className="inline-block self-start bg-gradient-to-r from-pink-600 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(219,39,119,0.5)] mb-4">
              Hobbies
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               
               <div className="bg-[#10041d]/80 border border-white/5 p-3 rounded-xl flex items-start gap-3 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300 group cursor-default">
                 <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all border border-pink-500/30">
                   <span className="text-xl">🏐</span>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-pink-300">Volly</h4>
                   <p className="text-[10px] md:text-xs text-gray-300 leading-tight mt-1">Berolahraga aktif untuk menjaga kebugaran fisik dan melatih ketangkasan.</p>
                 </div>
               </div>

               <div className="bg-[#10041d]/80 border border-white/5 p-3 rounded-xl flex items-start gap-3 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300 group cursor-default">
                 <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all border border-pink-500/30">
                   <span className="text-xl">
                    <img src={amImg} /> 
                   </span>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-pink-300">Editing</h4>
                   <p className="text-[10px] md:text-xs text-gray-300 leading-tight mt-1">Menguasai teknik teknik editing video dan foto dengan baik.</p>
                 </div>
               </div>

               <div className="bg-[#10041d]/80 border border-white/5 p-3 rounded-xl flex items-start gap-3 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300 group cursor-default">
                 <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all border border-pink-500/30">
                   <span className="text-xl">🎨</span>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-pink-300">Menggambar</h4>
                   <p className="text-[10px] md:text-xs text-gray-300 leading-tight mt-1">Mengekspresikan kreativitas dan ide-ide imajinatif melalui seni visual.</p>
                 </div>
               </div>

               <div className="bg-[#10041d]/80 border border-white/5 p-3 rounded-xl flex items-start gap-3 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300 group cursor-default">
                 <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all border border-pink-500/30">
                   <span className="text-xl">🎮</span>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-pink-300">Bermain Game</h4>
                   <p className="text-[10px] md:text-xs text-gray-300 leading-tight mt-1">Mengeksplorasi permainan yang sekaligus menginspirasi pembuatan logika game.</p>
                 </div>
               </div>

            </div>
          </div>  

          {/* Tools */}
          <div className="border border-dashed border-white/40 rounded-2xl p-4 md:p-6 bg-[#21093a]/40 backdrop-blur-sm flex flex-col justify-center">
            <span className="inline-block self-start bg-gradient-to-r from-pink-600 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(219,39,119,0.5)] mb-4">
              Tools & Stack
            </span>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 w-full">
           {techTools.map((tool, idx) => (
             <div 
               key={idx} 
               className="aspect-square bg-[#10041d] border border-white/10 rounded-lg p-2 shadow-lg hover:border-pink-500 transition-all duration-300 flex items-center justify-center group" 
               title={tool.alt}
             >
               <img src={tool.src} alt={tool.alt} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
             </div>
           ))}
           
           <div className="aspect-square bg-yellow-400 border border-white/10 rounded-lg p-2 shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
               <span className="text-black font-black text-xs sm:text-sm tracking-tighter">HTML</span>
           </div>
        </div>
      
          </div>
        </div>

      </div>
    </section>
  );
}