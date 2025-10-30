import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBtB1amyvdF-siGj_nuCw8PF0JPSKGESXo",
  authDomain: "fia-invest.firebaseapp.com",
  projectId: "fia-invest",
  storageBucket: "fia-invest.firebasestorage.app",
  messagingSenderId: "47086990065",
  appId: "1:47086990065:web:7e25541ea15dd95504af50",
  measurementId: "G-G58BYQYFWG"
};


let app;
let auth;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  console.log('Firebase configurado com sucesso!');
} catch (error) {
  console.error('Erro ao configurar Firebase:', error);
}

export { auth, analytics };
export default app;