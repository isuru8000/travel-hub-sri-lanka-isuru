import { useEffect } from 'react';
import ReactGA from 'react-ga4';

interface GoogleAnalyticsProps {
  view: string;
}

const GoogleAnalytics = ({ view }: GoogleAnalyticsProps) => {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (measurementId) {
      // Initialize GA4
      ReactGA.initialize(measurementId);
      
      // Send initial pageview
      ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
    }
  }, []);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (measurementId) {
      // Send pageview on view change
      // We map the 'view' state to a virtual path for better tracking
      const path = view === 'home' ? '/' : `/${view}`;
      ReactGA.send({ hitType: "pageview", page: path, title: view });
    }
  }, [view]);

  return null;
};

export default GoogleAnalytics;
