import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSihxlWQoH0KY8-QahV_aFQvh41-azfS8",
  authDomain: "login-page-49bf0.firebaseapp.com",
  projectId: "login-page-49bf0",
  storageBucket: "login-page-49bf0.appspot.com",
  messagingSenderId: "124632886906",
  appId: "1:124632886906:web:92b04d7bae8b72596c15c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
