import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-[#DC2626] rounded-xl flex items-center justify-center shadow-md">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 7s7-3 7-7c0-4-3-7-7-7z" />
          <path d="M12 16v4M8 20h8M15 14l2 3M9 14l-2 3" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] md:text-xs font-black text-slate-950 tracking-tighter leading-none uppercase">TRAVEL HUB</span>
        <span className="text-[6px] font-bold text-slate-500 tracking-[0.2em] uppercase">Sri Lanka</span>
      </div>
    </div>
  );
};

export default Logo;
