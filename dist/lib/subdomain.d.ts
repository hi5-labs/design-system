/**
 * Subdomain utility module for React frontend
 *
 * This module provides functions to determine which subdomain
 * the application is running on, enabling subdomain-specific behavior
 * throughout the React application.
 */
export declare const SUBDOMAIN_NAMES: {
    readonly BRAGVAULT: "bragvault";
    readonly SKILLVAULT: "skillvault";
    readonly MAIN: "app";
};
export type SubdomainName = typeof SUBDOMAIN_NAMES[keyof typeof SUBDOMAIN_NAMES];
/**
 * Extract the subdomain from the current window location
 *
 * @returns The subdomain (e.g., 'bragvault', 'skillvault') or null if no subdomain
 */
export declare function getSubdomain(): string | null;
/**
 * Check if the current request is on a specific subdomain
 *
 * @param subdomainName The subdomain to check for
 * @returns True if the request is on the specified subdomain
 */
export declare function isSubdomain(subdomainName: string): boolean;
/**
 * Check if the current request is on the bragvault subdomain
 *
 * @returns True if the request is on the bragvault subdomain
 */
export declare function isBragvaultSubdomain(): boolean;
/**
 * Check if the current request is on the skillvault subdomain
 *
 * @returns True if the request is on the skillvault subdomain
 */
export declare function isSkillvaultSubdomain(): boolean;
/**
 * Check if the current request is on the main app subdomain
 *
 * @returns True if the request is on the main subdomain or no subdomain
 */
export declare function isMainSubdomain(): boolean;
/**
 * Get subdomain-specific configuration based on the current subdomain
 *
 * @returns Configuration specific to the current subdomain
 */
export declare function getSubdomainConfig(): {
    name: string;
    title: string;
    theme: string;
    features: string[];
    allowed_roles: string[];
    api_rate_limit: number;
    session_timeout: number;
};
/**
 * Get comprehensive domain information including subdomain, domain, and full host
 *
 * @returns Dictionary containing domain information
 */
export declare function getDomainInfo(): {
    subdomain: string | null;
    domain: string | null;
    host: string;
    isLocalhost: boolean;
    port: string;
};
//# sourceMappingURL=subdomain.d.ts.map