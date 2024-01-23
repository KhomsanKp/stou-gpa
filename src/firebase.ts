import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: any = {
    apiKey: import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_KEY : import.meta.env.API_KEY,
    authDomain: import.meta.env.MODE === 'development' ? import.meta.env.VITE_AUTH_DOMAIN : import.meta.env.AUTH_DOMAIN,
    projectId: import.meta.env.MODE === 'development' ? import.meta.env.VITE_PROJECT_ID : import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.MODE === 'development' ? import.meta.env.VITE_STORAGE_BUCKET : import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MODE === 'development' ? import.meta.env.VITE_MESSAGING_SENDER_ID : import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.MODE === 'development' ? import.meta.env.VITE_APP_ID : import.meta.env.API_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }