export declare const usePageTracking: () => void;
export declare const useEngagementTracking: () => void;
export declare const useAnalytics: () => {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
    trackPageView: (path: string, title?: string) => void;
    trackUserEngagement: (engagementTimeMs: number) => void;
};
//# sourceMappingURL=useAnalytics.d.ts.map