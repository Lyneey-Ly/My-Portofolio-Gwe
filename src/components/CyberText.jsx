import React, { useState, useEffect, useRef } from 'react';

export default function CyberText({ text, className = "" }) {
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+{}|<>?:ΩΨΞΔ";
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);

  const triggerDecoder = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "; 
            if (index < iterations) {
              return text[index];
            }
            return matrixChars[Math.floor(Math.random() * matrixChars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        isAnimating.current = false;
      }
      iterations += 1 / 2;
    }, 40);
  };

  useEffect(() => {
    triggerDecoder();
  }, [text]);

  return (
    <>
      <style>{`
        .cyber-glitch {
          position: relative;
          animation: glitch-skew 4s infinite linear alternate-reverse;
        }
        .cyber-glitch::before {
          content: attr(data-text);
          position: absolute;
          top: 0; left: -2px;
          width: 100%; height: 100%;
          background: transparent;
          text-shadow: 2px 0 #00ffff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .cyber-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 2px;
          width: 100%; height: 100%;
          background: transparent;
          text-shadow: -2px 0 #ff007f;
          clip: rect(85px, 450px, 140px, 0);
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          10% { clip: rect(112px, 9999px, 76px, 0); }
          20% { clip: rect(85px, 9999px, 5px, 0); }
          30% { clip: rect(27px, 9999px, 115px, 0); }
          40% { clip: rect(73px, 9999px, 29px, 0); }
          50% { clip: rect(118px, 9999px, 142px, 0); }
          60% { clip: rect(18px, 9999px, 93px, 0); }
          70% { clip: rect(43px, 9999px, 57px, 0); }
          80% { clip: rect(131px, 9999px, 84px, 0); }
          90% { clip: rect(91px, 9999px, 111px, 0); }
          100% { clip: rect(58px, 9999px, 19px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(76px, 9999px, 116px, 0); }
          11% { clip: rect(22px, 9999px, 67px, 0); }
          22% { clip: rect(121px, 9999px, 43px, 0); }
          33% { clip: rect(5px, 9999px, 131px, 0); }
          44% { clip: rect(98px, 9999px, 14px, 0); }
          55% { clip: rect(45px, 9999px, 88px, 0); }
          66% { clip: rect(138px, 9999px, 2px, 0); }
          77% { clip: rect(19px, 9999px, 120px, 0); }
          88% { clip: rect(63px, 9999px, 55px, 0); }
          100% { clip: rect(104px, 9999px, 91px, 0); }
        }
        @keyframes glitch-skew {
          0% { transform: skew(1deg); }
          10% { transform: skew(-1deg); }
          20% { transform: skew(0deg); }
          100% { transform: skew(0deg); }
        }
      `}</style>

      <span 
        onMouseEnter={triggerDecoder}
        data-text={displayText}
        className={`cyber-glitch inline-block cursor-pointer select-none transition-all duration-200 ${className}`}
      >
        {displayText}
      </span>
    </>
  );
}