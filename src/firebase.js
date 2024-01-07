
import { initializeApp } from "../node_modules/firebase/app";
import { getAuth } from "../node_modules/firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjpvxxfe_NRoyayYgb5uIM1-ipkXBEH_c",
  authDomain: "chat-35328.firebaseapp.com",
  projectId: "chat-35328",
  storageBucket: "chat-35328.appspot.com",
  messagingSenderId: "158780981094",
  appId: "1:158780981094:web:36827ac967b629efab52a7",
  measurementId: "G-VP5D4PKX07"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
