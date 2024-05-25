    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWpzUjKO97P4xmH4hfo2yjTmaHt-hjyuY",
  authDomain: "it-sysarch32-store-estellore.firebaseapp.com",
  projectId: "it-sysarch32-store-estellore",
  storageBucket: "it-sysarch32-store-estellore.appspot.com",
  messagingSenderId: "189940086913",
  appId: "1:189940086913:web:93d8e0752557d4d1c3f580",
  measurementId: "G-8B46FYTX8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };