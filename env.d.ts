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

// export default <KeyFirebase>{
//     API_KEY:"AIzaSyCLXaMPI23VRi4Lqvy0R387--_K_PaXkVo",
//     AUTH_DOMAIN:"stou-center.firebaseapp.com",
//     PROJECT_ID:"stou-center",
//     STORAGE_BUCKET:"stou-center.appspot.com",
//     MESSAGING_SENDER_ID:"431824150719",
//     APP_ID:"1:431824150719:web:d76e1acdb4ccdd5937e60a",
// }

// interface KeyFirebase {
//     API_KEY:String,
//     AUTH_DOMAIN:String,
//     PROJECT_ID:String,
//     STORAGE_BUCKET:String,
//     MESSAGING_SENDER_ID:String,
//     APP_ID:String,
// }

