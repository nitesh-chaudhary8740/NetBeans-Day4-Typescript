// . Record<K, T> (The "Dictionary")
// A clean way to define an object where you know the type of the Key and the Value.

// Use Case: Storing a list of feature flags or a cache of items.

// TypeScript
// Keys are strings (feature names), Values are booleans
const featureFlags: Record<string, boolean> = {
    darkMode: true,
    betaLayout: false,
    aiSearch: true
};