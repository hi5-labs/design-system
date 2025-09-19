interface UserData {
    name: string | null;
    email: string | null;
    avatar: string | null;
    settings?: {
        allowedRescrapeFrequency?: boolean;
    };
}
declare global {
    interface Window {
        USER_DATA: UserData;
    }
}
export declare function NavUser(): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=nav-user.d.ts.map