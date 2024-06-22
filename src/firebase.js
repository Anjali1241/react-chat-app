// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-SUteiDRrKvYfmm5LNOKMth915Eu5Je4",
  authDomain: "chat-cd252.firebaseapp.com",
  projectId: "chat-cd252",
  storageBucket: "chat-cd252.appspot.com",
  messagingSenderId: "194126522194",
  appId: "1:194126522194:web:a7951165034a320b807c8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const storage = getStorage();
// export const db =getFirestore(app)
export const db =getFirestore(app)