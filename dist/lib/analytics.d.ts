declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}
export declare const initGA: (measurementId: string) => void;
export declare const trackPageView: (path: string, title?: string) => void;
export declare const trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
export declare const trackUserEngagement: (engagementTimeMs: number) => void;
export declare const trackFormSubmission: (formName: string, success: boolean) => void;
export declare const trackFileUpload: (fileType: string, fileSize: number) => void;
export declare const trackScanRequest: (platform: string, resourceId: string) => void;
export declare const trackScanResult: (platform: string, score: number) => void;
//# sourceMappingURL=analytics.d.ts.map