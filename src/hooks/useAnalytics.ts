import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent, trackUserEngagement } from '@/lib/analytics';

// Hook for automatic page view tracking
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
};

// Hook for user engagement tracking
export const useEngagementTracking = () => {
  useEffect(() => {
    let startTime = Date.now();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const engagementTime = Date.now() - startTime;
        trackUserEngagement(engagementTime);
      } else {
        startTime = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      const engagementTime = Date.now() - startTime;
      trackUserEngagement(engagementTime);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

// Custom hook for analytics events
export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView,
    trackUserEngagement,
  };
}; 