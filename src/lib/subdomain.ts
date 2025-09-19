/**
 * Subdomain utility module for React frontend
 * 
 * This module provides functions to determine which subdomain
 * the application is running on, enabling subdomain-specific behavior
 * throughout the React application.
 */

// Configurable subdomain names as static variables
export const SUBDOMAIN_NAMES = {
  BRAGVAULT: 'bragvault',
  SKILLVAULT: 'skillvault',
  MAIN: 'app'
} as const;

export type SubdomainName = typeof SUBDOMAIN_NAMES[keyof typeof SUBDOMAIN_NAMES];

/**
 * Extract the subdomain from the current window location
 * 
 * @returns The subdomain (e.g., 'bragvault', 'skillvault') or null if no subdomain
 */
export function getSubdomain(): string | null {
  const hostname = window.location.hostname.toLowerCase();
  
  // Handle IP addresses - no subdomains for IPs
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return null;
  }
  
  // Extract subdomain from hostname
  // Pattern: subdomain.domain.com or subdomain.domain.com:port
  const parts = hostname.split('.');
  
  // If we have at least 3 parts (subdomain.domain.tld) or 2 parts with port
  if (parts.length >= 3) {
    const subdomain = parts[0];
    // Skip common non-subdomain parts
    if (!['www', 'mail', 'ftp', 'smtp', 'pop', 'imap'].includes(subdomain)) {
      return subdomain;
    }
  } else if (parts.length === 2 && hostname.includes(':')) {
    // Handle case like domain.com:port
    return null;
  }
  
  return null;
}

/**
 * Check if the current request is on a specific subdomain
 * 
 * @param subdomainName The subdomain to check for
 * @returns True if the request is on the specified subdomain
 */
export function isSubdomain(subdomainName: string): boolean {
  const currentSubdomain = getSubdomain();
  return currentSubdomain === subdomainName.toLowerCase();
}

/**
 * Check if the current request is on the bragvault subdomain
 * 
 * @returns True if the request is on the bragvault subdomain
 */
export function isBragvaultSubdomain(): boolean {
  return isSubdomain(SUBDOMAIN_NAMES.BRAGVAULT);
}

/**
 * Check if the current request is on the skillvault subdomain
 * 
 * @returns True if the request is on the skillvault subdomain
 */
export function isSkillvaultSubdomain(): boolean {
  return isSubdomain(SUBDOMAIN_NAMES.SKILLVAULT);
}

/**
 * Check if the current request is on the main app subdomain
 * 
 * @returns True if the request is on the main subdomain or no subdomain
 */
export function isMainSubdomain(): boolean {
  const subdomain = getSubdomain();
  return subdomain === null || subdomain === SUBDOMAIN_NAMES.MAIN;
}

/**
 * Get subdomain-specific configuration based on the current subdomain
 * 
 * @returns Configuration specific to the current subdomain
 */
export function getSubdomainConfig() {
  const subdomain = getSubdomain();
  
  // Default configuration for main app
  const config = {
    name: 'main',
    title: 'Hi5 Candidate Scan',
    theme: 'default',
    features: ['cv_scan', 'upwork_integration', 'profile_management'],
    allowed_roles: ['user', 'admin'],
    api_rate_limit: 100,
    session_timeout: 3600
  };
  
  if (isBragvaultSubdomain()) {
    return {
      ...config,
      name: SUBDOMAIN_NAMES.BRAGVAULT,
      title: 'Hi5 Brag Vault',
      theme: 'bragvault',
      features: ['achievement_tracking', 'portfolio_management', 'social_sharing'],
      allowed_roles: ['user', 'admin'],
      api_rate_limit: 200,
      session_timeout: 3600
    };
  } else if (isSkillvaultSubdomain()) {
    return {
      ...config,
      name: SUBDOMAIN_NAMES.SKILLVAULT,
      title: 'Hi5 Skill Vault',
      theme: 'skillvault',
      features: ['skill_assessment', 'learning_paths', 'certification_tracking'],
      allowed_roles: ['user', 'admin'],
      api_rate_limit: 200,
      session_timeout: 3600
    };
  }
  
  return config;
}

/**
 * Get comprehensive domain information including subdomain, domain, and full host
 * 
 * @returns Dictionary containing domain information
 */
export function getDomainInfo() {
  const hostname = window.location.hostname.toLowerCase();
  const port = window.location.port;
  
  // Handle localhost development
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1');
  
  const subdomain = getSubdomain();
  
  // Extract base domain
  let domain = null;
  const parts = hostname.split('.');
  if (parts.length >= 2) {
    // Remove subdomain and port if present
    const domainParts = subdomain ? parts.slice(1) : parts;
    domain = domainParts.join('.').split(':')[0];
  }
  
  return {
    subdomain,
    domain,
    host: hostname,
    isLocalhost,
    port
  };
} 