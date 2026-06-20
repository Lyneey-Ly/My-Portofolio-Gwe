import React, { useState } from 'react';
import CyberText from '../components/CyberText'; 


export default function Contact() {
  // State untuk menangkap input data formulir
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // GANTI nomor di bawah ini dengan nomor WhatsApp kamu (awali dengan kode negara, contoh: 628xxx)
    const whatsappNumber = "6281234567890"; 
    
    // Format pesan otomatis yang akan dikirim ke WhatsApp
    const textMessage = `Halo Kahfi, saya pengunjung website portofoliomu!\n\n` +
                        `*Nama:* ${formData.name}\n` +
                        `*Email/Kontak:* ${formData.email}\n\n` +
                        `*Pesan:* \n${formData.message}`;
    
    // Encode teks agar aman digunakan sebagai URL parameter
    const encodedText = encodeURIComponent(textMessage);
    
    // Buka tautan WhatsApp di tab baru
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-[#11051f] text-white flex justify-center items-center font-sans p-4 md:p-8 overflow-hidden select-none py-20"
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
      <div className="relative w-full max-w-xl z-10 flex flex-col gap-6">
        
        {/* HEADER HALAMAN CONTACT */}
        <header className="flex justify-between items-end border-b border-dashed border-white/40 pb-4">
          <div>
            <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(236,72,153,0.5)] mb-2">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
               <CyberText text="Contact Me" />
            </h1>
          </div>
          <div className="text-right text-xs font-mono text-gray-400 tracking-wider hidden sm:block">
            <p>SECURE_LINE // CH.03</p>
          </div>
        </header>

        {/* CYBERPUNK FORM BLOCK */}
        <div className="border border-dashed border-white/40 rounded-2xl p-6 bg-[#21093a]/40 backdrop-blur-sm shadow-[0_0_30px_rgba(33,9,58,0.5)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Field Nama */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold">
                [01] Your Name
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda..."
                className="w-full bg-[#10041d]/90 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
              />
            </div>

            {/* Field Email / Kontak */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold">
                [02] Email or Phone Number
              </label>
              <input 
                type="text" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email atau nomor HP..."
                className="w-full bg-[#10041d]/90 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
              />
            </div>

            {/* Field Pesan */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold">
                [03] Transmission Message
              </label>
              <textarea 
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full bg-[#10041d]/90 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Tombol Submit Glowing */}
            <button 
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-pink-600 to-pink-500 border border-pink-400/30 text-white font-black tracking-widest text-xs py-3.5 rounded-xl uppercase shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>SEND TO WHATSAPP</span>
              <span className="text-sm">⚡</span>
            </button>

          </form>
        </div>

        {/* FOOTER ACCENT */}
        <footer className="text-center text-[10px] font-mono text-gray-500 tracking-widest uppercase">
          ✦ ENC_KEY_CONNECTED // READY TO SEND ✦
        </footer>

      </div>
    </section>
  );
}