// Mock import.meta.env for Jest
// https://stackoverflow.com/questions/72128718/test-suite-failed-to-run-import-meta-env-vite
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_GA_MEASUREMENT_ID: 'test-measurement-id',
        VITE_BUGSNAG_API_KEY: 'test-bugsnag-key',
        VITE_ENV: 'test',
        VITE_APP_VERSION: '1.0.0',
      }
    }
  },
  configurable: true,
});

const {
  getSubdomain,
  isSubdomain,
  isBragvaultSubdomain,
  isSkillvaultSubdomain,
  isMainSubdomain,
  getSubdomainConfig,
  getDomainInfo,
  SUBDOMAIN_NAMES
} = require('../subdomain');

// Mock window.location
const mockLocation = (hostname, port = '') => {
  Object.defineProperty(window, 'location', {
    value: {
      hostname,
      port,
      href: `http://${hostname}${port ? ':' + port : ''}`
    },
    writable: true
  });
};

describe('Subdomain Utilities', () => {
  describe('SUBDOMAIN_NAMES', () => {
    it('exports the correct subdomain names', () => {
      expect(SUBDOMAIN_NAMES.BRAGVAULT).toBe('bragvault');
      expect(SUBDOMAIN_NAMES.SKILLVAULT).toBe('skillvault');
      expect(SUBDOMAIN_NAMES.MAIN).toBe('app');
    });
  });

  describe('getSubdomain', () => {
    describe('localhost development', () => {
      it('returns null for localhost:3000', () => {
        mockLocation('localhost', '3000');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for localhost without port', () => {
        mockLocation('localhost');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for 127.0.0.1:3000', () => {
        mockLocation('127.0.0.1', '3000');
        expect(getSubdomain()).toBeNull();
      });
    });

    describe('production subdomains', () => {
      it('returns bragvault for bragvault.example.com', () => {
        mockLocation('bragvault.example.com');
        expect(getSubdomain()).toBe('bragvault');
      });

      it('returns skillvault for skillvault.example.com', () => {
        mockLocation('skillvault.example.com');
        expect(getSubdomain()).toBe('skillvault');
      });

      it('returns app for app.example.com', () => {
        mockLocation('app.example.com');
        expect(getSubdomain()).toBe('app');
      });

      it('returns null for example.com', () => {
        mockLocation('example.com');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for www.example.com', () => {
        mockLocation('www.example.com');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for mail.example.com', () => {
        mockLocation('mail.example.com');
        expect(getSubdomain()).toBeNull();
      });

      it('handles case insensitive hostnames', () => {
        mockLocation('BRAGVAULT.EXAMPLE.COM');
        expect(getSubdomain()).toBe('bragvault');
      });
    });

    describe('edge cases', () => {
      it('returns null for empty hostname', () => {
        mockLocation('');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for single part hostname', () => {
        mockLocation('localhost');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for domain with port', () => {
        mockLocation('example.com', '8080');
        expect(getSubdomain()).toBeNull();
      });

      it('returns null for IP addresses', () => {
        mockLocation('192.168.1.1');
        expect(getSubdomain()).toBeNull();
      });
    });
  });

  describe('isSubdomain', () => {
    it('returns true for matching subdomain', () => {
      mockLocation('bragvault.example.com');
      expect(isSubdomain('bragvault')).toBe(true);
    });

    it('returns false for non-matching subdomain', () => {
      mockLocation('bragvault.example.com');
      expect(isSubdomain('skillvault')).toBe(false);
    });

    it('handles case insensitive comparison', () => {
      mockLocation('BRAGVAULT.example.com');
      expect(isSubdomain('bragvault')).toBe(true);
    });
  });

  describe('isBragvaultSubdomain', () => {
    it('returns true for bragvault subdomain', () => {
      mockLocation('bragvault.example.com');
      expect(isBragvaultSubdomain()).toBe(true);
    });

    it('returns false for other subdomains', () => {
      mockLocation('skillvault.example.com');
      expect(isBragvaultSubdomain()).toBe(false);
    });
  });

  describe('isSkillvaultSubdomain', () => {
    it('returns true for skillvault subdomain', () => {
      mockLocation('skillvault.example.com');
      expect(isSkillvaultSubdomain()).toBe(true);
    });

    it('returns false for other subdomains', () => {
      mockLocation('bragvault.example.com');
      expect(isSkillvaultSubdomain()).toBe(false);
    });
  });

  describe('isMainSubdomain', () => {
    it('returns true for main domain without subdomain', () => {
      mockLocation('example.com');
      expect(isMainSubdomain()).toBe(true);
    });

    it('returns true for app subdomain', () => {
      mockLocation('app.example.com');
      expect(isMainSubdomain()).toBe(true);
    });

    it('returns true for localhost without special port', () => {
      mockLocation('localhost', '3000');
      expect(isMainSubdomain()).toBe(true);
    });

    it('returns false for bragvault subdomain', () => {
      mockLocation('bragvault.example.com');
      expect(isMainSubdomain()).toBe(false);
    });

    it('returns false for skillvault subdomain', () => {
      mockLocation('skillvault.example.com');
      expect(isMainSubdomain()).toBe(false);
    });
  });

  describe('getSubdomainConfig', () => {
    describe('main app configuration', () => {
      beforeEach(() => {
        mockLocation('example.com');
      });

      it('returns main app config for main domain', () => {
        const config = getSubdomainConfig();
        expect(config.name).toBe('main');
        expect(config.title).toBe('Hi5 Candidate Scan');
        expect(config.theme).toBe('default');
        expect(config.features).toContain('cv_scan');
        expect(config.features).toContain('upwork_integration');
        expect(config.features).toContain('profile_management');
      });
    });

    describe('bragvault configuration', () => {
      beforeEach(() => {
        mockLocation('bragvault.example.com');
      });

      it('returns bragvault config for bragvault subdomain', () => {
        const config = getSubdomainConfig();
        expect(config.name).toBe('bragvault');
        expect(config.title).toBe('Hi5 Brag Vault');
        expect(config.theme).toBe('bragvault');
        expect(config.features).toContain('achievement_tracking');
        expect(config.features).toContain('portfolio_management');
        expect(config.features).toContain('social_sharing');
      });
    });

    describe('skillvault configuration', () => {
      beforeEach(() => {
        mockLocation('skillvault.example.com');
      });

      it('returns skillvault config for skillvault subdomain', () => {
        const config = getSubdomainConfig();
        expect(config.name).toBe('skillvault');
        expect(config.title).toBe('Hi5 Skill Vault');
        expect(config.theme).toBe('skillvault');
        expect(config.features).toContain('skill_assessment');
        expect(config.features).toContain('learning_paths');
        expect(config.features).toContain('certification_tracking');
      });
    });
  });

  describe('getDomainInfo', () => {
    describe('localhost development', () => {
      beforeEach(() => {
        mockLocation('localhost', '3000');
      });

      it('returns correct domain info for localhost', () => {
        const info = getDomainInfo();
        expect(info.subdomain).toBeNull();
        expect(info.domain).toBeNull();
        expect(info.host).toBe('localhost');
        expect(info.isLocalhost).toBe(true);
        expect(info.port).toBe('3000');
      });
    });

    describe('production subdomain', () => {
      beforeEach(() => {
        mockLocation('bragvault.example.com');
      });

      it('returns correct domain info for production subdomain', () => {
        const info = getDomainInfo();
        expect(info.subdomain).toBe('bragvault');
        expect(info.domain).toBe('example.com');
        expect(info.host).toBe('bragvault.example.com');
        expect(info.isLocalhost).toBe(false);
        expect(info.port).toBe('');
      });
    });

    describe('main domain', () => {
      beforeEach(() => {
        mockLocation('example.com');
      });

      it('returns correct domain info for main domain', () => {
        const info = getDomainInfo();
        expect(info.subdomain).toBeNull();
        expect(info.domain).toBe('example.com');
        expect(info.host).toBe('example.com');
        expect(info.isLocalhost).toBe(false);
        expect(info.port).toBe('');
      });
    });
  });
}); 