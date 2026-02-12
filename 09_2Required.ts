interface AppConfig {
    apiEndpoint?: string;
    timeout?: number;
}

const finalConfig: Required<AppConfig> = {
    apiEndpoint: "https://api.com",
    timeout: 5000 // ❌ Error if you leave this out!
};