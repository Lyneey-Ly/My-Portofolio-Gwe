import React, { useEffect, useRef } from 'react';

export function MatrixRainMini() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = 120;

    const columns = Math.floor(canvas.width / 12);
    const drops = Array(columns).fill(1);
    const chars = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ⚡✦";

    let animationFrameId;

    const draw = () => {
      ctx.fillStyle = 'rgba(17, 5, 31, 0.08)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ec4899';
      ctx.font = '9px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 12, drops[i] * 12);
        
        if (drops[i] * 12 > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[120px] rounded-xl opacity-40 pointer-events-none block" />;
}