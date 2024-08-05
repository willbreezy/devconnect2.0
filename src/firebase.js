import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxnERU89EwsMol3ngdiLTEG-0lgHUsKd4",
  authDomain: "devconnect-2408.firebaseapp.com",
  projectId: "devconnect-2408",
  storageBucket: "devconnect-2408.appspot.com",
  messagingSenderId: "964242438910",
  appId: "1:964242438910:web:d47a38a9de7119398283af"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Obtenir une référence à la base de données Firestore
const db = firebase.firestore();

export default db