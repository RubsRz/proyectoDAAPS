import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgD2yvwGnCYLopiG3lyvOYmC5ly3GS1uQ",
  authDomain: "astronomia-react-native.firebaseapp.com",
  projectId: "astronomia-react-native",
  storageBucket: "astronomia-react-native.appspot.com",
  messagingSenderId: "524108380800",
  appId: "1:524108380800:web:fce8c1d56790326fbc0465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
