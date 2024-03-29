/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_KEY: String,
    VITE_AUTH_DOMAIN: String,
    VITE_PROJECT_ID: String,
    VITE_STORAGE_BUCKET: String,
    VITE_MESSAGING_SENDER_ID: String,
    VITE_APP_ID: String,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}