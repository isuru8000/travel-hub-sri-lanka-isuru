import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Hub Symbol: Central node with network connections */}
        <circle cx="50" cy="50" r="12" fill="url(#hubGrad)" />
        {/* Connection points */}
        <circle cx="50" cy="15" r="5" fill="url(#hubGrad)" />
        <circle cx="50" cy="85" r="5" fill="url(#hubGrad)" />
        <circle cx="15" cy="50" r="5" fill="url(#hubGrad)" />
        <circle cx="85" cy="50" r="5" fill="url(#hubGrad)" />
        {/* Lines */}
        <path d="M 50 22 L 50 38 M 50 62 L 50 78 M 22 50 L 38 50 M 62 50 L 78 50" stroke="url(#hubGrad)" strokeWidth="6" strokeLinecap="round" />
        {/* Compass Needle */}
        <path d="M 50 40 L 54 50 L 50 60 L 46 50 Z" fill="white" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] md:text-xs font-black text-slate-950 tracking-tighter leading-none uppercase">TRAVEL HUB</span>
        <span className="text-[6px] font-bold text-slate-500 tracking-[0.2em] uppercase">Sri Lanka</span>
      </div>
    </div>
  );
};

export default Logo;
