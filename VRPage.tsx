import React, { useEffect, useRef } from 'react';
import 'pannellum/build/pannellum.css';
import 'pannellum/build/pannellum.js';

interface VRPageProps {
  panoramaUrl: string;
  title: string;
}

const VRPage: React.FC<VRPageProps> = ({ panoramaUrl, title }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerRef.current && (window as any).pannellum) {
      (window as any).pannellum.viewer(viewerRef.current, {
        type: 'equirectangular',
        panorama: panoramaUrl,
        autoLoad: true,
        showControls: true,
        title: title,
      });
    }
  }, [panoramaUrl, title]);

  return (
    <div className="w-full h-full">
      <div ref={viewerRef} className="w-full h-full rounded-3xl overflow-hidden" />
    </div>
  );
};

export default VRPage;
